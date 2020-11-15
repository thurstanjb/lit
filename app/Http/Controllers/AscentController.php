<?php

namespace App\Http\Controllers;

use App\Ascent;
use App\Filters\AscentFilter;
use App\Http\Requests\AscentRequest;
use App\Mountain;
use App\Mountaineer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AscentController extends Controller
{
    /**
     * Return a paginated list of ascents. Can be filtered
     *
     * @param AscentFilter $filters
     * @return Response
     */
    public function index(AscentFilter $filters): Response
    {
        $ascents = Ascent::filter($filters)->with(['mountaineer', 'mountain'])
            ->paginate(30);

        return Inertia::render('Admin/Ascents/index', [
            'title' => 'Ascents',
            'ascents' => $ascents
        ]);
    }

    /**
     * SHow the for to create a new ascent
     *
     * @return Response
     */
    public function create(): Response
    {
        $mountains = Mountain::all();
        $mountaineers = Mountaineer::all();
        return Inertia::render('Admin/Ascents/create', [
            'title' => 'Add Ascent',
            'mountains' => $mountains,
            'mountaineers' => $mountaineers
        ]);
    }

    /**
     * Store the validated ascent as a new model
     *
     * @param AscentRequest $request
     * @return RedirectResponse
     */
    public function store(AscentRequest $request): RedirectResponse
    {

        Ascent::create($request->validated());

        return redirect()->route('ascents.index');
    }

    /**
     * Destroy the ascent and remove from db
     *
     * @param Ascent $ascent
     * @return RedirectResponse
     * @throws \Exception
     */
    public function destroy(Ascent $ascent): RedirectResponse
    {
        $ascent->delete();

        return redirect()->route('ascents.index');
    }
}
