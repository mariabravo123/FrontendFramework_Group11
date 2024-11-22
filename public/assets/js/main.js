// Select Menu button
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add click event on button
menuToggle.addEventListener('click', () => {
    // Alter class 'show' no menu
    menu.classList.toggle('show');
});


