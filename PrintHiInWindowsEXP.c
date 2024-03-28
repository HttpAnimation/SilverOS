#include <stdio.h>
#include <windows.h>

int main() {
    // Use the GetLastError function to retrieve the error message
    DWORD errorMessageID = GetLastError();
    LPSTR messageBuffer;
    size_t size = FormatMessageA(FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS,
                                  NULL, errorMessageID, MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), (LPSTR)&messageBuffer, 0, NULL);
    
    // If there's an error message, print it
    if (size != 0) {
        printf("Error message: %s\n", messageBuffer);
    } else {
        printf("Failed to retrieve error message.\n");
    }

    // Free the message buffer
    LocalFree(messageBuffer);

    // Print "Hello :3"
    printf("Hello :3\n");

    return 0;
}
