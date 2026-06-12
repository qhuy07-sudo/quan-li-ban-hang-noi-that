// Sticky Header & Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');

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

    // --- Scroll to Products section ---
    function scrollToProducts() {
        const productSection = document.querySelector('.featured-products');
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // --- Reset & show all products ---
    function showAllProducts() {
        renderProducts(products);
    }

    // --- Filter products by top-level category ---
    function filterByCategory(category) {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered.length > 0 ? filtered : products);
    }

    // --- Filter products by sub-category name ---
    function filterBySubCategory(subCatText) {
        const filtered = products.filter(p =>
            p.subCategory.toLowerCase().includes(subCatText.toLowerCase()) ||
            p.name.toLowerCase().includes(subCatText.toLowerCase())
        );
        renderProducts(filtered.length > 0 ? filtered : products);
    }

    // --- Top-level nav items (Phòng Khách, Phòng Ngủ, Phòng Ăn, Trang Trí) ---
    const topLevelLinks = document.querySelectorAll('.nav-item > a');
    topLevelLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.textContent.trim();
            filterByCategory(category);
            scrollToProducts();
        });
    });

    // --- Level 2: dropdown menu direct links (Sofa & Ghế, Bàn Trà & Kệ, ...) ---
    const level2Links = document.querySelectorAll('.dropdown-menu > li > a');
    level2Links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const subCat = link.textContent.trim();
            filterBySubCategory(subCat);
            scrollToProducts();
        });
    });

    // --- Level 3: deepest submenu links ---
    const level3Links = document.querySelectorAll('.submenu-list a');
    level3Links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const name = link.textContent.trim();
            filterBySubCategory(name);
            scrollToProducts();
        });
    });

    // --- Hero "Mua Ngay" button ---
    const muaNgayBtn = document.querySelector('.hero-btns a.btn-primary');
    if (muaNgayBtn) {
        muaNgayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAllProducts();
            scrollToProducts();
        });
    }

    // --- Hero "Xem Bộ Sưu Tập" button ---
    const xemBSTBtn = document.querySelector('.hero-btns a.btn-outline');
    if (xemBSTBtn) {
        xemBSTBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAllProducts();
            scrollToProducts();
        });
    }

    // --- LOGO: click resets to all products ---
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', (e) => {
            // Only intercept if on the same page (index.html)
            if (window.location.pathname.includes('index') || window.location.pathname.endsWith('/')) {
                e.preventDefault();
                showAllProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
});
