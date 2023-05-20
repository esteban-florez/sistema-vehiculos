<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComponentName extends Model
{
    protected $guarded = ['id'];

    protected $table = 'component_names';

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function components()
    {
        return $this->hasMany(Component::class);
    }
}
