import json
import subprocess
import sys

def get_pip_command():
    if 'win' in sys.platform:
        print("Running on Windows system.")
        return 'pip'
    print("Running on Unix-like system.")
    return 'pip3'

def install_packages(packages):
    pip_command = get_pip_command()
    for package_data in packages:
        for package_name, install_command in package_data.items():
            print(f"Installing {package_name}...")
            try:
                subprocess.run([pip_command, 'install', package_name], check=True)
                print(f"{package_name} installed successfully.")
            except subprocess.CalledProcessError:
                print(f"Failed to install {package_name}.")

def main():
    try:
        with open('packages.json', 'r') as file:
            packages = json.load(file)
            install_packages(packages)
    except FileNotFoundError:
        print("packages.json not found.")
    except json.JSONDecodeError:
        print("Error decoding packages.json.")

if __name__ == "__main__":
    main()
