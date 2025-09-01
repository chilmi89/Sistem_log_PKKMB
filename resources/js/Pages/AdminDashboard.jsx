import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import ImportMahasiswa from '@/Components/ImportMahasiswa';
import MasterLayout from '@/Layouts/MasterLayout';

export default function AdminDashboard() {
    // Ambil data mahasiswa dari props Inertia
    const { mahasiswa: initialMahasiswa } = usePage().props;
    const [mahasiswa, setMahasiswa] = useState(initialMahasiswa || []);

    // Fungsi untuk refresh data mahasiswa setelah import
    const refreshMahasiswa = async () => {
        try {
            const res = await fetch('/api/mahasiswa');
            const data = await res.json();
            setMahasiswa(data);
        } catch (err) {
            console.error('Gagal memuat data mahasiswa:', err);
        }
    };

    return (
        <MasterLayout>
            <h1 className="text-2xl font-bold mb-4 text-gray-900">
                Admin Dashboard
            </h1>

            {/* Komponen import dengan callback untuk refresh tabel */}
            <ImportMahasiswa onSuccess={refreshMahasiswa} />

            <div className="overflow-x-auto">
                <table className="table-auto w-full border">
                    <thead>
                        <tr className="bg-green-500 text-white">
                            <th className="border px-4 py-2">NIM</th>
                            <th className="border px-4 py-2">Nama</th>
                            <th className="border px-4 py-2">Prodi</th>
                            <th className="border px-4 py-2">WA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.length > 0 ? (
                            mahasiswa.map((m) => (
                                <tr key={m.id}>
                                    <td className="border px-4 py-2">{m.nim}</td>
                                    <td className="border px-4 py-2">{m.nama_mahasiswa}</td>
                                    <td className="border px-4 py-2">{m.prodi?.nama_prodi}</td>
                                    <td className="border px-4 py-2">{m.wa}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="border px-4 py-2 text-center" colSpan={4}>
                                    Data mahasiswa kosong
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </MasterLayout>
    );
}
