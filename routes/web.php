<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\VehicleController;
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

Route::middleware('guest')->group(function () {
    Route::redirect('/', 'login');

    Route::controller(AuthController::class)->group(function () {
        Route::get('login', 'create')
            ->name('login');
    
        Route::post('auth', 'store')
            ->name('auth');

        Route::get('logout', 'destroy')
            ->name('logout')
            ->withoutMiddleware('guest');
    });

    Route::group([
        'controller' => RegisterController::class,
        'as' => 'register.',
    ], function () {
        Route::get('signup', 'create')
            ->name('create');

        Route::post('register', 'store')
            ->name('store');
    });
});

Route::middleware('auth')->group(function () {
    Route::view('home', 'home')
        ->name('home');

    Route::controller(VehicleController::class)->group(function () {
        Route::get('vehicles', 'index')
            ->name('vehicles.index');

        Route::get('vehicles/create', 'create')
            ->name('vehicles.create');
    
        Route::get('vehicle.show', 'show')
            ->name('vehicles.show');
    
        Route::get('vehicles/{vehicle}/report', 'report')
            ->name('vehicle.report');
    });
});
