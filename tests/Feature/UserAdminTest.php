<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class UserAdminTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @var User|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|mixed
     */
    private $admin_user;
    /**
     * @var string[]
     */
    private $new_user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin_user = create(User::class, ['role' => 'admin']);
        $this->new_user = [
            'name' => 'Dave the Rave',
            'email' => 'dave@therave.com',
            'password' => 'raver0ne',
            'password_confirmation' => 'raver0ne',
            'role' => 'admin'
        ];
    }

    /** @test */
    public function _an_admin_user_can_create_a_new_user()
    {
        $this->signIn();
        $this->followingRedirects()->get('/users/create')
            ->assertInertia('home');

        $this->signIn($this->admin_user);
        $this->get('/users/create')
            ->assertInertia('Admin/Users/create')
            ->assertStatus(200);


        $this->post('/users/create', $this->new_user)
            ->assertSessionHasNoErrors()
            ->assertRedirect('/users');

        $this->assertDatabaseHas('users', [
            'name' => $this->new_user['name'],
            'email' => $this->new_user['email'],
            'role' => 'admin'
        ]);
    }

    /**
     * @test
     */
    public function _an_admin_user_can_edit_another_user()
    {
        $this->signIn();
        $new_user = create(User::class);
        $uri = '/users/'.$new_user->id.'/edit';

        $this->followingRedirects()->get($uri)
            ->assertInertia('home');

        $this->signIn($this->admin_user);
        $this->get($uri)
            ->assertInertia('Admin/Users/update')
            ->assertStatus(200);

        $edited_user = $new_user->toArray();
        $edited_user['name'] = 'updated name';

        // We cannot update to an existing email address
        $edited_user['email'] = $this->admin_user->email;
        $this->post($uri, $edited_user)
            ->assertSessionHasErrorsIn('default', 'email');
        $edited_user['email'] = 'notused@wallsauce.com';

        $this->post($uri, $edited_user)
            ->assertSessionHasNoErrors()
            ->assertRedirect('/users');

        $this->assertDatabaseHas('users', [
            'id' => $edited_user['id'],
            'name' => $edited_user['name'],
            'email' => $edited_user['email'],
            'role' => $edited_user['role']
        ]);
    }

    /**
     * @test
     */
    public function _an_admin_user_Cannot_update_their_own_role()
    {
        $this->signIn($this->admin_user);
        $edited_user = $this->admin_user->toArray();

        $edited_user['role'] = 'user';

        $this->post('/users/'.$edited_user['id'].'/edit', $edited_user)
            ->assertSessionHasNoErrors()
            ->assertRedirect('/users');

        $this->assertDatabaseHas('users', [
            'id' => $edited_user['id'],
            'name' => $edited_user['name'],
            'email' => $edited_user['email'],
            'role' => 'admin'
        ]);
    }

    /**
     * @test
     */
    public function _a_user_must_have_a_name()
    {
        $this->signIn($this->admin_user);
        $this->new_user['name'] = null;

        $this->post('/users/create', $this->new_user)
            ->assertSessionHasErrorsIn('default', 'name');
    }

    /**
     * @test
     */
    public function _a_user_must_have_a_valid_email()
    {
        $this->signIn($this->admin_user);

        $this->new_user['email'] = null;
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasErrorsIn('default', 'email');

        $this->new_user['email'] = 'not.an.email';
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasErrorsIn('default', 'email');

        $this->new_user['email'] = 'like.an@email.com';
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasNoErrors();
    }

    /**
     * @test
     */
    public function _a_user_must_have_a_confirmed_password_of_appropriate_length()
    {
        $this->signIn($this->admin_user);

        $this->new_user['password'] = '';
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasErrorsIn('default', 'password');

        $this->new_user['password'] = 'test';
        $this->new_user['password_confirmation'] = 'test';
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasErrorsIn('default', 'password');

        $this->new_user['password'] = 'morethan8chars';
        $this->new_user['password_confirmation'] = 'test';
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasErrorsIn('default', 'password');

        $this->new_user['password'] = 'morethan8chars';
        $this->new_user['password_confirmation'] = 'morethan8chars';
        $this->post('/users/create', $this->new_user)
            ->assertSessionHasNoErrors();
    }
}
