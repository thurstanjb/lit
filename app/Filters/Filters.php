<?php


namespace App\Filters;


use Illuminate\Http\Request;

abstract class Filters
{

    protected $request;
    protected $builder;
    protected $filters = [];
    protected $default_filters = ['asc', 'desc'];


    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Apply the filters, if present in the request.
     * Fire filter method on class if exists
     * @param $builder
     * @return mixed
     */
    public function apply($builder)
    {
        $this->builder = $builder;
        foreach ($this->getFilters() as $filter => $value) {
            if (method_exists($this, $filter)){
                $this->$filter($value);
            }
        }

        return $this->builder;
    }

    /**
     * Get from the request any filters named in the filters list
     * Merge in default filters
     * @return array
     */
    private function getFilters(): array
    {
        return $this->request->only(array_merge($this->filters, $this->default_filters));
    }

    /**
     * Default Filter
     * return query with the $column in asc order
     * @param $column
     * @return mixed
     */
    public function asc($column){
        return $this->builder->orderBy($column, 'asc');
    }

    /**
     * Default Filter
     * return query with the $column in desc order
     * @param $column
     * @return mixed
     */
    public function desc($column){
        return $this->builder->orderBy($column, 'desc');
    }
}
