<?php

namespace Tests\Feature;

use App\Ascent;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AscentAdminTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _an_authorised_user_can_view_ascent_index()
    {
        $this->followingRedirects()->get('/ascents')
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->followingRedirects()->get('/ascents')
            ->assertInertia('Admin/Ascents/index');
    }

    /**
     * @test
     */
    public function _ensure_we_are_fetching_the_mountaineer_and_the_mountain_for_the_ascent()
    {
        $ascent = create(Ascent::class);

        $this->signIn();

        $response = $this->get('/ascents');

        $returned_ascent = $response->inertiaProps()['ascents']['data'][0];

        $this->assertEquals($ascent->mountaineer->name, $returned_ascent['mountaineer']['name']);
        $this->assertEquals($ascent->mountain->name, $returned_ascent['mountain']['name']);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_add_an_ascent()
    {

        $ascent = make(Ascent::class)->toArray();
        $ascent['ascent_date'] = '2020-01-01';

        $this->followingRedirects()->get('/ascents/create')
            ->assertInertia('Auth/login');

        $this->withoutExceptionHandling();


        $this->signIn();

        $this->followingRedirects()->get('/ascents/create')
            ->assertInertia('Admin/Ascents/create');
        $this->followingRedirects()->post('/ascents/create', $ascent)
            ->assertInertia('Admin/Ascents/index');

        $this->assertDatabaseHas('ascents', [
            'mountain_id' => $ascent['mountain_id'],
            'mountaineer_id' => $ascent['mountaineer_id'],
            'ascent_date' => $ascent['ascent_date']
        ]);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_delete_an_ascent()
    {
        $ascent = create(Ascent::class);

        $this->followingRedirects()->delete('/ascents/' . $ascent->id)
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->followingRedirects()->delete('/ascents/' . $ascent->id)
            ->assertInertia('Admin/Ascents/index');

        $this->assertDatabaseMissing('ascents', [
            'id' => $ascent->id
        ]);
    }
}
