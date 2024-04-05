#!/bin/bash

# Define the path to the mods folder
mods_folder="mods"

# Start apps.json with an opening brace
echo "{" > apps.json

# Read each folder in the mods folder
for folder in "$mods_folder"/*/; do
    folder_name=$(basename "$folder")

    # Check if package.json exists in the current folder
    if [ -f "$folder/package.json" ]; then
        # Extract the path from package.json
        path=$(realpath "$folder/package.json")

        # Append to apps.json using folder name as the key
        echo "    \"$folder_name\": \"$path\"," >> apps.json
    fi
done

# Remove the trailing comma from the last entry in apps.json
sed -i '' -e '$ s/,$//' apps.json

# End apps.json with a closing brace
echo "}" >> apps.json

echo "Updated apps.json with new apps."
