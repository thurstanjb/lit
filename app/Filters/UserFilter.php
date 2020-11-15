<?php


namespace App\Filters;


class UserFilter extends Filters
{
    protected $filters = ['name', 'email', 'role'];

    /**
     * Filter users based on the $name
     *
     * @param $name
     * @return mixed
     */
    public function name($name){
        return $this->builder->where('name', 'LIKE', "%$name%");
    }

    /**
     * Filter users based on the $email
     *
     * @param $email
     * @return mixed
     */
    public function email($email){
        return $this->builder->where('email', 'LIKE', "%$email%");
    }

    /**
     * Filter users based on the $role
     *
     * @param $role
     * @return mixed
     */
    public function role($role){
        return $this->builder->where('role', 'LIKE', "%$role%");
    }
}
