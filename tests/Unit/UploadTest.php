<?php

namespace Tests\Unit;

use App\Upload;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UploadTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _it_has_a_model_factory()
    {
        $upload = create(Upload::class);

        $this->assertDatabaseHas('uploads', [
            'id' => $upload->id,
            'filename' => $upload->filename,
            'folder' => $upload->folder,
            'storage_path' => $upload->storage_path,
            'user_id' => $upload->user_id
        ]);
    }

    /**
     * @test
     */
    public function _it_can_return_its_user()
    {
        $user = create(User::class);
        $upload = create(Upload::class, ['user_id' => $user->id]);

        $this->assertEquals($user->name, $upload->user->name);
    }
}
