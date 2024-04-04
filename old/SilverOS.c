#include <stdio.h>
#include <stdlib.h>
#include "webdriver.h" // Include the Selenium C language bindings

int main() {
    // Path to the GeckoDriver executable
    const char *geckodriver_path = "/path/to/geckodriver";

    // Initialize WebDriver with Firefox
    WebDriver driver = webdriver_create(geckodriver_path, WEBDRIVER_FIREFOX);

    // Open a website
    webdriver_get(driver, "https://www.example.com");

    // Get the title of the webpage
    const char *title = webdriver_get_title(driver);
    printf("Title: %s\n", title);

    // Close the browser
    webdriver_quit(driver);

    // Free resources
    webdriver_free(driver);

    return 0;
}
