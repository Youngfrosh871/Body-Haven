// ============================================================
//  BODY HAVEN STORE — app.js
//  WhatsApp number: 09042580839 → international: 2349042580839
// ============================================================

const WA_NUMBER = '2349042580839';

// ===== PRODUCT DATA =====
// To add/edit products: change name, price, emoji, desc, category, badge
const PRODUCTS = [
  // --- PERFUMES ---
  { id: 1,  name: 'Oud Royale Intense', category: 'perfume',   price: 12500, emoji: '🌹', desc: 'A bold, deep oud fragrance with woody undertones. Long-lasting, unisex.', badge: 'Best Seller' },
  { id: 2,  name: 'Fleur de Luxe',      category: 'perfume',   price: 9800,  emoji: '💐', desc: 'A fresh floral bouquet with notes of jasmine, rose, and musk.', badge: 'New' },
  { id: 3,  name: 'Black Opium Night',  category: 'perfume',   price: 14000, emoji: '🖤', desc: 'Sophisticated dark vanilla with black coffee and orange blossom.', badge: '' },
  { id: 4,  name: 'Citrus Splash',      category: 'perfume',   price: 7500,  emoji: '🍊', desc: 'Light, energetic citrus blend — great for daytime wear.', badge: 'Sale' },
  { id: 5,  name: 'Arabian Musk',       category: 'perfume',   price: 11000, emoji: '🌙', desc: 'Classic Middle-Eastern musk with amber and sandalwood. Rich & lasting.', badge: '' },
  { id: 6,  name: 'Pink Sugar Cloud',   category: 'perfume',   price: 8500,  emoji: '🌸', desc: 'Sweet, playful and feminine with notes of sugar and berries.', badge: 'Hot' },

  // --- ROLL-ONS ---
  { id: 7,  name: 'Gold Oud Roll-On',   category: 'rollon',    price: 2800,  emoji: '💧', desc: 'Pocket-sized luxury. Pure concentrated oud fragrance in a roll-on.', badge: 'Best Seller' },
  { id: 8,  name: 'Floral Bliss Roll-On', category: 'rollon', price: 2200,  emoji: '🌼', desc: 'Light and fresh floral roll-on, perfect for all-day freshness.', badge: '' },
  { id: 9,  name: 'Musk Collection Roll-On', category: 'rollon', price: 2500, emoji: '🌿', desc: 'Unisex musk roll-on with long-lasting clean scent.', badge: 'New' },
  { id: 10, name: 'Night Oud Roll-On',  category: 'rollon',    price: 3000,  emoji: '🌙', desc: 'Deep and mysterious. Ideal for evening events and dates.', badge: '' },

  // --- DEODORANTS ---
  { id: 11, name: 'Fresh Guard 48hr',   category: 'deodorant', price: 3200,  emoji: '🌬️', desc: 'Anti-perspirant deodorant spray. 48-hour protection, no white marks.', badge: 'Best Seller' },
  { id: 12, name: 'Sport Active Deo',   category: 'deodorant', price: 2800,  emoji: '⚡', desc: 'Made for active lifestyles. Controls sweat and odour effectively.', badge: '' },
  { id: 13, name: 'Floral Deo Stick',   category: 'deodorant', price: 2500,  emoji: '🌸', desc: 'Smooth glide stick deodorant with a soft floral scent. Unisex.', badge: 'New' },
  { id: 14, name: 'Oud Noir Body Spray', category: 'deodorant', price: 3500, emoji: '🌟', desc: 'Luxury body spray with oud and bergamot. Double as a light perfume.', badge: '' },

  // --- WATCHES ---
  { id: 15, name: 'Classic Leather Watch', category: 'watch',  price: 18500, emoji: '⌚', desc: 'Genuine leather strap, stainless steel case. Timeless unisex design.', badge: 'Premium' },
  { id: 16, name: 'Sport Chrono Watch', category: 'watch',     price: 14000, emoji: '🕐', desc: 'Water-resistant sports chronograph. Perfect for active wear.', badge: '' },
  { id: 17, name: 'Slim Gold Tone Watch', category: 'watch',   price: 22000, emoji: '🥇', desc: 'Ultra-slim profile with gold-tone case. Elegant for all occasions.', badge: 'Hot' },

  // --- FOOTWEAR ---
  { id: 18, name: 'Premium Sneakers',   category: 'footwear',  price: 25000, emoji: '👟', desc: 'Comfortable everyday sneakers. Available in multiple sizes.', badge: 'New' },
  { id: 19, name: 'Classic Loafers',    category: 'footwear',  price: 19500, emoji: '👞', desc: 'Versatile slip-on loafers suitable for casual and semi-formal looks.', badge: '' },
  { id: 20, name: 'Canvas Slip-Ons',    category: 'footwear',  price: 12000, emoji: '🥿', desc: 'Light and breathable canvas shoes. Great for casual outings.', badge: 'Sale' },

  // --- UNISEX WEARS ---
  { id: 21, name: 'Cotton Boxer Briefs (3-Pack)', category: 'underwear', price: 5500, emoji: '🩲', desc: 'Soft 100% cotton boxer briefs. Comfortable all-day fit. Unisex sizes.', badge: 'Value Pack' },
  { id: 22, name: 'Classic Round Neck Tee', category: 'underwear', price: 4500, emoji: '👕', desc: 'Premium cotton round neck t-shirt. Available in various colors.', badge: '' },
  { id: 23, name: 'Unisex Socks (6-Pack)', category: 'underwear', price: 3200, emoji: '🧦', desc: 'Breathable cotton socks. Ankle and mid-calf lengths available.', badge: 'Value Pack' },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('bhCart') || '[]');
