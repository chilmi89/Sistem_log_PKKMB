<?php

namespace App\Imports;

use App\Models\Mahasiswa;
use App\Models\Prodi;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MahasiswaImport implements ToModel
{
    public function model(array $row)
    {
        // Ambil atau buat prodi
        $prodi = Prodi::firstOrCreate(
            ['nama_prodi' => $row[2]],
            ['fakultas_id' => 1] // default fakultas
        );

        return new Mahasiswa([
            'nim' => $row[0], // <-- sekarang ini NPM dari Excel
            'nama_mahasiswa' => $row[1],
            'prodi_id' => $prodi->id,
            'wa' => $row[3],
        ]);
    }
}
