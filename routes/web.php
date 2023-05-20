<?php

use App\Models\Vehicle;
use Illuminate\Support\Facades\Route;
use Barryvdh\DomPDF\Facade\Pdf as PDF;

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
    $vehicles = Vehicle::
        with('type.componentNames', 'components.parts')
        ->paginate(5);

    $activeCount = $vehicles
        ->filter(fn($vehicle) => $vehicle->status === 'Activo')
        ->count();

    return view('vehicles.index', [
        'vehicles' => $vehicles,
        'activeCount' => $activeCount,
    ]);
})->name('vehicles.index');

Route::get('vehicles/{vehicle}/report', function (Vehicle $vehicle) {
    $vehicle->load('components.parts', 'type.componentNames');

    $pdf = PDF::loadView('pdf.vehicle-report', [
        'vehicle' => $vehicle,
        'date' => now()->format('d/m/Y')
    ]);

    $pdf->setPaper('a4', 'landscape');

    $filename = 'Reporte-Vehiculo.pdf';
    $path = public_path($filename);
    $pdf->save($filename);

    return response()
        ->download($path)
        ->deleteFileAfterSend();
})->name('vehicle.report');
