<?php

namespace App\Http\Controllers;

use App\Ascent;
use App\Mountain;
use App\Mountaineer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AscentController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index(){
        $ascents = Ascent::with(['mountaineer', 'mountain'])
            ->orderBy('ascent_date', 'desc')
            ->get();

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
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request){
        $valid = $request->validate([
            'mountain_id' => 'required',
            'mountaineer_id' => 'required',
            'ascent_date' => 'required|date_format:Y-m-d'
        ]);

        Ascent::create($valid);

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
