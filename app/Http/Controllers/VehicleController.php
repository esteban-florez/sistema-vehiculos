<?php

namespace App\Http\Controllers;

use App\Models\Component;
use App\Models\Part;
use Illuminate\Http\Request;
use App\Models\Vehicle;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    public function store(Request $request) {
        $content = $request->content();

        $vehicle = $content['vehicle'];
        $components = collect($content['components']);
        $parts = collect($content['parts']);

        $vehicle = $this->validateVehicle($vehicle);
        logger('wuw', $vehicle);


        $components = $this->validateComponents($components);
        $parts = $this->validateParts($parts);

        $vehicle_id = Vehicle::create($vehicle)->id;

        $components = $components->mapWithKeys(function ($component) use ($vehicle_id) {
            $component['vehicle_id'] = $vehicle_id;
            $component = Component::create($component);
            return [$component->component_name_id, $component->id];
        });

        $parts = $parts->map(function ($part) use ($components) {
            $nameId = $part['component_name_id'];
            $part['component_id'] = $components[$nameId];
            unset($part['component_name_id']);
            return $part;
        });

        Part::insert($parts->all());
        
        return response('', 201);
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
