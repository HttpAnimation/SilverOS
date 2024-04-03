document.addEventListener("DOMContentLoaded", function() {
    // Get the Sleep option element
    var Shutdown = document.querySelector("a[href='#Shutdown']");

    // Add click event listener
    Shutdown.addEventListener("click", function(event) {
        // Prevent the default action (following the link)
        event.preventDefault();

        // Close the tab
        window.close();
    });
});
