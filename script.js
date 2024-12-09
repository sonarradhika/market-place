document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            console.log('Toggle button clicked!'); // Debug log
            navMenu.classList.toggle('show');
        });
    } else {
        console.error('navToggle or navMenu element not found');
    }
});
