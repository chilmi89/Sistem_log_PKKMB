import os
import win32com.client as win32
import pandas as pd
from datetime import datetime

# File input
file_name = "updataData6.xls"
folder_path = os.path.dirname(__file__)
file_path = os.path.join(folder_path, file_name)

# Folder output
output_folder = os.path.join(folder_path, "output")
os.makedirs(output_folder, exist_ok=True)

# Timestamp untuk nama unik
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
output_file_clean = os.path.join(output_folder, f"databersih_filtered_{timestamp}.xlsx")

# 1️⃣ Convert .xls ke .xlsx sementara
excel = win32.gencache.EnsureDispatch('Excel.Application')
wb = excel.Workbooks.Open(file_path)
temp_file = os.path.join(output_folder, f"temp_{timestamp}.xlsx")
wb.SaveAs(temp_file, FileFormat=51)  # FileFormat=51 → .xlsx
wb.Close()
excel.Quit()

# 2️⃣ Baca file .xlsx sementara dengan pandas
df = pd.read_excel(temp_file, engine="openpyxl")

# 3️⃣ Bersihkan kolom ke-7 (indeks 6) tapi hanya ambil baris dengan 0 atau NaN
col_index = 6  # kolom ke-7 (0-based)
if col_index < len(df.columns):
    col_name = df.columns[col_index]

    # Bersihkan kolom (spasi dan karakter khusus)
    df[col_name] = (
        df[col_name].astype(str)
        .str.strip()
        .str.replace(r"[^a-zA-Z0-9\s]", "", regex=True)
        .str.title()
    )

    # Ambil hanya baris yang bernilai '0', 0, atau NaN
    df = df[df[col_name].isna() | (df[col_name] == "0") | (df[col_name] == 0)]

# 4️⃣ Hapus file sementara
os.remove(temp_file)

# 5️⃣ Simpan hasil bersih langsung ke file final
df.to_excel(output_file_clean, index=False)
print("Data berhasil disaring (kolom ke-7 = 0 atau NaN) dan disimpan:", output_file_clean)
