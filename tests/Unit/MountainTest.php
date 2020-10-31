<?php

namespace Tests\Unit;


use App\Ascent;
use App\Mountain;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MountainTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _it_has_a_model_factory()
    {
        $mountain = create(Mountain::class);

        $this->assertDatabaseHas('mountains', [
            'id' => $mountain->id,
            'name' => $mountain->name,
            'height' => $mountain->height,
            'book' => $mountain->book,
            'slug' => $mountain->slug
        ]);
    }

    /**
     * @test
     */
    public function _it_can_return_its_ascents()
    {
        $mountain = create(Mountain::class);

        $ascents = create(Ascent::class, ['mountain_id' => $mountain->id], 3);
        $ascents_other_mountains = create(Ascent::class, [], 3);

        $this->assertCount(3, $mountain->ascents);
    }
}
