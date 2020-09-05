<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserAuthorisationTest extends TestCase
{
    /**
     * @test
     */
    public function _an_unauthorised_user_is_redirected_to_the_login_page()
    {
        $this->get('/')
            ->assertRedirect('/login');
    }
}
