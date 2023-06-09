<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\VehicleController;
use App\Models\Component;
use App\Models\Part;
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
    
        Route::get('vehicles/{vehicle}', 'show')
            ->name('vehicles.show');

        // TODO -> editar
        // Route::get('vehicles/{vehicle}/edit', 'edit')
        //     ->name('vehicles.edit');
    
        Route::delete('vehicles/{vehicle}', 'destroy')
            ->name('vehicles.destroy');

        Route::get('vehicles/{vehicle}/report', 'report')
            ->name('vehicle.report');
    });

    Route::get('components/{component}', function (Component $component) {
        $component->load('componentName', 'vehicle');

        $parts = Part::whereBelongsTo($component)
            ->paginate(10);;

        return view('component.show', [
            'component_' => $component,
            'parts' => $parts
        ]);
    })->name('component.show');
});
