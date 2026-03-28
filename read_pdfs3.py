import fitz
import os

pdf_files = [
    "assets/docs/Patents/US20170340594A1_P ceutical Comp for Treating Acne.pdf",
    "assets/docs/Patents/WO2017006290_Nicergoline PCT publication.pdf",
    "assets/docs/Patents/WO2020104955_Acotiamide+PPI.pdf"
]

for pdf in pdf_files:
    if not os.path.exists(pdf): continue
    print(f"--- {os.path.basename(pdf)} ---")
    try:
        doc = fitz.open(pdf)
        text = doc[0].get_text("text")
        print("LENGTH:", len(text))
        print(text[:1000])
        print("-" * 40)
    except Exception as e:
        print(f"Error {e}")
