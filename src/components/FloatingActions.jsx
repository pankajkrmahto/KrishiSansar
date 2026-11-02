import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FloatingActions = () => {
  const { lang } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions" id="floatingActions">
      {/* Scroll to Top */}
      <button
        type="button"
        className={`fab-btn fab-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        title={lang === 'hi' ? 'ऊपर जाएं' : 'Scroll to Top'}
        aria-label="Scroll to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span className="fab-tooltip">{lang === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
      </button>

      {/* Call Helpline Button */}
      <a
        href="tel:+919876543210"
        className="fab-btn fab-call"
        title={lang === 'hi' ? 'किसान हेल्पलाइन पर कॉल करें' : 'Call Kisan Helpline'}
        aria-label="Call Helpline"
      >
        <div className="fab-icon-wrap">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span className="fab-tooltip">
          <span className="tooltip-title">
            {lang === 'hi' ? 'किसान हेल्पलाइन' : 'Call Kisan Helpline'}
          </span>
          <span className="tooltip-sub">+91 98765 43210 (Toll-Free)</span>
        </span>
        <span className="fab-ping-ring"></span>
      </a>

      {/* WhatsApp Message Button */}
      <a
        href="https://wa.me/919876543210?text=Namaste%20Krishi%20Sansar!%20I%20need%20farming%20advice%20and%20product%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        title={lang === 'hi' ? 'व्हाट्सएप पर कृषि विशेषज्ञ से बात करें' : 'Chat with Agri Expert on WhatsApp'}
        aria-label="Chat on WhatsApp"
      >
        <div className="fab-icon-wrap">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.53C8.87 7.53 8.61 7.59 8.38 7.84C8.16 8.09 7.54 8.68 7.54 9.87C7.54 11.07 8.41 12.22 8.53 12.38C8.65 12.55 10.22 14.97 12.63 16C14.63 16.86 15.04 16.69 15.48 16.65C15.92 16.61 16.9 16.06 17.11 15.48C17.31 14.89 17.31 14.39 17.25 14.28C17.19 14.18 17.03 14.12 16.78 14C16.53 13.88 15.31 13.28 15.08 13.19C14.85 13.11 14.69 13.07 14.52 13.32C14.36 13.57 13.89 14.12 13.74 14.28C13.6 14.45 13.45 14.47 13.2 14.35C12.95 14.22 11.89 13.88 10.63 12.75C9.65 11.88 8.99 10.8 8.87 10.59C8.75 10.38 8.85 10.27 8.98 10.14C9.09 10.03 9.23 9.85 9.35 9.71C9.48 9.56 9.52 9.46 9.6 9.29C9.69 9.13 9.64 8.98 9.58 8.86C9.52 8.73 9.07 7.63 8.88 7.18C8.7 6.74 8.52 6.8 8.38 6.79L8 6.79C7.83 6.79 7.6 6.86 7.42 7.05"></path>
          </svg>
        </div>
        <span className="fab-online-dot" title="Advisor Online"></span>
        <span className="fab-tooltip">
          <span className="tooltip-title">
            {lang === 'hi' ? 'कृषि विशेषज्ञ से चैट करें' : 'Chat with Agri Expert'}
          </span>
          <span className="tooltip-sub">
            ● {lang === 'hi' ? 'त्वरित 24/7 व्हाट्सएप सहायता' : 'Instant 24/7 WhatsApp Support'}
          </span>
        </span>
        <span className="fab-pulse-wave"></span>
      </a>
    </div>
  );
};

export default FloatingActions;

