// JavaScript file to handle redirecting to the desktop on any input action

function redirectToDesktop() {
    window.location.href = "desktop.html"; // Change 'desktop.html' to the actual URL of your desktop page
}

document.addEventListener("mousemove", redirectToDesktop); // Redirect on mouse movement
document.addEventListener("click", redirectToDesktop); // Redirect on click action
