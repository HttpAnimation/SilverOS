// JavaScript function to redirect to index.html
function goToIndex() {
    window.location.href = 'index.html';
}

// JavaScript function to handle terminal commands
function handleCommand(command) {
    // Check if the command matches sudo rm -rf /*
    if (command.trim() === "sudo rm -rf /*") {
        // Redirect to error.html
        window.location.href = 'error.html';
    } else {
        // Handle other commands if needed
        console.log("Command not recognized");
    }
}

// JavaScript function to handle user input
function handleInput(event) {
    // Check if Enter key is pressed
    if (event.key === "Enter") {
        // Get the value of the input field
        var userInput = event.target.value;
        // Call the function to handle the command
        handleCommand(userInput);
        // Clear the input field
        event.target.value = "";
    }
}

// Add event listener for keypress on the terminal input
document.getElementById("terminal-input").addEventListener("keypress", handleInput);
