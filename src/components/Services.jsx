import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

const Services = () => {
  const { lang, t } = useLanguage();
  const { showToast } = useToast();

  const services = [
    {
      id: 'advisory',
      icon: '🌱',
      title: t('serv1Title'),
      desc: t('serv1Desc'),
      action: lang === 'hi' ? 'सलाह देखें ➔' : 'Learn More ➔',
      msg: lang === 'hi' ? 'फसल सलाह: वास्तविक समय का बुवाई कैलेंडर उपलब्ध है।' : 'Crop Advisory: Real-time weather & sowing calendar loaded.'
    },
    {
      id: 'booking',
      icon: '🛒',
      title: t('serv2Title'),
      desc: t('serv2Desc'),
      action: lang === 'hi' ? 'अभी बुक करें ➔' : 'Book Now ➔',
      msg: lang === 'hi' ? 'ऑर्डर बुकिंग: ग्रामीण पिनकोड तक पक्की होम डिलीवरी सेवा।' : 'Order Booking: Direct rural doorstep delivery service.'
    },
    {
      id: 'soil',
      icon: '🔬',
      title: t('serv3Title'),
      desc: t('serv3Desc'),
      action: lang === 'hi' ? 'मिट्टी जांचें ➔' : 'Test Soil ➔',
      msg: lang === 'hi' ? 'मृदा परीक्षण: 12-पैरामीटर लैब जांच सेवा उपलब्ध है।' : 'Soil Testing: 12-parameter laboratory test available.'
    },
    {
      id: 'disease',
      icon: '🛡️',
      title: t('serv4Title'),
      desc: t('serv4Desc'),
      action: lang === 'hi' ? 'फसल बचाएं ➔' : 'Protect Crops ➔',
      msg: lang === 'hi' ? 'रोग नियंत्रण: तुरंत निदान एवं जैविक उपचार योजना।' : 'Disease Control: Instant diagnosis & remedy plans.'
    },
    {
      id: 'irrigation',
      icon: '💧',
      title: t('serv5Title'),
      desc: t('serv5Desc'),
      action: lang === 'hi' ? 'पानी बचाएं ➔' : 'Save Water ➔',
      msg: lang === 'hi' ? 'सिंचाई समाधान: 80% ड्रिप एवं स्प्रिंकलर सब्सिडी सहायता।' : 'Irrigation: Drip & sprinkler subsidy assistance.'
    },
    {
      id: 'training',
      icon: '👨‍🏫',
      title: t('serv6Title'),
      desc: t('serv6Desc'),
      action: lang === 'hi' ? 'ट्रेनिंग में जुड़ें ➔' : 'Join Training ➔',
      msg: lang === 'hi' ? 'किसान प्रशिक्षण: इस शनिवार को लाइव फील्ड वर्कशॉप।' : 'Training: Next live farmer workshop this Saturday.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="leaf-icon">🌿</span>
            <span>{t('servicesTag')}</span>
            <span className="leaf-icon">🌿</span>
          </div>
          <h2 className="section-subtitle">
            <span className="sparkle">✦</span> {t('servicesSubtitle')}{' '}
            <span className="sparkle">✦</span>
          </h2>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="services-grid">
          {services.map((serv) => (
            <div
              key={serv.id}
              className="service-card"
              onClick={() => showToast(serv.msg, 'info')}
            >
              <div className="service-icon-box">{serv.icon}</div>
              <h3 className="service-title">{serv.title}</h3>
              <p className="service-desc">{serv.desc}</p>
              <span className="service-link">{serv.action}</span>
            </div>
          ))}
        </div>

        {/* Healthy Soil... Healthy Harvest Banner */}
        <div className="healthy-soil-banner">
          <div className="healthy-soil-quote">
            <h3>{t('healthySoilQuote')}</h3>
            <p>{t('healthySoilSub')}</p>
          </div>
          <a
            href="#advisor"
            className="btn btn-secondary"
            style={{ background: '#ffffff', color: '#14532d', fontSize: '0.9rem' }}
          >
            {t('consultAgronomistBtn')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

