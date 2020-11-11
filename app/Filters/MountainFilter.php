<?php


namespace App\Filters;


class MountainFilter extends Filters
{
    protected $filters = ['name', 'book'];

    public function name($name){
        return $this->builder->where('name', 'LIKE', "%$name%");
    }

    public function book($book){
        return $this->builder->where('book', 'LIKE', "%$book%");
    }
}
