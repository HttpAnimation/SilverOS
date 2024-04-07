document.getElementById('shutdown').addEventListener('click', (event) => {
    event.preventDefault();
    window.electronAPI.shutdown();
});
