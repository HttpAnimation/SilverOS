document.getElementById('goButton').onclick = function() {
    const url = document.getElementById('urlBar').value;
    document.getElementById('webpageView').src = url;
};

document.getElementById('backButton').onclick = function() {
    window.history.back();
};

document.getElementById('forwardButton').onclick = function() {
    window
