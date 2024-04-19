document.addEventListener('DOMContentLoaded', function () {
    fetch('apps.json')
        .then(response => response.json())
        .then(data => {
            const modList = document.getElementById('mod-list');
            data.forEach(mod => {
                Object.entries(mod).forEach(([key, value]) => {
                    const modElement = document.createElement('div');
                    modElement.className = 'mod-item';
                    modElement.innerHTML = `
                        <img src="${value.Logo}" alt="${key}" class="mod-logo">
                        <div class="mod-info">
                            <div class="mod-name">${key.replace('-SilverOS', '')}</div>
                            <div class="mod-description">${value.Description}</div>
                            <a href="${value.DownloadURL}" target=”_blank” class="mod-download" download>Download</a>
                        </div>
                    `;
                    modList.appendChild(modElement);
                });
            });
        })
        .catch(error => console.error('Error loading the mods:', error));
});
