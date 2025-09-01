import pandas as pd
import os
import re
import glob

# Folder tempat file Excel berada
data_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)),)

# Cari semua file Excel di folder
excel_files = glob.glob(os.path.join(data_folder, "*.xls")) + \
              glob.glob(os.path.join(data_folder, "*.xlsx"))

# Pilih file 'updataData4.xlsx' atau .xls
file_path = None
for f in excel_files:
    if "updataData4" in os.path.basename(f):
        file_path = f
        break

if not file_path:
    print(f"File 'updataData4' tidak ditemukan di folder '{data_folder}'")
    exit()

print(f"File dipilih: {file_path}")

# Fungsi untuk membersihkan kolom
def clean_column(value):
    if pd.isna(value):
        return value
    value = str(value).strip()                 # hapus spasi di awal/akhir
    value = re.sub(r"[^a-zA-Z0-9\s]", "", value)  # hapus karakter khusus
    value = re.sub(r"\s+", " ", value)        # ganti spasi lebih dari 1 menjadi 1
    value = value.title()                      # huruf kapital di awal kata
    return value

# Baca file Excel
try:
    if file_path.endswith('.xls'):
        df = pd.read_excel(file_path, engine='xlrd')  # pastikan xlrd==1.2.0
    else:
        df = pd.read_excel(file_path, engine='openpyxl')
except Exception as e:
    print(f"Error saat membaca file: {e}")
    exit()

# Tentukan kolom yang ingin dibersihkan
columns_to_clean = ["Nama Mahasiswa", "Prodi", "WA"]  # ganti sesuai kolom di file Anda
for col in columns_to_clean:
    if col in df.columns:
        df[col] = df[col].apply(clean_column)

# Hapus duplikat jika ada
df = df.drop_duplicates()

# Simpan hasil ke file baru
output_path = os.path.join(data_folder, "updataData4_cleaned.xlsx")
df.to_excel(output_path, index=False)
print(f"Data berhasil dibersihkan dan disimpan di '{output_path}'")
