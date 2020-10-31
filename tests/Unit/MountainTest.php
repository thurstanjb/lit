<?php

namespace Tests\Unit;


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
}
