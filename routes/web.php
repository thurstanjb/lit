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

Route::prefix('/uploads')->as('uploads.')->middleware(['auth'])->group(function(){
    Route::get('/', 'UploadController@index')->name('index');
    Route::get('/upload-file', 'UploadController@create')->name('create');
    Route::post('/upload-file', 'UploadController@uploadFile')->name('uploadFile');
    Route::get('/{upload}', 'UploadController@show')->name('show');
    Route::delete('/{upload}', 'UploadController@destroy')->name('destroy');
});

Route::prefix('/users')->as('users.')->middleware(['auth', 'admin'])->group(function(){
   Route::get('/', 'UserController@index')->name('index');
   Route::get('/create', 'UserController@create')->name('create');
   Route::post('/create', 'UserController@store')->name('store');
   Route::get('/{user}/edit', 'UserController@edit')->name('edit');
   Route::put('/{user}/edit', 'UserController@update')->name('update');
   Route::delete('/{user}', 'UserController@destroy')->name('destroy');
});

Route::prefix('/imports')->as('imports.')->middleware(['auth'])->group(function(){
   Route::post('/ascent-log/{upload}', 'ImportController@ascentLog')->name('ascent-log');
});

Route::prefix('/mountaineers')->as('mountaineers.')->middleware(['auth'])->group(function(){
   Route::get('/', 'MountaineerController@index')->name('index');
   Route::get('/create', 'MountaineerController@create')->name('create');
   Route::post('/create', 'MountaineerController@store')->name('store');
   Route::get('/{mountaineer:slug}/edit', 'MountaineerController@edit')->name('edit');
   Route::put('/{mountaineer:slug}/edit', 'MountaineerController@update')->name('update');
   Route::delete('/{mountaineer:slug}', 'MountaineerController@destroy')->name('destroy');
});

Route::prefix('/mountains')->as('mountains.')->middleware(['auth'])->group(function(){
   Route::get('/', 'MountainController@index')->name('index');
   Route::get('/create', 'MountainController@create')->name('create');
   Route::post('/create', 'MountainController@store')->name('store');
   Route::get('/{mountain:slug}/edit', 'MountainController@edit')->name('edit');
   Route::put('/{mountain:slug}/edit', 'MountainController@update')->name('update');
   Route::delete('/{mountain:slug}', 'MountainController@destroy')->name('destroy');
});

Route::prefix('/ascents')->as('ascents.')->middleware(['auth'])->group(function(){
    Route::get('/', 'AscentController@index')->name('index');
    Route::get('/create', 'AscentController@create')->name('create');
    Route::post('/create', 'AscentController@store')->name('store');
    Route::delete('/{ascent}', 'AscentController@destroy')->name('destroy');
});

