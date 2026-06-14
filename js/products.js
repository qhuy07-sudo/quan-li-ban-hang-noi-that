const productImages = {
    livingRoom: [
        "assets/images/internet/living-room-dim.jpg",
        "assets/images/internet/living-room-lamp.jpg",
        "assets/images/internet/living-room-sofa.jpg",
        "assets/images/internet/living-room-wide.jpg",
        "assets/images/sofa-velvet.jpg",
        "assets/images/coffee-table.jpg",
        "assets/images/internet/armchair.jpg",
        "assets/images/internet/tv-stand.jpg"
    ],
    bedroom: [
        "assets/images/bed-king.jpg",
        "assets/images/internet/bed-floral.jpg",
        "assets/images/internet/bed-soft.jpg",
        "assets/images/internet/nightstand.jpg",
        "assets/images/internet/vanity-table.jpg",
        "assets/images/wardrobe.jpg"
    ],
    dining: [
        "assets/images/internet/dining-modern.jpg",
        "assets/images/internet/dining-round.jpg",
        "assets/images/internet/dining-chairs.jpg",
        "assets/images/dining-set.jpg"
    ],
    decor: [
        "assets/images/chandelier.jpg",
        "assets/images/internet/chandelier-ornate.jpg",
        "assets/images/internet/chandelier-gold.jpg",
        "assets/images/internet/living-room-lamp.jpg"
    ]
};

const customProductImages = {
    // Real product photos
    mirrorAura: "assets/images/generated/mirror-aura.png",
    mirrorWallGlow: "assets/images/generated/mirror-wall-glow.png",
    vaseSerenity: "assets/images/generated/vase-serenity.png",
    ceramicVase: "assets/images/generated/ceramic-vase.png",
    ringLight: "assets/images/generated/ring-light.png",
    tableLampAurora: "assets/images/generated/table-lamp-aurora.png",
    abstractArt: "assets/images/generated/abstract-art.jpg",
    wallClock: "assets/images/generated/wall-clock.jpg",
    barCabinet: "assets/images/generated/bar-cabinet.jpg",
    servingCart: "assets/images/generated/serving-cart.jpg",
    upholsteredChair: "assets/images/generated/upholstered-chair.jpg",
    woodenChair: "assets/images/generated/wooden-chair.jpg"
};

