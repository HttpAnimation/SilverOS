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
    fileInput.accept = ".txt, .md"; // Accepts both text and Markdown files
    fileInput.addEventListener("change", function(event) {
        var file = event.target.files[0];
        if (file) {
            if (file.name.endsWith('.md')) {
                // Load Markdown file using md-block
                var reader = new FileReader();
                reader.onload = function(e) {
                    md.block(e.target.result).then(function(html) {
                        noteInput.value = html;
                    });
                };
                reader.readAsText(file);
            } else {
                // Load text file
                var reader = new FileReader();
                reader.onload = function(e) {
                    noteInput.value = e.target.result;
                };
                reader.readAsText(file);
            }
        }
    });
    fileInput.click();
}
