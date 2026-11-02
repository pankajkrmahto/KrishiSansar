import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Topbar = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-left">
          <a href="tel:+919876543210" className="topbar-item helpline-item" title="Click to Call Helpline">
            <span>📞</span>
            <span className="helpline-text" dangerouslySetInnerHTML={{ __html: t('topbarHelpline') }} />
          </a>
          <div className="topbar-item location-item">
            <span>📍</span>
            <span>{t('topbarLocation')}</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-item email-item">
            <span>✉️</span>
            <span>{t('topbarEmail')}</span>
          </div>
          <button
            className="lang-switch"
            onClick={toggleLang}
            title={lang === 'en' ? 'Switch to Hindi / भाषा बदलें' : 'अंग्रेजी भाषा चुनें'}
            aria-label="Switch Language"
          >
            <span className="lang-icon">🌐</span>
            <span className="lang-text">{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            <span className="lang-tag">{lang === 'en' ? 'अ' : 'EN'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

