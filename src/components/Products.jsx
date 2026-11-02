import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { PRODUCTS_DATA } from '../data/productsData';

const Products = ({ onSelectProduct }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [activeFilter, setActiveFilter] = useState('all');

  const productKeys = ['seeds', 'fertilizers', 'tools', 'machinery'];

  const filteredKeys = productKeys.filter((key) => {
    if (activeFilter === 'all') return true;
    return PRODUCTS_DATA[key].category === activeFilter;
  });

  const handleAddToCart = (key, title) => {
    addToCart(key, 1);
    showToast(
      lang === 'hi' ? `कार्ट में ${title} जोड़ा गया! 🛒` : `Added ${title} to your cart! 🛒`,
      'success'
    );
  };

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="leaf-icon">🌿</span>
            <span>{t('productsTag')}</span>
            <span className="leaf-icon">🌿</span>
          </div>
          <h2 className="section-subtitle">{t('productsSubtitle')}</h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="product-filter-tabs">
          <button
            className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t('filterAll')}
          </button>
          <button
            className={`tab-btn ${activeFilter === 'seeds' ? 'active' : ''}`}
            onClick={() => setActiveFilter('seeds')}
          >
            {t('filterSeeds')}
          </button>
          <button
            className={`tab-btn ${activeFilter === 'fertilizers' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fertilizers')}
          >
            {t('filterFert')}
          </button>
          <button
            className={`tab-btn ${activeFilter === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tools')}
          >
            {t('filterTools')}
          </button>
          <button
            className={`tab-btn ${activeFilter === 'machinery' ? 'active' : ''}`}
            onClick={() => setActiveFilter('machinery')}
          >
            {t('filterMach')}
          </button>
        </div>

        {/* 4 Main Product Cards Grid */}
        <div className="products-grid">
          {filteredKeys.map((key) => {
            const p = PRODUCTS_DATA[key];
            const data = p[lang] || p.en;

            return (
              <div key={key} className="product-card" data-category={p.category}>
                <div className="product-img-box">
                  <span className={`product-badge ${key === 'seeds' || key === 'machinery' ? 'bestseller' : ''}`}>
                    {data.badge}
                  </span>
                  <img src={`/${data.image}`} alt={data.title} className="product-img" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{data.title}</h3>
                  <p className="product-desc">{data.subtitle}</p>
                  <div className="product-meta">
                    <span className="product-price">{data.price}</span>
                    <span className="product-rating">★ 4.8</span>
                  </div>
                  <div className="product-card-actions">
                    <button
                      type="button"
                      className="product-btn view-product-btn"
                      onClick={() => onSelectProduct(key)}
                    >
                      <span>{t('viewDetailsBtn')}</span>
                      <span>➔</span>
                    </button>
                    <button
                      type="button"
                      className="product-add-cart-btn"
                      onClick={() => handleAddToCart(key, data.title)}
                      title={`Add ${data.title} to cart`}
                    >
                      <span>{t('addCartBtn')}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Promo Banner Strip */}
        <div className="products-promo-banner">
          <div className="promo-banner-left">
            <span className="promo-leaf-icon">🌿</span>
            <div>
              <h3 className="promo-banner-title">{t('promoBannerTitle')}</h3>
              <p className="promo-banner-sub">{t('promoBannerSub')}</p>
            </div>
          </div>
          <div className="promo-banner-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                showToast(
                  lang === 'hi'
                    ? 'पूरा उत्पाद कैटलॉग (1,200+ आइटम) लोड हो रहा है...'
                    : 'Loading full product catalog (1,200+ items)...',
                  'info'
                )
              }
            >
              <span>{t('shopAllBtn')}</span>
            </button>
          </div>
          <div className="promo-banner-right">
            <img
              src="/images/product_tractor.jpg"
              alt="Farm Tractor in Green Field"
              className="promo-tractor-thumb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

