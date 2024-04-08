document.addEventListener('DOMContentLoaded', function() {
    let history = []; // Array to keep track of URLs for back/forward functionality
    let historyIndex = -1; // Current index in history

    function navigateTo(url) {
        const iframe = document.getElementById('webpageView');
        iframe.src = url;
        // Update history and index
        if (historyIndex < history.length - 1) {
            history = history.slice(0, historyIndex + 1); // Trim forward history if navigating anew
        }
        history.push(url);
        historyIndex++;
    }

    document.getElementById('goButton').addEventListener('click', function() {
        const urlInput = document.getElementById('urlBar');
        let url = urlInput.value.trim();

        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }

        if (url === 'http://127.0.0.1:3000/Browser/index.html' || url === 'https://e621.net') {
            alert('This URL is blocked.');
            return;
        }

        navigateTo(url);
    });

    document.getElementById('urlBar').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('goButton').click();
        }
    });

    document.getElementById('reloadButton').addEventListener('click', function() {
        if (history.length > 0) {
            document.getElementById('webpageView').contentWindow.location.reload();
        }
    });

    document.getElementById('backButton').addEventListener('click', function() {
        if (historyIndex > 0) {
            historyIndex--;
            const url = history[historyIndex];
            document.getElementById('webpageView').src = url;
        }
    });

    document.getElementById('forwardButton').addEventListener('click', function() {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            const url = history[historyIndex];
            document.getElementById('webpageView').src = url;
        }
    });
});
