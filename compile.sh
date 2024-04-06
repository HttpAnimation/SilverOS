npm run make

#!/bin/bash

# Define variables
APP_NAME="silveros.app"
APP_PATH="out/silveros-darwin-x64/$APP_NAME"
DMG_NAME="SilverOS"
DMG_TEMP_MOUNT="/Volumes/$DMG_NAME"
DMG_FINAL_NAME="SilverOS.dmg"

# Check if the app file exists
if [ ! -e "$APP_PATH" ]; then
    echo "Error: $APP_NAME not found."
    exit 1
fi

# Create a temporary directory for mounting the DMG
TEMP_DIR=$(mktemp -d)

# Create a new disk image
hdiutil create -srcfolder "$APP_PATH" -volname "$DMG_NAME" -format UDRW -fs HFS+ -fsargs "-c c=64,a=16,e=16" "$TEMP_DIR/tmp.dmg"

# Mount the disk image
hdiutil attach "$TEMP_DIR/tmp.dmg" -mountpoint "$DMG_TEMP_MOUNT"

# Create a symbolic link to the Applications directory
ln -s /Applications "$DMG_TEMP_MOUNT"

# Unmount the disk image
hdiutil detach "$DMG_TEMP_MOUNT"

# Convert the disk image to compressed format
hdiutil convert "$TEMP_DIR/tmp.dmg" -format UDZO -imagekey zlib-level=9 -o "$TEMP_DIR/$DMG_FINAL_NAME"

# Clean up temporary files
rm -rf "$TEMP_DIR"

echo "DMG file created: $DMG_FINAL_NAME"
