<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mountain extends Model
{
    protected $table = 'mountains';

    protected $fillable = [
        'name', 'height', 'book', 'slug'
    ];
}