let currentCategory = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Only run on pages that have these elements
  if (document.getElementById('productsGrid')) renderProducts();
  if (document.getElementById('shopProductsGrid')) renderShopProducts();
  if (document.getElementById('featuredGrid')) renderFeaturedProducts();
  
  updateCartUI();
  
  // Initialize sliders/components that exist on the page
  if (document.getElementById('slideshow')) initSlideshow();
  if (document.getElementById('testimonialsSlider')) initTestimonials();
  
  initNavScroll();
  initHamburger();
  
  if (document.getElementById('slideDots')) buildSlideDots();
  if (document.getElementById('testiDots')) buildTestiDots();
  if (document.getElementById('galleryTrack')) startGalleryAnimation();
  
  updateCategoryCounts();
});

// ===== IMAGE MAPPING =====
function getProductImage(productId) {
  const imageMap = {
    1: 'assets/images/download (5).jpg',
    2: 'assets/images/download (22).jpg',
    3: 'assets/images/download (12).jpg',
    4: 'assets/images/images (11).jpg',
    5: 'assets/images/download (14).jpg',
    6: 'assets/images/images (7).jpg',
    7: 'assets/images/images (12).jpg',
    8: 'assets/images/download (21).jpg',
    9: 'assets/images/images (9).jpg',
    10: 'assets/images/download (7).jpg',
    11: 'assets/images/images (8).jpg',
    12: 'assets/images/download (20).jpg',
    13: 'assets/images/images (7).jpg',
    14: 'assets/images/download (19).jpg',
    15: 'assets/images/download (8).jpg',
    16: 'assets/images/download (9).jpg',
    17: 'assets/images/download (15).jpg',
    18: 'assets/images/download (16).jpg',
    19: 'assets/images/images (1).jpg',
    20: 'assets/images/download (18).jpg',
    21: 'assets/images/download (17).jpg',
    22: 'assets/images/images (2).jpg',
    23: 'assets/images/images (3).jpg',
  };
  return imageMap[productId] || 'assets/images/download.jpg';
}

// ===== PRODUCTS =====
function renderProducts(category = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-light);font-weight:600;padding:40px 0;">No products in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const catLabel = { perfume:'Perfume', rollon:'Roll-On', deodorant:'Deodorant', watch:'Watch', footwear:'Footwear', underwear:'Wears' };

    return `
      <div class="product-card" onclick="openModal(${p.id})">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-img">
          <img src="${getProductImage(p.id)}" alt="${p.name}" class="product-image"/>
        </div>
        <div class="product-body">
          <div class="product-cat">${catLabel[p.category] || p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price"><span class="naira">₦</span>${formatPrice(p.price)}</div>
            <button class="add-to-cart" onclick="handleAddToCart(event, ${p.id})">+ Add</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(category) {
  currentCategory = category;
  renderProducts(category);

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });

  // Scroll to products section
  const el = document.getElementById('products');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateCategoryCounts() {
  const cats = ['perfume','rollon','deodorant','watch','footwear','underwear'];
  cats.forEach(c => {
    const count = PRODUCTS.filter(p => p.category === c).length;
    const el = document.getElementById(`cnt-${c}`);
    if (el) el.textContent = `${count} item${count !== 1 ? 's' : ''}`;
  });
}

function formatPrice(n) {
  return n.toLocaleString('en-NG');
}


// ===== CART =====
function handleAddToCart(event, id) {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  addToCart(id);
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`);
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  if (!cart.length) return;
  if (confirm('Clear all items from your cart?')) {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('🗑️ Cart cleared');
  }
}

