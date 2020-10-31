<?php

namespace App\Http\Controllers;

use App\Mountain;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MountainController extends Controller
{
    public function index(){
        $mountains = Mountain::all();

        return Inertia::render('Admin/Mountains/index', [
            'title' => 'Mountains',
            'mountains' => $mountains
        ]);
    }

    public function create(){
        return Inertia::render('Admin/Mountains/create', [
            'title' => 'Add Mountain'
        ]);
    }

    public function store(Request $request){
        $valid = $request->validate([
            'name' => 'required|string|unique:mountains,name,NULL,id,book,'.$request['book'],
            'height' => 'required|digits_between:2,4',
            'book' => 'required|string'
        ]);


        $valid['slug'] = Str::slug($valid['name'] .' '.$valid['book'], '-');

        Mountain::create($valid);

        return redirect()->route('mountains.index');
    }

    public function edit(Mountain $mountain){
        return Inertia::render('Admin/Mountains/update', [
            'title' => 'Edit Mountain',
            'mountain' => $mountain
        ]);
    }

    public function update(Request $request, Mountain $mountain){
        $valid = $request->validate([
            'name' => 'required|string|unique:mountains,name,' . $request['id'] . ',id,book,'.$request['book'],
            'height' => 'required|digits_between:2,4',
            'book' => 'required|string'
        ]);

        $valid['slug'] = Str::slug($valid['name'] .' '.$valid['book'], '-');

        $mountain->update($valid);

        return redirect()->route('mountains.index');
    }

    public function destroy(Mountain $mountain){

        $mountain->delete();

        return redirect()->route('mountains.index');
    }
}
