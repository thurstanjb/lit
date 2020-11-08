<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mountain extends Model
{
    protected $table = 'mountains';

    protected $fillable = [
        'name', 'height', 'book', 'slug'
    ];

    public function ascents(){
        return $this->hasMany(Ascent::class);
    }

    public function scopeFilter($query, $filters){
        return $filters->apply($query);
    }
}
