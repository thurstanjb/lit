<?php

namespace App\Http\Controllers;

use App\Imports\AscentLogImport;
use App\Upload;
use Illuminate\Http\Request;

class ImportController extends Controller
{

    /**
     * Fires the import process for the ascent logs
     * TODO: move to event/job and queue
     * @param Upload $upload
     */
    public function ascentLog(Upload $upload): void
    {

        (new AscentLogImport)->import($upload->storage_path, 'public');
    }
}
