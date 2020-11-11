<?php

namespace Tests\Feature;

use App\Mountain;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MountainFilterTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _mountains_can_be_ordered_by_name()
    {
        $m1 = create(Mountain::class, ['name' => 'mountain 1']);
        $m2 = create(Mountain::class, ['name' => 'mountain 2']);
        $m3 = create(Mountain::class, ['name' => 'mountain 3']);
        $m4 = create(Mountain::class, ['name' => 'mountain 4']);

        $this->signIn();

        $response = $this->get('/mountains?desc=name');
        $top_spot = $response->inertiaProps()['mountains']['data'][0];
        $this->assertEquals($m4->name, $top_spot['name']);

        $response = $this->get('/mountains?asc=name');
        $top_spot = $response->inertiaProps()['mountains']['data'][0];
        $this->assertEquals($m1->name, $top_spot['name']);
    }

    /**
     * @test
     */
    public function _mountains_can_be_filtered_by_name()
    {
        $m1 = create(Mountain::class, ['name' => 'scafell pike']);
        $m2 = create(Mountain::class, ['name' => 'nethermost pike']);
        $m3 = create(Mountain::class, ['name' => 'pavey ark']);
        $m4 = create(Mountain::class, ['name' => 'brim fell']);

        $this->signIn();

        $response = $this->get('/mountains?name=pike');
        $filtered = $response->inertiaProps()['mountains']['data'];
        $this->assertCount(2, $filtered);

        $response = $this->get('/mountains?name=fell');
        $filtered = $response->inertiaProps()['mountains']['data'];
        $this->assertCount(2, $filtered);

        $response = $this->get('/mountains?name=fell&asc=name');
        $topspot = $response->inertiaProps()['mountains']['data'][0];
        $this->assertEquals($m4->name, $topspot['name']);
    }

    /**
     * @test
     */
    public function _a_mountain_can_be_filtered_by_book()
    {
        $m1 = create(Mountain::class, ['book' => 'northern']);
        $m2 = create(Mountain::class, ['book' => 'north-eastern']);
        $m3 = create(Mountain::class, ['book' => 'far-eastern']);
        $m4 = create(Mountain::class, ['name' => 'southern']);

        $this->signIn();

        $response = $this->get('/mountains?book=north');
        $filtered = $response->inertiaProps()['mountains']['data'];
        $this->assertCount(2, $filtered);

        $response = $this->get('/mountains?book=east');
        $filtered = $response->inertiaProps()['mountains']['data'];
        $this->assertCount(2, $filtered);

        $response = $this->get('/mountains?book=northern');
        $filtered = $response->inertiaProps()['mountains']['data'];
        $this->assertCount(1, $filtered);
    }
}
