<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mountaineer extends Model
{
    use SoftDeletes;

    protected $table = 'mountaineers';

    protected $fillable = [
        'name', 'slug'
    ];

    public $casts = [
        'created_at' => 'date:d/m/Y'
    ];
}
