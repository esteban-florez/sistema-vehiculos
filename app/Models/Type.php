<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $guarded = ['id'];

    public function vehicles()
    {
        return $this->hasMany(Vehicle::class);
    }

    public function componentNames()
    {
        return $this->hasMany(ComponentName::class);
    }
}
