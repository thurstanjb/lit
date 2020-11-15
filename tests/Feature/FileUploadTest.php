<?php

namespace Tests\Feature;

use App\Upload;
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
        // Seed table
        create(Upload::class, [], 5);

        $this->followingRedirects()->get('/uploads')
            ->assertInertia('Auth/login');

        $this->signIn();
        $this->get('/uploads')
            ->assertInertia('Admin/Uploads/index')
            ->assertStatus(200);

        $this->get('/uploads/upload-file')
            ->assertInertia('Admin/Uploads/uploadFile')
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

    /**
     * @test
     */
    public function _an_authorised_user_can_delete_a_file()
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

        $new_upload = Upload::where('filename', $filename)
            ->where('folder', $folder)->first();

        $this->delete('/uploads/'.$new_upload->id)
            ->assertRedirect('/uploads');

        Storage::disk('public')->assertMissing($folder .'/'. $filename);

        $this->assertDatabaseMissing('uploads', [
            'filename' =>  $filename,
            'folder' => $folder
        ]);
    }

    /**
     * @test
     */
    public function _an_authorised_user_can_view_an_upload()
    {
        $upload = create(Upload::class);

        $this->followingRedirects()->get('uploads/' . $upload->id)
            ->assertInertia('Auth/login');

        $this->signIn();

        $this->followingRedirects()->get('uploads/' . $upload->id)
        ->assertInertia('Admin/Uploads/show');
    }

}
