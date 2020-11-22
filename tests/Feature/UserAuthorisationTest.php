<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserAuthorisationTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function _an_unauthorised_user_is_redirected_to_the_login_page()
    {
        $this->followingRedirects()->get('/')
            ->assertInertia('Auth/login');
    }

    /**
     * @test
     */
    public function _authorised_users_redirect_to_the_homepage()
    {
        $this->signIn();
        $this->followingRedirects()->get('/')
            ->assertInertia('home');
    }

    /**
     * @test
     */
    public function _only_admin_users_can_view_the_users_section()
    {
        $this->signIn();

        $this->followingRedirects()->get('/users')
            ->assertInertia('home');

        $admin_user = Create(User::class, ['role' => 'admin']);

        $this->signIn($admin_user);

        $this->get('/users')
            ->assertInertia('Admin/Users/index')
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_visit_the_admin_section()
    {
        $this->withoutExceptionHandling();
        $this->signIn();

        $this->get('/admin')
            ->assertInertia('Admin/dashboard')
            ->assertStatus(200);
    }
}
