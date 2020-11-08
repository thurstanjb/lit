<?php

namespace App\Http\Controllers;

use App\Filters\MountainFilter;
use App\Http\Requests\MountainRequest;
use App\Mountain;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MountainController extends Controller
{
    /**
     * @param MountainFilter $filters
     * @return \Inertia\Response
     */
    public function index(MountainFilter $filters){
        $mountains = Mountain::filter($filters)->paginate(30);

        return Inertia::render('Admin/Mountains/index', [
            'title' => 'Mountains',
            'mountains' => $mountains,
        ]);
    }

    /**
     * @return \Inertia\Response
     */
    public function create(){
        return Inertia::render('Admin/Mountains/create', [
            'title' => 'Add Mountain'
        ]);
    }

    /**
     * @param MountainRequest $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(MountainRequest $request){
        Mountain::create($request->validated());

        return redirect()->route('mountains.index');
    }

    /**
     * @param Mountain $mountain
     * @return \Inertia\Response
     */
    public function edit(Mountain $mountain){
        return Inertia::render('Admin/Mountains/update', [
            'title' => 'Edit Mountain',
            'mountain' => $mountain
        ]);
    }

    /**
     * @param MountainRequest $request
     * @param Mountain $mountain
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(MountainRequest $request, Mountain $mountain){
        $mountain->update($request->validated());

        return redirect()->route('mountains.index');
    }

    /**
     * @param Mountain $mountain
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Mountain $mountain){

        $mountain->delete();

        return redirect()->route('mountains.index');
    }
}
