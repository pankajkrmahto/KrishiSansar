import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

const About = () => {
  const { lang, t } = useLanguage();
  const { showToast } = useToast();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="leaf-icon">🌿</span>
            <span>{t('aboutTag')}</span>
            <span className="leaf-icon">🌿</span>
          </div>
          <h2 className="section-subtitle">{t('aboutSubtitle')}</h2>
        </div>

        <div className="about-grid">
          {/* Left Story & Stats Column */}
          <div className="about-content">
            <p className="about-story">{t('aboutStory')}</p>

            {/* 4 Pillars with Checkmarks */}
            <div className="about-pillars">
              <div className="about-pillar-item">
                <div className="about-check">✔</div>
                <div className="about-pillar-text">{t('pillar1')}</div>
              </div>
              <div className="about-pillar-item">
                <div className="about-check">✔</div>
                <div className="about-pillar-text">{t('pillar2')}</div>
              </div>
              <div className="about-pillar-item">
                <div className="about-check">✔</div>
                <div className="about-pillar-text">{t('pillar3')}</div>
              </div>
              <div className="about-pillar-item">
                <div className="about-check">✔</div>
                <div className="about-pillar-text">{t('pillar4')}</div>
              </div>
            </div>

            {/* Animated Stat Counters */}
            <div className="about-stats-row">
              <div className="stat-box">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">{t('stat1Label')}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">1,200+</div>
                <div className="stat-label">{t('stat2Label')}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">98%</div>
                <div className="stat-label">{t('stat3Label')}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">15+</div>
                <div className="stat-label">{t('stat4Label')}</div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                showToast(
                  lang === 'hi'
                    ? 'कृषि संसार की स्थापना प्रत्येक भारतीय किसान को आत्मनिर्भर और लाभदायक बनाने के लक्ष्य से की गई है।'
                    : 'Krishi Sansar was founded with a single mission: To make every Indian farmer self-reliant and profitable.',
                  'info'
                )
              }
            >
              <span>{t('knowMoreBtn')}</span>
            </button>
          </div>

          {/* Right Visual Column: Circular Seedling Photo */}
          <div className="about-visual-box">
            <div className="about-circle-frame">
              <img
                src="/images/about_soil_seedling.jpg"
                alt="Hands holding rich fertile soil with green sapling - Krishi Sansar"
                className="about-soil-img"
              />
            </div>
            <div className="about-floating-badge">
              <span>🌱</span>
              <span>{t('aboutEcoBadge')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

