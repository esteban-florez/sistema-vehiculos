<?php

namespace App\Http\Controllers;

use App\Models\Component;
use App\Models\Part;
use Illuminate\Http\Request;
use App\Models\Vehicle;
use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::with('type.componentNames', 'components.parts')
            ->paginate(5);

        $activeCount = $vehicles
            ->filter(fn($vehicle) => $vehicle->status === 'Activo')
            ->count();

        return view('vehicles.index', [
            'vehicles' => $vehicles,
            'activeCount' => $activeCount,
        ]);
    }

    public function create()
    {
        return view('vehicles.create');
    }

    public function store(Request $request) {
        $content = $request->content();

        $vehicle = $content['vehicle'];
        $components = collect($content['components']);
        $parts = collect($content['parts']);

        $vehicle = $this->validateVehicle($vehicle);
        $components = $this->validateComponents($components);
        $parts = $this->validateParts($parts);
        $vehicle_id = Vehicle::create($vehicle)->id;

        $map = new \stdClass;

        $components->each(function ($component) use ($vehicle_id, $map) {
            $component['vehicle_id'] = $vehicle_id;
            $component = Component::create($component);
            $map->{"a{$component->component_name_id}"} = $component->id;
        });

        $parts = $parts->map(function ($part) use ($map) {
            $nameId = $part['component_name_id'];
            $part['component_id'] = $map->{"a{$nameId}"};
            unset($part['component_name_id']);
            return $part;
        });

        Part::insert($parts->all());
        
        return response('', 201);
    }

    public function show(Vehicle $vehicle)
    {
        $vehicle->load('type');

        $components = Component::whereBelongsTo($vehicle)
            ->paginate(10);

        return view('vehicles.show', [
            'vehicle' => $vehicle,
            'components' => $components,
        ]);
    }

    public function destroy(Vehicle $vehicle)
    {
        $vehicle->delete();

        return redirect()->route('vehicles.index')
            ->with('alert', 'El vehículo se ha eliminado.');
    }

    public function report(Vehicle $vehicle)
    {
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
    }

    protected function validateVehicle($vehicle)
    {
        return Validator::validate($vehicle, [
            'serial' => ['required', 'max:255', 'string', 'unique:vehicles'],
            'type_id' => ['required', 'integer'],
        ]);
    }

    protected function validateComponents($components)
    {
        return $components->map(function ($component) {
            $component['component_name_id'] = $component['id'];

            return Validator::validate($component, [
                'serial' => ['required', 'max:255', 'string'],
                'description' => ['nullable', 'string', 'max:255'],
                'status' => ['required', 'boolean'],
                'component_name_id' => ['required', 'integer'],
            ]);
        });
    }

    protected function validateParts($parts)
    {
        return $parts->map(function ($part) {
            $part['component_name_id'] = $part['component_id'];

            return Validator::validate($part, [
                'serial' => ['required', 'max:255', 'string'],
                'code' => ['nullable', 'max:255', 'string'],
                'description' => ['required', 'string', 'max:255'],
                'amount' => ['required', 'integer', 'min:1'],
                'box' => ['nullable', 'max:255', 'string'],
                'notch' => ['nullable', 'max:255', 'string'],
                'status' => ['required', 'boolean'],
                'observation' => ['nullable', 'max:255', 'string'],
                'component_name_id' => ['required', 'integer'],
            ]);
        });
    }
}
