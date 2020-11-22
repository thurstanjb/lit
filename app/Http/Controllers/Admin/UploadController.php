<?php

namespace App\Http\Controllers\Admin;

use App\Filters\UploadFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\UploadFileRequest;
use App\Upload;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class UploadController extends Controller
{
    /**
     * Return a paginated list of uploads.  Can be filtered.
     *
     * @param UploadFilter $filters
     * @return Response
     */
    public function index(UploadFilter $filters): Response
    {
        $uploads = (Upload::filter($filters)->with('user')->paginate(30));

        $uploads->getCollection()->each(function ($upload) {
            $upload->upload_date = $upload->created_at->format('d/m/Y H:i:s');
        });

        return Inertia::render('Admin/Uploads/index', [
            'title' => 'Uploaded Files',
            'uploads' => $uploads,
            'folders' => config('globals.folders')
        ]);
    }

    /**
     * Show the details for the selected upload
     *
     * @param Upload $upload
     * @return Response
     */
    public function show(Upload $upload): Response
    {
        return Inertia::render('Admin/Uploads/show', [
            'title' => 'File Details',
            'upload' => $upload
        ]);
    }

    /**
     * Return the form to upload files
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Uploads/uploadFile', [
            'title' => 'File Upload',
            'folders' => config('globals.folders')
        ]);
    }

    /**
     * Store the uploads file. Add returned path to Upload object before storing
     *
     * @param UploadFileRequest $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function uploadFile(UploadFileRequest $request): RedirectResponse
    {
        $valid = $request->validated();
        $valid['storage_path'] = $request->file('file')->storeAs($valid['folder'], $valid['filename'], 'public');

        Upload::create($valid);

        return redirect()->route('admin.uploads.index');
    }

    /**
     * Destroy the provided upload and remove from db
     *
     * @param Upload $upload
     * @return RedirectResponse
     * @throws Exception
     */
    public function destroy(Upload $upload): RedirectResponse
    {
        Storage::disk('public')->delete($upload->storage_path);
        $upload->delete();

        return redirect()->route('admin.uploads.index');
    }

}
