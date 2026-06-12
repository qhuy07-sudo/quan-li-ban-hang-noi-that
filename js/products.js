const products = [
    {
        id: 1,
        name: "Sofa Da Velvet Luxury",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 25000000,
        image: "assets/images/sofa-velvet.jpg",
        description: "Thiết kế sang trọng với chất liệu vải nhung cao cấp, mang lại sự êm ái tuyệt đối."
    },
    {
        id: 2,
        name: "Bàn Trà Kim Loại Mạ Vàng",
        category: "Phòng Khách",
        subCategory: "Bàn Trà & Kệ",
        price: 8500000,
        image: "assets/images/coffee-table.jpg",
        description: "Mặt bàn đá marble kết hợp chân kim loại mạ vàng tinh tế."
    },
    {
        id: 3,
        name: "Giường Ngủ Heritage King",
        category: "Phòng Ngủ",
        subCategory: "Giường Ngủ",
        price: 45000000,
        image: "assets/images/bed-king.jpg",
        description: "Kích thước vương giả, chất liệu gỗ sồi tự nhiên bền bỉ theo thời gian."
    },
    {
        id: 4,
        name: "Tủ Quần Áo Minimalist",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 18000000,
        image: "assets/images/wardrobe.jpg",
        description: "Thiết kế tối giản, tối ưu không gian lưu trữ cho căn phòng của bạn."
    },
    {
        id: 5,
        name: "Bàn Ăn 6 Ghế Modernist",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 32000000,
        image: "assets/images/dining-set.jpg",
        description: "Sự kết hợp hoàn hảo giữa gỗ và kim loại, phù hợp cho mọi không gian bếp hiện đại."
    },
    {
        id: 6,
        name: "Đèn Chùm Pha Lê Starry",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 12000000,
        image: "assets/images/chandelier.jpg",
        description: "Lung linh và huyền ảo, điểm nhấn không thể thiếu cho phòng khách sang trọng."
    }
];

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function renderProducts(productList) {
    const productContainer = document.getElementById('product-list');
    if (!productContainer) return;
    
    productContainer.innerHTML = '';
    
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${formatCurrency(product.price)}</p>
            </div>
        `;
        productCard.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') {
                window.location.href = `product-detail.html?id=${product.id}`;
            }
        };
        productContainer.appendChild(productCard);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
