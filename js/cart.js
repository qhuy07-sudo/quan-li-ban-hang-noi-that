// Shopping Cart Logic
let cart = JSON.parse(localStorage.getItem('luxe_cart')) || [];

// --- Toast Notification ---
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Auto-remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

// --- Add to Cart ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
}

function saveCart() {
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// --- Checkout ---
function checkout() {
    closeCartDrawer();
    showToast('🎉 Cảm ơn bạn đã mua sắm! Đơn hàng đang được xử lý.', 'success');
    cart = [];
    saveCart();
    updateCartUI();
}

// --- Initial UI update ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    const cartToggle = document.getElementById('cart-toggle');
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
    });
});

function openCartDrawer() {
    let drawer = document.getElementById('cart-drawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'cart-drawer';
        drawer.className = 'cart-drawer';
        document.body.appendChild(drawer);
    }

    const cartHTML = cart.length === 0
        ? '<p style="color:#999; text-align:center; padding: 2rem 0;">Giỏ hàng đang trống 🛒</p>'
        : cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" width="60" height="60" style="border-radius:8px; object-fit:cover;">
                <div style="flex:1;">
                    <h4 style="font-size:0.9rem; margin-bottom:0.25rem;">${item.name}</h4>
                    <p style="color: var(--accent-color); font-weight:600;">${formatCurrency(item.price)} × ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background:none;border:none;cursor:pointer;font-size:1.2rem;color:#999;">✕</button>
            </div>
        `).join('') + `
            <div class="cart-total">
                Tổng: <span style="color:var(--accent-color)">${formatCurrency(cart.reduce((s, i) => s + i.price * i.quantity, 0))}</span>
            </div>
            <button class="btn btn-primary" style="width:100%; margin-top:1.5rem;" onclick="checkout()">Thanh Toán</button>
        `;

    drawer.innerHTML = `
        <div class="drawer-content">
            <div class="drawer-header">
                <h3>Giỏ Hàng 🛒</h3>
                <span class="close-drawer" onclick="closeCartDrawer()">×</span>
            </div>
            <div class="drawer-body" style="overflow-y:auto; flex:1;">
                ${cartHTML}
            </div>
        </div>
        <div class="drawer-overlay" onclick="closeCartDrawer()"></div>
    `;

    drawer.classList.add('active');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    openCartDrawer(); // re-render drawer
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.remove('active');
}
