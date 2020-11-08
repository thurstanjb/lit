<?php


namespace App\Filters;


class UserFilter extends Filters
{
    protected $filters = ['name'];

    public function name($name){
        return $this->builder->where('name', 'LIKE', "%$name%");
    }
}
