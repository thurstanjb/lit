<?php

namespace App\Imports;

use App\Ascent;
use App\Http\Requests\MountaineerRequest;
use App\Mountain;
use App\Mountaineer;
use DateTime;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithMappedCells;
use PhpOffice\PhpSpreadsheet\Shared\Date as ExcelDate;

class AscentLogImport implements ToCollection
{
    use Importable;

    private $namerow;
    private $datarow;
    private $mountaineer = null;
    private $mountain = null;

    public function __construct($namerow = 16, $datarow = 21)
    {
        ini_set('max_execution_time', 60);
        $this->namerow = $namerow;
        $this->datarow = $datarow;
    }


    /**
     * @param Collection $collection
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row_index => $row) {
            if ($row_index == $this->namerow) {
                $this->setMountaineer($row);
            }
            if ($row_index >= $this->datarow) {
                if($row[0]){
                    $this->setMountain($row);
                    $this->logAscents($row);
                }
            }
        }
    }

    /**
     * @param $row
     */
    protected function setMountaineer($row): void
    {
        $this->mountaineer = Mountaineer::firstOrCreate([
            'name' => $row[0],
            'slug' => Str::slug($row[0], '-')
        ]);
    }

    /**
     * @param $row
     */
    protected function setMountain($row): void
    {
        $this->mountain = Mountain::firstOrCreate([
            'name' => $row[0],
            'height' => $row[1],
            'book' => Str::slug($row[2], '-'),
            'slug' => Str::slug($row[0] . ' ' . $row[2], '-')
        ]);
    }

    /**
     * @param $row
     * @param int $start_col_index
     */
    protected function logAscents($row, $start_col_index = 5): void
    {
        foreach ($row as $cell_index => $cell) {
            if ($cell_index >= $start_col_index) {
                if($cell){
                    $date = ExcelDate::excelToDateTimeObject($row[$cell_index]);
                    $epoch = date_create('1980-01-01');
                    if($date < $epoch){
                        date_add($date, date_interval_create_from_date_string('100 years'));
                    }
//                dd($date);
                    Ascent::firstOrCreate([
                        'mountain_id' => $this->mountain->id,
                        'mountaineer_id' => $this->mountaineer->id,
                        'ascent_date' => $date->format('Y-m-d H:i:s')
                    ]);
                }
            }
        }
    }
}
