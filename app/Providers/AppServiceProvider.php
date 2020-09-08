<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $hasErrors = false;
        Inertia::share([
            'errors' => function() use(&$hasErrors){
                $errors = [];
                if(Session::get('errors')){
                    $errors = Session::get('errors')->getBag('default')->getMessages();
                    $hasErrors = true;
                }
                return $errors;
            },

            'hasErrors' => function() use(&$hasErrors){
                return $hasErrors;
            },

            'auth' => function(){
                return [
                    'user' => Auth::user() ? [
                        'name' => Auth::user()->name,
                        'isAdmin' => Auth::user()->isAdmin()
                    ] : null
                ];
            }
        ]);
    }
}
