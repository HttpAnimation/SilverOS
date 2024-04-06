window.onload = function() {
    document.querySelector('.container').style.opacity = '1';
}
document.getElementById("saveChangesButton").addEventListener("click", function() {
    // Display animation
    document.getElementById("saveChangesButton").value = "Saving Changes...";
    
    // Simulate saving changes process
    setTimeout(function() {
        // Display "Done" message
        document.getElementById("saveChangesButton").style.display = "none";
        document.getElementById("doneMessage").style.display = "block";
    }, 2000); // Change 2000 to the time it takes to save changes in milliseconds
});