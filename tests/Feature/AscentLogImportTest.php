<?php

namespace Tests\Feature;

use App\Imports\AscentLogImport;
use App\Mountain;
use App\Upload;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Maatwebsite\Excel\Facades\Excel;
use Tests\TestCase;

class AscentLogImportTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function _an_authorised_user_can_import_ascent_logs()
    {
        $upload = create(Upload::class, ['storage_path' => 'test_folder/ascentlogtest.xls']);
        $filepath = $upload->folder . '/' . $upload->filename;

        $this->post(route('admin.imports.ascent-log', $upload))
            ->assertRedirect('login');

        $this->signIn();

        $this->post(route('admin.imports.ascent-log', $upload));

        //Check that the mountaineer has persisted
        $this->assertDatabaseHas('mountaineers', [
            'name' => 'Eric Bowling'
        ]);

        //Check that the mountains have persisted
        $this->assertDatabaseHas('mountains', [
            'name' => 'Harter Fell (Mardale)',
            'book' => 'far-eastern',
            'height' => 2539
        ]);
        $this->assertDatabaseHas('mountains', [
            'name' => 'Pavey Ark',
            'book' => 'central',
            'height' => 2288
        ]);
        $this->assertDatabaseHas('mountains', [
            'name' => 'Harrison Stickle',
            'book' => 'central',
            'height' => 2403
        ]);

        $this->assertCount(3, Mountain::all());

        //Check that all the ascents have persisted

        $harter_fell = Mountain::whereName('Harter Fell (Mardale)')->first();

        $this->assertCount(20, $harter_fell->ascents);

        $pavey_ark = Mountain::whereName('Pavey Ark')->first();

        $this->assertCount(10, $pavey_ark->ascents);

        $harrison_stickle = Mountain::whereName('Harrison Stickle')->first();

        $this->assertCount(5, $harrison_stickle->ascents);
    }

}
