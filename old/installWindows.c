// Don't run me from VSC will break
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_PATH_LENGTH 256

// Function to check if a directory exists
bool directoryExists(const char *path) {
    DWORD fileAttributes = GetFileAttributesA(path);
    if (fileAttributes != INVALID_FILE_ATTRIBUTES && (fileAttributes & FILE_ATTRIBUTE_DIRECTORY)) {
        return true;
    }
    return false;
}

// Function to execute a command
void executeCommand(const char *command) {
    system(command);
}

int main() {
    // Get user's home directory
    char homeDir[MAX_PATH_LENGTH];
    if (SUCCEEDED(SHGetFolderPathA(NULL, CSIDL_PROFILE, NULL, 0, homeDir))) {
        printf("Home directory: %s\n", homeDir);
    } else {
        fprintf(stderr, "Error: Failed to retrieve home directory.\n");
        return 1;
    }

    // Change directory to Desktop
    char desktopDir[MAX_PATH_LENGTH];
    snprintf(desktopDir, MAX_PATH_LENGTH, "%s\\Desktop", homeDir);
    if (!directoryExists(desktopDir)) {
        fprintf(stderr, "Error: Desktop directory not found.\n");
        return 1;
    }
    if (SetCurrentDirectoryA(desktopDir)) {
        printf("Changed directory to Desktop.\n");
    } else {
        fprintf(stderr, "Error: Failed to change directory to Desktop.\n");
        return 1;
    }

    // Check if git is installed
    if (system("git --version")) {
        fprintf(stderr, "Error: Git is not installed or not in PATH.\n");
        return 1;
    }

    // Check if npm is installed
    if (system("npm -v")) {
        fprintf(stderr, "Error: Node.js and npm are not installed or not in PATH.\n");
        return 1;
    }

    // Clone the repository
    executeCommand("git clone -b main https://github.com/HttpAnimation/SilverOS.git");

    // Change directory to SilverOS
    if (SetCurrentDirectoryA("SilverOS")) {
        printf("Changed directory to SilverOS.\n");
    } else {
        fprintf(stderr, "Error: Failed to change directory to SilverOS.\n");
        return 1;
    }

    // Remove unwanted files
    executeCommand("del /Q geckodriver displayFlask.py flaskReq.json installPackages installPackages.c installPackages.py packages.json systeminfo.conf web_view.c compile.sh display.py");
    
    // Execute additional commands
    executeCommand("npm install electron --save-dev");
    
    // Output completion message
    printf("Done.\n");

    return 0;
}
