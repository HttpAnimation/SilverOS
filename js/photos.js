document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for drag and drop on the entire document
    document.addEventListener('dragover', handleDragOver, false);
    document.addEventListener('drop', handleDrop, false);
});

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    ([...files]).forEach(uploadFile);
}

function uploadFile(file) {
    let reader = new FileReader();

    reader.onload = function(event) {
        let image = new Image();
        image.src = event.target.result;
        document.body.appendChild(image); // Append image to body, you can modify this as needed
    };

    reader.readAsDataURL(file);
}

function goToIndex() {
    window.location.href = 'index.html';
}
