<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $table = 'uploads';

    protected $fillable = [
        'filename', 'folder', 'storage_path', 'user_id'
    ];

    public $casts = [
        'created_at' => 'date:d/m/Y'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
