<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;

    public function parts()
    {
        return $this->hasMany(Part::class);
    }

    public function vehicle() {
        return $this->belongsTo(Vehicle::class);
    }
}
