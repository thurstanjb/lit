<?php


namespace App\Filters;


class MountainFilter extends Filters
{
    protected $filters = ['name', 'book'];

    /**
     * Filter mountains based on the $name
     *
     * @param $name
     * @return mixed
     */
    public function name($name){
        return $this->builder->where('name', 'LIKE', "%$name%");
    }

    /**
     * filter mountains based on the $book
     *
     * @param $book
     * @return mixed
     */
    public function book($book){
        return $this->builder->where('book', 'LIKE', "%$book%");
    }
}
