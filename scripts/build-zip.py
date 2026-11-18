import os
import zipfile
import shutil

def create_linux_zip():
    source_dir = 'out'
    output_zip = 'snowwhite-hostinger-seo.zip'
    fallback_zip = 'out.zip'

    if not os.path.exists(source_dir):
        print(f"Error: '{source_dir}' directory does not exist. Run 'npm run build' first.")
        return

    print(f"Packaging '{source_dir}' into '{output_zip}' with POSIX forward slashes...")
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, source_dir)
                # POSIX forward slashes are required for Linux / Hostinger extraction
                posix_path = rel_path.replace('\\', '/')
                zipf.write(full_path, posix_path)

    shutil.copyfile(output_zip, fallback_zip)
    print(f"Successfully generated '{output_zip}' and '{fallback_zip}'.")

if __name__ == '__main__':
    create_linux_zip()
