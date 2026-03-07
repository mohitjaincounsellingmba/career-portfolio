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
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const navContent = document.getElementById('mobile-nav-content');

    if (toggleBtn && navContent) {
        toggleBtn.addEventListener('click', function() {
            // Toggle the custom class we created in CSS
            navContent.classList.toggle('open-now');
            console.log("Mobile menu toggled");
        });

        // Close menu when a link is clicked (UX best practice)
        const navLinks = document.querySelectorAll('.nav navbar-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navContent.classList.remove('open-now');
            });
        });
    }
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-dropdown');

hamburger.addEventListener('click', () => {
    // Toggle the "X" animation
    hamburger.classList.toggle('is-active');
    // Toggle the Slide-Down menu
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking outside or on a link
document.querySelectorAll('.mobile-dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        mobileMenu.classList.remove('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hbBtn = document.getElementById('hamburger-btn');
    const mobMenu = document.getElementById('mobile-menu');

    // 1. Hamburger Toggle Logic
    if (hbBtn && mobMenu) {
        hbBtn.onclick = function() {
            hbBtn.classList.toggle('is-active');
            mobMenu.classList.toggle('active');
        };
    }

    // 2. Sticky Scroll Effect
    window.onscroll = () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.height = "65px";
            nav.style.background = "rgba(10, 15, 30, 0.98)";
        } else {
            nav.style.height = "75px";
            nav.style.background = "rgba(15, 23, 42, 0.9)";
        }
    };

    // 3. Auto-close menu when link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.onclick = () => {
            hbBtn.classList.remove('is-active');
            mobMenu.classList.remove('active');
        };
    });
});
