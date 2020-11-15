<?php


namespace App\Filters;


class MountaineerFilter extends Filters
{
    protected $filters = ['name'];

    /**
     * Filter mountaineers by the $name
     *
     * @param $name
     * @return mixed
     */
    public function name($name){
        return $this->builder->where('name', 'LIKE', "%$name%");
    }
}
