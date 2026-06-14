// Live Search Logic
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (!searchInput || !searchBtn) return;

    const getSearchSource = () => window.catalogBaseProducts || products;
    const getSearchRenderer = () => window.catalogRenderProducts || renderProducts;

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const sourceProducts = getSearchSource();
        const renderer = getSearchRenderer();
        const filteredProducts = sourceProducts.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.category.toLowerCase().includes(query) ||
            product.subCategory.toLowerCase().includes(query)
        );

        renderer(query ? filteredProducts : sourceProducts, {
            emptyMessage: query
                ? `Không tìm thấy kết quả cho "${searchInput.value.trim()}".`
                : 'Không có sản phẩm để hiển thị.'
        });

        if (query !== '' && document.getElementById('product-list')) {
            document.getElementById('product-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
});
