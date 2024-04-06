<script>
function generateRandomName() {
    const adjectives = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray"];
    const nouns = ["Car", "Tree", "House", "Laptop", "Phone", "Chair", "Table", "Book", "Bottle", "Dog"];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}

function createDeviceElement(name, connected) {
    const deviceElement = document.createElement("div");
    deviceElement.className = "device";
    deviceElement.dataset.name = name; // Set data attribute for easier identification
    deviceElement.innerHTML = `
        <div class="name">${name}</div>
        <div class="status"><button>${connected ? "Disconnect" : "Connect"}</button></div>
    `;
    return deviceElement;
}

window.onload = function() {
    const connectedDeviceList = document.getElementById("connectedDeviceList");
    const disconnectedDeviceList = document.getElementById("disconnectedDeviceList");
    
    // Generate random connected devices
    for (let i = 0; i < 2; i++) { // Generate 2 random connected devices
        const deviceName = generateRandomName();
        connectedDeviceList.appendChild(createDeviceElement(deviceName, true));
    }

    // Generate random disconnected devices
    for (let i = 0; i < 3; i++) { // Generate 3 random disconnected devices
        const deviceName = generateRandomName();
        disconnectedDeviceList.appendChild(createDeviceElement(deviceName, false));
    }

    // Event delegation to handle button clicks
    document.addEventListener('click', function(event) {
        const button = event.target.closest('button');
        if (button) {
            const device = button.closest('.device');
            if (device) {
                if (button.textContent === "Disconnect") {
                    disconnectedDeviceList.appendChild(device);
                    button.textContent = "Connect";
                } else if (button.textContent === "Connect") {
                    setTimeout(() => {
                        connectedDeviceList.appendChild(device);
                        button.textContent = "Disconnect";
                    }, 1000); // 1000 milliseconds delay
                }
            }
        }
    });
};
