<?php


namespace App\Filters;


class UploadFilter extends Filters
{
    protected $filters = ['filename', 'folder'];

    public function filename($filename){
        return $this->builder->where('filename', 'LIKE', "%$filename%");
    }

    public function folder($folder){
        return $this->builder->where('folder', 'LIKE', "%$folder%");
    }
}
