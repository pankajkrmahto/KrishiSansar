# 🌾 Krishi Sansar - React.js Agriculture & Farmer Support Platform

**Krishi Sansar** (कृषि संसार) is a comprehensive, responsive agricultural web platform built with **React.js**, **HTML5**, **CSS3**, and modern **JavaScript**. It empowers Indian farmers with lab-tested seeds, organic fertilizers, precision tools, machinery booking, scientific crop doctor advisory, bilingual language support (English & हिन्दी), an interactive shopping cart with village delivery calculation, and a full **Sign In / Sign Up authentication system**.

---

## 🚀 Key Features

### 1. 🔐 Sign In & Sign Up (Authentication System)
- **Sign In**: Login with Mobile Number or Email + Password (with show/hide toggle), "Remember Me", and "Forgot Password" flow.
- **Sign Up / Registration**:
  - Full Name, 10-digit mobile number (+91 prefix), optional email
  - Farmer Role selector (*🚜 Farmer / किसान, 🏪 Agri Retailer / कृषि विक्रेता, 🔬 Agronomist / कृषि वैज्ञानिक, 🌾 Student / अन्य*)
  - State & District selector (Jharkhand, Bihar, UP, MP, Punjab, etc.)
  - Password & Confirm Password verification
  - Terms of Service agreement
- **📱 Quick Mobile OTP Login**: Instant 4-digit OTP SMS verification.
- **⚡ 1-Click Demo Profiles**: Instant login as *Demo Farmer (Ramesh)* or *Demo Retailer (Sunita)* for quick testing.
- **👤 Logged-in State**:
  - Header user avatar chip with dropdown menu
  - **📦 My Orders**: Live tracking of current and past orders, item breakdown, and delivery status
  - **🚪 Sign Out** action
  - Persisted user session in `localStorage`

### 2. 🌐 Bilingual Language Switcher (English & हिन्दी)
- One-click instant translation between **English** and **हिन्दी** across all sections, headers, product details, services, doctor advisory, search tags, modals, and notifications.

### 3. 🌾 Product Catalog & Interactive Shopping Cart
- Categorized filter tabs (*All, Seeds, Fertilizers, Tools, Machinery*).
- **Product Details Quick View Modal**: Technical specifications, purity rates, crop varieties, and farmer benefits.
- **Slide-out Shopping Cart Drawer**:
  - Item list with quantity steppers (`-` / `+`) and delete action
  - **🚚 Free Farmer Delivery Tracker**: Visual progress bar indicating how close the user is to free delivery (threshold: ₹499)
  - Subtotal and total calculation
  - **Order Confirmation**: Simulates instant order booking with Order ID and Cash on Delivery (COD) confirmation
  - **Direct WhatsApp Order**: Formats selected cart items into a pre-filled WhatsApp message

### 4. 👨‍🔬 Expert Crop Doctor (Dr. Ramesh Kumar) & AI Advisor
- Profile & credentials of Senior Agronomist Dr. Ramesh Kumar.
- **Ask Your Question Box**: Farmers can type symptoms (*e.g., paddy yellow leaves, wheat rust, stem borer, soil testing*) and receive instant scientific recommendations.
- **1-on-1 Consultation Booking**: Form to schedule a phone or field consultation.

### 5. 🔍 Header Live Search with Popular Tags
- Instant search with live results across products, services, and doctor advice.
- Quick filter tags: *🌾 Seeds, 🧪 Fertilizer, 🛠️ Tools, 🚜 Tractor, 🔬 Soil Test*.

### 6. 📱 Fully Responsive Design
- Optimized for mobile phones (320px - 576px), tablets (768px - 1024px), and desktops.
- Slide-out mobile navigation drawer with touch-friendly tap targets.
- Responsive modals and cart drawer.
- Floating Action Buttons:
  - 📞 Toll-Free Helpline: `+91 98765 43210`
  - 💬 24/7 WhatsApp Kisan Chat
  - ⬆️ Back to Top scroll button

---

## 🛠️ Tech Stack

- **Frontend**: React 18 (JSX, Context API, Custom Hooks)
- **Tooling & Bundler**: Vite 5
- **Styling**: Pure Modular CSS with CSS Custom Properties, animations, and responsive media queries
- **Data & Translations**: Structured data modules (`productsData.js`, `knowledgeBase.js`, `searchItems.js`, `translations.js`)

---

## 📦 Project Structure

```
KrishiSansar/
├── public/
│   └── images/                     # Authentic agricultural images & logo
│       ├── logo.jpg
│       ├── hero-farmer.jpg
│       ├── product_seeds.jpg
│       ├── product_fertilizer.jpg
│       ├── product_tools.jpg
│       ├── product_tractor.jpg
│       ├── doctor_ramesh.jpg
│       ├── farmer_ask.jpg
│       └── about_soil_seedling.jpg
├── src/
│   ├── components/
│   │   ├── Topbar.jsx              # Helpline, location, language toggle
│   │   ├── Navbar.jsx              # Navigation, search, cart, auth user chip
│   │   ├── Hero.jsx                # Hero section, feature cards, smart banner
│   │   ├── Products.jsx            # Category tabs, 4 product cards, promo banner
│   │   ├── Services.jsx            # 6 farmer support service cards
│   │   ├── ExpertAdvisor.jsx       # Doctor card, checklist, Crop Doctor Q&A
│   │   ├── About.jsx               # Mission, 4 pillars, animated counters
│   │   ├── Contact.jsx             # Contact cards, interactive inquiry form
│   │   ├── Footer.jsx              # Links, categories, newsletter, copyright
│   │   ├── ProductModal.jsx        # Product detail quick view modal
│   │   ├── AdvisorModal.jsx        # Doctor profile & consultation booking
│   │   ├── CartDrawer.jsx          # Slide-out shopping cart with COD & WhatsApp
│   │   ├── AuthModal.jsx           # Sign In / Sign Up / OTP / Orders modal
│   │   ├── FloatingActions.jsx     # Floating WhatsApp, Call, & Top buttons
│   │   └── Toast.jsx               # Toast notifications
│   ├── context/
│   │   ├── LanguageContext.jsx     # Bilingual translation context (en/hi)
│   │   ├── CartContext.jsx         # Cart state & localStorage sync
│   │   ├── AuthContext.jsx         # User auth, login, register, orders
│   │   └── ToastContext.jsx        # Toast dispatch system
│   ├── data/
│   │   ├── productsData.js         # Products catalog with specs & benefits
│   │   ├── knowledgeBase.js        # Crop Doctor agronomy Q&A database
│   │   ├── searchItems.js          # Search index with tags & links
│   │   └── translations.js         # English & Hindi translation dictionaries
│   ├── App.jsx                     # Root application layout & scrollspy
│   ├── index.css                   # Responsive stylesheet with auth styling
│   └── main.jsx                    # React DOM entry point
├── dist/                           # Production optimized build
├── index.html                      # Root HTML entry with Google Fonts
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies & scripts
```

---

## 💻 How to Run

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Optimized assets will be created in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
