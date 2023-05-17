<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    protected $guarded = [];

    public function component()
    {
        return $this->belongsTo(Component::class);
    }
}
