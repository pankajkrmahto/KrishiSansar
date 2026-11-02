/**
 * KRISHI SANSAR - INTERACTIVE JAVASCRIPT ENGINE
 * Agricultural Platform, Product Catalog, Advisor & Contact Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initLogo();
  initMobileMenu();
  initScrollSpy();
  initProductTabs();
  initProductModal();
  initCartDrawer();
  initAdvisorModal();
  initAskQuestion();
  initContactForm();
  initHeaderSearch();
  initNewsletter();
  initScrollTop();
  initCounterAnimation();
  initLanguageSwitch();
});

// ===================================================================
// 1. LOGO LOADER (Ensures authentic logo from uploaded image displays reliably)
// ===================================================================
// Krishi Sansar - Official Logo Asset (Base64 fallback)
const KRISHI_SANSAR_LOGO = "data:image/jpeg;base64,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";

function initLogo() {
  const logoImgs = document.querySelectorAll('.logo-img, .footer-logo-img');
  logoImgs.forEach(img => {
    // Fallback to base64 if local file fails
    img.onerror = () => {
      if (typeof KRISHI_SANSAR_LOGO !== 'undefined' && KRISHI_SANSAR_LOGO) {
        img.src = KRISHI_SANSAR_LOGO;
      }
    };
  });
}

// ===================================================================
// 2. MOBILE MENU DRAWER
// ===================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  // Close drawer on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    }
  });
}

// ===================================================================
// 2b. SCROLL SPY (Highlights active navbar link based on current section)
// ===================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }, { passive: true });
}

// ===================================================================
// 3. PRODUCT CATALOG DATA & MODALS (Bilingual Engine)
// ===================================================================
const PRODUCTS_DATA = {
  seeds: {
    en: {
      title: "Premium Certified Seeds",
      subtitle: "Wheat, Rice, Maize & Seasonal Hybrid Crops",
      image: "images/product_seeds.jpg",
      price: "₹299 / 5kg Bag",
      badge: "Bestseller",
      rating: "4.9 ★ (1,240 Reviews)",
      description: "Lab-tested high germination seeds (98%+ purity) developed in collaboration with top agricultural universities. Formulated with high vigor, drought tolerance, and built-in resistance against fungal blights and stem rot.",
      specs: [
        { label: "Germination Rate", val: "98% Guaranteed" },
        { label: "Crop Variety", val: "Sharbati Wheat / PR-126 Hybrid Paddy" },
        { label: "Maturity Duration", val: "120 - 135 Days" },
        { label: "Seed Purity", val: "99.5% Free from weed seeds" }
      ],
      benefits: [
        "25-30% higher grain yield per acre compared to traditional seeds",
        "Robust root system for high drought resistance",
        "Pre-treated with bio-fungicide to prevent early damping-off"
      ]
    },
    hi: {
      title: "प्रीमियम प्रमाणित हाइब्रिड बीज",
      subtitle: "गेहूं, धान, मक्का और मौसमी हाइब्रिड फसलें",
      image: "images/product_seeds.jpg",
      price: "₹299 / 5kg बैग",
      badge: "सर्वाधिक लोकप्रिय",
      rating: "4.9 ★ (1,240 समीक्षाएं)",
      description: "शीर्ष कृषि विश्वविद्यालयों के सहयोग से विकसित प्रयोगशाला-परीक्षित उच्च अंकुरण बीज (98%+ शुद्धता)। सूखा सहनशीलता, तेज बढ़वार और फफूंद जनित रोगों व तना गलन से लड़ने की प्राकृतिक क्षमता।",
      specs: [
        { label: "अंकुरण दर", val: "98% गारंटीकृत" },
        { label: "फसल किस्म", val: "शरबती गेहूं / PR-126 हाइब्रिड धान" },
        { label: "परिपक्वता अवधि", val: "120 - 135 दिन" },
        { label: "बीज शुद्धता", val: "99.5% खरपतवार रहित" }
      ],
      benefits: [
        "पारंपरिक बीजों की तुलना में प्रति एकड़ 25-30% अधिक अनाज पैदावार",
        "मजबूत जड़ प्रणाली जो सूखे को सहने में अत्यधिक सक्षम है",
        "शुरुआती फफूंद रोगों से बचाव के लिए बायो-फंगीसाइड से पहले से उपचारित"
      ]
    }
  },
  fertilizers: {
    en: {
      title: "Bio-Organic & NPK Fertilizers",
      subtitle: "Organic Vermicompost & Micro-Nutrient Boosters",
      image: "images/product_fertilizer.jpg",
      price: "₹450 / 10kg Bag",
      badge: "Eco-Friendly",
      rating: "4.8 ★ (980 Reviews)",
      description: "100% certified organic microbial compost enriched with Nitrogen, Phosphorus, Potassium, Zinc, and Boron. Stimulates beneficial soil mycorrhizae, boosts soil organic carbon (SOC), and restores natural soil fertility.",
      specs: [
        { label: "Nutrient Grade", val: "Balanced Organic NPK + Micro Zinc" },
        { label: "Form", val: "Granular slow-release pellets" },
        { label: "pH Neutralizer", val: "Maintains optimal 6.5 - 7.2 soil pH" },
        { label: "Certification", val: "ICAR & Organic India Approved" }
      ],
      benefits: [
        "Increases soil water retention by up to 40%",
        "Prevents soil degradation and salinity buildup",
        "Accelerates vegetative growth and robust tillering"
      ]
    },
    hi: {
      title: "जैविक एवं NPK उर्वरक",
      subtitle: "जैविक वर्मीकम्पोस्ट और सूक्ष्म पोषक तत्व बूस्टर",
      image: "images/product_fertilizer.jpg",
      price: "₹450 / 10kg बैग",
      badge: "पर्यावरण-अनुकूल",
      rating: "4.8 ★ (980 समीक्षाएं)",
      description: "100% प्रमाणित जैविक माइक्रोबियल खाद, जो नाइट्रोजन, फास्फोरस, पोटाश, जिंक और बोरॉन से भरपूर है। मिट्टी में लाभकारी सूक्ष्मजीवों को बढ़ाता है और प्राकृतिक उर्वरता बहाल करता है।",
      specs: [
        { label: "पोषक तत्व ग्रेड", val: "संतुलित जैविक NPK + सूक्ष्म जिंक" },
        { label: "प्रकार", val: "दानेदार धीमी गति से घुलने वाली गोलियां" },
        { label: "pH संतुलन", val: "मिट्टी का सही 6.5 - 7.2 pH बनाए रखता है" },
        { label: "प्रमाणीकरण", val: "ICAR और ऑर्गेनिक इंडिया द्वारा स्वीकृत" }
      ],
      benefits: [
        "मिट्टी की जल धारण क्षमता 40% तक बढ़ाता है",
        "मिट्टी का क्षरण और खारापन रोकता है",
        "पौधों के कल्ले और शाखायें तेजी से विकसित करता है"
      ]
    }
  },
  tools: {
    en: {
      title: "Modern Farming Hand Tools",
      subtitle: "Spade, Weeder, Pruner & Ergonomic Cultivators",
      image: "images/product_tools.jpg",
      price: "₹380 / Unit",
      badge: "Heavy Duty",
      rating: "4.7 ★ (650 Reviews)",
      description: "Heavy-duty forged high-carbon steel tools engineered with ergonomic, vibration-dampening handles. Designed specifically for long hours of manual weeding, furrow making, and soil loosening with minimal fatigue.",
      specs: [
        { label: "Blade Material", val: "Forged High-Carbon Steel (Rust-proof)" },
        { label: "Handle", val: "Reinforced Ash Wood with Anti-slip Grip" },
        { label: "Weight", val: "1.4 kg (Optimized ergonomic balance)" },
        { label: "Warranty", val: "3-Year Replacement Guarantee" }
      ],
      benefits: [
        "Ultra-sharp edges retain sharpness across 2 full farming seasons",
        "Corrosion-resistant powder coating prevents rust in moist soils",
        "Reduces lower back and wrist strain by over 35%"
      ]
    },
    hi: {
      title: "आधुनिक कृषि हस्त उपकरण",
      subtitle: "फावड़ा, खुरपी, दरांती और एर्गोनोमिक कल्टीवेटर",
      image: "images/product_tools.jpg",
      price: "₹380 / इकाई",
      badge: "मजबूत एवं टिकाऊ",
      rating: "4.7 ★ (650 समीक्षाएं)",
      description: "मजबूत फोर्म्ड हाई-कार्बन स्टील से बने टिकाऊ कृषि उपकरण। आरामदायक हैंडल के साथ तैयार किए गए ताकि निराई-गुड़ाई, मेड़ बनाने और मिट्टी भुरभुरी करने में थकान न हो।",
      specs: [
        { label: "ब्लेड सामग्री", val: "फोर्म्ड हाई-कार्बन स्टील (जंग-रोधी)" },
        { label: "हैंडल", val: "मजबूत लकड़ी, फिसलन-रोधी पकड़" },
        { label: "वजन", val: "1.4 किग्रा (संतुलित हल्का वजन)" },
        { label: "वारंटी", val: "3 वर्ष की रिप्लेसमेंट गारंटी" }
      ],
      benefits: [
        "अत्यधिक धारदार ब्लेड जो लगातार 2 फसल सीजन तक तेज रहते हैं",
        "जंग-रोधी पाउडर कोटिंग गीली मिट्टी में भी उपकरण सुरक्षित रखती है",
        "पीठ और कलाई के दर्द व थकान को 35% से अधिक कम करता है"
      ]
    }
  },
  machinery: {
    en: {
      title: "Agricultural Machinery & Implements",
      subtitle: "Multi-Utility Tractors, Rotavators & Power Tillers",
      image: "images/product_tractor.jpg",
      price: "₹4,75,000 (Or Rent at ₹499/hr)",
      badge: "Agri-Tech",
      rating: "4.9 ★ (420 Reviews)",
      description: "Advanced 45 HP multi-purpose diesel agricultural tractor equipped with high torque, power steering, dual-clutch transmission, and GPS fleet tracking. Available for flexible purchase or affordable hourly booking through Krishi Sansar.",
      specs: [
        { label: "Engine Power", val: "45 HP @ 2100 RPM" },
        { label: "Lifting Capacity", val: "1800 kg Hydraulic Power" },
        { label: "Fuel Economy", val: "Low diesel consumption (3.2 L/hr)" },
        { label: "Compatible Implements", val: "Rotavator, Cultivator, Seed Drill, Harvester" }
      ],
      benefits: [
        "Covers 3-4 acres of plowing in a single 8-hour shift",
        "Doorstep mechanic support within 24 hours anywhere in Jharkhand & Bihar",
        "Low EMI and government agricultural subsidy assistance"
      ]
    },
    hi: {
      title: "कृषि मशीनरी एवं उपकरण",
      subtitle: "मल्टी-यूटिलिटी ट्रैक्टर, रोटावेटर और पावर टिलर",
      image: "images/product_tractor.jpg",
      price: "₹4,75,000 (या किराया ₹499/घंटा)",
      badge: "कृषि-तकनीक",
      rating: "4.9 ★ (420 समीक्षाएं)",
      description: "उन्नत 45 HP बहुउद्देशीय डीजल ट्रैक्टर, जिसमें हाई टॉर्क, पावर स्टीयरिंग, डुअल-क्लच और जीपीएस ट्रैकिंग की सुविधा है। आसान खरीद या किफायती प्रति घंटे किराये पर उपलब्ध।",
      specs: [
        { label: "इंजन पावर", val: "45 HP @ 2100 RPM" },
        { label: "हाइड्रोलिक क्षमता", val: "1800 किग्रा लिफ्टिंग पावर" },
        { label: "डीजल खपत", val: "अत्यंत किफायती (3.2 लीटर/घंटा)" },
        { label: "संगत उपकरण", val: "रोटावेटर, कल्टीवेटर, सीड ड्रिल, हार्वेस्टर" }
      ],
      benefits: [
        "एक ही 8 घंटे की शिफ्ट में 3-4 एकड़ खेत की जुताई पूरी",
        "झारखण्ड व बिहार में 24 घंटे के अंदर खेत पर मैकेनिक सहायता",
        "सुलभ ईएमआई और सरकारी कृषि यंत्र सब्सिडी में पूरी मदद"
      ]
    }
  }
};

// ===================================================================
// 4. PRODUCT TABS FILTER
// ===================================================================
function initProductTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===================================================================
// 5. PRODUCT DETAILS MODAL (Bilingual View)
// ===================================================================
let currentModalProductKey = null;

function renderProductModalContent(productKey) {
  if (!productKey) return;
  const p = PRODUCTS_DATA[productKey];
  if (!p) return;
  const data = p[currentLang] || p.en || p;

  const imgEl = document.getElementById('modalProductImg');
  if (imgEl) imgEl.src = data.image;
  const badgeEl = document.getElementById('modalProductBadge');
  if (badgeEl) badgeEl.textContent = data.badge;
  const titleEl = document.getElementById('modalProductTitle');
  if (titleEl) titleEl.textContent = data.title;
  const subEl = document.getElementById('modalProductSubtitle');
  if (subEl) subEl.textContent = data.subtitle;
  const ratingEl = document.getElementById('modalProductRating');
  if (ratingEl) ratingEl.textContent = data.rating;
  const priceEl = document.getElementById('modalProductPrice');
  if (priceEl) priceEl.textContent = data.price;
  const descEl = document.getElementById('modalProductDesc');
  if (descEl) descEl.textContent = data.description;

  const specsTitle = document.getElementById('modalSpecsTitle');
  if (specsTitle) specsTitle.textContent = currentLang === 'hi' ? 'तकनीकी विवरण' : 'Technical Specifications';

  const benefitsTitle = document.getElementById('modalBenefitsTitle');
  if (benefitsTitle) benefitsTitle.textContent = currentLang === 'hi' ? 'किसानों के लिए मुख्य लाभ' : 'Key Farmer Benefits';

  const orderBtn = document.getElementById('modalOrderBtn');
  if (orderBtn) {
    orderBtn.innerHTML = currentLang === 'hi' 
      ? '<span>अभी ऑर्डर करें / डिलीवरी बुक करें</span> <span>➔</span>' 
      : '<span>Order Now / Book Delivery</span> <span>➔</span>';
  }

  const waBtn = document.getElementById('modalWaBtn');
  if (waBtn) {
    waBtn.innerHTML = currentLang === 'hi' 
      ? '<span>व्हाट्सएप पर चैट करें</span>' 
      : '<span>Chat on WhatsApp</span>';
  }

  // Specs list
  const specsList = document.getElementById('modalProductSpecs');
  if (specsList && data.specs) {
    specsList.innerHTML = '';
    data.specs.forEach(s => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.padding = '6px 0';
      li.style.borderBottom = '1px solid #f1f5f9';
      li.style.fontSize = '0.88rem';
      li.innerHTML = `<strong>${s.label}:</strong> <span style="color:#166534;">${s.val}</span>`;
      specsList.appendChild(li);
    });
  }

  // Benefits list
  const benefitsList = document.getElementById('modalProductBenefits');
  if (benefitsList && data.benefits) {
    benefitsList.innerHTML = '';
    data.benefits.forEach(b => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.gap = '8px';
      li.style.marginBottom = '6px';
      li.style.fontSize = '0.88rem';
      li.innerHTML = `<span style="color:#22c55e;">✔</span> <span>${b}</span>`;
      benefitsList.appendChild(li);
    });
  }
}
window.renderProductModalContent = renderProductModalContent;

function initProductModal() {
  const modalOverlay = document.getElementById('productModal');
  const closeBtn = document.getElementById('closeProductModal');
  const viewBtns = document.querySelectorAll('.view-product-btn');

  if (!modalOverlay) return;

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productKey = btn.getAttribute('data-product');
      currentModalProductKey = productKey;
      renderProductModalContent(productKey);
      modalOverlay.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  // Modal order button adds product directly to Cart
  const orderBtn = document.getElementById('modalOrderBtn');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      if (currentModalProductKey && typeof window.addToCart === 'function') {
        window.addToCart(currentModalProductKey, 1);
      } else {
        showToast(currentLang === 'hi' ? 'उत्पाद आपकी कार्ट में जोड़ा गया! 🛒' : 'Product added to your cart! 🛒', 'success');
      }
    });
  }
}

// ===================================================================
// 5b. SHOPPING CART DRAWER SYSTEM (Bilingual)
// ===================================================================
let cartItems = [
  { 
    id: 'seeds', 
    title: 'Hybrid Wheat Seeds (HD-3086)', 
    titleEn: 'Hybrid Wheat Seeds (HD-3086)', 
    titleHi: 'हाइब्रिड गेहूं के बीज (HD-3086)', 
    price: 299, 
    image: 'images/product_seeds.jpg', 
    qty: 1 
  }
];

function initCartDrawer() {
  const headerCartBtn = document.getElementById('headerCartBtn');
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const closeCartBtn = document.getElementById('closeCartDrawer');
  const cartBody = document.getElementById('cartDrawerBody');
  const cartCount = document.getElementById('headerCartCount');
  const itemsPill = document.getElementById('cartItemsPill');
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDeliveryCharge');
  const totalEl = document.getElementById('cartTotal');
  const fillBar = document.getElementById('deliveryProgressFill');
  const statusText = document.getElementById('deliveryStatusText');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const whatsAppBtn = document.getElementById('cartWhatsAppBtn');
  const quickAddBtns = document.querySelectorAll('.product-add-cart-btn');

  if (!headerCartBtn || !cartOverlay) return;

  function openCart() {
    cartOverlay.classList.add('active');
  }

  function closeCart() {
    cartOverlay.classList.remove('active');
  }

  headerCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartOverlay.classList.contains('active')) closeCart();
  });

  // Render Cart state
  function renderCart() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Update Header Badge
    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.classList.add('pop');
      setTimeout(() => cartCount.classList.remove('pop'), 200);
    }
    const itemWord = currentLang === 'hi' ? 'उत्पाद' : (totalItems === 1 ? 'Item' : 'Items');
    if (itemsPill) itemsPill.textContent = `${totalItems} ${itemWord}`;

    // Delivery calculation (Free over ₹499)
    const FREE_THRESHOLD = 499;
    const isFree = subtotal >= FREE_THRESHOLD || subtotal === 0;
    const deliveryFee = (subtotal > 0 && subtotal < FREE_THRESHOLD) ? 40 : 0;
    const finalTotal = subtotal + deliveryFee;

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (deliveryEl) {
      const freeWord = currentLang === 'hi' ? 'मुफ़्त' : 'FREE';
      deliveryEl.textContent = isFree ? freeWord : `₹${deliveryFee}`;
      deliveryEl.style.color = isFree ? '#15803d' : '#ea580c';
    }
    if (totalEl) totalEl.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;

    // Progress bar
    if (fillBar && statusText) {
      if (subtotal === 0) {
        fillBar.style.width = '0%';
        statusText.innerHTML = currentLang === 'hi'
          ? `<span>🚚 ₹${FREE_THRESHOLD} से अधिक के ऑर्डर पर मुफ़्त गांव डिलीवरी</span>`
          : `<span>🚚 Free Farmer Delivery on orders over ₹${FREE_THRESHOLD}</span>`;
      } else if (subtotal >= FREE_THRESHOLD) {
        fillBar.style.width = '100%';
        statusText.innerHTML = currentLang === 'hi'
          ? `<span>🎉 <strong>बधाई हो!</strong> आपको मिली मुफ़्त गांव डिलीवरी!</span>`
          : `<span>🎉 <strong>Congratulations!</strong> You unlocked FREE Village Delivery!</span>`;
      } else {
        const pct = Math.min(100, Math.round((subtotal / FREE_THRESHOLD) * 100));
        fillBar.style.width = `${pct}%`;
        statusText.innerHTML = currentLang === 'hi'
          ? `<span>मुफ़्त गांव डिलीवरी के लिए <strong>₹${FREE_THRESHOLD - subtotal}</strong> का और सामान जोड़ें!</span>`
          : `<span>Add <strong>₹${FREE_THRESHOLD - subtotal}</strong> more for FREE Village Delivery!</span>`;
      }
    }

    // Render Items Body
    if (!cartBody) return;
    cartBody.innerHTML = '';

    if (cartItems.length === 0) {
      const emptyTitle = currentLang === 'hi' ? 'आपकी कार्ट खाली है' : 'Your Cart is Empty';
      const emptyDesc = currentLang === 'hi'
        ? 'आपने अभी तक कोई कृषि उत्पाद या उपकरण नहीं जोड़ा है। हमारे प्रमाणित कैटलॉग को देखें!'
        : "You haven't added any agriculture products or tools yet. Explore our verified certified catalog!";
      const browseText = currentLang === 'hi' ? 'उत्पाद कैटलॉग देखें' : 'Browse Products Catalog';

      cartBody.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🌾</div>
          <h4>${emptyTitle}</h4>
          <p>${emptyDesc}</p>
          <button class="btn btn-primary" id="browseProductsBtn" style="padding:10px 20px;">
            <span>${browseText}</span>
            <span>➔</span>
          </button>
        </div>
      `;
      const browseBtn = document.getElementById('browseProductsBtn');
      if (browseBtn) {
        browseBtn.addEventListener('click', () => {
          closeCart();
          const pSec = document.getElementById('products');
          if (pSec) pSec.scrollIntoView({ behavior: 'smooth' });
        });
      }
      return;
    }

    cartItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'cart-item-card';
      const itemTitle = currentLang === 'hi' ? (item.titleHi || item.title) : (item.titleEn || item.title);
      card.innerHTML = `
        <img src="${item.image}" alt="${escapeHTML(itemTitle)}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-top">
            <h5 class="cart-item-title">${escapeHTML(itemTitle)}</h5>
            <button class="cart-remove-btn" data-id="${item.id}" title="${currentLang === 'hi' ? 'हटाएं' : 'Remove item'}">🗑️</button>
          </div>
          <div class="cart-item-meta">
            <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
            <div class="cart-qty-stepper">
              <button class="qty-btn qty-minus" data-id="${item.id}">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      `;

      // Stepper events
      card.querySelector('.qty-minus').addEventListener('click', () => {
        if (item.qty > 1) {
          item.qty--;
        } else {
          cartItems = cartItems.filter(i => i.id !== item.id);
        }
        renderCart();
      });

      card.querySelector('.qty-plus').addEventListener('click', () => {
        item.qty++;
        renderCart();
      });

      card.querySelector('.cart-remove-btn').addEventListener('click', () => {
        const removedTitle = currentLang === 'hi' ? (item.titleHi || item.title) : (item.titleEn || item.title);
        cartItems = cartItems.filter(i => i.id !== item.id);
        renderCart();
        const removeMsg = currentLang === 'hi'
          ? `"${removedTitle}" को कार्ट से हटाया गया।`
          : `Removed "${removedTitle}" from cart.`;
        showToast(removeMsg, 'info');
      });

      cartBody.appendChild(card);
    });

    // WhatsApp Direct Order Link
    if (whatsAppBtn) {
      const itemsSummary = cartItems.map(i => {
        const name = currentLang === 'hi' ? (i.titleHi || i.title) : (i.titleEn || i.title);
        return `• ${name} (मात्रा: ${i.qty}) - ₹${i.price * i.qty}`;
      }).join('%0A');
      const waMsg = currentLang === 'hi'
        ? `नमस्ते कृषि संसार! मैं एक ऑर्डर देना चाहता हूँ:%0A${itemsSummary}%0A*कुल देय राशि: ₹${finalTotal}*%0Aकृपया मेरे पते पर डिलीवरी की पुष्टि करें।`
        : `Namaste Krishi Sansar! I would like to place an order:%0A${itemsSummary}%0A*Total: ₹${finalTotal}*%0APlease confirm delivery details to my address.`;
      whatsAppBtn.href = `https://wa.me/919876543210?text=${waMsg}`;
    }
  }
  window.renderCartGlobal = renderCart;

  // Checkout button simulation
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast(currentLang === 'hi' ? 'आपकी कार्ट खाली है। कृपया पहले उत्पाद जोड़ें।' : 'Your cart is empty. Please add products first.', 'info');
        return;
      }
      const orderId = 'KS-' + Math.floor(100000 + Math.random() * 900000);
      closeCart();
      const confirmMsg = currentLang === 'hi'
        ? `🎉 ऑर्डर #${orderId} कन्फर्म हो गया! हमारी टीम कैश ऑन डिलीवरी (COD) के लिए जल्द संपर्क करेगी।`
        : `🎉 Order #${orderId} Confirmed! Our team will contact you for cash on delivery (COD) verification.`;
      showToast(confirmMsg, 'success');
      cartItems = [];
      renderCart();
    });
  }

  // Global Add To Cart Function
  window.addToCart = function(productKey, qty = 1) {
    const p = PRODUCTS_DATA[productKey];
    if (!p) return;
    const dataEn = p.en || p;
    const dataHi = p.hi || p;

    let priceNum = 299;
    if (productKey === 'seeds') priceNum = 299;
    else if (productKey === 'fertilizers') priceNum = 450;
    else if (productKey === 'tools') priceNum = 380;
    else if (productKey === 'machinery') priceNum = 499;

    const existing = cartItems.find(i => i.id === productKey);
    if (existing) {
      existing.qty += qty;
    } else {
      cartItems.push({
        id: productKey,
        title: dataEn.title,
        titleEn: dataEn.title,
        titleHi: dataHi.title,
        price: priceNum,
        image: dataEn.image,
        qty: qty
      });
    }

    renderCart();
    openCart();
    const addedMsg = currentLang === 'hi'
      ? `कार्ट में ${dataHi.title} जोड़ा गया! 🛒`
      : `Added ${dataEn.title} to your Cart! 🛒`;
    showToast(addedMsg, 'success');
  };

  // Quick Add Buttons on Cards
  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productKey = btn.getAttribute('data-product');
      window.addToCart(productKey, 1);
    });
  });

  // Initial render
  renderCart();
}

// ===================================================================
// 6. ADVISOR PROFILE MODAL (Bilingual)
// ===================================================================
function initAdvisorModal() {
  const modal = document.getElementById('advisorModal');
  const openBtn = document.getElementById('viewAdvisorBtn');
  const closeBtn = document.getElementById('closeAdvisorModal');

  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  const bookBtn = document.getElementById('bookConsultationBtn');
  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
      const consultMsg = currentLang === 'hi'
        ? 'डॉ. रमेश कुमार के साथ परामर्श स्लॉट आरक्षित! (SMS भेजा गया)'
        : 'Consultation Slot Reserved with Dr. Ramesh Kumar! (SMS confirmation sent)';
      showToast(consultMsg, 'success');
    });
  }
}

// ===================================================================
// 7. CROP DOCTOR / "ASK YOUR QUESTION" SIMULATION (Bilingual Engine)
// ===================================================================
const KNOWLEDGE_BASE = [
  {
    keywords: ["yellow", "paddy", "leaf", "leaves", "rice", "धान", "पीला", "पीली", "पत्ती", "पत्तियां"],
    answerEn: "🌱 <strong>Dr. Ramesh Kumar's Advice:</strong> Yellowing of paddy leaves is most commonly caused by <em>Nitrogen deficiency</em> or early <em>Zinc deficiency (Khaira disease)</em>. We recommend spraying 5kg Zinc Sulphate (21%) + 2.5kg slaked lime per hectare in 500L water. Ensure proper drainage for 2 days to aerate root zones.",
    answerHi: "🌱 <strong>डॉ. रमेश कुमार की सलाह:</strong> धान की पत्तियों का पीला पड़ना आमतौर पर <em>नाइट्रोजन की कमी</em> या <em>जिंक की कमी (खैरा रोग)</em> के कारण होता है। 5 किलो जिंक सल्फेट (21%) + 2.5 किलो बुझा हुआ चूना प्रति हेक्टेयर 500 लीटर पानी में घोलकर छिड़कें। जड़ों में वायु संचार के लिए 2 दिन खेत का पानी निकाल दें।"
  },
  {
    keywords: ["pest", "insect", "worm", "borer", "कीड़ा", "कीट", "सुंडी", "कीड़े"],
    answerEn: "🛡️ <strong>Dr. Ramesh Kumar's Advice:</strong> For Stem Borer or Leaf Folder attack, apply <strong>Chlorantraniliprole 18.5% SC</strong> @ 60ml per acre or spray cold-pressed Neem Oil (10,000 PPM) @ 3ml/L of water as an organic deterrent during dusk.",
    answerHi: "🛡️ <strong>डॉ. रमेश कुमार की सलाह:</strong> तना छेदक या पत्ती लपेटक कीट के प्रकोप पर <strong>क्लोरांट्रानिलीप्रोल 18.5% SC</strong> 60ml प्रति एकड़ की दर से डालें, या शाम के समय कोल्ड-प्रेस्ड नीम तेल (10,000 PPM) 3ml/लीटर पानी में मिलाकर जैविक कीटनाशक के रूप में छिड़कें।"
  },
  {
    keywords: ["wheat", "rust", "गेहूं", "रतुआ", "fungus", "blight", "फफूंद", "झुलसा"],
    answerEn: "🌾 <strong>Dr. Ramesh Kumar's Advice:</strong> Yellow/Brown rust on wheat appears as pustules on leaf blades. Immediately spray <strong>Propiconazole 25% EC</strong> @ 200ml in 200L water per acre. Avoid over-watering during cool, humid spells.",
    answerHi: "🌾 <strong>डॉ. रमेश कुमार की सलाह:</strong> गेहूं पर पीला या भूरा रतुआ (रस्ट) पत्तियों पर धब्बों के रूप में दिखता है। तुरंत <strong>प्रोपिकोनाजोल 25% EC</strong> 200ml को 200 लीटर पानी में प्रति एकड़ छिड़कें। बादल और नमी वाले मौसम में अधिक सिंचाई से बचें।"
  },
  {
    keywords: ["soil", "test", "fertilizer", "मिट्टी", "खाद", "जांच", "उर्वरक"],
    answerEn: "🧪 <strong>Dr. Ramesh Kumar's Advice:</strong> Before sowing, perform a 12-parameter soil health test. For acidic soils common in Jharkhand (pH < 6.0), incorporate agricultural lime @ 2 quintals/acre 15 days before sowing. Balance N-P-K at a 4:2:1 ratio.",
    answerHi: "🧪 <strong>डॉ. रमेश कुमार की सलाह:</strong> बुवाई से पहले 12-पैरामीटर मृदा परीक्षण अवश्य कराएं। झारखण्ड की अम्लीय मिट्टी (pH < 6.0) के लिए बुवाई से 15 दिन पहले 2 क्विंटल/एकड़ चूना खेत में मिलाएं। N-P-K का संतुलित अनुपात 4:2:1 रखें।"
  },
  {
    keywords: ["water", "drip", "irrigation", "सिंचाई", "ड्रिप", "पानी"],
    answerEn: "💧 <strong>Dr. Ramesh Kumar's Advice:</strong> Drip irrigation conserves up to 60% water while boosting vegetable crop yields by 35%. Krishi Sansar helps farmers access the 80% PM Krishi Sinchayee Yojana government subsidy. Inquire at our helpline!",
    answerHi: "💧 <strong>डॉ. रमेश कुमार की सलाह:</strong> ड्रिप सिंचाई से 60% तक पानी की बचत होती है और सब्जियों की पैदावार 35% बढ़ती है। कृषि संसार आपको 80% पीएम कृषि सिंचाई योजना सरकारी सब्सिडी प्राप्त करने में मदद करता है। हमारी हेल्पलाइन पर संपर्क करें!"
  },
  {
    keywords: ["tomato", "potato", "wilt", "टमाटर", "आलू", "रोग"],
    answerEn: "🍅 <strong>Dr. Ramesh Kumar's Advice:</strong> Early and late blight in solanaceous crops can be treated using <strong>Mancozeb 75% WP</strong> @ 2g/L or Copper Oxychloride @ 3g/L. Discard infected lower leaves and avoid overhead sprinkler watering.",
    answerHi: "🍅 <strong>डॉ. रमेश कुमार की सलाह:</strong> टमाटर और आलू में अगेती व पछेती झुलसा रोग के लिए <strong>मैनकोजेब 75% WP</strong> 2 ग्राम/लीटर या कॉपर ऑक्सीक्लोराइड 3 ग्राम/लीटर का छिड़काव करें। रोगग्रस्त निचली पत्तियों को तुरंत हटा दें।"
  }
];

function initAskQuestion() {
  const askBtn = document.getElementById('askQuestionBtn');
  const askInput = document.getElementById('askQuestionInput');
  const answerCard = document.getElementById('aiAnswerCard');
  const answerBody = document.getElementById('aiAnswerBody');

  if (!askBtn || !askInput) return;

  function handleQuestion() {
    const query = askInput.value.trim().toLowerCase();
    if (!query) {
      showToast(currentLang === 'hi' ? 'कृपया पहले अपनी फसल का सवाल लिखें।' : 'Please type your farming question first.', 'info');
      askInput.focus();
      return;
    }

    // Match keywords
    let matchedItem = null;
    for (let item of KNOWLEDGE_BASE) {
      if (item.keywords.some(kw => query.includes(kw))) {
        matchedItem = item;
        break;
      }
    }

    let finalAnswer = '';
    if (matchedItem) {
      finalAnswer = currentLang === 'hi' ? matchedItem.answerHi : matchedItem.answerEn;
    } else {
      finalAnswer = currentLang === 'hi'
        ? `🌾 <strong>डॉ. रमेश कुमार की सलाह:</strong> आपके सवाल <em>"${escapeHTML(askInput.value.trim())}"</em> के लिए धन्यवाद। हमारे कृषि वैज्ञानिकों की सलाह है कि खेत में जैविक खाद की मात्रा बढ़ाएं, प्रमाणित बायो-स्टिमुलेंट का उपयोग करें और नमी बनाए रखें। आपका सवाल दर्ज कर लिया गया है; हमारे विशेषज्ञ 2 घंटे के भीतर आपसे फोन पर संपर्क करेंगे।`
        : `🌾 <strong>Dr. Ramesh Kumar's Advice:</strong> Thank you for your question regarding <em>"${escapeHTML(askInput.value.trim())}"</em>. Our agronomists recommend maintaining soil organic matter, applying certified biostimulants, and keeping soil moisture consistent. We have logged your query; an expert will call your registered number within 2 hours.`;
    }

    answerBody.innerHTML = finalAnswer;
    answerCard.style.display = 'block';
    answerCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(currentLang === 'hi' ? 'कृषि वैज्ञानिक की सलाह प्राप्त हुई!' : 'Agronomist answer generated successfully!', 'success');
  }

  askBtn.addEventListener('click', handleQuestion);

  askInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleQuestion();
    }
  });
}

// ===================================================================
// 8. INTERACTIVE CONTACT FORM WITH QUICK TOPICS & SUCCESS STATE
// ===================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const successBox = document.getElementById('contactSuccessBox');
  const successDesc = document.getElementById('successDesc');
  const sendAnotherBtn = document.getElementById('sendAnotherBtn');
  const topicInput = document.getElementById('contactTopic');
  const topicPills = document.querySelectorAll('.topic-pill');
  const messageInput = document.getElementById('contactMessage');
  const charCounter = document.getElementById('charCounter');

  if (!form) return;

  // Bilingual Topic templates
  const TOPIC_TEMPLATES = {
    en: {
      'General Inquiry': '',
      'Seeds Booking': 'Hello Krishi Sansar, I want to inquire about seed varieties (paddy/wheat/mustard), germination rates, and delivery to my village.',
      'Fertilizers': 'Hello, I want to purchase organic vermicompost / NPK fertilizers. Please share pricing and bulk delivery options.',
      'Machinery': 'Hello, I need information regarding tractor rental or tillage implements (rotavator/cultivator).',
      'Doctor Advice': 'Hello Dr. Ramesh Kumar, I am facing an issue with my standing crop. Symptoms: '
    },
    hi: {
      'General Inquiry': '',
      'Seeds Booking': 'नमस्ते कृषि संसार, मुझे उन्नत बीजों (धान/गेहूं/सरसों), अंकुरण दर और गांव तक डिलीवरी के बारे में जानकारी चाहिए।',
      'Fertilizers': 'नमस्ते, मुझे जैविक वर्मीकम्पोस्ट / NPK खाद खरीदनी है। कृपया थोक मूल्य और डिलीवरी की जानकारी दें।',
      'Machinery': 'नमस्ते, मुझे किराए पर ट्रैक्टर या जुताई उपकरण (रोटावेटर/कल्टीवेटर) की बुकिंग करनी है।',
      'Doctor Advice': 'नमस्ते डॉ. रमेश कुमार, मेरी खड़ी फसल में रोग के लक्षण दिख रहे हैं। समस्या का विवरण: '
    }
  };

  topicPills.forEach(pill => {
    pill.addEventListener('click', () => {
      topicPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const topic = pill.getAttribute('data-topic');
      if (topicInput) topicInput.value = topic;

      // Auto-suggest template if textarea is empty or holds a previous template
      const currentTemplates = TOPIC_TEMPLATES[currentLang] || TOPIC_TEMPLATES.en;
      const allTemplates = [...Object.values(TOPIC_TEMPLATES.en), ...Object.values(TOPIC_TEMPLATES.hi)];
      if (messageInput && (!messageInput.value || allTemplates.includes(messageInput.value))) {
        messageInput.value = currentTemplates[topic] || '';
        updateCharCounter();
      }
    });
  });

  // Character counter for message textarea
  function updateCharCounter() {
    if (charCounter && messageInput) {
      charCounter.innerText = `${messageInput.value.length} / 500`;
      if (messageInput.value.length >= 480) {
        charCounter.style.color = '#ef4444';
      } else {
        charCounter.style.color = '#94a3b8';
      }
    }
  }

  if (messageInput) {
    messageInput.addEventListener('input', updateCharCounter);
  }

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim() || 'Not provided';
    const message = messageInput ? messageInput.value.trim() : '';
    const topic = topicInput ? topicInput.value : 'General Inquiry';

    if (!name || !email || !message) {
      showToast(currentLang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड (*) भरें।' : 'Please fill out all required fields marked with *.', 'info');
      return;
    }

    // Button loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = currentLang === 'hi' ? '<span>संदेश भेजा जा रहा है... ⏳</span>' : '<span>Sending Message... ⏳</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Show in-card success box
      if (successBox) {
        form.style.display = 'none';
        successBox.style.display = 'block';
        if (successDesc) {
          if (currentLang === 'hi') {
            successDesc.innerHTML = `
              धन्यवाद, <strong>${escapeHTML(name)}</strong>! आपकी पूछताछ <strong>"${escapeHTML(topic)}"</strong> प्राप्त हो गई है।<br>
              एक पुष्टि संदेश <em>${escapeHTML(email)}</em> पर भेजा गया है। हमारे कृषि विशेषज्ञ आपसे शीघ्र ही फोन या व्हाट्सएप पर संपर्क करेंगे।
            `;
          } else {
            successDesc.innerHTML = `
              Thank you, <strong>${escapeHTML(name)}</strong>! Your inquiry regarding <strong>"${escapeHTML(topic)}"</strong> has been received.<br>
              A confirmation has been sent to <em>${escapeHTML(email)}</em>. Our agronomy team will call or WhatsApp you shortly.
            `;
          }
        }
      }

      const toastSuccess = currentLang === 'hi'
        ? `धन्यवाद ${name}! "${topic}" के संबंध में आपका संदेश सफलतापूर्वक भेजा गया।`
        : `Thank you ${name}! Your message regarding "${topic}" was sent successfully.`;
      showToast(toastSuccess, 'success');
    }, 1000);
  });

  // "Send Another Message" button handler
  if (sendAnotherBtn && successBox) {
    sendAnotherBtn.addEventListener('click', () => {
      form.reset();
      updateCharCounter();
      successBox.style.display = 'none';
      form.style.display = 'block';
      // Reset topic pills to default
      topicPills.forEach((p, idx) => p.classList.toggle('active', idx === 0));
      if (topicInput) topicInput.value = 'General Inquiry';
    });
  }
}

// ===================================================================
// 9. COMPACT TOP HEADER SEARCH (Bilingual)
// ===================================================================
function initHeaderSearch() {
  const searchWrapper = document.getElementById('headerSearchWrapper');
  const searchBtn = document.getElementById('headerSearchBtn');
  const searchDropdown = document.getElementById('headerSearchDropdown');
  const searchInput = document.getElementById('headerSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const resultsContainer = document.getElementById('headerSearchResults');
  const quickTags = document.querySelectorAll('.quick-tag-btn');

  if (!searchBtn || !searchDropdown || !searchInput) return;

  // Toggle Dropdown on Header Search Button Click
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = searchDropdown.classList.toggle('active');
    searchBtn.classList.toggle('active', isActive);

    if (isActive) {
      setTimeout(() => {
        searchInput.focus();
        if (searchInput.value.trim().length > 0) {
          performSearch(searchInput.value.trim());
        }
      }, 80);
    }
  });

  // Prevent clicks inside dropdown from bubbling up and closing it
  searchDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Clear button logic
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput.value.trim().length > 0) {
        searchInput.value = '';
        renderPlaceholder();
        searchInput.focus();
      } else {
        closeSearch();
      }
    });
  }

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (searchWrapper && !searchWrapper.contains(e.target)) {
      closeSearch();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchDropdown.classList.contains('active')) {
      closeSearch();
    }
  });

  // Quick filter tags
  quickTags.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query') || btn.innerText;
      searchInput.value = query;
      performSearch(query);
      searchInput.focus();
    });
  });

  // Bilingual Search dataset
  const SEARCH_ITEMS = [
    { titleEn: "Hybrid Wheat Seeds (HD-3086)", titleHi: "हाइब्रिड गेहूं के बीज (HD-3086)", categoryEn: "Products • Seeds", categoryHi: "उत्पाद • बीज", icon: "🌾", link: "#products", kw: ["wheat", "seeds", "गेहूं", "बीज", "hd3086"] },
    { titleEn: "Paddy Super-Yield Seeds (PR-126)", titleHi: "धान अधिक उपज बीज (PR-126)", categoryEn: "Products • Seeds", categoryHi: "उत्पाद • बीज", icon: "🌾", link: "#products", kw: ["paddy", "rice", "seeds", "धान", "चावल", "बीज", "pr126"] },
    { titleEn: "Hybrid Maize & Corn Seeds", titleHi: "हाइब्रिड मक्का एवं कॉर्न बीज", categoryEn: "Products • Seeds", categoryHi: "उत्पाद • बीज", icon: "🌽", link: "#products", kw: ["maize", "corn", "seeds", "मक्का", "बीज"] },
    { titleEn: "Mustard Gold High-Oil Seeds", titleHi: "सरसों गोल्ड अधिक तेल बीज", categoryEn: "Products • Seeds", categoryHi: "उत्पाद • बीज", icon: "🌻", link: "#products", kw: ["mustard", "seeds", "सरसों", "बीज"] },
    { titleEn: "Bio-Organic NPK Vermicompost", titleHi: "जैविक NPK वर्मीकम्पोस्ट खाद", categoryEn: "Products • Fertilizers", categoryHi: "उत्पाद • खाद एवं उर्वरक", icon: "🧪", link: "#products", kw: ["fertilizer", "vermicompost", "npk", "खाद", "उर्वरक", "केंचुआ"] },
    { titleEn: "Zinc & Boron Micro-Nutrient Spray", titleHi: "जिंक एवं बोरॉन सूक्ष्म पोषक स्प्रे", categoryEn: "Products • Fertilizers", categoryHi: "उत्पाद • खाद एवं उर्वरक", icon: "🧪", link: "#products", kw: ["zinc", "boron", "spray", "जिंक", "बोरॉन", "खाद"] },
    { titleEn: "Granular Urea & DAP Mix", titleHi: "दानेदार यूरिया एवं डीएपी मिश्रण", categoryEn: "Products • Fertilizers", categoryHi: "उत्पाद • खाद एवं उर्वरक", icon: "🧪", link: "#products", kw: ["urea", "dap", "यूरिया", "डीएपी", "खाद"] },
    { titleEn: "Heavy Duty Forged Farming Spade (Phawra)", titleHi: "मजबूत लोहे का फावड़ा (कुदाल)", categoryEn: "Products • Tools", categoryHi: "उत्पाद • कृषि उपकरण", icon: "🛠️", link: "#products", kw: ["spade", "phawra", "tools", "फावड़ा", "कुदाल", "उपकरण"] },
    { titleEn: "Ergonomic Weeding Khurpi & Trowel", titleHi: "निराई-गुड़ाई के लिए खुरपी", categoryEn: "Products • Tools", categoryHi: "उत्पाद • कृषि उपकरण", icon: "🛠️", link: "#products", kw: ["khurpi", "weeder", "tools", "खुरपी", "उपकरण"] },
    { titleEn: "Multi-Utility 45 HP Tractor Rental", titleHi: "45 HP मल्टी-यूटिलिटी ट्रैक्टर किराया", categoryEn: "Products • Machinery", categoryHi: "उत्पाद • कृषि मशीनरी", icon: "🚜", link: "#products", kw: ["tractor", "rental", "machinery", "ट्रैक्टर", "किराया", "मशीनरी"] },
    { titleEn: "Rotavator & Cultivator Attachments", titleHi: "रोटावेटर एवं कल्टीवेटर यंत्र", categoryEn: "Products • Machinery", categoryHi: "उत्पाद • कृषि मशीनरी", icon: "🚜", link: "#products", kw: ["rotavator", "cultivator", "machinery", "रोटावेटर", "कल्टीवेटर"] },
    { titleEn: "Soil Health Testing & pH Laboratory", titleHi: "मृदा स्वास्थ्य जांच एवं प्रयोगशाला", categoryEn: "Services • Testing", categoryHi: "सेवाएं • मृदा परीक्षण", icon: "🔬", link: "#services", kw: ["soil", "test", "laboratory", "मिट्टी", "मृदा", "जांच", "लैब"] },
    { titleEn: "Crop Disease Diagnosis & Treatment", titleHi: "फसल रोग निदान एवं उपचार", categoryEn: "Services • Advisory", categoryHi: "सेवाएं • रोग नियंत्रण", icon: "🛡️", link: "#services", kw: ["disease", "diagnosis", "cure", "रोग", "बीमारी", "इलाज", "निदान"] },
    { titleEn: "Smart Drip & Sprinkler Irrigation", titleHi: "स्मार्ट ड्रिप एवं स्प्रिंकलर सिंचाई", categoryEn: "Services • Water", categoryHi: "सेवाएं • सिंचाई समाधान", icon: "💧", link: "#services", kw: ["drip", "irrigation", "water", "ड्रिप", "सिंचाई", "पानी"] },
    { titleEn: "Online Seed & Tool Order Booking", titleHi: "ऑनलाइन बीज एवं टूल्स ऑर्डर बुकिंग", categoryEn: "Services • Booking", categoryHi: "सेवाएं • ऑर्डर बुकिंग", icon: "🛒", link: "#services", kw: ["order", "booking", "ऑर्डर", "बुकिंग"] },
    { titleEn: "Farmer Practical Skill Training", titleHi: "किसान व्यावहारिक प्रशिक्षण कार्यशाला", categoryEn: "Services • Education", categoryHi: "सेवाएं • किसान प्रशिक्षण", icon: "🎓", link: "#services", kw: ["training", "workshop", "प्रशिक्षण", "ट्रेनिंग", "कार्यशाला"] },
    { titleEn: "Dr. Ramesh Kumar (Agriculture Expert)", titleHi: "डॉ. रमेश कुमार (वरिष्ठ कृषि वैज्ञानिक)", categoryEn: "Advisor • Crop Science", categoryHi: "सलाहकार • फसल विज्ञान", icon: "👨‍🔬", link: "#advisor", kw: ["doctor", "ramesh", "advisor", "expert", "डॉक्टर", "रमेश", "सलाहकार", "वैज्ञानिक"] },
    { titleEn: "Ask Farming Question to Experts", titleHi: "कृषि विशेषज्ञों से सवाल पूछें", categoryEn: "Advisor • Q&A", categoryHi: "सलाहकार • प्रश्नोत्तर", icon: "💬", link: "#askAdvisorForm", kw: ["ask", "question", "सवाल", "पूछें", "प्रश्न"] }
  ];

  function renderPlaceholder() {
    const text = currentLang === 'hi' 
      ? 'कृषि उत्पाद, बीज, खाद या सलाह खोजने के लिए लिखें...'
      : 'Type to search agricultural products, seeds, fertilizers, or services...';
    resultsContainer.innerHTML = `<p class="search-placeholder-text">${text}</p>`;
  }

  function closeSearch() {
    searchDropdown.classList.remove('active');
    searchBtn.classList.remove('active');
  }

  function performSearch(rawQuery) {
    const query = rawQuery.trim().toLowerCase();
    resultsContainer.innerHTML = '';

    if (!query) {
      renderPlaceholder();
      return;
    }

    const matches = SEARCH_ITEMS.filter(item => {
      const matchEn = item.titleEn.toLowerCase().includes(query) || item.categoryEn.toLowerCase().includes(query);
      const matchHi = item.titleHi.toLowerCase().includes(query) || item.categoryHi.toLowerCase().includes(query);
      const matchKw = item.kw && item.kw.some(k => k.toLowerCase().includes(query));
      return matchEn || matchHi || matchKw;
    });

    if (matches.length === 0) {
      const noMatchTitle = currentLang === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No matches found';
      const noMatchSub = currentLang === 'hi'
        ? `"${escapeHTML(rawQuery)}" के लिए कोई कृषि उत्पाद या सेवा नहीं मिली।`
        : `No products or services found for "${escapeHTML(rawQuery)}".`;
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 18px 10px; color: #64748b;">
          <div style="font-size: 1.6rem; margin-bottom: 4px;">🔍</div>
          <div style="font-weight: 600; font-size: 0.9rem; color: #0f172a;">${noMatchTitle}</div>
          <div style="font-size: 0.8rem; margin-top: 4px;">${noMatchSub}</div>
        </div>
      `;
      return;
    }

    const list = document.createElement('div');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '4px';

    matches.forEach(item => {
      const a = document.createElement('a');
      a.href = item.link;
      a.className = 'search-result-item';
      const title = currentLang === 'hi' ? item.titleHi : item.titleEn;
      const category = currentLang === 'hi' ? item.categoryHi : item.categoryEn;
      a.innerHTML = `
        <span class="result-icon">${item.icon}</span>
        <div class="result-info">
          <div class="result-title">${escapeHTML(title)}</div>
          <div class="result-category">${escapeHTML(category)}</div>
        </div>
        <span class="result-arrow">→</span>
      `;

      a.addEventListener('click', (e) => {
        closeSearch();
        const targetId = item.link.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      list.appendChild(a);
    });

    resultsContainer.appendChild(list);
  }

  // Live input listening
  searchInput.addEventListener('input', () => {
    performSearch(searchInput.value);
  });

  // Enter key press triggers smooth scroll to top result if available
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstResult = resultsContainer.querySelector('.search-result-item');
      if (firstResult) {
        firstResult.click();
      }
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// ===================================================================
// 10. NEWSLETTER
// ===================================================================
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    if (!input || !input.value.trim()) return;

    showToast('Subscribed to Krishi Sansar Kisan Bulletin!', 'success');
    input.value = '';
  });
}

// ===================================================================
// 11. SCROLL TO TOP & NAVBAR SHADOW
// ===================================================================
function initScrollTop() {
  const topBtn = document.getElementById('scrollTopBtn');
  const header = document.querySelector('.main-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }

    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 14px rgba(0, 0, 0, 0.06)';
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===================================================================
// 12. ANIMATED STAT COUNTER
// ===================================================================
function initCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-target'), 10);
          const suffix = num.getAttribute('data-suffix') || '';
          let count = 0;
          const step = Math.ceil(target / 60);

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              num.textContent = target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              num.textContent = count.toLocaleString() + suffix;
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.querySelector('.about-stats-row');
  if (statSection) observer.observe(statSection);
}

// ===================================================================
// 13. FULL COMPREHENSIVE BILINGUAL LANGUAGE SYSTEM (English / हिन्दी)
// ===================================================================
let currentLang = 'en';

const I18N = {
  en: {
    langBtn: 'हिन्दी',
    toastMsg: 'Switched to English language.',
    topbarHelpline: 'Toll-Free Helpline: <strong>+91 98765 43210</strong> (Mon - Sat, 9AM - 6PM)',
    topbarLocation: 'Ranchi, Jharkhand, India',
    topbarEmail: 'info@krishisansar.in',

    // Nav & Header
    navHome: 'Home',
    navProducts: 'Products',
    navServices: 'Services',
    navAdvisor: 'Expert Advisor',
    navAbout: 'About',
    navContact: 'Contact',
    cartLabel: 'Cart',
    searchPlaceholder: 'Search seeds, fertilizers, tools, advisor...',
    popularLabel: 'Popular:',
    quickTag1: '🌾 Seeds',
    quickTag2: '🧪 Fertilizer',
    quickTag3: '🛠️ Tools',
    quickTag4: '🚜 Tractor',
    quickTag5: '🔬 Soil Test',

    // Hero
    heroBadge: 'Grow Together • Prosper Together',
    heroTitleKrishi: 'Krishi',
    heroTitleSansar: 'Sansar',
    heroDesc: 'Your Trusted Partner for Agriculture Products, Services & Expert Advice',
    heroSubtext: 'Empowering Indian farmers with lab-tested seeds, organic fertilizers, precision agri-tools, and 24/7 scientific guidance for superior crop yield and sustainable prosperity.',
    heroShopBtn: '<span>Shop Now</span> <span>➔</span>',
    heroAdviceBtn: '<span>Get Expert Advice</span>',
    pillLeftLabel: 'Trusted Platform',
    pillLeftVal: '4.8/5 (50k+ Farmers)',
    pillRightLabel: 'Quality Assured',
    pillRightVal: '100% Certified Inputs',
    feat1Title: 'Premium Seeds',
    feat1Sub: 'High Germination & Purity',
    feat2Title: 'Quality Fertilizers',
    feat2Sub: 'Organic & NPK Bio-Boosters',
    feat3Title: 'Modern Tools',
    feat3Sub: 'Durable, Ergonomic & Tech',
    feat4Title: 'Expert Advice',
    feat4Sub: '24/7 Crop Doctor Help',
    smartBannerTitle: 'Smart Farming for a Better Tomorrow',
    smartBannerSub: 'Affordable tech, mechanization & weather-smart advisory for modern Indian agriculture.',
    smartBannerBtn: 'Explore Solutions ➔',

    // Products
    productsTag: 'Our Products',
    productsSubtitle: 'High Quality Agricultural Products for Better Yield',
    filterAll: 'All Products',
    filterSeeds: '🌾 Seeds',
    filterFert: '🧪 Fertilizers',
    filterTools: '🛠️ Tools',
    filterMach: '🚜 Machinery',
    badgeSeeds: 'Bestseller',
    badgeFert: 'Organic',
    badgeTools: 'Durable',
    badgeMach: 'Agri-Tech',
    cardSeedsTitle: 'Seeds',
    cardSeedsDesc: 'Wheat, Rice, Maize & More certified hybrid varieties for bumper harvests.',
    cardSeedsPrice: 'From ₹299 / 5kg',
    cardFertTitle: 'Fertilizers',
    cardFertDesc: 'Organic & Chemical bio-nutrients, vermicompost & micro-mineral packs.',
    cardFertPrice: 'From ₹450 / 10kg',
    cardToolsTitle: 'Tools',
    cardToolsDesc: 'Spade, Hoe, Sickle & More forged rust-proof ergonomic field tools.',
    cardToolsPrice: 'From ₹380 / unit',
    cardMachTitle: 'Machinery',
    cardMachDesc: 'Tractors, Rotavators & Power Tillers available for purchase & rental.',
    cardMachPrice: 'Rent ₹499 / hr',
    viewDetailsBtn: '<span>View Details</span> <span>➔</span>',
    addCartBtn: '<span>+ Cart 🛒</span>',
    promoBannerTitle: 'Best Quality Products at Affordable Prices',
    promoBannerSub: 'Direct factory-to-farm dispatch with fast delivery & cash on delivery (COD).',
    shopAllBtn: '<span>Shop All Products</span> <span>➔</span>',

    // Product Modal
    modalSpecsTitle: 'Technical Specifications',
    modalBenefitsTitle: 'Key Farmer Benefits',
    modalOrderBtn: '<span>Order Now / Book Delivery</span> <span>➔</span>',
    modalWaBtn: '<span>Chat on WhatsApp</span>',

    // Services
    servicesTag: 'Our Services',
    servicesSubtitle: '✦ Complete Support for Farmers ✦',
    serv1Title: 'Crop Advisory',
    serv1Desc: 'Get expert advice for better yield with customized crop calendars, pest warning systems, and climate adaptation tips.',
    serv1Link: 'Learn More ➔',
    serv2Title: 'Order Booking',
    serv2Desc: 'Book seeds, tools & services easily via our platform or WhatsApp with guaranteed doorstep delivery across rural pin codes.',
    serv2Link: 'Book Now ➔',
    serv3Title: 'Soil Testing',
    serv3Desc: 'Know your soil, grow better. Accurate laboratory testing of N-P-K, pH levels, organic carbon, and micro-nutrient ratios.',
    serv3Link: 'Test Soil ➔',
    serv4Title: 'Disease Control',
    serv4Desc: 'Protect your crops with expert tips. Early identification of leaf blight, stem borers, and root rot with organic remedies.',
    serv4Link: 'Protect Crops ➔',
    serv5Title: 'Irrigation Solutions',
    serv5Desc: 'Smart water solutions for farming. High efficiency drip kits, solar pumps, and automated micro-sprinkler installations.',
    serv5Link: 'Save Water ➔',
    serv6Title: 'Farming Training',
    serv6Desc: 'Learn modern farming techniques through practical field demonstrations, drone spraying workshops, and organic certification guides.',
    serv6Link: 'Join Training ➔',
    healthySoilTitle: '"Healthy Soil... Healthy Harvest..."',
    healthySoilDesc: 'Nurturing the mother earth to ensure prosperous families and food security for all of India.',
    consultAgronomistBtn: 'Consult Agronomist ➔',

    // Advisor
    advisorTag: 'Our Expert Advisor',
    advisorSubtitle: 'Get Expert Advice from Our Agriculture Experts',
    docName: 'Dr. Ramesh Kumar',
    docDesignation: 'Senior Agriculture Expert & Plant Pathologist',
    docRating: '4.8 (5k+ Advice Given)',
    docExp: '<strong>15+ Years of Experience</strong> in Crop Science, Soil Health & Precision Farming.',
    docViewBtn: '<span>View Profile</span> <span>➔</span>',
    check1: 'Crop Disease Solution & Organic Remediation',
    check2: 'Best Crop Selection Based on Soil & Climate',
    check3: 'Soil Health Tips & Nutrient Balancing',
    check4: 'Modern Farming & High-Density Cultivation Techniques',
    check5: 'Seasonal Guidance & Real-Time Weather Forecasts',
    askTitle: 'Ask Your Question',
    askSub: 'Get instant scientific recommendations from Dr. Ramesh',
    askPlaceholder: "Type your farming question... (e.g. 'Paddy leaves turning yellow', 'Wheat rust cure')",
    askBtn: '<span>Ask Now</span> <span>➔</span>',
    aiHeaderTitle: 'Instant Crop Doctor Recommendation',

    // Advisor Modal
    advisorModalName: 'Dr. Ramesh Kumar',
    advisorModalDesig: 'Senior Agriculture Scientist & Agronomy Head',
    advisorModalRating: '★★★★★ 4.8 Rating (5,000+ Consultations)',
    advisorModalBio: '<strong>Qualifications & Research:</strong><br>• Ph.D. in Soil Science & Agronomy (ICAR - IARI, New Delhi)<br>• Former Principal Scientist at Birsa Agricultural University, Ranchi<br>• Specialization: Organic Soil Regeneration, Paddy Stem Borer Eradication, High-Density Vegetable Cropping.<br>• Published 40+ Research Papers on sustainable smallholder farming in Eastern India.',
    advisorModalConsultTitle: 'Book a 1-on-1 Phone / Field Consultation',
    advisorModalNameInput: 'Farmer Name',
    advisorModalPhoneInput: 'Mobile Number',
    advisorModalTopicDefault: 'Select Topic of Consultation',
    advisorModalTopic1: 'Crop Disease & Pest Diagnosis',
    advisorModalTopic2: 'Soil Health & Fertilizer Recommendation',
    advisorModalTopic3: 'Seasonal Crop Selection',
    advisorModalTopic4: 'Drip Irrigation & Subsidy Guidance',
    advisorModalSubmitBtn: '<span>Confirm Consultation Slot (Free)</span> <span>➔</span>',

    // About
    aboutTag: 'About Krishi Sansar',
    aboutSubtitle: 'Our Mission is to Support Farmers and Build a Green, Prosperous India',
    aboutStory: '<strong>Krishi Sansar</strong> is an online platform for farmers, offering quality seeds, fertilizers, farm tools, and expert crop advice. Our aim is to support farmers with smart and modern farming solutions for a better tomorrow.',
    pillar1: 'Trusted by Thousands of Farmers across 15+ Indian states',
    pillar2: 'Quality & Affordable Products sourced directly from certified labs',
    pillar3: 'Expert Guidance 24/7 by accredited agronomists and soil scientists',
    pillar4: 'Support for Sustainable Farming preserving mother earth\'s health',
    stat1Label: 'Happy Farmers',
    stat2Label: 'Quality Products',
    stat3Label: 'Crop Success Rate',
    stat4Label: 'States Covered',
    aboutKnowMore: '<span>Know More</span> <span>➔</span>',
    aboutBadge: '100% Sustainable & Eco-Friendly',

    // Contact
    contactTag: 'Contact Us',
    contactSubtitle: "We're here to help you!",
    contactDesc: 'Have questions about seeds, fertilizers, farm tools, or crop health? Our agricultural specialists and support staff are here to assist every farmer friend.',
    contactPhoneStatus: '● Active Now',
    contactPhoneSub: 'Mon - Sat, 9AM - 6PM • Toll-Free Kisan Helpline',
    contactEmailStatus: '⚡ ~2h reply',
    contactEmailSub: 'Direct response for product orders & inquiries',
    contactLocSub: 'Regional Agri-Hub & Distribution Headquarters',
    contactWaTitle: 'Instant WhatsApp Kisan Chat',
    contactWaSub: 'Direct advisory & quick order queries • 24/7',
    contactWaBadge: 'Chat ➔',
    followUsTitle: 'Follow Us',
    topicLabel: 'Inquiring About:',
    topicGen: '🌿 General',
    topicSeeds: '🌾 Seeds',
    topicFert: '🧪 Fertilizer',
    topicMach: '🚜 Tractor & Tools',
    topicAdv: '👨‍🔬 Advisor',
    placeholderName: 'Your Name *',
    placeholderEmail: 'Your Email *',
    placeholderPhone: 'Your Mobile Number (+91 ...)',
    placeholderMsg: 'Your Message *',
    submitMsgBtn: '<span>Send Message</span> <span class="btn-arrow-icon">➔</span>',
    togetherSlogan: '✦ Together for Better Farming ✦',
    successTitle: 'Message Sent Successfully!',
    sendAnotherBtn: 'Send Another Message',
    successWaBtn: 'Chat on WhatsApp',

    // Footer
    footerAbout: 'Krishi Sansar is committed to modernizing Indian farming by providing high-quality inputs, scientific crop guidance, and reliable rural delivery.',
    footerSlogan: '🌾 जय जवान, जय किसान!',
    footerQuickTitle: 'Quick Links',
    footerQuickLinks: ['Home', 'Products Catalog', 'Our Services', 'Expert Advisor', 'About Krishi Sansar', 'Contact Support'],
    footerCategoriesTitle: 'Categories',
    footerCategories: ['High Germination Seeds', 'Bio Organic Fertilizers', 'Precision Hand Tools', 'Tractors & Power Tillers', 'Soil Testing Laboratory', 'Solar Drip Irrigation'],
    footerBulletinTitle: 'Kisan Bulletin',
    footerNewsletterText: 'Subscribe for free weekly mandi prices, monsoon updates, and expert crop disease advisories.',
    footerEmailPlaceholder: 'Your email address',
    footerJoinBtn: 'Join',
    footerCopyright: '© 2026 <strong>Krishi Sansar</strong>. All Rights Reserved. Built with ❤️ for Indian Farmers.',
    footerLegalLinks: ['Privacy Policy', 'Terms of Service', 'Kisan Helpline'],

    // Cart
    cartTitle: 'Agri Shopping Cart',
    cartSubtotalLabel: 'Items Subtotal:',
    cartDeliveryLabel: 'Delivery to Village:',
    cartTotalLabel: 'Total Amount:',
    cartCheckoutBtn: '<span>Confirm Order (COD Available)</span> <span>➔</span>',
    cartWaBtn: '<span>Order via WhatsApp</span> <span>💬</span>',
    cartNote: '🔒 100% Certified Genuine Agri Inputs • Pay on Delivery (COD)',

    // FAB Tooltips
    fabCallTip: '<span class="tooltip-title">Call Kisan Helpline</span><span class="tooltip-sub">+91 98765 43210 (Toll-Free)</span>',
    fabWaTip: '<span class="tooltip-title">Chat with Agri Expert</span><span class="tooltip-sub">● Instant 24/7 WhatsApp Support</span>',
    fabTopTip: 'Back to Top'
  },

  hi: {
    langBtn: 'English',
    toastMsg: 'भाषा सफलतापूर्वक बदलकर हिन्दी कर दी गई है।',
    topbarHelpline: 'टोल-फ्री हेल्पलाइन: <strong>+91 98765 43210</strong> (सोम - शनि, सुबह 9 से शाम 6)',
    topbarLocation: 'राँची, झारखण्ड, भारत',
    topbarEmail: 'info@krishisansar.in',

    // Nav & Header
    navHome: 'होम',
    navProducts: 'उत्पाद',
    navServices: 'सेवाएं',
    navAdvisor: 'कृषि सलाहकार',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क',
    cartLabel: 'कार्ट',
    searchPlaceholder: 'बीज, खाद, उपकरण या सलाहकार खोजें...',
    popularLabel: 'लोकप्रिय:',
    quickTag1: '🌾 बीज',
    quickTag2: '🧪 खाद',
    quickTag3: '🛠️ उपकरण',
    quickTag4: '🚜 ट्रैक्टर',
    quickTag5: '🔬 मृदा जांच',

    // Hero
    heroBadge: 'साथ बढ़ें • साथ समृद्ध हों',
    heroTitleKrishi: 'कृषि',
    heroTitleSansar: 'संसार',
    heroDesc: 'कृषि उत्पाद, सेवाएं और विशेषज्ञ सलाह के लिए आपका विश्वसनीय साथी',
    heroSubtext: 'भारतीय किसानों को प्रमाणित बीज, जैविक खाद, सटीक कृषि उपकरण और 24/7 वैज्ञानिक परामर्श देकर बेहतर उपज और स्थाई समृद्धि प्रदान करना।',
    heroShopBtn: '<span>अभी खरीदें</span> <span>➔</span>',
    heroAdviceBtn: '<span>विशेषज्ञ सलाह लें</span>',
    pillLeftLabel: 'विश्वसनीय मंच',
    pillLeftVal: '4.8/5 (50,000+ किसान)',
    pillRightLabel: 'गुणवत्ता की गारंटी',
    pillRightVal: '100% प्रमाणित उत्पाद',
    feat1Title: 'प्रीमियम बीज',
    feat1Sub: 'उच्च अंकुरण और शुद्धता',
    feat2Title: 'गुणवत्ता खाद',
    feat2Sub: 'जैविक और NPK बायो-बूस्टर',
    feat3Title: 'आधुनिक उपकरण',
    feat3Sub: 'मजबूत, टिकाऊ और सुलभ',
    feat4Title: 'विशेषज्ञ सलाह',
    feat4Sub: '24/7 क्रॉप डॉक्टर सहायता',
    smartBannerTitle: 'बेहतर कल के लिए स्मार्ट खेती',
    smartBannerSub: 'सस्ती तकनीक, यंत्रीकरण और मौसम-अनुकूल सलाह आधुनिक भारतीय कृषि के लिए।',
    smartBannerBtn: 'समाधान देखें ➔',

    // Products
    productsTag: 'हमारे उत्पाद',
    productsSubtitle: 'बेहतर पैदावार के लिए उच्च गुणवत्ता वाले कृषि उत्पाद',
    filterAll: 'सभी उत्पाद',
    filterSeeds: '🌾 बीज',
    filterFert: '🧪 खाद एवं उर्वरक',
    filterTools: '🛠️ उपकरण',
    filterMach: '🚜 मशीनरी',
    badgeSeeds: 'सर्वाधिक लोकप्रिय',
    badgeFert: 'जैविक',
    badgeTools: 'टिकाऊ',
    badgeMach: 'कृषि-तकनीक',
    cardSeedsTitle: 'बीज',
    cardSeedsDesc: 'गेहूं, धान, मक्का और मौसमी हाइब्रिड किस्में भरपूर पैदावार के लिए।',
    cardSeedsPrice: '₹299 / 5kg से',
    cardFertTitle: 'खाद एवं उर्वरक',
    cardFertDesc: 'जैविक वर्मीकम्पोस्ट, डीएपी, यूरिया और सूक्ष्म पोषक तत्व।',
    cardFertPrice: '₹450 / 10kg से',
    cardToolsTitle: 'कृषि उपकरण',
    cardToolsDesc: 'फावड़ा, खुरपी, दरांती और मजबूत जंग-रोधी हस्त उपकरण।',
    cardToolsPrice: '₹380 / इकाई से',
    cardMachTitle: 'कृषि मशीनरी',
    cardMachDesc: 'ट्रैक्टर, रोटावेटर और पावर टिलर बिक्री व किफायती किराये पर।',
    cardMachPrice: 'किराया ₹499 / घंटा',
    viewDetailsBtn: '<span>विवरण देखें</span> <span>➔</span>',
    addCartBtn: '<span>+ कार्ट 🛒</span>',
    promoBannerTitle: 'किफायती दामों पर सर्वोत्तम गुणवत्ता वाले उत्पाद',
    promoBannerSub: 'सीधे फैक्ट्री से खेत तक फास्ट डिलीवरी और कैश ऑन डिलीवरी (COD)।',
    shopAllBtn: '<span>सभी उत्पाद देखें</span> <span>➔</span>',

    // Product Modal
    modalSpecsTitle: 'तकनीकी विवरण',
    modalBenefitsTitle: 'किसानों के लिए मुख्य लाभ',
    modalOrderBtn: '<span>अभी ऑर्डर करें / डिलीवरी बुक करें</span> <span>➔</span>',
    modalWaBtn: '<span>व्हाट्सएप पर चैट करें</span>',

    // Services
    servicesTag: 'हमारी सेवाएं',
    servicesSubtitle: '✦ किसानों के लिए सम्पूर्ण सहायता ✦',
    serv1Title: 'फसल परामर्श',
    serv1Desc: 'मौसम आधारित फसल कैलेंडर, कीट चेतावनी और पैदावार बढ़ाने के वैज्ञानिक उपायों की सलाह।',
    serv1Link: 'और जानें ➔',
    serv2Title: 'ऑर्डर बुकिंग',
    serv2Desc: 'प्रमाणित बीज, खाद और टूल्स की आसान बुकिंग व सीधे गांव तक सुरक्षित होम डिलीवरी।',
    serv2Link: 'अभी बुक करें ➔',
    serv3Title: 'मृदा परीक्षण',
    serv3Desc: 'अपनी मिट्टी को पहचानें, बेहतर फसल पाएं। NPK, pH और जैविक कार्बन की सटीक प्रयोगशाला जांच रिपोर्ट।',
    serv3Link: 'टेस्ट बुक करें ➔',
    serv4Title: 'रोग एवं कीट नियंत्रण',
    serv4Desc: 'फसल रोगों और कीटों का सटीक निदान और विशेषज्ञों द्वारा सुझाए गए जैविक व रासायनिक उपचार।',
    serv4Link: 'इलाज जानें ➔',
    serv5Title: 'सिंचाई समाधान',
    serv5Desc: 'खेती के लिए स्मार्ट जल समाधान। उच्च दक्षता वाले ड्रिप किट, सोलर पंप और स्प्रिंकलर तकनीक।',
    serv5Link: 'पानी बचाएं ➔',
    serv6Title: 'किसान प्रशिक्षण',
    serv6Desc: 'आधुनिक खेती, ड्रोन छिड़काव और जैविक खेती प्रमाणीकरण पर फील्ड में व्यावहारिक प्रशिक्षण।',
    serv6Link: 'ट्रेनिंग लें ➔',
    healthySoilTitle: '"स्वस्थ मिट्टी... समृद्ध फसल..."',
    healthySoilDesc: 'धरती मां की रक्षा, हर किसान परिवार की समृद्धि और पूरे भारत की खाद्य सुरक्षा।',
    consultAgronomistBtn: 'कृषि वैज्ञानिक से सलाह लें ➔',

    // Advisor
    advisorTag: 'हमारे कृषि सलाहकार',
    advisorSubtitle: 'हमारे कृषि वैज्ञानिकों से लें सटीक परामर्श',
    docName: 'डॉ. रमेश कुमार',
    docDesignation: 'वरिष्ठ कृषि वैज्ञानिक एवं पादप रोग विशेषज्ञ',
    docRating: '4.8 (5,000+ किसानों को सलाह)',
    docExp: '<strong>15+ वर्षों का अनुभव</strong> फसल विज्ञान, मृदा स्वास्थ्य और आधुनिक खेती में।',
    docViewBtn: '<span>प्रोफाइल देखें</span> <span>➔</span>',
    check1: 'फसल रोग निदान और जैविक उपचार',
    check2: 'मिट्टी और मौसम के अनुसार सही फसल का चयन',
    check3: 'मृदा स्वास्थ्य सुझाव और पोषक तत्व संतुलन',
    check4: 'आधुनिक खेती और सघन बागवानी तकनीक',
    check5: 'मौसमी मार्गदर्शन और वास्तविक मौसम पूर्वानुमान',
    askTitle: 'अपना प्रश्न पूछें',
    askSub: 'डॉ. रमेश कुमार से तुरंत वैज्ञानिक समाधान प्राप्त करें',
    askPlaceholder: "अपनी फसल का सवाल लिखें... (जैसे: 'धान की पत्तियां पीली हो रही हैं', 'गेहूं में रतुआ रोग का इलाज')",
    askBtn: '<span>पूछें</span> <span>➔</span>',
    aiHeaderTitle: 'तत्काल कृषि डॉक्टर परामर्श',

    // Advisor Modal
    advisorModalName: 'डॉ. रमेश कुमार',
    advisorModalDesig: 'वरिष्ठ कृषि वैज्ञानिक एवं एग्रोनॉमी प्रमुख',
    advisorModalRating: '★★★★★ 4.8 रेटिंग (5,000+ परामर्श)',
    advisorModalBio: '<strong>योग्यता और अनुसंधान:</strong><br>• मृदा विज्ञान एवं एग्रोनॉमी में पीएच.डी. (ICAR - IARI, नई दिल्ली)<br>• पूर्व मुख्य वैज्ञानिक, बिरसा कृषि विश्वविद्यालय, राँची<br>• विशेषज्ञता: जैविक मृदा पुनरुद्धार, धान तना छेदक रोकथाम, सघन सब्जी उत्पादन।<br>• पूर्वी भारत में लघु किसानों के लिए टिकाऊ कृषि पर 40+ शोध पत्र प्रकाशित।',
    advisorModalConsultTitle: 'डॉ. रमेश कुमार के साथ निःशुल्क परामर्श स्लॉट बुक करें',
    advisorModalNameInput: 'किसान का नाम *',
    advisorModalPhoneInput: 'मोबाइल नंबर *',
    advisorModalTopicDefault: 'परामर्श का विषय चुनें',
    advisorModalTopic1: 'फसल रोग एवं कीट निदान',
    advisorModalTopic2: 'मृदा स्वास्थ्य एवं खाद संतुलन',
    advisorModalTopic3: 'मौसमी फसल चयन',
    advisorModalTopic4: 'ड्रिप सिंचाई एवं सब्सिडी मार्गदर्शन',
    advisorModalSubmitBtn: '<span>परामर्श स्लॉट सुरक्षित करें (निःशुल्क)</span> <span>➔</span>',

    // About
    aboutTag: 'कृषि संसार के बारे में',
    aboutSubtitle: 'हमारा संकल्प: किसानों की खुशहाली और आत्मनिर्भर, हरित भारत',
    aboutStory: '<strong>कृषि संसार</strong> किसानों के लिए एक भरोसेमंद ऑनलाइन मंच है, जो उच्च गुणवत्ता वाले बीज, जैविक खाद, कृषि उपकरण और वैज्ञानिक फसल परामर्श प्रदान करता है। हमारा उद्देश्य किसानों को आधुनिक और लाभकारी खेती के साधन उपलब्ध कराना है।',
    pillar1: '15+ राज्यों में हजारों किसानों का अटूट विश्वास',
    pillar2: 'प्रमाणित प्रयोगशालाओं से जांचे गए किफायती उत्पाद',
    pillar3: 'मान्यता प्राप्त कृषि वैज्ञानिकों द्वारा 24/7 मार्गदर्शन',
    pillar4: 'टिकाऊ और प्राकृतिक खेती को पूर्ण समर्थन',
    stat1Label: 'खुशहाल किसान',
    stat2Label: 'गुणवत्ता उत्पाद',
    stat3Label: 'फसल सफलता दर',
    stat4Label: 'भारतीय राज्य',
    aboutKnowMore: '<span>और जानें</span> <span>➔</span>',
    aboutBadge: '100% टिकाऊ एवं पर्यावरण-अनुकूल',

    // Contact
    contactTag: 'संपर्क करें',
    contactSubtitle: 'हम आपकी सहायता के लिए हमेशा तत्पर हैं!',
    contactDesc: 'बीज, खाद, कृषि यंत्र या फसल स्वास्थ्य के बारे में कोई भी प्रश्न हो? हमारे कृषि विशेषज्ञ हर किसान भाई की मदद के लिए तैयार हैं।',
    contactPhoneStatus: '● अभी सक्रिय',
    contactPhoneSub: 'सोम - शनि, सुबह 9 से शाम 6 • टोल-फ्री किसान हेल्पलाइन',
    contactEmailStatus: '⚡ ~2 घंटे में उत्तर',
    contactEmailSub: 'उत्पाद ऑर्डर और पूछताछ का त्वरित समाधान',
    contactLocSub: 'क्षेत्रीय कृषि केंद्र एवं मुख्य वितरण कार्यालय',
    contactWaTitle: 'तत्काल व्हाट्सएप किसान चैट',
    contactWaSub: 'सीधा परामर्श और त्वरित ऑर्डर पूछताछ • 24/7',
    contactWaBadge: 'चैट करें ➔',
    followUsTitle: 'सोशल मीडिया पर जुड़ें',
    topicLabel: 'पूछताछ का विषय:',
    topicGen: '🌿 सामान्य',
    topicSeeds: '🌾 बीज',
    topicFert: '🧪 खाद',
    topicMach: '🚜 ट्रैक्टर व टूल्स',
    topicAdv: '👨‍🔬 सलाहकार',
    placeholderName: 'आपका नाम *',
    placeholderEmail: 'आपका ईमेल *',
    placeholderPhone: 'मोबाइल नंबर (+91 ...)',
    placeholderMsg: 'आपका संदेश या फसल समस्या *',
    submitMsgBtn: '<span>संदेश भेजें</span> <span class="btn-arrow-icon">➔</span>',
    togetherSlogan: '✦ बेहतर खेती के लिए हम आपके साथ ✦',
    successTitle: 'संदेश सफलतापूर्वक भेजा गया!',
    sendAnotherBtn: 'दूसरा संदेश भेजें',
    successWaBtn: 'व्हाट्सएप पर चैट करें',

    // Footer
    footerAbout: 'कृषि संसार भारतीय किसानों को उच्च गुणवत्ता वाले उत्पाद, वैज्ञानिक फसल सलाह और गांव तक विश्वसनीय डिलीवरी प्रदान कर आधुनिक बनाने के लिए प्रतिबद्ध है।',
    footerSlogan: '🌾 जय जवान, जय किसान!',
    footerQuickTitle: 'महत्वपूर्ण लिंक्स',
    footerQuickLinks: ['होम', 'उत्पाद सूची', 'हमारी सेवाएं', 'कृषि सलाहकार', 'कृषि संसार के बारे में', 'संपर्क सहायता'],
    footerCategoriesTitle: 'श्रेणियां',
    footerCategories: ['उच्च अंकरण बीज', 'जैविक खाद एवं उर्वरक', 'सटीक कृषि हस्त उपकरण', 'ट्रैक्टर एवं पावर टिलर', 'मृदा परीक्षण प्रयोगशाला', 'सोलर ड्रिप सिंचाई'],
    footerBulletinTitle: 'किसान बुलेटिन',
    footerNewsletterText: 'निःशुल्क साप्ताहिक मंडी भाव, मानसून अपडेट और फसल रोग चेतावनी प्राप्त करने के लिए जुड़ें।',
    footerEmailPlaceholder: 'आपका ईमेल पता',
    footerJoinBtn: 'जुड़ें',
    footerCopyright: '© 2026 <strong>कृषि संसार</strong>. सर्वाधिकार सुरक्षित। भारतीय किसानों के लिए समर्पित।',
    footerLegalLinks: ['गोपनीयता नीति', 'सेवा की शर्तें', 'किसान हेल्पलाइन'],

    // Cart
    cartTitle: 'कृषि शॉपिंग कार्ट',
    cartSubtotalLabel: 'उत्पाद राशि:',
    cartDeliveryLabel: 'गांव तक डिलीवरी:',
    cartTotalLabel: 'कुल देय राशि:',
    cartCheckoutBtn: '<span>ऑर्डर की पुष्टि करें (COD उपलब्ध)</span> <span>➔</span>',
    cartWaBtn: '<span>व्हाट्सएप पर ऑर्डर करें</span> <span>💬</span>',
    cartNote: '🔒 100% प्रमाणित असली कृषि उत्पाद • डिलीवरी पर भुगतान (COD)',

    // FAB Tooltips
    fabCallTip: '<span class="tooltip-title">किसान हेल्पलाइन पर कॉल करें</span><span class="tooltip-sub">+91 98765 43210 (टोल-फ्री)</span>',
    fabWaTip: '<span class="tooltip-title">कृषि विशेषज्ञ से चैट करें</span><span class="tooltip-sub">● 24/7 ऑनलाइन सहायता</span>',
    fabTopTip: 'ऊपर जाएं'
  }
};

function applyLanguage(lang) {
  currentLang = lang;
  const d = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  // Language button text & indicators
  const langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    const targetText = lang === 'en' ? 'हिन्दी' : 'English';
    const targetTag = lang === 'en' ? 'A/अ' : 'अ/A';
    const titleText = lang === 'en' ? 'Switch to Hindi / हिन्दी में बदलें' : 'Switch to English / अंग्रेज़ी में बदलें';
    langBtn.setAttribute('title', titleText);
    langBtn.innerHTML = `<span class="lang-icon">🌐</span> <span class="lang-text">${targetText}</span> <span class="lang-tag">${targetTag}</span>`;
  }

  // Topbar
  const topbarHelpline = document.querySelector('.topbar-left .topbar-item:nth-child(1) span:nth-child(2)');
  if (topbarHelpline) topbarHelpline.innerHTML = d.topbarHelpline;
  const topbarLocation = document.querySelector('.topbar-left .topbar-item:nth-child(2) span:nth-child(2)');
  if (topbarLocation) topbarLocation.textContent = d.topbarLocation;

  // Navbar
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 6) {
    navLinks[0].textContent = d.navHome;
    navLinks[1].textContent = d.navProducts;
    navLinks[2].textContent = d.navServices;
    navLinks[3].textContent = d.navAdvisor;
    navLinks[4].textContent = d.navAbout;
    navLinks[5].textContent = d.navContact;
  }
  const cartLabel = document.querySelector('.header-cart-btn .cart-label');
  if (cartLabel) cartLabel.textContent = d.cartLabel;

  const searchInput = document.getElementById('headerSearchInput');
  if (searchInput) searchInput.placeholder = d.searchPlaceholder;
  const popularLabel = document.querySelector('.quick-tag-label');
  if (popularLabel) popularLabel.textContent = d.popularLabel;

  // Search quick tags
  const quickTags = document.querySelectorAll('.quick-tag-btn');
  if (quickTags.length >= 5) {
    quickTags[0].textContent = d.quickTag1;
    quickTags[0].setAttribute('data-query', lang === 'hi' ? 'बीज' : 'Seeds');
    quickTags[1].textContent = d.quickTag2;
    quickTags[1].setAttribute('data-query', lang === 'hi' ? 'खाद' : 'Fertilizers');
    quickTags[2].textContent = d.quickTag3;
    quickTags[2].setAttribute('data-query', lang === 'hi' ? 'उपकरण' : 'Tools');
    quickTags[3].textContent = d.quickTag4;
    quickTags[3].setAttribute('data-query', lang === 'hi' ? 'ट्रैक्टर' : 'Tractor');
    quickTags[4].textContent = d.quickTag5;
    quickTags[4].setAttribute('data-query', lang === 'hi' ? 'मिट्टी' : 'Soil');
  }

  // Hero Section
  const heroBadge = document.querySelector('.hero-badge span:nth-child(2)');
  if (heroBadge) heroBadge.textContent = d.heroBadge;

  const heroKrishi = document.querySelector('.hero-title .text-krishi');
  if (heroKrishi) heroKrishi.textContent = d.heroTitleKrishi;
  const heroSansar = document.querySelector('.hero-title .text-sansar');
  if (heroSansar) heroSansar.textContent = d.heroTitleSansar;

  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc) heroDesc.textContent = d.heroDesc;
  const heroSub = document.querySelector('.hero-subtext');
  if (heroSub) heroSub.textContent = d.heroSubtext;

  const shopBtn = document.getElementById('shopNowHeroBtn');
  if (shopBtn) shopBtn.innerHTML = d.heroShopBtn;
  const adviceBtn = document.getElementById('getAdviceHeroBtn');
  if (adviceBtn) adviceBtn.innerHTML = d.heroAdviceBtn;

  // Floating Hero Pills
  const pillLeft = document.querySelector('.floating-pill-left div:nth-child(2)');
  if (pillLeft) pillLeft.innerHTML = `<div style="font-size:0.7rem; color:var(--text-muted);">${d.pillLeftLabel}</div><div>${d.pillLeftVal}</div>`;
  const pillRight = document.querySelector('.floating-pill-right div:nth-child(2)');
  if (pillRight) pillRight.innerHTML = `<div style="font-size:0.7rem; color:var(--text-muted);">${d.pillRightLabel}</div><div>${d.pillRightVal}</div>`;

  // Hero Features
  const featCards = document.querySelectorAll('.hero-features-grid .feature-pill-card');
  if (featCards.length >= 4) {
    featCards[0].querySelector('.feature-title').textContent = d.feat1Title;
    featCards[0].querySelector('.feature-sub').textContent = d.feat1Sub;
    featCards[1].querySelector('.feature-title').textContent = d.feat2Title;
    featCards[1].querySelector('.feature-sub').textContent = d.feat2Sub;
    featCards[2].querySelector('.feature-title').textContent = d.feat3Title;
    featCards[2].querySelector('.feature-sub').textContent = d.feat3Sub;
    featCards[3].querySelector('.feature-title').textContent = d.feat4Title;
    featCards[3].querySelector('.feature-sub').textContent = d.feat4Sub;
  }

  // Smart Banner
  const smartTitle = document.querySelector('.smart-banner-text h3');
  if (smartTitle) smartTitle.textContent = d.smartBannerTitle;
  const smartSub = document.querySelector('.smart-banner-text p');
  if (smartSub) smartSub.textContent = d.smartBannerSub;
  const smartBtn = document.querySelector('.smart-farming-banner .btn');
  if (smartBtn) smartBtn.textContent = d.smartBannerBtn;

  // Products Section
  const prodTag = document.querySelector('#products .section-tag span:nth-child(2)');
  if (prodTag) prodTag.textContent = d.productsTag;
  const prodSub = document.querySelector('#products .section-subtitle');
  if (prodSub) prodSub.textContent = d.productsSubtitle;

  const tabAll = document.querySelector('button[data-filter="all"]');
  if (tabAll) tabAll.textContent = d.filterAll;
  const tabSeeds = document.querySelector('button[data-filter="seeds"]');
  if (tabSeeds) tabSeeds.textContent = d.filterSeeds;
  const tabFert = document.querySelector('button[data-filter="fertilizers"]');
  if (tabFert) tabFert.textContent = d.filterFert;
  const tabTools = document.querySelector('button[data-filter="tools"]');
  if (tabTools) tabTools.textContent = d.filterTools;
  const tabMach = document.querySelector('button[data-filter="machinery"]');
  if (tabMach) tabMach.textContent = d.filterMach;

  // Product card badges
  const bSeeds = document.getElementById('badgeSeeds');
  if (bSeeds) bSeeds.textContent = d.badgeSeeds;
  const bFert = document.getElementById('badgeFert');
  if (bFert) bFert.textContent = d.badgeFert;
  const bTools = document.getElementById('badgeTools');
  if (bTools) bTools.textContent = d.badgeTools;
  const bMach = document.getElementById('badgeMach');
  if (bMach) bMach.textContent = d.badgeMach;

  // Product cards
  const pCards = document.querySelectorAll('.products-grid .product-card');
  if (pCards.length >= 4) {
    pCards[0].querySelector('.product-title').textContent = d.cardSeedsTitle;
    pCards[0].querySelector('.product-desc').textContent = d.cardSeedsDesc;
    pCards[0].querySelector('.product-price').textContent = d.cardSeedsPrice;

    pCards[1].querySelector('.product-title').textContent = d.cardFertTitle;
    pCards[1].querySelector('.product-desc').textContent = d.cardFertDesc;
    pCards[1].querySelector('.product-price').textContent = d.cardFertPrice;

    pCards[2].querySelector('.product-title').textContent = d.cardToolsTitle;
    pCards[2].querySelector('.product-desc').textContent = d.cardToolsDesc;
    pCards[2].querySelector('.product-price').textContent = d.cardToolsPrice;

    pCards[3].querySelector('.product-title').textContent = d.cardMachTitle;
    pCards[3].querySelector('.product-desc').textContent = d.cardMachDesc;
    pCards[3].querySelector('.product-price').textContent = d.cardMachPrice;
  }
  document.querySelectorAll('.view-product-btn').forEach(b => b.innerHTML = d.viewDetailsBtn);
  document.querySelectorAll('.product-add-cart-btn').forEach(b => b.innerHTML = d.addCartBtn);

  // Promo Banner
  const promoTitle = document.querySelector('.promo-banner-title');
  if (promoTitle) promoTitle.textContent = d.promoBannerTitle;
  const promoSub = document.querySelector('.promo-banner-sub');
  if (promoSub) promoSub.textContent = d.promoBannerSub;
  const shopAllBtn = document.querySelector('.promo-banner-center .btn');
  if (shopAllBtn) shopAllBtn.innerHTML = d.shopAllBtn;

  // If Product Details Modal is active, re-render it
  const productModal = document.getElementById('productModal');
  if (productModal && productModal.classList.contains('active') && currentModalProductKey) {
    if (typeof window.renderProductModalContent === 'function') {
      window.renderProductModalContent(currentModalProductKey);
    }
  }

  // Services Section
  const servTag = document.querySelector('#services .section-tag span:nth-child(2)');
  if (servTag) servTag.textContent = d.servicesTag;
  const servSubtitle = document.querySelector('#services .section-subtitle');
  if (servSubtitle) servSubtitle.textContent = d.servicesSubtitle;

  const servCards = document.querySelectorAll('.services-grid .service-card');
  if (servCards.length >= 6) {
    servCards[0].querySelector('.service-title').textContent = d.serv1Title;
    servCards[0].querySelector('.service-desc').textContent = d.serv1Desc;
    servCards[0].querySelector('.service-link').textContent = d.serv1Link;

    servCards[1].querySelector('.service-title').textContent = d.serv2Title;
    servCards[1].querySelector('.service-desc').textContent = d.serv2Desc;
    servCards[1].querySelector('.service-link').textContent = d.serv2Link;

    servCards[2].querySelector('.service-title').textContent = d.serv3Title;
    servCards[2].querySelector('.service-desc').textContent = d.serv3Desc;
    servCards[2].querySelector('.service-link').textContent = d.serv3Link;

    servCards[3].querySelector('.service-title').textContent = d.serv4Title;
    servCards[3].querySelector('.service-desc').textContent = d.serv4Desc;
    servCards[3].querySelector('.service-link').textContent = d.serv4Link;

    servCards[4].querySelector('.service-title').textContent = d.serv5Title;
    servCards[4].querySelector('.service-desc').textContent = d.serv5Desc;
    servCards[4].querySelector('.service-link').textContent = d.serv5Link;

    servCards[5].querySelector('.service-title').textContent = d.serv6Title;
    servCards[5].querySelector('.service-desc').textContent = d.serv6Desc;
    servCards[5].querySelector('.service-link').textContent = d.serv6Link;
  }

  const healthySoilTitle = document.querySelector('.healthy-soil-quote h3');
  if (healthySoilTitle) healthySoilTitle.textContent = d.healthySoilTitle;
  const healthySoilDesc = document.querySelector('.healthy-soil-quote p');
  if (healthySoilDesc) healthySoilDesc.textContent = d.healthySoilDesc;
  const consultAgronomistBtn = document.querySelector('.healthy-soil-banner .btn');
  if (consultAgronomistBtn) consultAgronomistBtn.textContent = d.consultAgronomistBtn;

  // Expert Advisor Section
  const advTag = document.querySelector('#advisor .section-tag span:nth-child(2)');
  if (advTag) advTag.textContent = d.advisorTag;
  const advSubtitle = document.querySelector('#advisor .section-subtitle');
  if (advSubtitle) advSubtitle.textContent = d.advisorSubtitle;

  const docName = document.querySelector('.doctor-name');
  if (docName) docName.textContent = d.docName;
  const docDesig = document.querySelector('.doctor-designation');
  if (docDesig) docDesig.textContent = d.docDesignation;
  const docRating = document.querySelector('.doctor-rating-pill span:nth-child(2)');
  if (docRating) docRating.textContent = d.docRating;
  const docExp = document.querySelector('.doctor-exp');
  if (docExp) docExp.innerHTML = d.docExp;
  const docBtn = document.getElementById('viewAdvisorBtn');
  if (docBtn) docBtn.innerHTML = d.docViewBtn;

  const checkItems = document.querySelectorAll('.advisor-checklist .check-text');
  if (checkItems.length >= 5) {
    checkItems[0].textContent = d.check1;
    checkItems[1].textContent = d.check2;
    checkItems[2].textContent = d.check3;
    checkItems[3].textContent = d.check4;
    checkItems[4].textContent = d.check5;
  }

  const askTitle = document.querySelector('.ask-avatar-title');
  if (askTitle) askTitle.textContent = d.askTitle;
  const askSub = document.querySelector('.ask-avatar-sub');
  if (askSub) askSub.textContent = d.askSub;
  const askInput = document.getElementById('askQuestionInput');
  if (askInput) askInput.placeholder = d.askPlaceholder;
  const askBtn = document.getElementById('askQuestionBtn');
  if (askBtn) askBtn.innerHTML = d.askBtn;

  const aiHeader = document.getElementById('aiAnswerHeaderTitle');
  if (aiHeader) aiHeader.textContent = d.aiHeaderTitle;

  // Advisor Modal
  const advMName = document.getElementById('advisorModalName');
  if (advMName) advMName.textContent = d.advisorModalName;
  const advMDesig = document.getElementById('advisorModalDesig');
  if (advMDesig) advMDesig.textContent = d.advisorModalDesig;
  const advMRating = document.getElementById('advisorModalRating');
  if (advMRating) advMRating.textContent = d.advisorModalRating;
  const advMBio = document.getElementById('advisorModalBio');
  if (advMBio) advMBio.innerHTML = d.advisorModalBio;
  const advMConsultTitle = document.getElementById('advisorModalConsultTitle');
  if (advMConsultTitle) advMConsultTitle.textContent = d.advisorModalConsultTitle;
  const advMNameInput = document.getElementById('advisorModalNameInput');
  if (advMNameInput) advMNameInput.placeholder = d.advisorModalNameInput;
  const advMPhoneInput = document.getElementById('advisorModalPhoneInput');
  if (advMPhoneInput) advMPhoneInput.placeholder = d.advisorModalPhoneInput;

  const topicSelect = document.getElementById('advisorModalTopicSelect');
  if (topicSelect && topicSelect.options.length >= 5) {
    topicSelect.options[0].text = d.advisorModalTopicDefault;
    topicSelect.options[1].text = d.advisorModalTopic1;
    topicSelect.options[2].text = d.advisorModalTopic2;
    topicSelect.options[3].text = d.advisorModalTopic3;
    topicSelect.options[4].text = d.advisorModalTopic4;
  }
  const bookConsultBtn = document.getElementById('bookConsultationBtn');
  if (bookConsultBtn) bookConsultBtn.innerHTML = d.advisorModalSubmitBtn;

  // About Section
  const abTag = document.querySelector('#about .section-tag span:nth-child(2)');
  if (abTag) abTag.textContent = d.aboutTag;
  const abSubtitle = document.querySelector('#about .section-subtitle');
  if (abSubtitle) abSubtitle.textContent = d.aboutSubtitle;
  const abStory = document.querySelector('.about-story');
  if (abStory) abStory.innerHTML = d.aboutStory;

  const pillars = document.querySelectorAll('.about-pillar-text');
  if (pillars.length >= 4) {
    pillars[0].textContent = d.pillar1;
    pillars[1].textContent = d.pillar2;
    pillars[2].textContent = d.pillar3;
    pillars[3].textContent = d.pillar4;
  }

  const statLabels = document.querySelectorAll('.stat-box .stat-label');
  if (statLabels.length >= 4) {
    statLabels[0].textContent = d.stat1Label;
    statLabels[1].textContent = d.stat2Label;
    statLabels[2].textContent = d.stat3Label;
    statLabels[3].textContent = d.stat4Label;
  }

  const abBadge = document.querySelector('.about-floating-badge span:nth-child(2)');
  if (abBadge) abBadge.textContent = d.aboutBadge;
  const abKnowBtn = document.querySelector('.about-content > .btn');
  if (abKnowBtn) abKnowBtn.innerHTML = d.aboutKnowMore;

  // Contact Section
  const conTag = document.querySelector('#contact .section-tag span:nth-child(2)');
  if (conTag) conTag.textContent = d.contactTag;
  const conSub = document.querySelector('#contact .section-subtitle');
  if (conSub) conSub.textContent = d.contactSubtitle;
  const conDesc = document.querySelector('#contact .section-description');
  if (conDesc) conDesc.textContent = d.contactDesc;

  const phoneStatus = document.querySelector('.contact-status-badge');
  if (phoneStatus) phoneStatus.textContent = d.contactPhoneStatus;
  const phoneSub = document.querySelector('.contact-card-item:nth-child(1) .contact-meta p');
  if (phoneSub) phoneSub.textContent = d.contactPhoneSub;

  const emailStatus = document.querySelector('.contact-reply-time');
  if (emailStatus) emailStatus.textContent = d.contactEmailStatus;
  const emailSub = document.querySelector('.contact-card-item:nth-child(2) .contact-meta p');
  if (emailSub) emailSub.textContent = d.contactEmailSub;

  const locSub = document.querySelector('.contact-card-item:nth-child(3) .contact-meta p');
  if (locSub) locSub.textContent = d.contactLocSub;

  const waStrong = document.querySelector('.whatsapp-card-item .wa-text-col strong');
  if (waStrong) waStrong.textContent = d.contactWaTitle;
  const waSpan = document.querySelector('.whatsapp-card-item .wa-text-col span');
  if (waSpan) waSpan.textContent = d.contactWaSub;
  const waBadge = document.querySelector('.wa-chat-badge');
  if (waBadge) waBadge.textContent = d.contactWaBadge;

  const folTitle = document.querySelector('.social-title');
  if (folTitle) folTitle.textContent = d.followUsTitle;

  const topLabel = document.querySelector('.form-topics-header .topic-label');
  if (topLabel) topLabel.textContent = d.topicLabel;

  const topicPills = document.querySelectorAll('.topic-pill');
  if (topicPills.length >= 5) {
    topicPills[0].textContent = d.topicGen;
    topicPills[1].textContent = d.topicSeeds;
    topicPills[2].textContent = d.topicFert;
    topicPills[3].textContent = d.topicMach;
    topicPills[4].textContent = d.topicAdv;
  }

  const inpName = document.getElementById('contactName');
  if (inpName) inpName.placeholder = d.placeholderName;
  const inpEmail = document.getElementById('contactEmail');
  if (inpEmail) inpEmail.placeholder = d.placeholderEmail;
  const inpPhone = document.getElementById('contactPhone');
  if (inpPhone) inpPhone.placeholder = d.placeholderPhone;
  const inpMsg = document.getElementById('contactMessage');
  if (inpMsg) inpMsg.placeholder = d.placeholderMsg;
  const submitBtn = document.getElementById('contactSubmitBtn');
  if (submitBtn) submitBtn.innerHTML = d.submitMsgBtn;

  const cursiveSlogan = document.querySelector('.together-cursive-text');
  if (cursiveSlogan) cursiveSlogan.textContent = d.togetherSlogan;

  // Contact Success Box buttons
  const sendAnotherBtn = document.getElementById('sendAnotherBtn');
  if (sendAnotherBtn) sendAnotherBtn.textContent = d.sendAnotherBtn;
  const successWaBtn = document.querySelector('#contactSuccessBox .btn-primary');
  if (successWaBtn) successWaBtn.innerHTML = `<span>${d.successWaBtn}</span>`;

  // Footer Section
  const footerAbout = document.querySelector('.footer-about-text');
  if (footerAbout) footerAbout.textContent = d.footerAbout;

  const footerQuickTitle = document.getElementById('footerQuickLinksTitle');
  if (footerQuickTitle) footerQuickTitle.textContent = d.footerQuickTitle;
  const footerQuickLinks = document.querySelectorAll('#footerQuickLinksList .footer-link-item a');
  if (footerQuickLinks.length >= 6) {
    d.footerQuickLinks.forEach((text, i) => {
      if (footerQuickLinks[i]) footerQuickLinks[i].textContent = text;
    });
  }

  const footerCatTitle = document.getElementById('footerCategoriesTitle');
  if (footerCatTitle) footerCatTitle.textContent = d.footerCategoriesTitle;
  const footerCategories = document.querySelectorAll('#footerCategoriesList .footer-link-item a');
  if (footerCategories.length >= 6) {
    d.footerCategories.forEach((text, i) => {
      if (footerCategories[i]) footerCategories[i].textContent = text;
    });
  }

  const footerBullTitle = document.getElementById('footerBulletinTitle');
  if (footerBullTitle) footerBullTitle.textContent = d.footerBulletinTitle;
  const footerNewsText = document.getElementById('footerNewsletterText');
  if (footerNewsText) footerNewsText.textContent = d.footerNewsletterText;
  const newsEmailInp = document.getElementById('newsletterEmail');
  if (newsEmailInp) newsEmailInp.placeholder = d.footerEmailPlaceholder;
  const newsBtn = document.getElementById('newsletterBtn');
  if (newsBtn) newsBtn.textContent = d.footerJoinBtn;

  const footerCopy = document.getElementById('footerCopyright');
  if (footerCopy) footerCopy.innerHTML = d.footerCopyright;

  const footerLegalLinks = document.querySelectorAll('#footerLegalLinks a');
  if (footerLegalLinks.length >= 3) {
    d.footerLegalLinks.forEach((text, i) => {
      if (footerLegalLinks[i]) footerLegalLinks[i].textContent = text;
    });
  }

  // Cart Drawer
  const cartTitle = document.querySelector('.cart-drawer-title h3');
  if (cartTitle) cartTitle.textContent = d.cartTitle;
  const subtotalRow = document.querySelector('.cart-summary-row:nth-child(1) span:nth-child(1)');
  if (subtotalRow) subtotalRow.textContent = d.cartSubtotalLabel;
  const deliveryRow = document.querySelector('.cart-summary-row.delivery-row span:nth-child(1)');
  if (deliveryRow) deliveryRow.textContent = d.cartDeliveryLabel;
  const totalRow = document.querySelector('.cart-summary-total span:nth-child(1)');
  if (totalRow) totalRow.textContent = d.cartTotalLabel;

  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if (checkoutBtn) checkoutBtn.innerHTML = d.cartCheckoutBtn;
  const cartWaBtn = document.getElementById('cartWhatsAppBtn');
  if (cartWaBtn) cartWaBtn.innerHTML = d.cartWaBtn;
  const cartNote = document.querySelector('.cart-guarantee-note');
  if (cartNote) cartNote.textContent = d.cartNote;

  // Re-render Cart Drawer if global render function exists
  if (typeof window.renderCartGlobal === 'function') {
    window.renderCartGlobal();
  }

  // Floating Action Tooltips
  const tipCall = document.querySelector('#fabCallBtn .fab-tooltip');
  if (tipCall) tipCall.innerHTML = d.fabCallTip;
  const tipWa = document.querySelector('#fabWhatsAppBtn .fab-tooltip');
  if (tipWa) tipWa.innerHTML = d.fabWaTip;
  const tipTop = document.querySelector('#scrollTopBtn .fab-tooltip');
  if (tipTop) tipTop.textContent = d.fabTopTip;

  localStorage.setItem('krishi_sansar_lang', lang);
}

function initLanguageSwitch() {
  const langBtn = document.getElementById('langSwitchBtn');
  if (!langBtn) return;

  // Read saved preference or default to English
  const savedLang = localStorage.getItem('krishi_sansar_lang') || 'en';
  applyLanguage(savedLang);

  langBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'hi' : 'en';
    applyLanguage(nextLang);
    showToast(I18N[nextLang].toastMsg, 'info');
  });
}

// ===================================================================
// 14. TOAST NOTIFICATION UTILITY
// ===================================================================
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? '🌱' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = '0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

