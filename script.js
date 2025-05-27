// src/script.js

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Function to toggle mobile menu visibility
    function toggleMobileMenu() {
        mobileNav.classList.toggle('hidden'); // Toggles Tailwind's hidden class
        // Optionally, change the hamburger icon to a close icon
        mobileMenuButton.querySelector('i').classList.toggle('fa-bars');
        mobileMenuButton.querySelector('i').classList.toggle('fa-times'); // Font Awesome 'times' icon for close
    }

    // Event listener for the hamburger button
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Event listeners for mobile navigation links (to close menu when a link is clicked)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileNav.classList.contains('hidden')) { // Only close if it's open
                toggleMobileMenu();
            }
        });
    });
});