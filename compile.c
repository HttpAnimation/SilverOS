#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file;
    char *filename = "index.html";
    char c;

    // Open the file
    file = fopen(filename, "r");
    if (file == NULL) {
        fprintf(stderr, "Could not open file %s\n", filename);
        exit(1);
    }

    // Read and display contents character by character
    while ((c = fgetc(file)) != EOF) {
        printf("%c", c);
    }

    // Close the file
    fclose(file);

    return 0;
}
