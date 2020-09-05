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
        $this->get('/')
            ->assertRedirect('/login');
    }

    /**
     * @test
     */
    public function _authorised_users_redirect_to_the_homepage()
    {
        $this->signIn();
        $this->get('/')
            ->assertRedirect('/home');
    }

    /**
     * @test
     */
    public function _only_admin_users_can_view_the_users_section()
    {
        $this->withoutExceptionHandling();
        $this->signIn();

        $this->get('/users')
            ->assertRedirect('/home');

        $admin_user = Create(User::class, ['role' => 'admin']);

        $this->signIn($admin_user);

        $this->get('/users')
            ->assertStatus(200);
    }
}
