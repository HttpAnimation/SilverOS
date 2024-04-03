document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("icon");
    var dropdownMenu = document.getElementById("dropdown-menu");

    icon.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
    });

    // Close the dropdown menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".top-bar-icon")) {
            if (dropdownMenu.classList.contains("show")) {
                dropdownMenu.classList.remove("show");
            }
        }
    });
});
