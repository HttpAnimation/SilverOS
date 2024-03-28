document.addEventListener("DOMContentLoaded", function() {
    // Select elements to be animated
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    // Function to add pop-out effect after fade-in animation
    function addPopOutEffect() {
        elementsToAnimate.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('pop-out');
        });
    }

    // Add fade-in effect to elements
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });

    // Call the function to add pop-out effect after fade-in animation ends
    setTimeout(addPopOutEffect, 1000); // Adjust timing as needed
});
