document.addEventListener('DOMContentLoaded', function () {
    // "Go" button functionality
    document.getElementById('goButton').addEventListener('click', function () {
        const urlInput = document.getElementById('urlBar');
        const iframe = document.getElementById('webpageView');
        let url = urlInput.value;

        // Check if the URL starts with the proper protocol; if not, prepend it
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }

        // Block specific URLs
        if (url === 'http://127.0.0.1:3000/Browser/index.html' || url === 'https://e621.net') {
            alert('This URL is blocked.');
            // Optionally, clear the input or redirect to a default URL
            // urlInput.value = '';
            // iframe.src = 'about:blank'; // Redirect to a blank page
            return; // Prevent the iframe from loading the blocked URL
        }

        iframe.src = url;
    });

    // Enter key functionality in the URL bar
    document.getElementById('urlBar').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('goButton').click();
        }
    });

    // Reload button functionality
    document.getElementById('reloadButton').addEventListener('click', function () {
        const iframe = document.getElementById('webpageView');
        // Reload the iframe content
        iframe.contentWindow.location.reload();
    });
});
