<?php

namespace App\Http\Controllers;

use App\Ascent;
use App\Filters\AscentFilter;
use App\Http\Requests\AscentRequest;
use App\Mountain;
use App\Mountaineer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AscentController extends Controller
{
    /**
     * @param AscentFilter $filters
     * @return \Inertia\Response
     */
    public function index(AscentFilter $filters){
        $ascents = Ascent::filter($filters)->with(['mountaineer', 'mountain'])
            ->paginate(30);

        return Inertia::render('Admin/Ascents/index', [
            'title' => 'Ascents',
            'ascents' => $ascents
        ]);
    }

    /**
     * @return \Inertia\Response
     */
    public function create(){
        $mountains = Mountain::all();
        $mountaineers = Mountaineer::all();
        return Inertia::render('Admin/Ascents/create', [
            'title' => 'Add Ascent',
            'mountains' => $mountains,
            'mountaineers' => $mountaineers
        ]);
    }

    /**
     * @param AscentRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(AscentRequest $request){

        Ascent::create($request->validated());

        return redirect()->route('ascents.index');
    }

    /**
     * @param Ascent $ascent
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Ascent $ascent){
        $ascent->delete();

        return redirect()->route('ascents.index');
    }
}
