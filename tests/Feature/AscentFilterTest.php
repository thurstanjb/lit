<?php

namespace Tests\Feature;

use App\Ascent;
use App\Mountain;
use App\Mountaineer;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AscentFilterTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _ascents_can_be_ordered_by_ascent_date()
    {
        $ascent1 = create(Ascent::class, ['ascent_date' => Carbon::create(2000, 01, 01, 10, 54, 22)]);
        $ascent2 = create(Ascent::class, ['ascent_date' => Carbon::create(2000, 01, 01, 10, 54, 20)]);
        $ascent3 = create(Ascent::class, ['ascent_date' => Carbon::create(2000, 02, 01, 10, 54, 22)]);
        $ascent4 = create(Ascent::class, ['ascent_date' => Carbon::create(2000, 01, 02, 10, 54, 22)]);

        $this->signIn();

        $response = $this->get('/admin/ascents?asc=ascent_date');
        $topspot = $response->inertiaProps()['ascents']['data'][0];
        $this->assertEquals($ascent2->mountain_id, $topspot['mountain_id']);

        $response = $this->get('/admin/ascents?desc=ascent_date');
        $topspot = $response->inertiaProps()['ascents']['data'][0];
        $this->assertEquals($ascent3->mountain_id, $topspot['mountain_id']);
    }

    /**
     * @test
     */
    public function _ascents_can_be_filtered_by_their_mountaineer_id()
    {
        $mountaineer1 = create(Mountaineer::class);
        $mountaineer2 = create(Mountaineer::class);

        $ascent1 = create(Ascent::class, ['mountaineer_id' => $mountaineer1->id]);
        $ascent2 = create(Ascent::class, ['mountaineer_id' => $mountaineer2->id]);
        $ascent3 = create(Ascent::class, ['mountaineer_id' => $mountaineer1->id]);
        $ascent4 = create(Ascent::class, ['mountaineer_id' => $mountaineer2->id]);
        $ascent5 = create(Ascent::class);

        $this->signIn();

        $response = $this->get('/admin/ascents?mountaineer=1');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(2, $ascents);

    }

    /**
     * @test
     */
    public function _ascents_can_be_filtered_by_the_mountain_name()
    {
        $mountain1 = create(Mountain::class, ['name' => 'Scafell Pike']);
        $mountain2 = create(Mountain::class, ['name' => 'Skiddaw']);
        $mountain3 = create(Mountain::class, ['name' => 'Bonscale Pike']);

        $ascent1 = create(Ascent::class, ['mountain_id' => $mountain1->id]);
        $ascent2 = create(Ascent::class, ['mountain_id' => $mountain2->id]);
        $ascent3 = create(Ascent::class, ['mountain_id' => $mountain3->id]);
        $ascent4 = create(Ascent::class, ['mountain_id' => $mountain2->id]);
        $ascent5 = create(Ascent::class, ['mountain_id' => $mountain1->id]);
        $ascent6 = create(Ascent::class, ['mountain_id' => $mountain2->id]);

        $this->signIn();

        $response = $this->get('/admin/ascents?mountain=scafell');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(2, $ascents);

        $response = $this->get('/admin/ascents?mountain=pike');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(3, $ascents);

        $response = $this->get('/admin/ascents?mountain=skid');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(3, $ascents);
    }

    /**
     * @test
     */
    public function _ascents_can_be_filtered_by_book()
    {
        $m1 = create(Mountain::class, ['book' => 'northern']);
        $m2 = create(Mountain::class, ['book' => 'western']);
        $m3 = create(Mountain::class, ['book' => 'northern']);
        $m4 = create(Mountain::class, ['book' => 'southern']);

        $ascent1 = create(Ascent::class, ['mountain_id' => $m1->id]);
        $ascent2 = create(Ascent::class, ['mountain_id' => $m2->id]);
        $ascent3 = create(Ascent::class, ['mountain_id' => $m3->id]);
        $ascent4 = create(Ascent::class, ['mountain_id' => $m4->id]);
        $ascent5 = create(Ascent::class, ['mountain_id' => $m2->id]);
        $ascent6 = create(Ascent::class, ['mountain_id' => $m2->id]);
        $ascent7 = create(Ascent::class, ['mountain_id' => $m1->id]);

        $this->signIn();

        $response = $this->get('/admin/ascents?book=northern');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(3, $ascents);

        $response = $this->get('/admin/ascents?book=southern');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(1, $ascents);
    }

    /**
     * @test
     */
    public function _ascents_can_be_filtered_by_mountaineer_mountain_book_in_the_same_query()
    {
        $mr1 = create(Mountaineer::class, ['name' => 'Thurstan Bowling']);
        $mr2 = create(Mountaineer::class, ['name' => 'Eric Bowling']);

        $mt1 = create(Mountain::class, ['book' => 'northern', 'name' => 'Sooter Fell']);
        $mt2 = create(Mountain::class, ['book' => 'southern', 'name' => 'Brim Fell']);

        $asc1 = create(Ascent::class, ['mountaineer_id' => $mr1->id, 'mountain_id' => $mt1->id]);
        $asc2 = create(Ascent::class, ['mountaineer_id' => $mr2->id, 'mountain_id' => $mt1->id]);
        $asc3 = create(Ascent::class, ['mountaineer_id' => $mr1->id, 'mountain_id' => $mt2->id]);
        $asc4 = create(Ascent::class, ['mountaineer_id' => $mr2->id, 'mountain_id' => $mt2->id]);

        $this->signIn();

        $response = $this->get('/admin/ascents?mountaineer=' . $mr1->id . '&mountain=fell&book=southern');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(1, $ascents);
        $this->assertEquals($mt2->id, $ascents[0]['mountain_id']);
        $this->assertEquals($asc3->id, $ascents[0]['id']);
    }

    /**
     * @test
     */
    public function _ascents_can_be_filtered_by_year()
    {
        $asc1 = create(Ascent::class, ['ascent_date' => Carbon::create(1988, 01, 10)]);
        $asc1 = create(Ascent::class, ['ascent_date' => Carbon::create(1988, 02, 11)]);
        $asc1 = create(Ascent::class, ['ascent_date' => Carbon::create(1990, 03, 12)]);
        $asc1 = create(Ascent::class, ['ascent_date' => Carbon::create(1991, 04, 13)]);
        $asc1 = create(Ascent::class, ['ascent_date' => Carbon::create(1991, 05, 14)]);

        $this->signIn();

        $response = $this->get('/admin/ascents?year=1988');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(2, $ascents);

        $response = $this->get('/admin/ascents?year=1990');
        $ascents = $response->inertiaProps()['ascents']['data'];
        $this->assertCount(1, $ascents);
    }
}
