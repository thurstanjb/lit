<?php

namespace App\Http\Controllers;

use App\Imports\AscentLogImport;
use Illuminate\Http\Request;

class ImportController extends Controller
{
    public function testImport(){
        $collection = (new AscentLogImport)->toCollection('mountains/wwrght18e.xls', 'public');
        dd(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject(32380));
        dd($collection);
    }
}
