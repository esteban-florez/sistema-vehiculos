<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    protected $guarded = [];

    public function parts()
    {
        return $this->hasMany(Part::class);
    }

    public function vehicle() {
        return $this->belongsTo(Vehicle::class);
    }
}