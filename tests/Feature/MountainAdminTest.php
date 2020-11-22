<?php

namespace Tests\Feature;

use App\Mountain;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class MountainAdminTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _an_authorised_user_can_view_mountain_index()
    {
        $this->followingRedirects()->get('/admin/mountains')
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->get('/admin/mountains')
            ->assertInertia('Admin/Mountains/index');
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_add_a_mountain()
    {
        $mountain = make(Mountain::class);

        $this->followingRedirects()->get('/admin/mountains/create')
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->get('/admin/mountains/create')
            ->assertInertia('Admin/Mountains/create');

        $this->followingRedirects()->post('/admin/mountains/create', $mountain->toArray())
            ->assertInertia('Admin/Mountains/index');

        $this->assertDatabaseHas('mountains', [
            'name' => $mountain->name,
            'height' => $mountain->height,
            'book' => $mountain->book
        ]);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_edit_a_mountain()
    {
        $mountain = create(Mountain::class);
        $mountain->name = 'updated name';
        $url = '/admin/mountains/' . $mountain->slug . '/edit';

        $this->signIn();

        $this->get($url)
            ->assertInertia('Admin/Mountains/update');

        $this->followingRedirects()->put($url, $mountain->toArray())
            ->assertInertia('Admin/Mountains/index');

        $this->assertDatabaseHas('mountains', [
            'id' => $mountain->id,
            'name' => $mountain->name,
            'slug' => Str::slug($mountain->name . ' ' . $mountain->book, '-')
        ]);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_delete_a_mountain()
    {
        $mountain = create(Mountain::class);

        $this->signIn();

        $this->followingRedirects()->delete('/admin/mountains/' . $mountain->slug)
            ->assertInertia('Admin/Mountains/index');

        $this->assertDatabaseMissing('mountains', [
            'id' => $mountain->id
        ]);
    }

    /**
     * @test
     */
    public function _a_mountain_must_have_a_unique_name_and_book_when_creating()
    {
        $mountain = make(Mountain::class);
        $dupe_mountain = $mountain;
        $url = '/admin/mountains/create';

        $this->signIn();

        $this->followingRedirects()->post($url, $mountain->toArray())
            ->assertInertia('Admin/Mountains/index');

        $this->post($url, $dupe_mountain->toArray())
            ->assertSessionHasErrorsIn('default', 'name');

        $dupe_mountain->book = 'New book';

        $this->followingRedirects()->post($url, $dupe_mountain->toArray())
            ->assertInertia('Admin/Mountains/index');
    }

    /**
     * @test
     */
    public function _a_mountain_must_have_a_unique_name_and_book_when_editing()
    {
        $mountain = create(Mountain::class);
        $mountain2 = create(Mountain::class);

        $mountain2->name = $mountain->name;
        $mountain2->book = $mountain->book;

        $this->signIn();

        $this->put('/admin/mountains/' . $mountain2->slug . '/edit', $mountain2->toArray())
            ->assertSessionHasErrorsIn('default', 'name');

        $mountain2->book = 'random book';

        $this->followingRedirects()->put('/admin/mountains/' . $mountain2->slug . '/edit', $mountain2->toArray())
            ->assertInertia('Admin/Mountains/index');
    }

    /**
     * @test
     */
    public function _a_mountain_must_have_a_name()
    {
        $mountain = make(Mountain::class, ['name' => null]);

        $this->signIn();

        $this->post('/admin/mountains/create', $mountain->toArray())
            ->assertSessionHasErrorsIn('default', 'name');
    }

    /**
     * @test
     */
    public function _a_mountain_must_have_a_numeric_height()
    {
        $mountain = make(Mountain::class, ['height' => null]);

        $this->signIn();

        $this->post('/admin/mountains/create', $mountain->toArray())
            ->assertSessionHasErrorsIn('default', 'height');

        $mountain->height = 'not a number';

        $this->post('/admin/mountains/create', $mountain->toArray())
            ->assertSessionHasErrorsIn('default', 'height');

        $mountain->height = 1234;

        $this->followingRedirects()->post('/admin/mountains/create', $mountain->toArray())
            ->assertInertia('Admin/Mountains/index');
    }

    /**
     * @test
     */
    public function _a_mountain_must_have_a_book()
    {
        $mountain = make(Mountain::class, ['book' => null]);

        $this->signIn();

        $this->post('/admin/mountains/create', $mountain->toArray())
            ->assertSessionHasErrorsIn('default', 'book');
    }
}
