setTimeout(function() {
    var image = document.createElement("img");
    image.src = "Projectphotos/starting.png";
    image.id = "loading-image";
    document.body.appendChild(image);

    // Play intro audio
    var introAudio = document.getElementById('intro-audio');
    introAudio.play();

    // Trigger reflow and enable the transition
    image.offsetWidth; 
    image.style.opacity = 1;

    // Fade out background and logo after 2 seconds
    setTimeout(function() {
        document.body.style.backgroundColor = "black"; // Change background color to black (fade out effect)
        image.style.opacity = 0; // Fade out the logo
        setTimeout(function() {
            window.location.href = "lockscreen.html"; // Redirect to index.html after fade out
        }, 1000); // Wait for 1 second for fade out effect
    }, 2000); // Wait for 2 seconds before fading out
}, 2000); // Wait for 2 seconds before displaying the image
