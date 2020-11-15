<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class MountaineerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
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
                'name' => 'required|string|unique:mountaineers,name,' . request('id')
            ];
        }

        return [
            'name' => 'required|string|unique:mountaineers'
        ];
    }

    /**
     * Set the slug to the validated data response
     *
     * @return array
     * @throws ValidationException
     */
    public function validated(): array
    {
        $valid = $this->validator->validated();

        $valid['slug'] = Str::slug($valid['name'], '-');

        return $valid;
    }
}
