import fitz
import glob
import os

pdf_dir = "assets/docs/Patents"
pdfs = glob.glob(os.path.join(pdf_dir, "*.pdf"))

for pdf in pdfs:
    print(f"--- {os.path.basename(pdf)} ---")
    try:
        doc = fitz.open(pdf)
        page = doc[0]
        text = page.get_text()
        print(text[:1500])  # Print first 1500 chars to find "Inventors:"
        print("\n\n")
    except Exception as e:
        print(f"Error reading {pdf}: {e}")
