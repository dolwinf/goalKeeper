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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/fetch/{id}', 'GoalController@fetch');
Route::put('/edit/{id}', 'GoalController@edit');
Route::post('/goal/{id}', 'GoalController@update');
Route::delete('/goal/{id}', 'GoalController@destroy');
Route::get('/goal', 'GoalController@index');
Route::post('/goal', 'GoalController@store');
Route::get('/home', 'HomeController@index')->name('home');
