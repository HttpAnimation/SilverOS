// When the DOM is fully loaded, set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    // When the "Go" button is clicked, update the iframe's source to the entered URL
    document.getElementById('goButton').addEventListener('click', function() {
        const urlInput = document.getElementById('urlBar');
        const iframe = document.getElementById('webpageView');
        const url = urlInput.value.startsWith('http://') || urlInput.value.startsWith('https://') ? urlInput.value : 'http://' + urlInput.value;
        iframe.src = url;
    });

    // Optional: Load a site when pressing Enter while focused on the URL bar
    document.getElementById('urlBar').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('goButton').click();
        }
    });
});
