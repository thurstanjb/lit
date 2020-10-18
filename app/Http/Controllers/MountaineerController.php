<?php

namespace App\Http\Controllers;

use App\Http\Requests\MountaineerRequest;
use App\Mountaineer;
use Inertia\Inertia;

class MountaineerController extends Controller
{
    public function index()
    {
        $mountaineers = Mountaineer::all();
        return Inertia::render('Admin/Mountaineers/index', [
            'title' => 'Mountaineers',
            'mountaineers' => $mountaineers
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Mountaineers/create', [
            'title' => 'Add Mountaineer'
        ]);
    }

    public function store(MountaineerRequest $request)
    {
        Mountaineer::create($request->validated());

        return redirect()->route('mountaineers.index');
    }

    public function edit(Mountaineer $mountaineer)
    {
        return Inertia::render('Admin/Mountaineers/update', [
            'title' => 'Edit Mountaineer',
            'mountaineer' => $mountaineer
        ]);
    }

    public function update(MountaineerRequest $request, Mountaineer $mountaineer)
    {
        $mountaineer->update($request->validated());

        return redirect()->route('mountaineers.index');
    }
}
