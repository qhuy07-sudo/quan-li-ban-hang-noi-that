const leafFilters = {
    "Phòng Khách": {
        "Sofa Da Thật": [1, 7, 15, 16],
        "Sofa Vải Nỉ": [16],
        "Ghế Armchair": [8, 17, 20],
        "Bàn Trà Gỗ": [2, 18, 19],
        "Bàn Trà Mặt Đá": [2, 18, 33],
        "Kệ Tivi": [13, 19]
    },
    "Phòng Ngủ": {
        "Giường King Size": [3, 9, 21, 22],
        "Giường Hiện Đại": [9, 22],
        "Giường Gỗ Tự Nhiên": [3, 21, 25],
        "Tủ Quần Áo": [4, 23],
        "Bàn Trang Điểm": [14, 24],
        "Tủ Đầu Giường": [10, 25]
    },
    "Phòng Ăn": {
        "Bàn Ăn 6 Ghế": [5, 11, 27, 33]
    },
    "Trang Trí": {
        "Đèn Chùm Pha Lê Starry": [6, 12, 20, 26, 35, 36, 37, 38, 39, 40]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const category = document.body?.dataset?.category;
    if (!category) return;

    const titleEl = document.getElementById('category-title');
    const descriptionEl = document.getElementById('category-description');
    const breadcrumbEl = document.getElementById('category-breadcrumb');
    const productListEl = document.getElementById('product-list');
    if (!productListEl) return;

    const pageDescription = document.body.dataset.pageDescription || '';
    const pageTitle = document.body.dataset.pageTitle || category;
    const queryParams = new URLSearchParams(window.location.search);
    const requestedSubCategory = queryParams.get('sub') ? queryParams.get('sub').trim() : '';
    const requestedItem = queryParams.get('item') ? queryParams.get('item').trim() : '';
    const baseProducts = requestedSubCategory
        ? getProductsBySubCategory(category, requestedSubCategory)
        : getProductsByCategory(category);
    const filteredProducts = requestedItem && leafFilters[category]?.[requestedItem]
        ? baseProducts.filter(product => leafFilters[category][requestedItem].includes(product.id))
        : baseProducts;

    window.catalogBaseProducts = filteredProducts;
    window.catalogRenderProducts = renderProducts;

    const displayTitle = requestedItem || requestedSubCategory || pageTitle;
    document.title = `${displayTitle} | LUXE`;

    if (titleEl) {
        titleEl.textContent = displayTitle;
    }

    if (descriptionEl) {
        if (requestedItem) {
            descriptionEl.textContent = `Khám phá ${requestedItem} trong danh mục ${category}.`;
        } else if (requestedSubCategory) {
            descriptionEl.textContent = `Khám phá bộ sưu tập ${requestedSubCategory} thuộc ${category}.`;
        } else {
            descriptionEl.textContent = pageDescription;
        }
    }

    if (breadcrumbEl) {
        breadcrumbEl.textContent = requestedItem
            ? `Trang chủ / ${category} / ${requestedSubCategory} / ${requestedItem}`
            : requestedSubCategory
                ? `Trang chủ / ${category} / ${requestedSubCategory}`
            : `Trang chủ / ${category}`;
    }

    renderProducts(filteredProducts, {
        emptyMessage: requestedItem
            ? `Không tìm thấy sản phẩm cho "${requestedItem}".`
            : requestedSubCategory
                ? `Không tìm thấy sản phẩm trong "${requestedSubCategory}".`
                : `Hiện chưa có sản phẩm thuộc ${category}.`
    });
});
