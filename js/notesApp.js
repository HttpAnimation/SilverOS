function saveNote() {
    var note = document.getElementById("noteInput").value;
    if (note.trim() !== "") {
        // You can implement your logic to save the note here
        alert("Note saved: " + note);
        // Clear the input field after saving the note
        document.getElementById("noteInput").value = "";
    } else {
        alert("Please enter a note before saving.");
    }
}

function loadFile() {
    var noteInput = document.getElementById("noteInput");
    if (noteInput.value.trim() !== "") {
        // If there are existing notes, prompt the user for confirmation
        var confirmLoad = confirm("Loading a file will replace the current notes. Are you sure you want to continue?");
        if (!confirmLoad) {
            return; // If the user cancels, exit the function
        }
    }
    
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt"; // Accepts only text files
    fileInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                noteInput.value = e.target.result;
            };
            reader.readAsText(file);
        }
    });
    fileInput.click();
}
