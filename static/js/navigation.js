/**
 * Modern Navigation JavaScript
 * Handles dropdown menus and mobile navigation
 */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');

            // Prevent body scroll when mobile menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================
    // Mobile Dropdown Toggle
    // ========================================
    const dropdownParents = document.querySelectorAll('.nav-list > li.has-dropdown');

    dropdownParents.forEach(parent => {
        const link = parent.querySelector('a');

        // Only add click handler for mobile
        link.addEventListener('click', function(e) {
            // Check if we're in mobile view
            if (window.innerWidth <= 968) {
                e.preventDefault();

                // Close other dropdowns
                dropdownParents.forEach(otherParent => {
                    if (otherParent !== parent) {
                        otherParent.classList.remove('active');
                    }
                });

                // Toggle this dropdown
                parent.classList.toggle('active');
            }
        });
    });

    // ========================================
    // Close mobile menu when clicking outside
    // ========================================
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 968) {
            const header = document.querySelector('.header');

            if (!header.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ========================================
    // Close mobile menu on window resize
    // ========================================
    window.addEventListener('resize', function() {
        if (window.innerWidth > 968) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';

            // Close all dropdowns
            dropdownParents.forEach(parent => {
                parent.classList.remove('active');
            });
        }
    });

    // ========================================
    // Highlight active page in navigation
    // ========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }

        // Also highlight parent if on a child page
        if (currentPage.includes('programs') ||
            currentPage.includes('regesoil') ||
            currentPage.includes('womens-circle')) {
            const initiativesLink = document.querySelector('a[href="#initiatives"]');
            if (initiativesLink) {
                initiativesLink.classList.add('active');
            }
        }
    });

    // ========================================
    // Smooth scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or "#initiatives" (dropdown trigger)
            if (href === '#' || href === '#initiatives') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                // Close mobile menu if open
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';

                // Scroll to target
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Header scroll effect (optional)
    // ========================================
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        }

        lastScroll = currentScroll;
    });
});
