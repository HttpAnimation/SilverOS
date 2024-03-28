#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 256

int main() {
    // Open the JSON file
    FILE *fp = fopen("packages.json", "r");
    if (fp == NULL) {
        printf("Error opening file.\n");
        return 1;
    }

    // Read contents of the JSON file
    char buffer[BUFFER_SIZE];
    fread(buffer, sizeof(char), BUFFER_SIZE, fp);
    fclose(fp);

    // Parse JSON contents
    char *token;
    token = strtok(buffer, "{\":,}\n\r\t");
    while (token != NULL) {
        // Check if token is a package name
        if (strstr(token, " ") == NULL && strstr(token, "pip") == NULL) {
            char command[BUFFER_SIZE];
            // Check if pip3 is available
            sprintf(command, "pip3 install %s", token);
            if (system(command) != 0) {
                // Fall back to pip if pip3 is not available
                sprintf(command, "pip install %s", token);
                system(command);
            }
        }
        token = strtok(NULL, "{\":,}\n\r\t");
    }

    return 0;
}
