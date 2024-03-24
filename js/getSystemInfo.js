window.onload = function() {
    var browserInfoDiv = document.getElementById("browser-info");

    // Get browser information
    var browserInfo = "Browser: " + navigator.userAgent;
    
    // Display browser information in the div
    browserInfoDiv.innerHTML = browserInfo;
};
