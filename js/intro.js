document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var photoContainer = document.querySelector('.photo-container');
        var sound = new Audio('path_to_your_sound_file.mp3'); // Replace 'path_to_your_sound_file.mp3' with the actual path to your sound file
        sound.volume = 0.5; // Adjust the volume as needed
        sound.play();

        photoContainer.style.opacity = 1;

        // Trigger sound when the animation reaches its middle point
        photoContainer.addEventListener('animationiteration', function() {
            sound.play();
        });
    }, 1000); // 1000 milliseconds = 1 second
});
