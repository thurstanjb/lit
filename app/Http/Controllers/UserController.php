<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\User;
use Inertia\Inertia;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $users = (User::all())->each(function($user) {
            $user->joined = $user->created_at->format('d/m/Y');
        });
        return Inertia::render('Admin/Users/index',[
            'title' => 'Users',
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Users/create', [
            'title' => 'Add User'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param UserRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(UserRequest $request)
    {
        User::create($request->validated());

        return redirect()->route('users.index');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\User $user
     * @return \Inertia\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('Admin/Users/update', [
            'title' => 'Edit User',
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UserRequest $request, User $user)
    {

        $user->update($request->validated());

        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\User $user
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index');
    }
}
