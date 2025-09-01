<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Imports\MahasiswaImport;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class MahasiswaController extends Controller
{
    // API untuk mengambil data mahasiswa (untuk React)
    public function index()
    {
        // Mengambil semua mahasiswa beserta relasi prodi
        // Ambil semua mahasiswa beserta relasi prodi
        $mahasiswa = Mahasiswa::with('prodi')->get();

        dd($mahasiswa);

        // Kirim data ke React via Inertia
        return Inertia::render('AdminDashboard', [
            'mahasiswa' => $mahasiswa
        ]);
    }

    // API untuk React fetch data mahasiswa

    // MahasiswaController.php
    public function apiIndex()
    {
        $mahasiswa = Mahasiswa::with('prodi')->get();
        return response()->json($mahasiswa);
    }

    // Import Excel / CSV
    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,csv'
        ]);

        try {
            Excel::import(new MahasiswaImport, $request->file('file'));

            // Kembalikan JSON untuk React
            return response()->json([
                'message' => 'Data Mahasiswa berhasil diimport.'
            ]);
        } catch (\Exception $e) {
            // Tangani error
            return response()->json([
                'message' => 'Terjadi kesalahan saat import: ' . $e->getMessage()
            ], 500);
        }
    }
}
