<?php

namespace Tests\Feature;

use App\Upload;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UploadFilterTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _uploads_can_be_ordered_by_their_filename()
    {
        $upload1 = create(Upload::class, ['filename' => 'user_ascents.xls']);
        $upload2 = create(Upload::class, ['filename' => 'route_card.xls']);
        $upload3 = create(Upload::class, ['filename' => 'mountain_data.csv']);
        $upload4 = create(Upload::class, ['filename' => 'books.csv']);

        $this->signIn();

        $response = $this->get('/admin/uploads?desc=filename');
        $top_spot = $response->inertiaProps()['uploads']['data'][0];
        $this->assertEquals($upload1->filename, $top_spot['filename']);

        $response = $this->get('/admin/uploads?asc=filename');
        $top_spot = $response->inertiaProps()['uploads']['data'][0];
        $this->assertEquals($upload4->filename, $top_spot['filename']);
    }

    /**
     * @test
     */
    public function _uploads_can_be_filtered_by_their_filename()
    {
        $upload1 = create(Upload::class, ['filename' => 'user_ascents.xls']);
        $upload2 = create(Upload::class, ['filename' => 'route_card.xls']);
        $upload3 = create(Upload::class, ['filename' => 'mountain_data.csv']);
        $upload4 = create(Upload::class, ['filename' => 'books.csv']);

        $this->signIn();

        $response = $this->get('/admin/uploads?filename=xls');
        $uploads = $response->inertiaProps()['uploads']['data'];
        $this->assertCount(2, $uploads);

        $response = $this->get('/admin/uploads?filename=mountain');
        $uploads = $response->inertiaProps()['uploads']['data'];
        $this->assertCount(1, $uploads);

        $response = $this->get('/admin/uploads?filename=.csv&asc=filename');
        $top_spot = $response->inertiaProps()['uploads']['data'][0];
        $this->assertEquals($upload4->filename, $top_spot['filename']);
    }

    /**
     * @test
     */
    public function _uploads_can_be_filtered_by_their_folder()
    {
        $upload1 = create(Upload::class, ['folder' => 'mountains']);
        $upload2 = create(Upload::class, ['folder' => 'misc']);
        $upload3 = create(Upload::class, ['folder' => 'miscellaneous']);
        $upload4 = create(Upload::class, ['folder' => 'users']);

        $this->signIn();

        $response = $this->get('/admin/uploads?folder=misc');
        $uploads = $response->inertiaProps()['uploads']['data'];
        $this->assertCount(2, $uploads);

        $response = $this->get('/admin/uploads?folder=m&asc=folder');
        $uploads = $response->inertiaProps()['uploads']['data'];
        $this->assertCount(3, $uploads);
        $this->assertEquals($upload2->folder, $uploads[0]['folder']);

    }
}
