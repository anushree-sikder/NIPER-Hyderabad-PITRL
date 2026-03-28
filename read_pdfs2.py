import fitz
import glob
import os

pdf_files = [
    "assets/docs/Patents/US20170340594A1_P ceutical Comp for Treating Acne.pdf",
    "assets/docs/Patents/WO2017006290_Nicergoline PCT publication.pdf",
    "assets/docs/Patents/WO2020104955_Acotiamide+PPI.pdf",
    "assets/docs/Patents/WO2008026044A2_Bupropion Recent.pdf"
]

for pdf in pdf_files:
    if not os.path.exists(pdf): continue
    print(f"--- {os.path.basename(pdf)} ---")
    try:
        doc = fitz.open(pdf)
        # Try both page 0 and 1
        for i in range(min(2, len(doc))):
            text = doc[i].get_text("text")
            # Look for lines containing "Inventor"
            lines = text.split("\n")
            for j, line in enumerate(lines):
                if "Inventor" in line or "JAIN" in line or "Wockhardt" in line:
                    print(f"Page {i}: {line}")
                    # Print next 5 lines
                    print("Context:")
                    print("\n".join(lines[max(0, j-2):j+5]))
                    print("-" * 20)
    except Exception as e:
        print(f"Error {e}")
