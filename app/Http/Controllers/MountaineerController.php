<?php

namespace App\Http\Controllers;

use App\Filters\MountaineerFilter;
use App\Http\Requests\MountaineerRequest;
use App\Mountaineer;
use Inertia\Inertia;

class MountaineerController extends Controller
{
    /**
     * @param MountaineerFilter $filters
     * @return \Inertia\Response
     */
    public function index(MountaineerFilter $filters)
    {
        $mountaineers = Mountaineer::filter($filters)->paginate(30);
        return Inertia::render('Admin/Mountaineers/index', [
            'title' => 'Mountaineers',
            'mountaineers' => $mountaineers
        ]);
    }

    /**
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Mountaineers/create', [
            'title' => 'Add Mountaineer'
        ]);
    }

    /**
     * @param MountaineerRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(MountaineerRequest $request)
    {
        Mountaineer::create($request->validated());

        return redirect()->route('mountaineers.index');
    }

    /**
     * @param Mountaineer $mountaineer
     * @return \Inertia\Response
     */
    public function edit(Mountaineer $mountaineer)
    {
        return Inertia::render('Admin/Mountaineers/update', [
            'title' => 'Edit Mountaineer',
            'mountaineer' => $mountaineer
        ]);
    }

    /**
     * @param MountaineerRequest $request
     * @param Mountaineer $mountaineer
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(MountaineerRequest $request, Mountaineer $mountaineer)
    {
        $mountaineer->update($request->validated());

        return redirect()->route('mountaineers.index');
    }

    /**
     * @param Mountaineer $mountaineer
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Mountaineer $mountaineer)
    {
        $mountaineer->delete();

        return redirect()->route('mountaineers.index');
    }
}
