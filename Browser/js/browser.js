function loadURL() {
    var urlInput = document.getElementById('urlInput').value;
    var iframe = document.getElementById('browserFrame');
    iframe.src = urlInput;
}
