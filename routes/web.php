<?php

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/', 'home')
    ->name('home');

Route::get('vehicles/create', function () {
    return view('vehicles.create');
})->name('vehicles.create');

Route::get('vehicles', function () {
    return view('vehicles.index', [
        'vehicles' => Vehicle::all(),
    ]);
})->name('vehicles.index');