function saveCart() {
  try { localStorage.setItem('bhCart', JSON.stringify(cart)); } catch(e) {}
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  // Count badge
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = count;

  // Cart items
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'flex';
  totalEl.textContent = `₦${formatPrice(total)}`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${getProductImage(item.id)}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₦${formatPrice(item.price)} each · Qty: ${item.qty}</div>
        <div class="cart-item-subtotal">Subtotal: ₦${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join('');
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);


// ===== WHATSAPP CHECKOUT =====
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('❗ Your cart is empty!');
    return;
  }

  const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  let message = '🛒 *NEW ORDER — Body Haven Store*\n\n';
  message += '━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    message += `${idx + 1}. ${item.emoji} *${item.name}*\n`;
    message += `   Qty: ${item.qty} × ₦${formatPrice(item.price)} = ₦${formatPrice(item.price * item.qty)}\n\n`;
  });
  message += '━━━━━━━━━━━━━━━━━━\n';
  message += `💰 *TOTAL: ₦${formatPrice(total)}*\n\n`;
  message += '📦 Please confirm my order and send delivery details. Thank you!';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


// ===== PRODUCT MODAL =====
function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const catLabel = { perfume:'Perfume', rollon:'Roll-On', deodorant:'Deodorant', watch:'Watch', footwear:'Footwear', underwear:'Wears' };

  const message = `Hello Body Haven! I'm interested in *${product.name}* (₦${formatPrice(product.price)}). Please give me more details.`;

  document.getElementById('modalContent').innerHTML = `
    <img src="${getProductImage(product.id)}" alt="${product.name}" class="modal-image" />
    <div class="modal-cat">${catLabel[product.category] || product.category}</div>
    <div class="modal-name">${product.name}</div>
    <div class="modal-desc">${product.desc}</div>
    <div class="modal-price"><span>₦</span>${formatPrice(product.price)}</div>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">Add to Cart 🛒</button>
      <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}" 
         class="btn btn-whatsapp" target="_blank">Order via WhatsApp 💬</a>
    </div>
  `;

  document.getElementById('productModal').classList.add('show');
  document.getElementById('modalOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('show');
  document.getElementById('modalOverlay').classList.remove('show');
  document.body.style.overflow = '';
}


// ===== CONTACT WHATSAPP =====
function sendContactWhatsApp() {
  const name = document.getElementById('cfName').value.trim();
  const phone = document.getElementById('cfPhone').value.trim();
  const msg = document.getElementById('cfMessage').value.trim();

  if (!name || !msg) {
    showToast('❗ Please fill in your name and message.');
    return;
  }

  let text = `👋 Hello Body Haven!\n\n*Name:* ${name}\n`;
  if (phone) text += `*Phone:* ${phone}\n`;
  text += `\n*Message:*\n${msg}`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}


// ===== HERO SLIDESHOW =====
let slideIndex = 0;
let slideTimer = null;
const SLIDE_DURATION = 4500;

function buildSlideDots() {
  const slides = document.querySelectorAll('.slide');
  const dotsEl = document.getElementById('slideDots');
  dotsEl.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(dot);
  });
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const total = slides.length;

  slides[slideIndex].classList.add('leaving');
  slides[slideIndex].classList.remove('active');
  dots[slideIndex]?.classList.remove('active');

  setTimeout(() => {
    slides[(slideIndex + total) % total].classList.remove('leaving');
  }, 700);

  slideIndex = ((n % total) + total) % total;
  slides[slideIndex].classList.add('active');
  slides[slideIndex].classList.remove('leaving');
  dots[slideIndex]?.classList.add('active');
}

function nextSlide() { goToSlide(slideIndex + 1); }
function prevSlide() { goToSlide(slideIndex - 1); }

function initSlideshow() {
  document.getElementById('slideNext').addEventListener('click', () => { nextSlide(); resetTimer(); });
  document.getElementById('slidePrev').addEventListener('click', () => { prevSlide(); resetTimer(); });
  startTimer();
}

function startTimer() {
  slideTimer = setInterval(nextSlide, SLIDE_DURATION);
}
function resetTimer() {
  clearInterval(slideTimer);
  startTimer();
}


// ===== TESTIMONIALS SLIDER =====
let testiIndex = 0;
let testiTimer = null;

function buildTestiDots() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dotsEl = document.getElementById('testiDots');
  dotsEl.innerHTML = '';
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToTesti(i));
    dotsEl.appendChild(dot);
  });
}

function goToTesti(n) {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('#testiDots .dot');
  cards[testiIndex].classList.remove('active');
  dots[testiIndex]?.classList.remove('active');
  testiIndex = ((n % cards.length) + cards.length) % cards.length;
  cards[testiIndex].classList.add('active');
  dots[testiIndex]?.classList.add('active');
}

function initTestimonials() {
  testiTimer = setInterval(() => goToTesti(testiIndex + 1), 4000);
}


