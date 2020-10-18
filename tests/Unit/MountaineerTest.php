<?php

namespace Tests\Unit;

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
}
