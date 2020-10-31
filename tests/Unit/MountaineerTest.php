<?php

namespace Tests\Unit;

use App\Ascent;
use App\Mountaineer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class MountaineerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _it_has_a_model_factory()
    {
        $mountaineer = create(Mountaineer::class);

        $this->assertDatabaseHas('mountaineers', [
           'name' => $mountaineer->name,
           'slug' => $mountaineer->slug
        ]);
    }

    /**
     * @test
     */
    public function _it_can_return_its_ascents()
    {
        $mountaineer = create(Mountaineer::class);

        $ascents = create(Ascent::class, ['mountaineer_id' => $mountaineer->id], 2);
        $ascents_by_others = create(Ascent::class, [], 5);

        $this->assertCount(2, $mountaineer->ascents);
    }
}
