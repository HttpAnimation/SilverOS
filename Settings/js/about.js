function generateRandomSerialNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let serialNumber = '';
    for (let i = 0; i < 15; i++) {
        serialNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return serialNumber;
}

window.onload = function() {
    const serialNumberElement = document.getElementById('serialNumber');
    serialNumberElement.textContent = generateRandomSerialNumber();
};
