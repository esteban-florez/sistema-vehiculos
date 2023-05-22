<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $guarded = ['id'];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function components()
    {
        return $this->hasMany(Component::class);
    }

    public function parts()
    {
        return $this->hasManyThrough(Part::class, Component::class);
    }

    protected function status(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->components->every(
                    fn($component) => $component->status === 'Bueno' 
                ) ? 'Activo' : 'Inactivo';
            },
        );
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn() => "{$this->type->name} - {$this->serial}",
        );
    }
}
