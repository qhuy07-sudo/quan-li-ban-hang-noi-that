// Live Search Logic
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.category.toLowerCase().includes(query) ||
            product.subCategory.toLowerCase().includes(query)
        );
        
        renderProducts(filteredProducts);
        
        // Scroll to product list if searching
        if (query !== '') {
            document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
        }
    };

    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
});
