<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    protected $guarded = ['id'];

    public function component()
    {
        return $this->belongsTo(Component::class);
    }

    public function status(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? 'Bueno' : 'Malo'
        );
    }

    public function observation(): Attribute
    {
        return Attribute::make(
            get: $this->optVal(),
        );
    }

    public function notch(): Attribute
    {
        return Attribute::make(
            get: $this->optVal(),
        );
    }
    public function box(): Attribute
    {
        return Attribute::make(
            get: $this->optVal(),
        );
    }

    public function code(): Attribute
    {
        return Attribute::make(
            get: $this->optVal(),
        );
    }

    protected function optVal()
    {
        return function ($value) {
            if ($value ?? false) {
                return $value;
            }

            return 'N/A';
        };
    }
}
