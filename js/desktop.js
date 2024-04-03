// Function to fetch and load apps from the configuration file
async function loadApps() {
  try {
    const response = await fetch('apps.json');
    const apps = await response.json();

    const dock = document.getElementById('dock');
    for (const app of apps) {
      const appIcon = document.createElement('div');
      appIcon.classList.add('app-icon');
      appIcon.onclick = () => openApp(app);
      const iconImg = document.createElement('img');
      iconImg.src = app.icon;
      iconImg.alt = app.name;
      appIcon.appendChild(iconImg);
      dock.appendChild(appIcon);
    }
  } catch (error) {
    console.error('Error loading apps:', error);
  }
}

// Function to open an app
function openApp(app) {
  const iframeContainer = document.getElementById('iframeContainer');
  const draggableIframe = document.createElement('div');
  draggableIframe.classList.add('draggableIframe');
  draggableIframe.style.left = '50px'; // Adjust initial position
  draggableIframe.style.top = '50px'; // Adjust initial position

  const iframeContent = document.createElement('iframe');
  iframeContent.src = app.html;
  iframeContent.width = '100%';
  iframeContent.height = '100%';
  iframeContent.frameBorder = '0';

  const topBar = document.createElement('div');
  topBar.classList.add('iframe-top-bar');

  const closeButton = document.createElement('img');
  closeButton.classList.add('close-button');
  closeButton.src = 'photos/Close.png'; // Close button image
  closeButton.alt = 'Close';
  closeButton.onclick = () => iframeContainer.removeChild(draggableIframe);

  topBar.appendChild(closeButton);
  draggableIframe.appendChild(topBar);
  draggableIframe.appendChild(iframeContent);
  iframeContainer.appendChild(draggableIframe);

  draggableIframe.onmousedown = function(e) {
    const offsetX = e.clientX - draggableIframe.offsetLeft;
    const offsetY = e.clientY - draggableIframe.offsetTop;

    function dragMouseMove(e) {
      e.preventDefault();
      const posX = e.clientX - offsetX;
      const posY = e.clientY - offsetY;
      draggableIframe.style.left = posX + 'px';
      draggableIframe.style.top = posY + 'px';
    }

    function closeDragElement() {
      document.removeEventListener('mousemove', dragMouseMove);
      document.removeEventListener('mouseup', closeDragElement);
    }

    document.addEventListener('mousemove', dragMouseMove);
    document.addEventListener('mouseup', closeDragElement);
  };
}

// Load apps when the page is loaded
loadApps();
