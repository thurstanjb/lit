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
    public function _an_admin_user_can_view_mountaineers()
    {
        $this->followingRedirects()->get('/admin/mountaineers')
            ->assertInertia('Auth/login');

        $this->signInAdmin();

        $this->get('/admin/mountaineers')
            ->assertInertia('Admin/Mountaineers/index')
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function _an_admin_user_can_add_a_mountaineer()
    {
        $new_mountaineer = make(Mountaineer::class);

        $this->signInAdmin();

        $this->get('/admin/mountaineers/create')
            ->assertInertia('Admin/Mountaineers/create');

        $this->followingRedirects()->post('/admin/mountaineers/create', $new_mountaineer->toArray())
            ->assertInertia('Admin/Mountaineers/index');

        $this->assertDatabaseHas('mountaineers', [
            'name' => $new_mountaineer->name,
            'slug' => Str::slug($new_mountaineer->name, '-')
        ]);

    }

    /**
     * @test
     */
    public function _an_admin_user_can_edit_a_mountaineer()
    {
        $mountaineer = create(Mountaineer::class);
        $mountaineer->name = 'updated name';
        $url = '/admin/mountaineers/'. $mountaineer->slug.'/edit';

        $this->signInAdmin();

        $this->get($url)
            ->assertInertia('Admin/Mountaineers/update');

        $this->followingRedirects()->put($url, $mountaineer->toArray())
            ->assertInertia('Admin/Mountaineers/index');
    }

    /**
     * @test
     */
    public function _an_admin_user_can_soft_delete_a_mountaineer()
    {
        $mountaineer = create(Mountaineer::class);

        $this->followingRedirects()->delete('/admin/mountaineers/'.$mountaineer->slug)
            ->assertInertia('Auth/login');

        $this->signInAdmin();

        $this->followingRedirects()->delete('/admin/mountaineers/'.$mountaineer->slug)
            ->assertInertia('Admin/Mountaineers/index');

        $this->assertSoftDeleted('mountaineers', [
            'id' => $mountaineer->id,
            'name' => $mountaineer->name,
            'slug' => $mountaineer->slug
        ]);
    }

    /**
     * @test
     */
    public function _a_mountaineer_must_have_a_unique_name()
    {
        $mountaineer = make(Mountaineer::class);

        $this->signInAdmin();
        $this->followingRedirects()->post('/admin/mountaineers/create', $mountaineer->toArray())
            ->assertInertia('Admin/Mountaineers/index');

        $this->post('/admin/mountaineers/create', $mountaineer->toArray())
            ->assertSessionHasErrorsIn('default', 'name');
    }
}
