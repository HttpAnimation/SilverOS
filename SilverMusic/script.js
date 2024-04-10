document.getElementById('music-list').addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Add some visual feedback
    event.target.style.backgroundColor = "#333";
}, false);

document.getElementById('music-list').addEventListener('dragleave', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Remove visual feedback
    event.target.style.backgroundColor = "";
}, false);

document.getElementById('music-list').addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Handle the files
    let files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
        console.log('Dropped file:', files[i].name);
        // Here you could add code to update the music list
    }
    // Remove visual feedback
    event.target.style.backgroundColor = "";
}, false);
