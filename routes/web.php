<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::prefix('react/api')->group(function () {
    Route::get('/login', 'ReactController@login');
    Route::get('/logout', 'ReactController@logout');
});

Route::get('/react/{any?}',function(){
  return view('Laractpa');
})->where('any', '.*');
