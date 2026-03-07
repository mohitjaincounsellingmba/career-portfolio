const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('.nav-item');

// Toggle Menu function
function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Click on Hamburger
menuBtn.addEventListener('click', toggleMenu);

// Click on Overlay to close
overlay.addEventListener('click', toggleMenu);

// IMPORTANT: Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });
});
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

function toggle() {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggle);
overlay.addEventListener('click', toggle);

// Close menu when link is clicked
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', toggle);
});


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// Toggle Mobile Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));
