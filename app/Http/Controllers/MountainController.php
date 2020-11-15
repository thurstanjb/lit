<?php

namespace App\Http\Controllers;

use App\Filters\MountainFilter;
use App\Http\Requests\MountainRequest;
use App\Mountain;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class MountainController extends Controller
{
    /**
     * Return a paginated list of Mountains. Can be filtered
     *
     * @param MountainFilter $filters
     * @return Response
     */
    public function index(MountainFilter $filters): Response
    {
        $mountains = Mountain::filter($filters)->paginate(30);

        return Inertia::render('Admin/Mountains/index', [
            'title' => 'Mountains',
            'mountains' => $mountains,
            'books' => config('globals.books')
        ]);
    }

    /**
     * Show the form for creating a mountain
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Mountains/create', [
            'title' => 'Add Mountain',
            'books' => config('globals.books')
        ]);
    }

    /**
     * Store the validated data as a new mountain
     *
     * @param MountainRequest $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(MountainRequest $request): RedirectResponse
    {
        Mountain::create($request->validated());

        return redirect()->route('mountains.index');
    }

    /**
     * Return the form to edit a mountain.
     *
     * @param Mountain $mountain
     * @return Response
     */
    public function edit(Mountain $mountain): Response
    {
        return Inertia::render('Admin/Mountains/update', [
            'title' => 'Edit Mountain',
            'mountain' => $mountain,
            'books' => config('globals.books')
        ]);
    }

    /**
     * Store the validated updated data for a mountain
     * @param MountainRequest $request
     * @param Mountain $mountain
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function update(MountainRequest $request, Mountain $mountain): RedirectResponse
    {
        $mountain->update($request->validated());

        return redirect()->route('mountains.index');
    }

    /**
     * destroy the mountain and remove from db
     *
     * @param Mountain $mountain
     * @return RedirectResponse
     * @throws \Exception
     */
    public function destroy(Mountain $mountain): RedirectResponse
    {

        $mountain->delete();

        return redirect()->route('mountains.index');
    }
}
