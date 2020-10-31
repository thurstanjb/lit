<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AscentRequest extends FormRequest
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
        return [
            'mountain_id' => 'required',
            'mountaineer_id' => 'required',
            'ascent_date' => 'required|date_format:Y-m-d'
        ];
    }
}
