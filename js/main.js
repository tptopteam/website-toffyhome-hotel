/**
 * Toffyhome Hotel - Main JavaScript
 */

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon
            const icon = menuBtn.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'menu';
            }
        });
    }
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }

                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 10) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }

        lastScroll = currentScroll;
    });
}

// Gallery filter (for gallery page)
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-gray-800', 'text-white');
                b.classList.add('bg-white', 'border-gray-200');
            });

            // Add active class to clicked button
            btn.classList.add('active', 'bg-gray-800', 'text-white');
            btn.classList.remove('bg-white', 'border-gray-200');
        });
    });
}

// FAQ accordion
function initFAQ() {
    const details = document.querySelectorAll('details');

    details.forEach(detail => {
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                // Close other open details
                details.forEach(d => {
                    if (d !== detail && d.open) {
                        d.open = false;
                    }
                });
            }
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initGalleryFilter();
    initFAQ();
    initLazyLoading();
});
