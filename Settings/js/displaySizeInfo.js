window.onload = function () {
    var displaySizeInfoDiv = document.getElementById("display-size-info");

    // Get display size information
    var displaySizeInfo = "Display Size: " + window.innerWidth + "x" + window.innerHeight;

    // Display display size information in the div
    displaySizeInfoDiv.innerHTML = displaySizeInfo;
};
