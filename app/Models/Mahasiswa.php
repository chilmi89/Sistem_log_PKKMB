<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $table = 'mahasiswa';
    protected $fillable = ['nim', 'nama_mahasiswa', 'prodi_id','wa'];

    public function prodi()
    {
        return $this->belongsTo(Prodi::class, 'prodi_id');
    }


    public function absensi()
    {
        return $this->hasMany(Absensi::class, 'mahasiswa_id');
    }
}
