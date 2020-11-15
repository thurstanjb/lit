<?php

namespace App\Http\Controllers;

use App\Filters\MountaineerFilter;
use App\Http\Requests\MountaineerRequest;
use App\Mountaineer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class MountaineerController extends Controller
{
    /**
     * Return a paginated list of mountaineers. Can be filtered
     *
     * @param MountaineerFilter $filters
     * @return Response
     */
    public function index(MountaineerFilter $filters): Response
    {
        $mountaineers = Mountaineer::filter($filters)->paginate(30);
        return Inertia::render('Admin/Mountaineers/index', [
            'title' => 'Mountaineers',
            'mountaineers' => $mountaineers
        ]);
    }

    /**
     * Show the form for creating a Mountaineer
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Mountaineers/create', [
            'title' => 'Add Mountaineer'
        ]);
    }

    /**
     * Store the validated data to create a Mountaineer
     *
     * @param MountaineerRequest $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(MountaineerRequest $request): RedirectResponse
    {
        Mountaineer::create($request->validated());

        return redirect()->route('mountaineers.index');
    }

    /**
     * Return the form to edit a mountaineer
     * @param Mountaineer $mountaineer
     * @return Response
     */
    public function edit(Mountaineer $mountaineer): Response
    {
        return Inertia::render('Admin/Mountaineers/update', [
            'title' => 'Edit Mountaineer',
            'mountaineer' => $mountaineer
        ]);
    }

    /**
     * Store the validated updated data for a mountaineer
     *
     * @param MountaineerRequest $request
     * @param Mountaineer $mountaineer
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function update(MountaineerRequest $request, Mountaineer $mountaineer): RedirectResponse
    {
        $mountaineer->update($request->validated());

        return redirect()->route('mountaineers.index');
    }

    /**
     * Destroy the provided mountaineer model and remove from db
     *
     * @param Mountaineer $mountaineer
     * @return RedirectResponse
     * @throws \Exception
     */
    public function destroy(Mountaineer $mountaineer): RedirectResponse
    {
        $mountaineer->delete();

        return redirect()->route('mountaineers.index');
    }
}
