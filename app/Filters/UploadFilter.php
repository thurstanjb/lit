<?php


namespace App\Filters;


class UploadFilter extends Filters
{
    protected $filters = ['filename', 'folder'];

    /**
     * Filter uploads based on the $filename
     *
     * @param $filename
     * @return mixed
     */
    public function filename($filename){
        return $this->builder->where('filename', 'LIKE', "%$filename%");
    }

    /**
     * Filter uploads based on the $folder
     *
     * @param $folder
     * @return mixed
     */
    public function folder($folder){
        return $this->builder->where('folder', 'LIKE', "%$folder%");
    }
}
