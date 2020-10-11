<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadFileRequest;
use App\Upload;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UploadController extends Controller
{
    public function index(){
        $uploads = (Upload::with('user')->get())->each(function($upload) {
            $upload->upload_date = $upload->created_at->format('d/m/Y H:i:s');
        });

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

    public function destroy(Upload $upload){
        Storage::disk('public')->delete($upload->storage_path);

        $upload->delete();

        return redirect()->route('uploads.index');
    }

}
