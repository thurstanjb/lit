<?php

namespace Tests;

use App\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class
TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function signIn(User $user = null){
        if(!$user){
            $user = factory(User::class)->create();
        }

        $this->actingAs($user);
        return $user;
    }

    public function signInAdmin(User $user = null){
        if(!$user){
            $user = factory(User::class)->create(['role' => 'admin']);
        }

        $this->actingAs($user);
        return $user;
    }
}
