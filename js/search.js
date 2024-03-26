function searchApps() {
    let input = document.getElementById('searchInput').value; // Removed toLowerCase() here
    let searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    fetch('searchData.json')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(appName => {
                let appImagePath = data[appName];
                // Removed toLowerCase() from appName here
                
                if (appName.includes(input)) { // Removed toLowerCase() here
                    let appElement = document.createElement('div');
                    appElement.classList.add('search-result');
                    let imgElement = document.createElement('img');
                    imgElement.src = appImagePath;
                    imgElement.alt = appName;
                    let appNameElement = document.createElement('span');
                    appNameElement.textContent = appName;
                    appElement.appendChild(imgElement);
                    appElement.appendChild(appNameElement);
                    searchResultsContainer.appendChild(appElement);
                }
            });
        })
        .catch(error => console.error('Error fetching searchData.json:', error));
}
