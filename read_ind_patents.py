import fitz
import glob
import os

pdf_files = glob.glob("assets/docs/Patents/*.pdf")

for pdf in pdf_files:
    if "WO" in pdf or "US" in pdf or "Acotiamide" in pdf or "Acne" in pdf or "Nicergoline" in pdf:
        continue
    print(f"--- {os.path.basename(pdf)} ---")
    try:
        doc = fitz.open(pdf)
        text = doc[0].get_text("text")
        # Look for "Inventor", "Inventor(s)", "Name of Inventor(s)"
        for line in text.split("\n"):
            if "Inventor" in line or "Name" in line or "1." in line:
                print(line)
        print("-" * 40)
    except Exception as e:
        print(f"Error {e}")
