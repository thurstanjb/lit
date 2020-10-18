<?php

namespace Tests\Feature;

use App\Mountaineer;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class MountaineerAdminTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _an_authorised_user_can_view_mountaineers()
    {
        $this->followingRedirects()->get('/mountaineers')
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->get('/mountaineers')
            ->assertInertia('Admin/Mountaineers/index')
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_add_a_mountaineer()
    {
        $this->signIn();

        $this->get('/mountaineers/create')
            ->assertInertia('Admin/Mountaineers/create');

        $new_mountaineer = make(Mountaineer::class);

        $this->post('/mountaineers/create', $new_mountaineer->toArray());

        $this->assertDatabaseHas('mountaineers', [
            'name' => $new_mountaineer->name,
            'slug' => Str::slug($new_mountaineer->name, '-')
        ]);
    }
}
