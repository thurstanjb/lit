<?php

namespace Tests\Unit;

use App\Ascent;
use App\Mountain;
use App\Mountaineer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AscentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _it_has_a_model_factory()
    {
        $ascent = create(Ascent::class);

        $this->assertDatabaseHas('ascents', [
            'id' => $ascent->id,
            'mountain_id' => $ascent->mountain_id,
            'mountaineer_id' => $ascent->mountaineer_id,
            'ascent_date' => $ascent->ascent_date->format('Y-m-d')
        ]);
    }

    /**
     * @test
     */
    public function _it_can_return_its_mountain()
    {
        $mountain = create(Mountain::class);
        $ascent = create(Ascent::class, ['mountain_id' => $mountain->id]);

        $this->assertEquals($mountain->name, $ascent->mountain->name);
    }

    /**
     * @test
     */
    public function _it_can_return_its_mountaineer()
    {
        $mountaineer = create(Mountaineer::class);
        $ascent = create(Ascent::class, ['mountaineer_id' => $mountaineer->id]);

        $this->assertEquals($mountaineer->name, $ascent->mountaineer->name);
    }

    /**
     * @test
     */
    public function _it_can_cascade_when_its_mountaineer_is_deleted()
    {
        $mountaineer = create(Mountaineer::class);
        create(Ascent::class, ['mountaineer_id' => $mountaineer->id], 3);

        $this->assertDatabaseHas('ascents', [
            'mountaineer_id' => $mountaineer->id
        ]);

        $mountaineer->forceDelete();

        $this->assertDatabaseMissing('ascents', [
            'mountaineer_id' => $mountaineer->id
        ]);
    }

    /**
     * @test
     */
    public function _it_can_cascade_when_its_mountain_is_deleted()
    {
        $mountain = create(Mountain::class);
        create(Ascent::class, ['mountain_id' => $mountain->id], 3);

        $this->assertDatabaseHas('ascents', [
            'mountain_id' => $mountain->id
        ]);

        $mountain->delete();

        $this->assertDatabaseMissing('ascents', [
            'mountain_id' => $mountain->id
        ]);
    }
}
