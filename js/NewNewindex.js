<script>
// Function to read config file
function readConfig() {
    return fetch('config.json')
        .then(response => response.json())
        .then(data => data[0].DesktopIconSize || '100px') // Default size if not specified
        .catch(error => {
            console.error('Error reading config file:', error);
            return '100px'; // Default size if config file cannot be read
        });
}

// Function to create app icon for desktop with specified size
function createAppIcon(appName, appDetails, parentElement, iconSize) {
    const appIcon = document.createElement('div');
    appIcon.className = 'app-icon';
    appIcon.style.width = iconSize;
    appIcon.style.height = iconSize;
    const img = document.createElement('img');
    img.src = appDetails.Photo;
    img.alt = appName;
    appIcon.appendChild(img);
    appIcon.addEventListener('click', () => openAppWindow(appName, appDetails));
    parentElement.appendChild(appIcon);
}

// Function to create app icon for dock
function createDockIcon(appName, appDetails, parentElement) {
    const dockIcon = document.createElement('div');
    dockIcon.className = 'dock-icon';
    const img = document.createElement('img');
    img.src = appDetails.Photo;
    img.alt = appName;
    dockIcon.appendChild(img);
    dockIcon.addEventListener('click', () => openAppWindow(appName, appDetails));
    parentElement.appendChild(dockIcon);
}

// Function to open app window or navigate to the specified HTML script
function openApp(appName, appDetails) {
    if (appDetails.NewTab) {
        // Change the tab without opening a new one
        navigateToHTMLScript(appDetails.MainEXE);
    } else {
        // Open in the current tab
        window.open(appDetails.MainEXE, '_blank');
    }
}


// Function to navigate to the specified HTML script
function navigateToHTMLScript(htmlScript) {
    window.location.href = htmlScript;
}

// Function to open app window with specified size or fallback size
function openAppWindow(appName, appDetails) {
    if (appDetails.NewTab) {
        openApp(appName, appDetails);
        return;
    }
    
    const windowElement = document.createElement('div');
    windowElement.className = 'window';
    windowElement.style.top = '50px';
    windowElement.style.left = '50px';
    windowElement.style.width = appDetails.Width || '800px'; // Default width if not specified
    windowElement.style.height = appDetails.Height || '480px'; // Default height if not specified

    const windowHeader = document.createElement('div');
    windowHeader.className = 'window-header';
    
    const windowTitle = document.createElement('div');
    windowTitle.className = 'window-title';
    windowTitle.textContent = appDetails.Name;
    windowHeader.appendChild(windowTitle);

    const closeButton = createCloseButton(windowElement); // Create close button
    windowHeader.appendChild(closeButton);
    
    windowElement.appendChild(windowHeader);

    const windowContent = document.createElement('div');
    windowContent.className = 'window-content';

    const iframe = document.createElement('iframe');
    iframe.src = appDetails.MainEXE;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none'; // Remove iframe border
    windowContent.appendChild(iframe);
    
    windowElement.appendChild(windowContent);

    // Make window draggable
    let isDragging = false;
    let offsetX, offsetY;
    windowHeader.addEventListener('mousedown', e => {
        isDragging = true;
        offsetX = e.clientX - windowElement.getBoundingClientRect().left;
        offsetY = e.clientY - windowElement.getBoundingClientRect().top;
    });
    window.addEventListener('mousemove', e => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            windowElement.style.left = x + 'px';
            windowElement.style.top = y + 'px';
        }
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.body.appendChild(windowElement);
}

// Function to create close button
function createCloseButton(parentElement) {
    const closeButton = document.createElement('img');
    closeButton.src = 'Projectphotos/close.png';
    closeButton.alt = 'Close';
    closeButton.className = 'close-button'; // Assigning the close-button class
    closeButton.addEventListener('click', () => {
        document.body.removeChild(parentElement); // Remove the window when close button is clicked
    });
    return closeButton;
}

// Function to read package.json file for app details
function fetchAppDetails(appPath) {
    return fetch(appPath)
        .then(response => response.json())
        .then(appDetails => appDetails)
        .catch(error => {
            console.error('Error fetching app details:', error);
            return {}; // Return empty object if there's an error
        });
}

// Read config file to get desktop icon size
readConfig().then(iconSize => {
    // Read apps.json file to fetch app details for desktop icons
    fetch('apps.json')
        .then(response => response.json())
        .then(data => {
            const desktop = document.getElementById('desktop');
            // Iterate over each app
            for (const [appName, appPath] of Object.entries(data)) {
                fetchAppDetails(appPath)
                    .then(appDetails => {
                        createAppIcon(appName, appDetails, desktop, iconSize);
                    });
            }
        })
        .catch(error => console.error('Error fetching apps.json:', error));
});

// Read mods.json file to fetch additional app details for desktop icons
fetch('mods.json')
    .then(response => response.json())
    .then(data => {
        const desktop = document.getElementById('desktop');
        // Iterate over each app
        for (const [appName, appPath] of Object.entries(data)) {
            fetchAppDetails(appPath)
                .then(appDetails => {
                    readConfig().then(iconSize => {
                        createAppIcon(appName, appDetails, desktop, iconSize);
                    });
                });
        }
    })
    .catch(error => console.error('Error fetching mods.json:', error));
// Read dockApps.json file to fetch app details for dock icons
fetch('dockApps.json')
    .then(response => response.json())
    .then(data => {
        const dock = document.getElementById('dock');
        // Iterate over each app
        for (const [appName, appPath] of Object.entries(data)) {
            fetchAppDetails(appPath)
                .then(appDetails => {
                    createDockIcon(appName, appDetails, dock);
                });
        }
    })
    .catch(error => console.error('Error fetching dockApps.json:', error));

// Toggle dropdown menu visibility
document.getElementById('title').addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('show');
});

// Close dropdown menu if user clicks outside of it
window.addEventListener('click', event => {
    const dropdown = document.getElementById('dropdown-menu');
    if (!event.target.matches('#title')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});
</script>
