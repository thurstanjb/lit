<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserFilterTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _users_can_be_ordered_by_name()
    {
        $user1 = create(User::class, ['name' => 'cloe']);
        $user2 = create(User::class, ['name' => 'debora']);
        $user3 = create(User::class, ['name' => 'albert']);
        $user4 = create(User::class, ['name' => 'zelda']);

        $admin = create(User::class, ['role' => 'admin', 'name' => 'tj']);
        $this->signIn($admin);

        $response = $this->get('/admin/users?asc=name');
        $top_spot = $response->inertiaProps()['users']['data'][0];
        $this->assertEquals($user3->name, $top_spot['name']);

        $response = $this->get('/admin/users?desc=name');
        $top_spot = $response->inertiaProps()['users']['data'][0];
        $this->assertEquals($user4->name, $top_spot['name']);

    }

    /**
     * @test
     */
    public function _users_can_be_ordered_by_role()
    {
        $user1 = create(User::class, ['role' => 'admin']);
        $user2 = create(User::class, ['role' => 'user']);
        $user3 = create(User::class, ['role' => 'user']);

        $this->signIn($user1);

        $response = $this->get('/admin/users?asc=role');
        $top_spot = $response->inertiaProps()['users']['data'][0];
        $this->assertEquals('admin', $top_spot['role']);

        $response = $this->get('/admin/users?desc=role');
        $top_spot = $response->inertiaProps()['users']['data'][0];
        $this->assertEquals('user', $top_spot['role']);
    }

    /**
     * @test
     */
    public function _users_can_be_filtered_by_their_name()
    {
        $user1 = create(User::class, ['name' => 'dave adams', 'role' => 'admin']);
        $user2 = create(User::class, ['name' => 'steve adams']);
        $user3 = create(User::class, ['name' => 'dave jobs']);

        $this->signIn($user1);

        $response = $this->get('/admin/users?name=adams');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(2, $results);

        $response = $this->get('/admin/users?name=steve');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(1, $results);

        $response = $this->get('/admin/users?name=ve');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(3, $results);
    }

    /**
     * @test
     */
    public function _users_can_be_filtered_by_their_email()
    {
        $user1 = create(User::class, ['email' => 'jeff@aol.com', 'role' => 'admin']);
        $user2 = create(User::class, ['email' => 'dave@aol.com', 'role' => 'user']);
        $user3 = create(User::class, ['email' => 'jeff@outlook.com', 'role' => 'user']);
        $user4 = create(User::class, ['email' => 'steve@outlook.com', 'role' => 'user']);
        $user5 = create(User::class, ['email' => 'ronda@bt.co.uk', 'role' => 'user']);

        $this->signIn($user1);

        $response = $this->get('/admin/users?email=ronda');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(1, $results);

        $response = $this->get('/admin/users?email=aol.com');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(2, $results);

        $response = $this->get('/admin/users?email=ve@');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(2, $results);
    }

    /**
     * @test
     */
    public function _a_user_can_be_filtered_by_role()
    {
        $user1 = create(User::class, ['email' => 'jeff@aol.com', 'role' => 'admin']);
        $user2 = create(User::class, ['email' => 'dave@aol.com', 'role' => 'user']);
        $user3 = create(User::class, ['email' => 'jeff@outlook.com', 'role' => 'admin']);
        $user4 = create(User::class, ['email' => 'steve@outlook.com', 'role' => 'user']);
        $user5 = create(User::class, ['email' => 'ronda@bt.co.uk', 'role' => 'browser']);

        $this->signIn($user1);

        $response = $this->get('/admin/users?role=admin');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(2, $results);

        $response = $this->get('/admin/users?role=browser');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(1, $results);

        $response = $this->get('/admin/users?role=ser');
        $results = $response->inertiaProps()['users']['data'];
        $this->assertCount(3, $results);
    }

}
