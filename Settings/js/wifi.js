    <script>
        function generateRandomSSID() {
            const adjectives = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray"];
            const nouns = ["Network", "Wi-Fi", "Internet", "Connection", "Router", "Access Point", "Hotspot", "SSID"];
            const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
            return `${randomAdjective} ${randomNoun}`;
        }

        function generateRandomStrength() {
            return Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
        }

        function createNetworkElement(name, strength, connected) {
            const networkElement = document.createElement("div");
            networkElement.className = "network";
            networkElement.dataset.name = name; // Set data attribute for easier identification
            networkElement.innerHTML = `
                <div class="name">${name}</div>
                <div class="strength">${"▮".repeat(strength)}</div>
                <div class="status"><button>${connected ? "Disconnect" : "Connect"}</button></div>
            `;
            return networkElement;
        }

        window.onload = function() {
            const connectedNetworkSection = document.getElementById("connectedNetworkSection");
            const availableNetworkSection = document.getElementById("availableNetworkSection");
            const connectedNetworkList = document.getElementById("connectedNetworkList");
            const availableNetworkList = document.getElementById("availableNetworkList");
            let currentConnectedNetwork = null; // Variable to store the currently connected network
            
            // Function to show or hide network sections based on Wi-Fi status
            function toggleNetworkSections() {
                const wifiOn = document.getElementById("wifiOn").checked;
                connectedNetworkSection.style.display = wifiOn ? "block" : "none";
                availableNetworkSection.style.display = wifiOn ? "block" : "none";
            }

            // Generate random connected networks
            for (let i = 0; i < 1; i++) { // Generate only 1 random connected network initially
                const networkName = generateRandomSSID();
                const strength = generateRandomStrength();
                connectedNetworkList.appendChild(createNetworkElement(networkName, strength, true));
                currentConnectedNetwork = networkName; // Update the currently connected network
            }

            // Generate random available networks
            for (let i = 0; i < 3; i++) { // Generate 3 random available networks
                const networkName = generateRandomSSID();
                const strength = generateRandomStrength();
                availableNetworkList.appendChild(createNetworkElement(networkName, strength, false));
            }

            // Event delegation to handle button clicks
            document.addEventListener('click', function(event) {
                const button = event.target.closest('button');
                if (button) {
                    const network = button.closest('.network');
                    if (network) {
                        if (button.textContent === "Disconnect") {
                            // Disconnect the current connected network
                            if (network.dataset.name === currentConnectedNetwork) {
                                currentConnectedNetwork = null; // Reset the current connected network
                            }
                            availableNetworkList.appendChild(network);
                            button.textContent = "Connect";
                        } else if (button.textContent === "Connect") {
                            // Disconnect the current connected network before connecting a new one
                            if (currentConnectedNetwork) {
                                const currentConnectedNetworkElement = connectedNetworkList.querySelector(`[data-name="${currentConnectedNetwork}"]`);
                                currentConnectedNetworkElement.querySelector('button').textContent = "Connect"; // Update button text
                                availableNetworkList.appendChild(currentConnectedNetworkElement); // Move to available networks
                            }
                            // Connect the new network
                            connectedNetworkList.appendChild(network);
                            button.textContent = "Disconnect";
                            currentConnectedNetwork = network.dataset.name; // Update the currently connected network
                        }
                    }
                }
            });

            // Check the "Wi-Fi On" checkbox automatically
            document.getElementById("wifiOn").checked = true;

            // Attach onchange event listener to Wi-Fi checkbox to toggle network sections
            document.getElementById("wifiOn").onchange = toggleNetworkSections;
            // Initially toggle network sections based on Wi-Fi status
            toggleNetworkSections();
        };
