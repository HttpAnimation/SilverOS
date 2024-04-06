#!/bin/bash

# Install dev dependencies
echo "Installing dev dependencies..."
npm install --save-dev @electron-forge/cli@^7.3.1 \
                          @electron-forge/maker-deb@^7.3.1 \
                          @electron-forge/maker-rpm@^7.3.1 \
                          @electron-forge/maker-squirrel@^7.3.1 \
                          @electron-forge/maker-zip@^7.3.1 \
                          @electron-forge/plugin-auto-unpack-natives@^7.3.1 \
                          @electron-forge/plugin-fuses@^7.3.1 \
                          electron@^29.1.6

# Install dependencies
echo "Installing dependencies..."
npm install --save electron-squirrel-startup@^1.0.0 \
                    express@^4.19.2 \
                    node-fetch@^3.3.2

echo "All dependencies installed successfully!"
