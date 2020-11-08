<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ascent extends Model
{
    protected $table = 'ascents';

    protected $fillable = [
        'mountain_id', 'mountaineer_id', 'ascent_date'
    ];

    public $casts = [
        'ascent_date' => 'date:d/m/Y'
    ];

    public function mountain(){
        return $this->belongsTo(Mountain::class);
    }

    public function mountaineer(){
        return $this->belongsTo(Mountaineer::class);
    }

    public function scopeFilter($query, $filters){
        return $filters->apply($query);
    }
}
