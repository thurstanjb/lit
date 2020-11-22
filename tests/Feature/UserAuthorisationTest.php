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

        $this->followingRedirects()->get('/admin/users')
            ->assertInertia('home');

        $this->signInAdmin();

        $this->get('/admin/users')
            ->assertInertia('Admin/Users/index')
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function _an_admin_user_can_visit_the_admin_section()
    {
        $this->followingRedirects()->get('/admin')
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->followingRedirects()->get('/admin')
            ->assertInertia('home');

        $this->signInAdmin();

        $this->get('/admin')
            ->assertInertia('Admin/dashboard')
            ->assertStatus(200);
    }

}
