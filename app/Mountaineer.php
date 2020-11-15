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

    public function ascents(){
        return $this->hasMany(Ascent::class);
    }

    public function scopeFilter($query, $filters){
        return $filters->apply($query);
    }

    /**
     * Return the mountaineers as an array to be used in a ddown
     *
     * @param $query
     * @return mixed
     */
    public function scopeDdown($query)
    {
        return $query->get(['mountaineers.name AS text', 'mountaineers.id AS value'])
            ->toArray();
    }
}
