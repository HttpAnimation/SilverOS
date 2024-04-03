document.addEventListener("DOMContentLoaded", function() {
    // Get the Sleep option element
    var sleepOption = document.querySelector("a[href='#Sleep']");

    // Add click event listener
    sleepOption.addEventListener("click", function(event) {
        // Prevent the default action (following the link)
        event.preventDefault();

        // Close the tab
        window.close();
    });
});
