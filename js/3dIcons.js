// Removed

document.addEventListener('DOMContentLoaded', function() {
    const appIcons = document.querySelectorAll('.app-icon');

    appIcons.forEach(icon => {
        icon.addEventListener('mousemove', function(e) {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            icon.style.setProperty('--mouseX', (x / icon.clientWidth) * 100);
            icon.style.setProperty('--mouseY', (y / icon.clientHeight) * 100);
        });
    });
});
