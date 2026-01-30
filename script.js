// Shopping Cart
let cart = JSON.parse(localStorage.getItem('dejasButtersCart')) || [];

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <div>
                        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    localStorage.setItem('dejasButtersCart', JSON.stringify(cart));
}

// Add to cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    toggleCart();

    // Show added notification
    showNotification(`${name} added to cart!`);
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #7d9b76;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.name} (x${item.quantity})`).join('\n');

    alert(`Thank you for your order!\n\nItems:\n${itemsList}\n\nTotal: $${total.toFixed(2)}\n\nWe'll send you a confirmation email shortly.`);

    cart = [];
    updateCart();
    toggleCart();
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.querySelector('.cart-icon');

    if (cartSidebar && cartSidebar.classList.contains('active')) {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove('active');
        }
    }
});

// Product data
const productData = {
    'golden-glow-shea': {
        name: 'Golden Glow Shea',
        price: 24.99,
        icon: '🌟',
        gradient: 'linear-gradient(135deg, #f5e6d3 0%, #d4a574 100%)',
        description: 'Our Golden Glow Shea butter is sourced from the finest African shea trees, hand-harvested and cold-pressed to preserve all its natural healing properties. This luxurious butter melts into your skin like silk, providing intense hydration without any greasy residue. Rich in vitamins A, E, and F, it promotes cell regeneration and provides a natural protective barrier against environmental stressors.',
        ingredients: [
            '100% Pure Unrefined Shea Butter',
            'Vitamin E (Natural Tocopherol)',
            'Essential Fatty Acids',
            'Natural Anti-inflammatory Compounds'
        ],
        benefits: [
            'Deep moisturization for up to 24 hours',
            'Reduces appearance of scars and stretch marks',
            'Soothes eczema and psoriasis',
            'Anti-aging properties',
            'Natural sun protection (SPF 6)',
            'Improves skin elasticity'
        ]
    },
    'chocolate-dream-cocoa': {
        name: 'Chocolate Dream Cocoa',
        price: 26.99,
        icon: '🍫',
        gradient: 'linear-gradient(135deg, #8b4513 0%, #d2691e 100%)',
        description: 'Indulge in the rich, decadent aroma of our Chocolate Dream Cocoa butter. Extracted from premium cocoa beans, this butter is a powerhouse of antioxidants and essential fatty acids. Its natural chocolate scent is both comforting and luxurious, turning your skincare routine into a spa-like experience. The smooth, velvety texture absorbs quickly while providing long-lasting moisture.',
        ingredients: [
            'Pure Cocoa Butter (Theobroma Cacao)',
            'Natural Cocoa Polyphenols',
            'Oleic Acid',
            'Stearic Acid'
        ],
        benefits: [
            'Superior hydration for dry skin',
            'Rich in antioxidants',
            'Improves skin tone and texture',
            'Reduces inflammation',
            'Natural mood enhancer',
            'Perfect for massage therapy'
        ]
    },
    'tropical-paradise-coconut': {
        name: 'Tropical Paradise Coconut',
        price: 22.99,
        icon: '🥥',
        gradient: 'linear-gradient(135deg, #f0f8ff 0%, #87ceeb 100%)',
        description: 'Transport yourself to a tropical island with our virgin coconut oil. Cold-pressed from fresh coconuts within hours of harvest, this oil retains all its natural nutrients and that irresistible tropical aroma. Lightweight yet deeply nourishing, it penetrates quickly to hydrate, heal, and protect your skin from head to toe.',
        ingredients: [
            'Virgin Coconut Oil (Cold-Pressed)',
            'Medium-Chain Fatty Acids (MCFAs)',
            'Lauric Acid',
            'Capric Acid'
        ],
        benefits: [
            'Antibacterial and antifungal properties',
            'Quick absorption, non-greasy',
            'Soothes sunburn',
            'Hair conditioning treatment',
            'Natural makeup remover',
            'Boosts collagen production'
        ]
    },
    'green-goddess-avocado': {
        name: 'Green Goddess Avocado',
        price: 28.99,
        icon: '🥑',
        gradient: 'linear-gradient(135deg, #90ee90 0%, #3cb371 100%)',
        description: 'Our Green Goddess Avocado butter is nature\'s multivitamin for your skin. Extracted from premium Hass avocados, this butter is incredibly rich in vitamins A, D, and E, as well as essential minerals. Its creamy, luxurious texture makes it perfect for mature or sun-damaged skin, providing intense nourishment and promoting natural healing.',
        ingredients: [
            'Pure Avocado Butter',
            'Vitamins A, D, and E',
            'Potassium',
            'Lecithin',
            'Beta-carotene'
        ],
        benefits: [
            'Deeply penetrating moisturizer',
            'Stimulates collagen production',
            'Heals chapped and cracked skin',
            'Reduces age spots',
            'Promotes wound healing',
            'Ideal for sensitive skin'
        ]
    },
    'soothing-aloe-essence': {
        name: 'Soothing Aloe Essence',
        price: 25.99,
        icon: '🌿',
        gradient: 'linear-gradient(135deg, #e0f2f1 0%, #80cbc4 100%)',
        description: 'Our Soothing Aloe Essence combines the cooling, healing power of pure aloe vera with nourishing butters to create the ultimate after-sun treatment. This gentle formula is perfect for sensitive skin, providing instant relief from irritation while deeply moisturizing. The natural enzymes in aloe vera help repair damaged skin cells and promote regeneration.',
        ingredients: [
            'Pure Aloe Vera Gel (99.5%)',
            'Organic Shea Butter',
            'Vitamin C',
            'Natural Enzymes',
            'Polysaccharides'
        ],
        benefits: [
            'Instant cooling relief',
            'Heals sunburn and minor burns',
            'Reduces redness and inflammation',
            'Hydrates without clogging pores',
            'Accelerates wound healing',
            'Anti-bacterial properties'
        ]
    },
    'sunset-mango-bliss': {
        name: 'Sunset Mango Bliss',
        price: 27.99,
        icon: '🥭',
        gradient: 'linear-gradient(135deg, #ffe4b5 0%, #ffa500 100%)',
        description: 'Experience tropical luxury with our Sunset Mango Bliss butter. Extracted from the kernels of organic mangoes, this exotic butter is incredibly rich yet lightweight. Its high content of essential fatty acids and antioxidants makes it perfect for protecting skin from UV damage while providing deep, lasting moisture. The subtle sweet aroma evokes sunny beaches and tropical breezes.',
        ingredients: [
            'Pure Mango Butter',
            'Vitamin C and A',
            'Essential Fatty Acids',
            'Beta-carotene',
            'Antioxidants'
        ],
        benefits: [
            'Excellent for dry and aging skin',
            'Natural UV protection',
            'Reduces fine lines and wrinkles',
            'Non-comedogenic (won\'t clog pores)',
            'Softens rough patches',
            'Improves skin elasticity'
        ]
    },
    'mediterranean-olive-elixir': {
        name: 'Mediterranean Olive Elixir',
        price: 23.99,
        icon: '🫒',
        gradient: 'linear-gradient(135deg, #f0e68c 0%, #bdb76b 100%)',
        description: 'Drawing on centuries of Mediterranean beauty wisdom, our olive oil elixir is cold-pressed from the first harvest of organic olives. This liquid gold is packed with powerful antioxidants, vitamins, and healthy fats that have been cherished for millennia. Its silky texture absorbs beautifully, leaving skin supple, radiant, and protected.',
        ingredients: [
            'Extra Virgin Olive Oil (First Press)',
            'Polyphenols',
            'Vitamin E and K',
            'Squalene',
            'Oleocanthal'
        ],
        benefits: [
            'Powerful anti-aging properties',
            'Protects against free radicals',
            'Deeply moisturizing',
            'Strengthens skin barrier',
            'Anti-inflammatory',
            'Promotes skin regeneration'
        ]
    },
    'youth-revival-collagen': {
        name: 'Youth Revival Collagen',
        price: 32.99,
        icon: '✨',
        gradient: 'linear-gradient(135deg, #ffe4e1 0%, #ffc0cb 100%)',
        description: 'Our Youth Revival Collagen blend is a cutting-edge formula that combines bioavailable collagen peptides with nourishing plant butters. This innovative product helps replenish your skin\'s natural collagen production, improving firmness, elasticity, and overall texture. The result is visibly younger-looking, plumper, and more radiant skin.',
        ingredients: [
            'Hydrolyzed Collagen Peptides',
            'Hyaluronic Acid',
            'Vitamin C (L-Ascorbic Acid)',
            'Organic Shea Butter',
            'CoQ10'
        ],
        benefits: [
            'Boosts collagen production',
            'Reduces fine lines and wrinkles',
            'Improves skin firmness',
            'Enhances skin hydration',
            'Promotes cell renewal',
            'Protects against oxidative stress'
        ]
    },
    'natures-aromatherapy-blend': {
        name: 'Nature\'s Aromatherapy Blend',
        price: 29.99,
        icon: '🌸',
        gradient: 'linear-gradient(135deg, #e6e6fa 0%, #9370db 100%)',
        description: 'Our Nature\'s Aromatherapy Blend is a carefully curated collection of therapeutic-grade essential oils blended with carrier butters. Each drop is infused with the healing power of nature, designed to nourish your skin while calming your mind and uplifting your spirit. This multi-sensory experience transforms your skincare routine into a wellness ritual.',
        ingredients: [
            'Lavender Essential Oil',
            'Chamomile Essential Oil',
            'Rose Hip Oil',
            'Jojoba Oil',
            'Sweet Almond Oil',
            'Organic Coconut Butter Base'
        ],
        benefits: [
            'Calms and soothes skin',
            'Aromatherapy stress relief',
            'Balances skin pH',
            'Reduces anxiety and promotes sleep',
            'Anti-inflammatory',
            'Suitable for all skin types'
        ]
    }
};

// Load product details on product page
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && productData[productId]) {
        const product = productData[productId];

        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-description').textContent = product.description;

        const productImage = document.getElementById('product-image');
        productImage.style.background = product.gradient;
        productImage.innerHTML = `<span class="product-icon">${product.icon}</span>`;

        const ingredientsList = document.getElementById('ingredients-list');
        ingredientsList.innerHTML = product.ingredients.map(ing => `<li>${ing}</li>`).join('');

        const benefitsList = document.getElementById('benefits-list');
        benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join('');

        const addButton = document.getElementById('add-to-cart-btn');
        addButton.onclick = function() {
            addToCart(product.name, product.price);
        };

        document.title = `${product.name} - Deja's Butters`;
    }
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCart();

    // Load product details if on product page
    if (window.location.pathname.includes('product.html')) {
        loadProductDetails();
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
