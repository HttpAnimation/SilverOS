#!/bin/bash

# Define the path to the mods folder
mods_folder="mods"

# Read each folder in the mods folder
for folder in "$mods_folder"/*/; do
    folder_name=$(basename "$folder")

    # Check if package.json exists in the current folder
    if [ -f "$folder/package.json" ]; then
        # Extract the name and path from package.json
        name=$(jq -r '.name' "$folder/package.json")
        path=$(realpath "$folder/package.json")

        # Append to apps.json
        echo "\"$name\": \"$path\"," >> apps.json
    fi
done

# Remove the trailing comma from the last entry in apps.json
sed -i '$ s/,$//' apps.json

echo "Updated apps.json with new apps."
