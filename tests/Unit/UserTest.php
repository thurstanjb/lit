<?php

namespace Tests\Unit;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function _it_has_a_model_factory()
    {
        $user = create(User::class);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => 'user'
            ]
        );
    }

    /**
     * @test
     */
    public function _it_can_check_if_its_an_administrator()
    {
        $non_admin_user = create(User::class);
        $admin_user = create(User::class, ['role' => 'admin']);

        $this->assertFalse($non_admin_user->isAdmin());
        $this->assertTrue($admin_user->isAdmin());
    }
}
