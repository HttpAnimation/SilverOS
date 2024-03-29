        // Function to fetch data from searchData.json and display search results
        async function searchApps() {
            const response = await fetch('searchData.json');
            const data = await response.json();
            const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
            const searchResultsContainer = document.getElementById('searchResults');
            searchResultsContainer.innerHTML = ''; // Clear previous results

            // Check if the data object is empty
            if (Object.keys(data).length === 0) {
                const noResultsMessage = document.createElement('div');
                noResultsMessage.textContent = 'No apps found.';
                searchResultsContainer.appendChild(noResultsMessage);
                return;
            }

            // If search input is empty, display all apps
            if (searchInput === '') {
                for (const appName in data) {
                    if (data.hasOwnProperty(appName)) {
                        const appImage = document.createElement('img');
                        appImage.src = data[appName];
                        appImage.alt = appName;
                        searchResultsContainer.appendChild(appImage);
                    }
                }
            } else {
                // Filter apps based on search input
                for (const appName in data) {
                    if (data.hasOwnProperty(appName) && appName.toLowerCase().includes(searchInput)) {
                        const appImage = document.createElement('img');
                        appImage.src = data[appName];
                        appImage.alt = appName;
                        searchResultsContainer.appendChild(appImage);
                    }
                }
            }
        }

        // Trigger search on input change
        document.getElementById('searchInput').addEventListener('input', searchApps);

        // JavaScript function to redirect to index.html
        function goToIndex() {
            window.location.href = 'index.html';
        }