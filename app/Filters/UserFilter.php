<?php


namespace App\Filters;


class UserFilter extends Filters
{
    protected $filters = ['name', 'email', 'role'];

    public function name($name){
        return $this->builder->where('name', 'LIKE', "%$name%");
    }

    public function email($email){
        return $this->builder->where('email', 'LIKE', "%$email%");
    }

    public function role($role){
        return $this->builder->where('role', 'LIKE', "%$role%");
    }
}
