import os
import win32com.client

xls_file = r"C:\laragon\www\PKKMB_UNP\python\DataBelumQR.xls"
xlsx_file = r"C:\laragon\www\PKKMB_UNP\python\output\DataBelumQR.xlsx"

# buat folder output jika belum ada
os.makedirs(os.path.dirname(xlsx_file), exist_ok=True)

excel = win32com.client.Dispatch("Excel.Application")
excel.Visible = False

wb = excel.Workbooks.Open(xls_file)
wb.SaveAs(xlsx_file, FileFormat=51)  # FileFormat=51 -> xlsx
wb.Close()
excel.Quit()

print("✅ Berhasil convert .xls ke .xlsx:", xlsx_file)
