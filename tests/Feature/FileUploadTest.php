<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class FileUploadTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function _an_authorised_user_can_visit_the_uploads_page()
    {
        $this->followingRedirects()->get('/uploads')
            ->assertInertia('Auth/login');

        $this->signIn();
        $this->get('/uploads')
            ->assertInertia('Uploads/index')
            ->assertStatus(200);

        $this->get('/uploads/upload-file')
            ->assertInertia('Uploads/uploadFile')
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_upload_a_file()
    {
        $folder = 'test_folder';
        $filename  = 'mountains.xls';
        Storage::fake();

        $this->signIn();
        $this->post('/uploads/upload-file', [
            'file' => UploadedFile::fake()->create($filename, 100),
            'filename' => $filename,
            'folder' => $folder
            ])
            ->assertRedirect('/uploads');

        Storage::disk('public')->assertExists($folder .'/'. $filename);

        $this->assertDatabaseHas('uploads', [
           'filename' =>  $filename,
            'folder' => $folder
        ]);
    }

}
