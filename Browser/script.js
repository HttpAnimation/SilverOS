document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goButton').addEventListener('click', function() {
        const urlInput = document.getElementById('urlBar');
        const iframe = document.getElementById('webpageView');
        let url = urlInput.value;

        // Check if the URL starts with the proper protocol; if not, prepend it
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }

        // Block the specific URL
        if (url === 'http://127.0.0.1:3000/Browser/index.html') {
            alert('This URL is blocked.');
            // Optionally, clear the input or redirect to a default URL
            // urlInput.value = '';
            // iframe.src = 'about:blank'; // Redirect to a blank page
            return; // Prevent the iframe from loading the blocked URL
        }

        if (url === 'https://e621.net') {
            alert('This url is blocked')
            return; 
        }

        iframe.src = url;
    });

    // Load site when pressing Enter in the URL bar
    document.getElementById('urlBar').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('goButton').click();
        }
    });
});
