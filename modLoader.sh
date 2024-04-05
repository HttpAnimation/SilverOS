#!/bin/bash

# Define the path to the mods folder
mods_folder="mods"

# Create a temporary file to store updated mods.json
temp_mods_json=$(mktemp)

# Start mods.json with an opening brace
echo "{" > "$temp_mods_json"

# Read each folder in the mods folder
for folder in "$mods_folder"/*/; do
    folder_name=$(basename "$folder")

    # Check if package.json exists in the current folder
    if [ -f "$folder/package.json" ]; then
        # Extract the path from package.json
        path=$(realpath "$folder/package.json")

        # Append to mods.json using folder name as the key
        echo "    \"$folder_name\": \"$path\"," >> "$temp_mods_json"
    fi
done

# Remove the trailing comma from the last entry in mods.json
sed -i '' -e '$ s/,$//' "$temp_mods_json"

# End mods.json with a closing brace
echo "}" >> "$temp_mods_json"

# Overwrite the existing mods.json with the updated content
mv "$temp_mods_json" mods.json

echo "Updated mods.json with new mods."
