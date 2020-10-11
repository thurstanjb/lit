<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $table = 'uploads';

    protected $fillable = [
        'filename', 'folder', 'storage_path', 'user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
