<?php


namespace App\Filters;


use App\Mountain;

class AscentFilter extends Filters
{
    protected $filters = ['mountaineer', 'mountain', 'book', 'year'];

    /**
     * Filter ascents my mountaineer_id
     *
     * @param int $mountaineer_id
     * @return mixed
     */
    public function mountaineer(int $mountaineer_id){
        return $this->builder->where('mountaineer_id', $mountaineer_id);
    }

    /**
     * Filter ascents by mountain name.  Accepts partials.
     *
     * @param string $mountain
     * @return mixed
     */
    public function mountain(string $mountain){
        $ids = Mountain::where('name', 'LIKE', "%$mountain%")
            ->get(['id'])->toArray();

        return $this->builder->whereIn('mountain_id', $ids);
    }

    /**
     * Filter ascents by book via mountain.
     *
     * @param string $book
     * @return mixed
     */
    public function book(string $book){
        $ids = Mountain::where('book', 'LIKE', "%$book%")
            ->get(['id'])->toArray();

        return $this->builder->whereIn('mountain_id', $ids);
    }

    public function year(int $year){
        return $this->builder->whereYear('ascent_date', '=', $year);
    }
}
