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
        $this->get('/users/create')
            ->assertRedirect('/home');

        $this->signIn($this->admin_user);
        $this->get('/users/create')
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
