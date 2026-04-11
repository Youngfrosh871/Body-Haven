# Body Haven Store — Website Setup Guide
## 🛍️ Your Complete E-Commerce Website

---

## 📁 FILES IN THIS PROJECT

```
📂 Body Haven Store/
 ├── index.html    ← Main website page (open this in browser)
 ├── style.css     ← All styles & colors
 ├── app.js        ← All functionality (products, cart, WhatsApp)
 └── README.md     ← This guide
```

---

## 🚀 HOW TO GET STARTED

### Step 1 — Put all 3 files in the same folder
Create a folder on your computer called **Body Haven Store** and place:
- `index.html`
- `style.css`
- `app.js`

All three MUST be in the **same folder** or the website won't work.

### Step 2 — Open the website
Double-click `index.html` and it will open in your browser.

### Step 3 — For hosting online (recommended)
Use any of these free options:
- **Netlify** → netlify.com → drag and drop your folder → get a free link
- **GitHub Pages** → github.com → free hosting
- **Vercel** → vercel.com → free and fast

---

## ✏️ HOW TO EDIT YOUR PRODUCTS

Open `app.js` and look for the section that says:

```javascript
const PRODUCTS = [
  { id: 1, name: 'Oud Royale Intense', category: 'perfume', price: 12500, emoji: '🌹', desc: '...', badge: 'Best Seller' },
  ...
]
```

### To ADD a new product:
Copy one of the existing lines and change the values:
```javascript
{ id: 24, name: 'Your Product Name', category: 'perfume', price: 8000, emoji: '🌺', desc: 'Your product description here.', badge: 'New' },
```
> **Important:** The `id` must be unique — use the next number in sequence.

### To CHANGE a price:
Find the product and change the `price` number. Example: `price: 9500`

### Categories you can use:
| Category | What it's for |
|----------|---------------|
| `perfume` | Perfumes |
| `rollon` | Roll-ons |
| `deodorant` | Deodorants & body sprays |
| `watch` | Wristwatches |
| `footwear` | Shoes & slippers |
| `underwear` | Clothing & wears |

### Badge options (the label on the product card):
- `'Best Seller'` — Orange tag
- `'New'` — Orange tag
- `'Hot'` — Orange tag
- `'Sale'` — Orange tag
- `''` — No badge (leave it empty)
- Any text you want!

---

## 📱 HOW ORDERING WORKS

1. Customer browses your website
2. They click **Add to Cart** or **Order via WhatsApp** on any product
3. They can add multiple items and adjust quantities in the cart
4. When they click **Checkout via WhatsApp**, WhatsApp opens with a pre-written message like:

```
🛒 NEW ORDER — Body Haven Store
━━━━━━━━━━━━━━━━━━
1. 🌹 Oud Royale Intense
   Qty: 2 × ₦12,500 = ₦25,000

━━━━━━━━━━━━━━━━━━
💰 TOTAL: ₦25,000

📦 Please confirm my order and send delivery details.
```

5. You receive the message and confirm delivery details!

---

## 📞 CHANGING YOUR WHATSAPP NUMBER

If you ever change your WhatsApp number, open `app.js` and find this line at the top:

```javascript
const WA_NUMBER = '2349042580839';
```

Change `2349042580839` to your new number in international format:
- Remove the `0` at the beginning
- Add `234` (Nigeria country code) at the start
- Example: `08033445566` → `2348033445566`

---

## 🎨 CHANGING COLORS

Open `style.css` and look for the `:root` section at the top:

```css
:root {
  --orange: #ff6b35;     ← Main accent color
  --purple: #7b2d8b;     ← Secondary color
  --teal: #00897b;       ← Third accent
  --gold: #f7c200;       ← Gold highlights
  --pink: #e91e8c;       ← Pink accent
  ...
}
```

Change the color codes (e.g., `#ff6b35`) to any color you prefer.

---

## 🖼️ ADDING REAL PRODUCT IMAGES

Currently the website uses emojis as product images. To use real photos:

In `app.js`, find the `renderProducts` function and replace the emoji section:
```javascript
<div class="product-img" style="background:${bg}">
  ${p.emoji}
</div>
```

Replace it with:
```javascript
<div class="product-img" style="background:${bg}; padding:0;">
  <img src="images/${p.id}.jpg" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;" 
       onerror="this.parentElement.innerHTML='${p.emoji}'" />
</div>
```

Then:
1. Create an `images/` folder inside your project folder
2. Name your photos `1.jpg`, `2.jpg`, `3.jpg` etc. matching each product's `id`

---

## 📊 ADDING MORE TESTIMONIALS

Open `index.html` and find the testimonials section. Add a new card like this:

```html
<div class="testimonial-card">
  <div class="stars">★★★★★</div>
  <p>"Your customer review here!"</p>
  <div class="customer">— Customer Name, City</div>
</div>
```

---

## 📦 ADDING REAL PRODUCT IMAGES TO HERO SLIDESHOW

Open `index.html` and find the `.slide` sections. You can replace the illustrations with real images by adding an `<img>` tag inside `.slide-visual`.

---

## ✅ FEATURES INCLUDED

- ✅ Mobile-first, 100% responsive (phones, tablets, desktops)
- ✅ Auto-rotating hero slideshow (3 slides)
- ✅ Product catalog with 23 sample products
- ✅ Shopping cart with quantity controls
- ✅ WhatsApp checkout with auto-filled order message
- ✅ Filter by category
- ✅ Product detail modal popup
- ✅ Testimonials slider
- ✅ Infinite scrolling gallery strip
- ✅ Floating WhatsApp button (always visible)
- ✅ Contact form → sends via WhatsApp
- ✅ Toast notifications
- ✅ Scroll animations
- ✅ Cart saved in browser (persists on refresh)
- ✅ Hamburger menu for mobile

---

## 🆘 NEED HELP?

Contact Body Haven Store support via WhatsApp: **09042580839**

---

*Website built for Body Haven Store, Nigeria. © 2025*