// ===== CATEGORIES DOTS (reuse dot builder) =====
function buildCategoryDots() {
  // No dots needed for category grid — handled by click
}


// ===== NAVBAR SCROLL =====
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(255,255,255,0.98)';
      nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.12)';
    } else {
      nav.style.background = 'rgba(255,255,255,0.95)';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    }
  });
}


// ===== HAMBURGER MENU =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}


// ===== TOAST NOTIFICATION =====
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}


// ===== FEATURED PRODUCTS (Homepage) =====
function renderFeaturedProducts() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  // Show best sellers and new items (limit to 6)
  const featured = PRODUCTS.filter(p => p.badge && p.badge !== 'Value Pack').slice(0, 6);

  if (featured.length === 0) return;

  const catLabel = { perfume:'Perfume', rollon:'Roll-On', deodorant:'Deodorant', watch:'Watch', footwear:'Footwear', underwear:'Wears' };

  grid.innerHTML = featured.map(p => {
    return `
      <div class="product-card" onclick="openModal(${p.id})">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-img">
          <img src="${getProductImage(p.id)}" alt="${p.name}" class="product-image"/>
        </div>
        <div class="product-body">
          <div class="product-cat">${catLabel[p.category] || p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price"><span class="naira">₦</span>${formatPrice(p.price)}</div>
            <button class="add-to-cart" onclick="handleAddToCart(event, ${p.id})">+ Add</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


// ===== SHOP PAGE PRODUCTS =====
function renderShopProducts(category = 'all') {
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;

  const filtered = category === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  
  // Update product count
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-light);font-weight:600;padding:40px 0;">No products in this category.</p>';
    return;
  }

  const catLabel = { perfume:'Perfume', rollon:'Roll-On', deodorant:'Deodorant', watch:'Watch', footwear:'Footwear', underwear:'Wears' };

  grid.innerHTML = filtered.map(p => {
    return `
      <div class="product-card" onclick="openModal(${p.id})">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-img">
          <img src="${getProductImage(p.id)}" alt="${p.name}" class="product-image"/>
        </div>
        <div class="product-body">
          <div class="product-cat">${catLabel[p.category] || p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price"><span class="naira">₦</span>${formatPrice(p.price)}</div>
            <button class="add-to-cart" onclick="handleAddToCart(event, ${p.id})">+ Add</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterShopCategory(category) {
  renderShopProducts(category);
  
  // Update filter buttons
  document.querySelectorAll('.filter-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });
}

function sortProducts(sortType) {
  let sorted = [...PRODUCTS];
  
  switch(sortType) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'popular':
      sorted.sort((a, b) => {
        const badgeOrder = { 'Best Seller': 0, 'Hot': 1, 'New': 2, '': 3, 'Sale': 4, 'Value Pack': 5 };
        return (badgeOrder[a.badge] || 999) - (badgeOrder[b.badge] || 999);
      });
      break;
    // 'newest' is default order
  }
  
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;
  
  // Re-render with sorted products temporarily
  PRODUCTS.sort((a, b) => {
    const aIdx = sorted.findIndex(p => p.id === a.id);
    const bIdx = sorted.findIndex(p => p.id === b.id);
    return aIdx - bIdx;
  });
  
  renderShopProducts();
}


// ===== NEWSLETTER SUBSCRIPTION =====
function subscribeNewsletter() {
  const phone = document.getElementById('newsletterPhone').value.trim();
  
  if (!phone || phone.length < 10) {
    showToast('❗ Please enter a valid phone number');
    return;
  }

  const message = `Hi Body Haven! 👋 I'd like to subscribe to your WhatsApp list for exclusive deals and new arrivals. My number is ${phone}`;
  
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  
  document.getElementById('newsletterPhone').value = '';
  showToast('✅ Thanks! Our team will confirm your subscription on WhatsApp');
}


// ===== FAQ ACCORDION =====
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const isOpen = answer.style.display === 'block';
  
  // Close all other FAQs
  document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
  document.querySelectorAll('.faq-question span:last-child').forEach(span => span.textContent = '+');
  
  // Toggle current
  if (!isOpen) {
    answer.style.display = 'block';
    button.querySelector('span:last-child').textContent = '−';
  }
}


// ===== GALLERY ANIMATION =====
function startGalleryAnimation() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  
  let position = 0;
  const speed = 0.5; // pixels per frame
  
  setInterval(() => {
    position += speed;
    const maxScroll = track.scrollWidth / 2; // Half because of duplicates
    if (position > maxScroll) position = 0;
    track.style.transform = `translateX(-${position}px)`;
  }, 30);
}



// ===== SCROLL REVEAL (Intersection Observer) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const animatables = document.querySelectorAll('.why-card, .cat-card, .product-card');
  animatables.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
});
