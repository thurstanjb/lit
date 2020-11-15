<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class MountainRequest extends FormRequest
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
        if (request('id')) {
            return [
                'name' => 'required|string|unique:mountains,name,' . request('id') . ',id,book,' . request('book'),
                'height' => 'required|digits_between:2,4',
                'book' => 'required|string'
            ];
        }
        return [
            'name' => 'required|string|unique:mountains,name,NULL,id,book,' . request('book'),
            'height' => 'required|digits_between:2,4',
            'book' => 'required|string'
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

        $valid['slug'] = Str::slug($valid['name'] . ' ' . $valid['book'], '-');

        return $valid;
    }
}
