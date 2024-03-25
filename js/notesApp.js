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