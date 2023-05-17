<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    public function model()
    {
        return $this->belongsTo(Type::class);
    }

    public function components()
    {
        return $this->hasMany(Component::class);
    }

    public function parts() {
        return $this->hasManyThrough(Part::class, Component::class);
    }
}
