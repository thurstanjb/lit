<?php

namespace Tests\Feature;

use App\Mountaineer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MountaineerFilterTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _mountaineers_can_be_ordered_by_name()
    {
        $m1 = create(Mountaineer::class, ['name' => 'Thurstan Bowling']);
        $m2 = create(Mountaineer::class, ['name' => 'Eric Bowling']);
        $m3 = create(Mountaineer::class, ['name' => 'Paul Heetley']);

        $this->signIn();

        $response = $this->get('/admin/mountaineers?asc=name');
        $topspot = $response->inertiaProps()['mountaineers']['data'][0];
        $this->assertEquals($m2->name, $topspot['name']);

        $response = $this->get('/admin/mountaineers?desc=name');
        $topspot = $response->inertiaProps()['mountaineers']['data'][0];
        $this->assertEquals($m1->name, $topspot['name']);
    }

    /**
     * @test
     */
    public function _mountaineers_can_be_filtered_by_name()
    {
        $m1 = create(Mountaineer::class, ['name' => 'Thurstan Bowling']);
        $m2 = create(Mountaineer::class, ['name' => 'Eric Bowling']);
        $m3 = create(Mountaineer::class, ['name' => 'Paul Heetley']);

        $this->signIn();

        $response = $this->get('/admin/mountaineers?name=bowling');
        $mountaineers = $response->inertiaProps()['mountaineers']['data'];
        $this->assertCount(2, $mountaineers);

        $response = $this->get('/admin/mountaineers?name=bow&asc=name');
        $topspot = $response->inertiaProps()['mountaineers']['data'][0];
        $this->assertEquals($m2->name, $topspot['name']);
    }
}
