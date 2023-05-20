<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    protected $guarded = ['id'];

    public function parts()
    {
        return $this->hasMany(Part::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function componentName()
    {
        return $this->belongsTo(ComponentName::class);
    }

    public function status(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $every = $this->parts
                    ->every(fn($part) => $part->status === 'Bueno');

                return $value && $every ? 'Bueno' : 'Malo'; 
            },
        );
    }

    public function name(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->componentName->name,
        );
    }

    
    public function description(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                if ($value ?? false) {
                    return $value;
                }

                return 'N/A';
            },
        );
    }
}
