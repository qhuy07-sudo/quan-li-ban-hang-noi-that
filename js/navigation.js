// Sticky Header & Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navBar = document.querySelector('.nav-bar');

    // --- Sticky Header on Scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // --- Mobile navigation toggle ---
    if (header && navToggle && navBar) {
        navToggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.matchMedia('(max-width: 900px)').matches) {
                    header.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Highlight current page in the menu ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu > li > a[href]').forEach(link => {
        const href = link.getAttribute('href') || '';
        const targetPath = href.split('?')[0].split('#')[0];
        if (targetPath && targetPath === currentPath) {
            link.classList.add('active');
        }
    });
});
