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
    private $row = null;

    public function __construct($namerow = 16, $datarow = 21)
    {
        $this->namerow = $namerow;
        $this->datarow = $datarow;
    }


    /**
     * Iterate over the rows retrieved from the document
     *
     * @param Collection $rows
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row_index => $row) {
            $this->row = $row;
            if ($row_index == $this->namerow) {
                $this->setMountaineer();
            }
            if ($row_index >= $this->datarow) {
                if ($row[0]) {
                    $this->setMountain()
                        ->logAscents();
                }
            }
        }
    }

    /**
     * See if we have the mountaineer. If not, create
     */
    protected function setMountaineer(): void
    {
        $this->mountaineer = Mountaineer::firstOrCreate([
            'name' => $this->row[0],
            'slug' => Str::slug($this->row[0], '-')
        ]);
    }

    /**
     * See if we have the mountain. If not, create.
     * Return fluently
     *
     * @return AscentLogImport
     */
    protected function setMountain(): self
    {
        $this->mountain = Mountain::firstOrCreate([
            'name' => $this->row[0],
            'height' => $this->row[1],
            'book' => Str::slug($this->row[2], '-'),
            'slug' => Str::slug($this->row[0] . ' ' . $this->row[2], '-')
        ]);

        return $this;
    }

    /**
     * Iterate over the dated cells and setup new ascents accordingly.
     *
     * @param int $start_col_index
     */
    protected function logAscents($start_col_index = 5): void
    {
        foreach ($this->row as $cell_index => $cell) {
            if ($cell_index >= $start_col_index && $cell) {

                Ascent::firstOrCreate([
                    'mountain_id' => $this->mountain->id,
                    'mountaineer_id' => $this->mountaineer->id,
                    'ascent_date' => $this->validateDate($cell)->format('Y-m-d H:i:s')
                ]);
            }
        }
    }

    /**
     * Validate a legitimate date.  Due to an exel bug in the 2000's some dates set as ie: 01
     * are being interpreted as 1901 instead of 2001.  Check for this issue and update
     * when required. No date should be pre 1980.
     *
     * @param $date
     * @return DateTime
     */
    protected function validateDate($date): DateTime
    {
        $date = ExcelDate::excelToDateTimeObject($date);

        if ($date < date_create('1980-01-01')) {
            date_add($date, date_interval_create_from_date_string('100 years'));
        }

        return $date;
    }
}
