<?php

namespace App\Http\Controllers;

use App\Mountaineer;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MountaineerController extends Controller
{
    public function index(){
        $mountaineers = Mountaineer::all();
        return Inertia::render('Admin/Mountaineers/index',[
            'title' => 'Mountaineers',
            'mountaineers' => $mountaineers
        ]);
    }

    public function create(){
        return Inertia::render('Admin/Mountaineers/create', [
            'title' => 'Add Mountaineer'
        ]);
    }

    public function store(Request $request){
        $valid = $request->validate([
            'name' => 'string|required|unique:mountaineers,name'
        ]);

        $valid['slug'] = Str::slug($valid['name'], '-');

        Mountaineer::create($valid);

        return redirect()->route('mountaineers.index');
    }

    public function edit(Mountaineer $mountaineer){

        return Inertia::render('Admin/Mountaineers/update', [
            'title' => 'Edit Mountaineer',
            'mountaineer' => $mountaineer
        ]);
    }

    public function update(Request $request, Mountaineer $mountaineer){

        $valid = $request->validate([
            'name' => 'string|required|unique:mountaineers,name,' . $mountaineer->id,
        ]);

        $valid['slug'] = Str::slug($valid['name'], '-');

        $mountaineer->update($valid);

        return redirect()->route('mountaineers.index');
    }
}
