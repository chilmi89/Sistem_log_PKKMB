import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function ImportMahasiswa() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    // Ambil CSRF token dengan aman
    const meta = document.querySelector('meta[name="csrf-token"]');
    const csrfToken = meta ? meta.getAttribute('content') : null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return Swal.fire("Pilih file terlebih dahulu!");
        if (!csrfToken) return Swal.fire("CSRF token tidak ditemukan!");

        setLoading(true);
        setProgress(0);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("/admin/import-mahasiswa", formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percent);
                },
            });

            Swal.fire("Berhasil!", res.data.message, "success");
            setFile(null); // reset input file
        } catch (err) {
            console.log(err.response);
            Swal.fire(
                "Gagal!",
                err.response?.data?.message || "Terjadi kesalahan saat import.",
                "error"
            );
        } finally {
            setLoading(false);
            setTimeout(() => setProgress(0), 1000);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4 text-center">
                Import Data Mahasiswa
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept=".xlsx,.csv"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full border p-2 rounded mb-4"
                />
                <button
                    type="submit"
                    className={`w-full p-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                >
                    {loading ? "Mengunggah..." : "Import Excel"}
                </button>

                {loading && (
                    <div className="w-full bg-gray-200 rounded mt-4 h-3">
                        <div
                            className="bg-green-500 h-3 rounded"
                            style={{ width: `${progress}%`, transition: "width 0.3s" }}
                        ></div>
                    </div>
                )}
            </form>
        </div>
    );
}
