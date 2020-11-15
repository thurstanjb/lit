<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class UploadFileRequest extends FormRequest
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
            'filename' => 'required|string|max:255',
            'folder' => 'required|string|max:100',
            'file' => 'required|file'
        ];
    }

    /**
     * Set the user_id and cleaned up filename to the validated data response
     *
     * @return array
     * @throws ValidationException
     */
    public function validated(): array
    {
        $valid = $this->validator->validated();
        $valid['user_id'] = auth()->id();
        $valid['filename'] = preg_replace("/[^a-z0-9\.]/", "", strtolower($valid['filename']));

        return $valid;
    }
}
