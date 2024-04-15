#!/bin/bash

echo "SilverOS"
echo "Github: https://github.com/HttpAnimation/SilverOS/"
echo "========================"

echo "What would you like to compile to:"
echo "1. macOS Intel"
echo "2. Linux deb"
echo "3. Linux RPM"
echo "4. NT 64"
echo "5. All"

read -p "Enter your choice: " choice

case $choice in
    1)
        platform="darwin"
        ;;
    2)
        platform="linux"
        ;;
    3)
        platform="linux"
        ;;
    4)
        platform="win32"
        ;;
    5)
        platform="all"
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo "Compiling SilverOS for $platform..."

# Run Electron Forge with the specified platform
npm run make -- --platform=$platform
