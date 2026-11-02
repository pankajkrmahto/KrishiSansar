import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { SEARCH_ITEMS } from '../data/searchItems';

const Navbar = ({ activeSection }) => {
  const { lang, t } = useLanguage();
  const { totalItems, toggleCart } = useCart();
  const { user, openAuth, signOut } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const searchRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchInputRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSearchToggle = (e) => {
    e.stopPropagation();
    const nextState = !searchOpen;
    setSearchOpen(nextState);
    if (nextState) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const filteredSearchItems = searchQuery.trim()
    ? SEARCH_ITEMS.filter(item => {
        const q = searchQuery.toLowerCase();
        return (
          item.titleEn.toLowerCase().includes(q) ||
          item.titleHi.toLowerCase().includes(q) ||
          item.categoryEn.toLowerCase().includes(q) ||
          item.categoryHi.toLowerCase().includes(q) ||
          (item.kw && item.kw.some(k => k.toLowerCase().includes(q)))
        );
      })
    : [];

  const handleTagClick = (tagQuery) => {
    setSearchQuery(tagQuery);
    searchInputRef.current?.focus();
  };

  const navLinks = [
    { href: '#home', id: 'home', label: t('navHome') },
    { href: '#products', id: 'products', label: t('navProducts') },
    { href: '#services', id: 'services', label: t('navServices') },
    { href: '#advisor', id: 'advisor', label: t('navAdvisor') },
    { href: '#about', id: 'about', label: t('navAbout') },
    { href: '#contact', id: 'contact', label: t('navContact') }
  ];

  return (
    <>
      <header className="main-header">
        <div className="container navbar">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo" aria-label="Krishi Sansar Home">
            <div className="logo-img-wrapper">
              <img
                src="/images/logo.jpg"
                alt="Krishi Sansar - Agriculture Products, Services & Advice"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </a>

          {/* Desktop & Mobile Navigation Links */}
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
            {/* Mobile Drawer Header */}
            <div className="mobile-nav-header">
              <div className="mobile-brand">
                <span className="mobile-brand-icon">🌱</span>
                <span className="mobile-brand-title">Krishi Sansar</span>
              </div>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>

            {navLinks.map((link) => (
              <div key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </div>
            ))}

            {/* Mobile Auth button in nav menu */}
            <div className="mobile-auth-wrapper">
              {user ? (
                <div className="mobile-user-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="user-avatar-pill">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="user-details-mini">
                      <strong>{user.name}</strong>
                      <span>{user.role}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      openAuth('orders');
                      setMobileMenuOpen(false);
                    }}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    📦 {t('myOrders')}
                  </button>
                  <button
                    type="button"
                    className="btn btn-logout-sm"
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    🚪 {t('signOut')}
                  </button>
                </div>
              ) : (
                <div className="mobile-auth-buttons">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      openAuth('signin');
                      setMobileMenuOpen(false);
                    }}
                  >
                    👤 {t('signIn')}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      openAuth('signup');
                      setMobileMenuOpen(false);
                    }}
                  >
                    ✨ {t('signUp')}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Action Buttons (Search, Cart, Auth, Hamburger) */}
          <div className="header-actions">
            {/* Top Search Dropdown */}
            <div className="header-search-wrapper" ref={searchRef}>
              <button
                className={`action-btn ${searchOpen ? 'active' : ''}`}
                onClick={handleSearchToggle}
                title="Search Products, Services & Advice"
                aria-label="Toggle Search"
              >
                <span className="search-icon-symbol">🔍</span>
              </button>

              {searchOpen && (
                <div className="header-search-dropdown active">
                  <div className="search-input-box">
                    <span className="search-box-icon">🔍</span>
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="header-search-input"
                      placeholder={t('searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoComplete="off"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className="search-clear-btn"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Quick Filter Tags */}
                  <div className="search-quick-tags">
                    <span className="quick-tag-label">{t('popularLabel')}</span>
                    <button type="button" className="quick-tag-btn" onClick={() => handleTagClick('Seeds')}>🌾 Seeds</button>
                    <button type="button" className="quick-tag-btn" onClick={() => handleTagClick('Fertilizer')}>🧪 Fertilizer</button>
                    <button type="button" className="quick-tag-btn" onClick={() => handleTagClick('Tools')}>🛠️ Tools</button>
                    <button type="button" className="quick-tag-btn" onClick={() => handleTagClick('Tractor')}>🚜 Tractor</button>
                    <button type="button" className="quick-tag-btn" onClick={() => handleTagClick('Soil')}>🔬 Soil Test</button>
                  </div>

                  {/* Live Results */}
                  <div className="header-search-results">
                    {!searchQuery.trim() ? (
                      <p className="search-placeholder-text">
                        {lang === 'hi'
                          ? 'कृषि उत्पाद, बीज, खाद या सलाह खोजने के लिए लिखें...'
                          : 'Type to search agricultural products, seeds, fertilizers, or services...'}
                      </p>
                    ) : filteredSearchItems.length === 0 ? (
                      <div className="search-no-results">
                        <div className="empty-search-icon">🔍</div>
                        <p>
                          {lang === 'hi'
                            ? `"${searchQuery}" के लिए कोई परिणाम नहीं मिला`
                            : `No matches found for "${searchQuery}"`}
                        </p>
                      </div>
                    ) : (
                      <div className="search-results-list">
                        {filteredSearchItems.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            className="search-result-item"
                            onClick={() => setSearchOpen(false)}
                          >
                            <span className="result-icon">{item.icon}</span>
                            <div className="result-info">
                              <div className="result-title">
                                {lang === 'hi' ? item.titleHi : item.titleEn}
                              </div>
                              <div className="result-category">
                                {lang === 'hi' ? item.categoryHi : item.categoryEn}
                              </div>
                            </div>
                            <span className="result-arrow">➔</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Cart Button (Icon only) */}
            <button
              className="header-cart-btn"
              onClick={toggleCart}
              title={lang === 'hi' ? 'शॉपिंग कार्ट देखें' : 'View Shopping Cart'}
              aria-label="Shopping Cart"
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-badge-count">{totalItems}</span>
            </button>

            {/* Desktop Auth Section */}
            <div className="header-auth-wrapper" ref={userMenuRef}>
              {user ? (
                <div className="user-profile-menu">
                  <button
                    type="button"
                    className="user-chip-btn"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    aria-label="User Account Menu"
                  >
                    <span className="user-avatar-circle">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="user-chip-name">{user.name.split(' ')[0]}</span>
                    <span className="user-chip-caret">▼</span>
                  </button>

                  {userDropdownOpen && (
                    <div className="user-dropdown-menu">
                      <div className="dropdown-user-header">
                        <div className="user-avatar-circle large">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <strong>{user.name}</strong>
                          <div className="user-subtext">{user.role}</div>
                          <div className="user-subtext-loc">📍 {user.district}, {user.state}</div>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => {
                          openAuth('orders');
                          setUserDropdownOpen(false);
                        }}
                      >
                        <span>📦</span>
                        <span>{t('myOrders')}</span>
                      </button>
                      <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => {
                          openAuth('signup');
                          setUserDropdownOpen(false);
                        }}
                      >
                        <span>⚙️</span>
                        <span>{lang === 'hi' ? 'प्रोफ़ाइल संपादित करें' : 'Edit Profile'}</span>
                      </button>
                      <div className="dropdown-divider"></div>
                      <button
                        type="button"
                        className="dropdown-item logout-item"
                        onClick={() => {
                          signOut();
                          setUserDropdownOpen(false);
                        }}
                      >
                        <span>🚪</span>
                        <span>{t('signOut')}</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="guest-auth-buttons">
                  <button
                    type="button"
                    className="btn-auth-signin"
                    onClick={() => openAuth('signin')}
                    title="Sign In to your Kisan account"
                  >
                    <span>👤</span>
                    <span className="auth-btn-text">{t('signIn')}</span>
                  </button>
                  <button
                    type="button"
                    className="btn-auth-signup"
                    onClick={() => openAuth('signup')}
                    title="Create new Kisan account"
                  >
                    <span className="auth-btn-text">{t('signUp')}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop active"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
