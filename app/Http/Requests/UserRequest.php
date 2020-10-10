<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->role == 'admin';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if(request('id')){
            return[
                'name' => 'required',
                'email' => 'required|email|unique:users,email,' . request('id'),
                'password' => 'sometimes|string|min:8|confirmed',
                'role' => 'string'
            ];
        }

        return [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'string'
        ];
    }

    public function validated(){
        $valid = $this->validator->validated();

        //Prevent auth user from locking themselves out.
        if(request('id') && auth()->id() === request('id')){
            unset($valid['role']);
        }

        //Only update password, if has been set.
        if(!empty($valid['password'])){
            $valid['password'] = Hash::make($valid['password']);
        }

        return $valid;
    }

}
