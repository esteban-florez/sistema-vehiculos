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
}
