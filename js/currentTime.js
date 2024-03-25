// Function to get the current time in 24-hour format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
    return `${hours}:${minutes}`;
}

// Update current time every second
function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    if (currentTimeElement) {
        currentTimeElement.textContent = getCurrentTime();
    }
}

// Update time initially and then every second
updateTime();
setInterval(updateTime, 1000);
