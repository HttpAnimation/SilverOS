from selenium import webdriver
from selenium.webdriver.firefox.options import Options

# Path to the GeckoDriver executable
geckodriver_path = 'geckodriver'

# Path to the local HTML file
html_file_path = 'index.html'

# Configure Firefox options
options = Options()
options.binary_location = '/path/to/firefox'  # Path to Firefox binary if not in PATH

# Create a new instance of the Firefox driver
driver = webdriver.Firefox(options=options, executable_path=geckodriver_path)

# Open the local HTML file
driver.get('file://' + html_file_path)

# Wait for a while to let the page load
driver.implicitly_wait(10)  # Adjust the wait time as needed

# Close the browser
driver.quit()
