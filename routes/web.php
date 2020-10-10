<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->get('/', function () {
    return redirect('/home');
});

Auth::routes(['register' => false]);

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('/users')->as('users.')->middleware(['auth', 'admin'])->group(function(){
   Route::get('/', 'UserController@index')->name('index');
   Route::get('/create', 'UserController@create')->name('create');
   Route::post('/create', 'UserController@store')->name('store');
   Route::get('/{user}/edit', 'UserController@edit')->name('edit');
   Route::put('/{user}/edit', 'UserController@update')->name('update');
   Route::delete('/{user}', 'UserController@destroy')->name('destroy');
});
