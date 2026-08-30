# VARDHAN RESTAURANT — QR-Based Digital Menu & Ordering System

A fast, modern, mobile-first QR-based digital restaurant menu web application created for **VARDHAN RESTAURANT**.

## 📍 Restaurant Details
- **Restaurant Name:** VARDHAN RESTAURANT
- **Location:** Near Sindri, Goushala Bazar, Opposite B.I.T Main Gate
- **Phone Numbers:**
  - 📞 9523499925
  - 📞 7903203477
  - ☎️ 0326-3566200

---

## 🚀 Key Features

1. **Light & Luxurious Aesthetic**:
   - Palette: Warm Cream (`#FBF9F5`), Royal Emerald Green (`#0F4C3A`), and Warm Gold (`#C89D34`).
   - Crisp white cards with soft multi-level drop shadows and rounded corners.
   - Veg 🌱 (Green dot in square) & Non-Veg 🍗 (Red triangle in square) indicators.

2. **Complete 16 Categories & 120+ Menu Items**:
   - All items from the original menu with exact handwritten prices, full/half plate variants, piece counts, and descriptions.
   - ⭐ Popular Items hero section featuring high-res culinary images.

3. **QR Table Detection (`?table=5`)**:
   - Supports URLs like `index.html?table=5` or `?t=5` for instant table auto-assignment.
   - Built-in table picker (Tables 1 to 24) and manager QR code standee generator.

4. **Live Search & Instant Filtering**:
   - Instant search across dishes and descriptions with highlighted matches.
   - Dietary filter toggles: **All Dishes**, **Pure Veg 🌱**, **Non-Veg 🍗**.
   - Horizontally scrollable sticky category pills with automatic scroll-spy highlighting.

5. **Floating Cart & Kitchen Order System**:
   - Floating cart summary at bottom with bounce micro-animation.
   - Slide-over Cart Drawer with `[- 1 +]` steppers and cooking instructions.
   - Order submission with auto-generated receipt and 1-tap WhatsApp forwarding.

6. **Quick Contact & Map Integration**:
   - One-tap calling for all 3 phone numbers.
   - Google Maps location navigation modal.

---

## 🛠️ File Structure
```
Vardhan Restaurant menu/
├── index.html              # Main HTML5 semantic layout
├── styles.css              # Custom responsive stylesheet
├── app.js                 # Pure JS engine (Menu data, search, cart, table detection, checkout)
├── images/                 # High-resolution food photography
│   ├── chicken_biryani.jpg
│   ├── paneer_butter_masala.jpg
│   ├── paneer_tikka.jpg
│   ├── butter_chicken.jpg
│   ├── chicken_tikka.jpg
│   └── veg_biryani.jpg
└── README.md
```

---

## 🌐 Opening the Website

Open [`index.html`](file:///Users/Kunals-MacBook/Vardhan%20Restaurant%20menu/index.html) in your web browser or test table links:
- Table 5: `http://localhost:8888/index.html?table=5`
- Table 10: `http://localhost:8888/index.html?table=10`
