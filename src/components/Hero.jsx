import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onOpenAdvisor }) => {
  const { lang, t } = useLanguage();

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span className="hero-badge-icon">🌱</span>
              <span>{t('heroBadge')}</span>
            </div>

            <h1 className="hero-title">
              <span className="text-krishi">{t('heroTitleKrishi')}</span>{' '}
              <span className="text-sansar">{t('heroTitleSansar')}</span>
            </h1>

            <p className="hero-desc">{t('heroDesc')}</p>

            <p className="hero-subtext">{t('heroSubtext')}</p>

            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary" id="shopNowHeroBtn">
                <span>{t('heroShopBtn')}</span>
                <span className="btn-arrow-icon">➔</span>
              </a>
              <a href="#advisor" className="btn btn-secondary" id="getAdviceHeroBtn">
                <span>{t('heroAdviceBtn')}</span>
                <span>👨‍🔬</span>
              </a>
            </div>

            {/* Modern Hero Trust Badges Strip */}
            <div className="hero-trust-strip">
              <div className="trust-strip-item">
                <span className="trust-check">✔</span>
                <span>{lang === 'hi' ? 'ICAR प्रमाणित इनपुट्स' : '100% Certified Lab Inputs'}</span>
              </div>
              <div className="trust-strip-item">
                <span className="trust-check">✔</span>
                <span>{lang === 'hi' ? '24h ग्रामीण डिलीवरी' : '24h Rural Village Delivery'}</span>
              </div>
              <div className="trust-strip-item">
                <span className="trust-check">✔</span>
                <span>{lang === 'hi' ? 'कैश ऑन डिलीवरी (COD)' : 'Cash on Delivery (COD)'}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/images/hero-farmer.jpg"
                alt="Happy Indian Farmer with green crops - Krishi Sansar"
                className="hero-farmer-img"
              />
              <div className="hero-img-glow"></div>
            </div>

            {/* Floating Badges */}
            <div className="floating-pill floating-pill-left">
              <div className="pill-icon gold-star">★</div>
              <div>
                <div className="pill-label">{t('pillLeftLabel')}</div>
                <div className="pill-val">{t('pillLeftVal')}</div>
              </div>
            </div>

            <div className="floating-pill floating-pill-right">
              <div className="pill-icon green-leaf">🌾</div>
              <div>
                <div className="pill-label">{t('pillRightLabel')}</div>
                <div className="pill-val">{t('pillRightVal')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4-Card Ribbon */}
        <div className="hero-features-grid">
          <div className="feature-pill-card" onClick={() => (window.location.href = '#products')}>
            <div className="feature-icon-circle bg-emerald">🌱</div>
            <div className="feature-card-texts">
              <h4 className="feature-title">{t('feat1Title')}</h4>
              <p className="feature-sub">{t('feat1Sub')}</p>
            </div>
            <span className="feature-card-arrow">→</span>
          </div>

          <div className="feature-pill-card" onClick={() => (window.location.href = '#products')}>
            <div className="feature-icon-circle bg-teal">🧪</div>
            <div className="feature-card-texts">
              <h4 className="feature-title">{t('feat2Title')}</h4>
              <p className="feature-sub">{t('feat2Sub')}</p>
            </div>
            <span className="feature-card-arrow">→</span>
          </div>

          <div className="feature-pill-card" onClick={() => (window.location.href = '#products')}>
            <div className="feature-icon-circle bg-amber">🚜</div>
            <div className="feature-card-texts">
              <h4 className="feature-title">{t('feat3Title')}</h4>
              <p className="feature-sub">{t('feat3Sub')}</p>
            </div>
            <span className="feature-card-arrow">→</span>
          </div>

          <div className="feature-pill-card" onClick={() => (window.location.href = '#advisor')}>
            <div className="feature-icon-circle bg-purple">🎧</div>
            <div className="feature-card-texts">
              <h4 className="feature-title">{t('feat4Title')}</h4>
              <p className="feature-sub">{t('feat4Sub')}</p>
            </div>
            <span className="feature-card-arrow">→</span>
          </div>
        </div>

        {/* Smart Farming Floating Banner Strip */}
        <div className="smart-farming-banner">
          <div className="smart-banner-content">
            <div className="smart-banner-icon">🚜</div>
            <div className="smart-banner-text">
              <h3>{t('smartBannerTitle')}</h3>
              <p>{t('smartBannerSub')}</p>
            </div>
          </div>
          <a
            href="#services"
            className="btn btn-secondary smart-banner-btn"
          >
            <span>{t('smartBannerBtn')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
