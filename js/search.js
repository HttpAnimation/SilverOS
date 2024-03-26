function searchApps() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    fetch('searchData.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(app => {
                let appName = app.AppName.toLowerCase();
                if (appName.includes(input)) {
                    let appElement = document.createElement('div');
                    appElement.classList.add('search-result');
                    let imgElement = document.createElement('img');
                    imgElement.src = app.AppName;
                    imgElement.alt = 'App';
                    let appNameElement = document.createElement('span');
                    appNameElement.textContent = app.AppName.replace('photos/', '').replace('.png', ''); // Extracting the app name
                    appElement.appendChild(imgElement);
                    appElement.appendChild(appNameElement);
                    searchResultsContainer.appendChild(appElement);
                }
            });
        })
        .catch(error => console.error('Error fetching searchData.json:', error));
}