const products = [
    {
        id: 1,
        name: "Sofa Da Velvet Luxury",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 25000000,
        image: productImages.livingRoom[4],
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
        image: productImages.bedroom[0],
        description: "Kích thước vương giả, chất liệu gỗ sồi tự nhiên bền bỉ theo thời gian."
    },
    {
        id: 4,
        name: "Tủ Quần Áo Minimalist",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 18000000,
        image: productImages.bedroom[5],
        description: "Thiết kế tối giản, tối ưu không gian lưu trữ cho căn phòng của bạn."
    },
    {
        id: 5,
        name: "Bàn Ăn 6 Ghế Modernist",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 32000000,
        image: productImages.dining[0],
        description: "Sự kết hợp hoàn hảo giữa gỗ và kim loại, phù hợp cho mọi không gian bếp hiện đại."
    },
    {
        id: 6,
        name: "Đèn Chùm Pha Lê Starry",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 12000000,
        image: productImages.decor[0],
        description: "Lung linh và huyền ảo, điểm nhấn không thể thiếu cho phòng khách sang trọng."
    },
    {
        id: 7,
        name: "Sofa Góc Modular Aurora",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 31800000,
        image: productImages.livingRoom[0],
        description: "Thiết kế module linh hoạt, phù hợp cho không gian tiếp khách rộng và hiện đại."
    },
    {
        id: 8,
        name: "Ghế Armchair Luna",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 9200000,
        image: productImages.livingRoom[6],
        description: "Một điểm nhấn êm ái cho góc đọc sách hay khu vực thư giãn trong phòng khách."
    },
    {
        id: 9,
        name: "Giường Bọc Nệm Cloud 160",
        category: "Phòng Ngủ",
        subCategory: "Giường Ngủ",
        price: 28900000,
        image: productImages.bedroom[2],
        description: "Đầu giường bọc nệm mềm mại, mang lại cảm giác nghỉ ngơi êm dịu và sang trọng."
    },
    {
        id: 10,
        name: "Tủ Đầu Giường Nordic Oak",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 5600000,
        image: productImages.bedroom[3],
        description: "Mẫu tủ nhỏ gọn với ngăn kéo tiện dụng, hoàn thiện không gian phòng ngủ gọn gàng."
    },
    {
        id: 11,
        name: "Bàn Ăn Tròn Marble 4 Ghế",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 21400000,
        image: productImages.dining[1],
        description: "Thiết kế tròn tiết kiệm diện tích, lý tưởng cho căn hộ và góc ăn uống ấm cúng."
    },
    {
        id: 12,
        name: "Đèn Thả Bàn Ăn Halo",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 7800000,
        image: productImages.decor[1],
        description: "Dải ánh sáng mềm tạo bầu không khí ấm áp cho bàn ăn và khu vực sinh hoạt chung."
    },
    {
        id: 13,
        name: "Kệ Tivi Veneer Signature",
        category: "Phòng Khách",
        subCategory: "Bàn Trà & Kệ",
        price: 14900000,
        image: "assets/images/internet/tv-stand.jpg",
        description: "Kệ tivi dài với bề mặt veneer tinh tế, giúp phòng khách trông gọn và sang hơn."
    },
    {
        id: 14,
        name: "Bàn Trang Điểm Glow",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 10900000,
        image: productImages.bedroom[4],
        description: "Mặt bàn rộng, gương lớn và ngăn chứa thông minh cho góc chăm sóc cá nhân tiện nghi."
    },
    {
        id: 15,
        name: "Sofa Da Bò Nâu Classic",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 28600000,
        image: productImages.livingRoom[2],
        description: "Đường nét cổ điển, gam nâu ấm và chất da bền đẹp theo thời gian."
    },
    {
        id: 16,
        name: "Sofa Vải Boucle Cloud",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 21400000,
        image: productImages.livingRoom[3],
        description: "Bề mặt vải boucle mềm mại, tạo cảm giác thư giãn và hiện đại cho phòng khách."
    },
    {
        id: 17,
        name: "Ghế Accent Riviera",
        category: "Phòng Khách",
        subCategory: "Sofa & Ghế",
        price: 7400000,
        image: "assets/images/internet/accent-chair.jpg",
        description: "Mẫu ghế nhấn thanh lịch, phù hợp cho góc đọc sách hoặc tiếp khách nhẹ nhàng."
    },
    {
        id: 18,
        name: "Bàn Trà Tròn Marble Luxe",
        category: "Phòng Khách",
        subCategory: "Bàn Trà & Kệ",
        price: 11300000,
        image: "assets/images/internet/coffee-table-round.jpg",
        description: "Mặt đá sáng màu kết hợp chân kim loại tối giản cho vẻ ngoài tinh tế."
    },
    {
        id: 19,
        name: "Kệ Tivi Phẳng Neo Line",
        category: "Phòng Khách",
        subCategory: "Bàn Trà & Kệ",
        price: 15600000,
        image: "assets/images/internet/tv-stand-neo.jpg",
        description: "Thiết kế thấp, gọn và sắc nét, tối ưu khu vực giải trí của gia đình."
    },
    {
        id: 20,
        name: "Gương Treo Aura",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 9800000,
        image: customProductImages.mirrorAura,
        description: "Mảng trang trí phản chiếu ánh sáng giúp không gian sáng và rộng hơn."
    },
    {
        id: 21,
        name: "Giường Gỗ Tự Nhiên Zen Wood",
        category: "Phòng Ngủ",
        subCategory: "Giường Ngủ",
        price: 33200000,
        image: "assets/images/internet/bed-zen-wood.jpg",
        description: "Kết cấu gỗ chắc chắn, bề mặt hoàn thiện mịn mang lại cảm giác ấm áp."
    },
    {
        id: 22,
        name: "Giường Upholstered Softline",
        category: "Phòng Ngủ",
        subCategory: "Giường Ngủ",
        price: 27400000,
        image: productImages.bedroom[1],
        description: "Đầu giường bọc vải mềm và đường nét gọn gàng cho không gian ngủ hiện đại."
    },
    {
        id: 23,
        name: "Tủ Quần Áo Cửa Lùa Horizon",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 24800000,
        image: "assets/images/internet/wardrobe-sliding.jpg",
        description: "Cửa lùa tiết kiệm diện tích, phù hợp cho phòng ngủ nhỏ và căn hộ hiện đại."
    },
    {
        id: 24,
        name: "Bàn Trang Điểm Luna Mirror",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 12800000,
        image: "assets/images/internet/vanity-luna.jpg",
        description: "Mặt bàn sáng, gương lớn và ngăn kéo tiện lợi cho góc chăm sóc cá nhân."
    },
    {
        id: 25,
        name: "Tab Đầu Giường Cedar",
        category: "Phòng Ngủ",
        subCategory: "Tủ & Bàn Trang Điểm",
        price: 5200000,
        image: "assets/images/internet/nightstand-cedar.jpg",
        description: "Kích thước nhỏ gọn, đủ để đặt đèn ngủ, sách và các vật dụng cần thiết."
    },
    {
        id: 26,
        name: "Bình Hoa Serenity",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 6900000,
        image: customProductImages.vaseSerenity,
        description: "Bình trang trí tối giản, lý tưởng để tạo điểm nhấn mềm mại cho căn phòng."
    },
    {
        id: 27,
        name: "Bàn Ăn Oval Walnut",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 23800000,
        image: productImages.dining[3],
        description: "Mặt bàn oval mềm mại, tạo sự gần gũi cho những bữa ăn gia đình."
    },
    {
        id: 28,
        name: "Bàn Ăn 8 Ghế Grand Oak",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 36800000,
        image: productImages.dining[2],
        description: "Thiết kế rộng rãi cho không gian tiếp khách và những dịp sum họp đông người."
    },
    {
        id: 29,
        name: "Ghế Ăn Bọc Nệm Sable",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 4900000,
        image: customProductImages.upholsteredChair,
        description: "Đệm ngồi êm, lưng tựa vừa phải giúp bữa ăn thoải mái hơn mỗi ngày."
    },
    {
        id: 30,
        name: "Ghế Ăn Scandinavian Pine",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 4300000,
        image: customProductImages.woodenChair,
        description: "Phong cách Bắc Âu tối giản, dễ phối cùng nhiều kiểu bàn ăn khác nhau."
    },
    {
        id: 31,
        name: "Tủ Rượu Dining Bar",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 18200000,
        image: customProductImages.barCabinet,
        description: "Kết hợp lưu trữ và trưng bày, phù hợp cho không gian ăn uống sang trọng."
    },
    {
        id: 32,
        name: "Xe Đẩy Phục Vụ Luxe",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 7600000,
        image: customProductImages.servingCart,
        description: "Hỗ trợ bày biện đồ ăn, đồ uống gọn gàng và tiện lợi khi tiếp khách."
    },
    {
        id: 33,
        name: "Bàn Ăn Mặt Đá Calacatta",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 28900000,
        image: "assets/images/internet/dining-calacatta.jpg",
        description: "Mặt đá vân sáng nổi bật, mang lại cảm giác cao cấp cho khu vực ăn uống."
    },
    {
        id: 34,
        name: "Bộ Bàn Ăn 4 Ghế Compact",
        category: "Phòng Ăn",
        subCategory: "Bàn Ăn",
        price: 17600000,
        image: "assets/images/internet/dining-compact.jpg",
        description: "Bộ bàn ăn nhỏ gọn, rất hợp với căn hộ hoặc những góc bếp ấm cúng."
    },
    {
        id: 35,
        name: "Đèn Trần Ring",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 9400000,
        image: customProductImages.ringLight,
        description: "Vòng sáng thanh thoát tạo cảm giác hiện đại cho phòng khách và phòng ăn."
    },
    {
        id: 36,
        name: "Đèn Bàn Aurora",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 3200000,
        image: customProductImages.tableLampAurora,
        description: "Ánh sáng dịu nhẹ, phù hợp cho đầu giường, bàn làm việc hoặc góc thư giãn."
    },
    {
        id: 37,
        name: "Gương Treo Wall Glow",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 6800000,
        image: customProductImages.mirrorWallGlow,
        description: "Tấm gương treo tạo chiều sâu cho không gian và tăng hiệu ứng ánh sáng."
    },
    {
        id: 38,
        name: "Tranh Canvas Abstract Line",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 4100000,
        image: customProductImages.abstractArt,
        description: "Mảng tường nghệ thuật tối giản giúp căn nhà có điểm nhấn tinh tế hơn."
    },
    {
        id: 39,
        name: "Đồng Hồ Treo Timepiece",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 2900000,
        image: customProductImages.wallClock,
        description: "Thiết kế cân đối, dễ kết hợp trong nhiều phong cách nội thất khác nhau."
    },
    {
        id: 40,
        name: "Bình Hoa Ceramic",
        category: "Trang Trí",
        subCategory: "Đèn Chiếu Sáng",
        price: 1800000,
        image: customProductImages.ceramicVase,
        description: "Chi tiết trang trí nhỏ nhưng đủ làm không gian mềm mại và có sức sống hơn."
    }
];

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function getProductsBySubCategory(category, subCategory) {
    const source = getProductsByCategory(category);
    if (!subCategory) return source;

    const normalized = subCategory.toLowerCase().trim();
    return source.filter(product => {
        const productSub = product.subCategory.toLowerCase();
        const productName = product.name.toLowerCase();
        return productSub === normalized ||
            productSub.includes(normalized) ||
            productName.includes(normalized) ||
            product.subCategory === subCategory;
    });
}

function renderProducts(productList, options = {}) {
    const productContainer = document.getElementById('product-list');
    if (!productContainer) return;

    const { emptyMessage = 'Không tìm thấy sản phẩm phù hợp.' } = options;
    productContainer.innerHTML = '';

    if (!Array.isArray(productList) || productList.length === 0) {
        productContainer.innerHTML = `
            <div class="empty-state">
                <h3>Không có sản phẩm</h3>
                <p>${emptyMessage}</p>
            </div>
        `;
        return;
    }

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
    const pageType = document.body?.dataset?.page || 'home';
    if (pageType === 'home') {
        renderProducts(products);
    }
});
