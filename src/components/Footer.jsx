import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

const Footer = () => {
  const { lang, t } = useLanguage();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    showToast(
      lang === 'hi'
        ? 'कृषि संसार किसान बुलेटिन की सदस्यता ली गई!'
        : 'Subscribed to Krishi Sansar Kisan Bulletin!',
      'success'
    );
    setEmail('');
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Mission */}
          <div className="footer-col">
            <div style={{ marginBottom: '16px' }}>
              <a href="#home" style={{ display: 'inline-block' }}>
                <img
                  src="/images/logo.jpg"
                  alt="Krishi Sansar Logo"
                  className="footer-logo-img"
                  style={{
                    height: '56px',
                    width: 'auto',
                    background: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.18)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </a>
            </div>
            <p className="footer-about-text">{t('footerAbout')}</p>
            <div style={{ fontSize: '0.86rem', color: '#86efac', fontWeight: 600 }}>
              {t('footerSlogan')}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>{t('quickLinksTitle')}</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#home">{t('navHome')}</a></li>
              <li className="footer-link-item"><a href="#products">{t('navProducts')}</a></li>
              <li className="footer-link-item"><a href="#services">{t('navServices')}</a></li>
              <li className="footer-link-item"><a href="#advisor">{t('navAdvisor')}</a></li>
              <li className="footer-link-item"><a href="#about">{t('navAbout')}</a></li>
              <li className="footer-link-item"><a href="#contact">{t('navContact')}</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Categories */}
          <div className="footer-col">
            <h4>{t('categoriesTitle')}</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#products">{lang === 'hi' ? 'उच्च अंकुरण बीज' : 'High Germination Seeds'}</a></li>
              <li className="footer-link-item"><a href="#products">{lang === 'hi' ? 'जैविक खाद एवं उर्वरक' : 'Bio Organic Fertilizers'}</a></li>
              <li className="footer-link-item"><a href="#products">{lang === 'hi' ? 'सटीक हस्त उपकरण' : 'Precision Hand Tools'}</a></li>
              <li className="footer-link-item"><a href="#products">{lang === 'hi' ? 'ट्रैक्टर एवं पावर टिलर' : 'Tractors & Power Tillers'}</a></li>
              <li className="footer-link-item"><a href="#services">{lang === 'hi' ? 'मृदा परीक्षण प्रयोगशाला' : 'Soil Testing Laboratory'}</a></li>
              <li className="footer-link-item"><a href="#services">{lang === 'hi' ? 'सोलर ड्रिप सिंचाई' : 'Solar Drip Irrigation'}</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="footer-col">
            <h4>{t('newsletterTitle')}</h4>
            <p className="newsletter-text">{t('newsletterSub')}</p>
            <form onSubmit={handleNewsletter} className="newsletter-box">
              <input
                type="email"
                className="newsletter-input"
                placeholder={lang === 'hi' ? 'आपका ईमेल पता' : 'Your email address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                {t('subscribeBtn')}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div>
            © 2026 <strong>Krishi Sansar</strong>. All Rights Reserved. Built with ❤️ for Indian Farmers.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#home" style={{ color: '#94a3b8' }}>Privacy Policy</a>
            <a href="#home" style={{ color: '#94a3b8' }}>Terms of Service</a>
            <a href="tel:+919876543210" style={{ color: '#94a3b8' }}>Kisan Helpline</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

