// Get the draggable iframe element
var draggableIframe = document.getElementById("draggableIframe");
var topBar = draggableIframe.querySelector('.iframe-top-bar');

// Initialize variables for mouse position
var offsetX, offsetY;

// Function to handle mouse down event
function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  
  // Check if the click is on the close button
  if (e.target.classList.contains('close-button')) {
    return;
  }

  // Get initial mouse position
  offsetX = e.clientX - draggableIframe.offsetLeft;
  offsetY = e.clientY - draggableIframe.offsetTop;

  // Call function when mouse moves or is released
  document.onmousemove = dragMouseMove;
  document.onmouseup = closeDragElement;
}

// Function to handle mouse move event
function dragMouseMove(e) {
  e = e || window.event;
  e.preventDefault();
  
  // Calculate new position of the draggable iframe
  var posX = e.clientX - offsetX;
  var posY = e.clientY - offsetY;

  // Set new position
  draggableIframe.style.left = posX + "px";
  draggableIframe.style.top = posY + "px";
}

// Function to handle mouse up event
function closeDragElement() {
  // Stop moving when mouse button is released
  document.onmouseup = null;
  document.onmousemove = null;
}

// Function to close the iframe
function closeIframe() {
  draggableIframe.style.display = 'none';
}

// Call the dragMouseDown function when mouse down event is triggered on the iframe or top bar
draggableIframe.onmousedown = dragMouseDown;
topBar.onmousedown = dragMouseDown;