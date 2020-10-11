<?php

namespace App\Http\Controllers;

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

    public function uploadFile(Request $request){
        $valid = $request->validate([
            'filename' => 'required|string|max:255',
            'folder' => 'required|string|max:100',
            'file' => 'required|file'
        ]);

        $storage_path = $request->file('file')->storeAs($valid['folder'],$valid['filename'], 'public');

        Upload::create([
            'filename' => $valid['filename'],
            'folder' => $valid['folder'],
            'storage_path' => $storage_path,
            'user_id' => auth()->id()
        ]);

        return redirect()->route('uploads.index');
    }


}
