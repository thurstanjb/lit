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
            'name' => 'string|required'
        ]);

        $valid['slug'] = Str::slug($valid['name'], '-');

        Mountaineer::create($valid);
    }
}
