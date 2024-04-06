    // Array of random locations
    const locations = [
        "New York, USA",
        "London, UK",
        "Tokyo, Japan",
        "Sydney, Australia",
        "Paris, France",
        "Berlin, Germany",
        "Beijing, China",
        "Rio de Janeiro, Brazil",
        "Moscow, Russia",
        "Cape Town, South Africa"
    ];

    // Function to show content with animation
    function showContent() {
        document.getElementById("content").style.opacity = 1;
        document.body.style.overflow = "auto"; /* Restore overflow after animation */
    }

    // Show content after a delay
    setTimeout(showContent, 2000); // Adjust duration as needed

    function connect() {
        const randomIndex = Math.floor(Math.random() * locations.length); // Generate random index
        const randomLocation = locations[randomIndex]; // Get random location
        const status = document.getElementById("status");
        status.textContent = "Connected to: " + randomLocation; // Display random location
        status.classList.remove("hidden"); // Show status
        setTimeout(function() {
            status.classList.add("hidden"); // Hide status after delay
        }, 2000); // Adjust duration as needed
    }

    function disconnect() {
        const status = document.getElementById("status");
        status.textContent = "Disconnected";
        status.classList.remove("hidden"); // Show status
        setTimeout(function() {
            status.classList.add("hidden"); // Hide status after delay
        }, 2000); // Adjust duration as needed
    }
