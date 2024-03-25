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
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt"; // Accepts only text files
    fileInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("noteInput").value = e.target.result;
            };
            reader.readAsText(file);
        }
    });
    fileInput.click();
}

