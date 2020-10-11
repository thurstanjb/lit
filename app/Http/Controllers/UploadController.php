<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadFileRequest;
use App\Upload;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UploadController extends Controller
{
    public function index(){
        $uploads = Upload::all();

        return Inertia::render('Uploads/index',[
            'title' => 'Uploaded Files',
            'uploads' => $uploads
        ]);
    }

    public function showUpload(){
        return Inertia::render('Uploads/uploadFile',[
            'title' => 'File Upload'
        ]);
    }

    public function uploadFile(UploadFileRequest $request){
        $valid = $request->validated();

        $valid['storage_path'] = $request->file('file')->storeAs($valid['folder'],$valid['filename'], 'public');

        Upload::create($valid);

        return redirect()->route('uploads.index');
    }
}
