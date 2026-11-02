import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

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

const Contact = () => {
  const { lang, t } = useLanguage();
  const { showToast } = useToast();

  const [topic, setTopic] = useState('General Inquiry');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleTopicChange = (newTopic) => {
    setTopic(newTopic);
    const templates = TOPIC_TEMPLATES[lang] || TOPIC_TEMPLATES.en;
    setFormData((prev) => ({
      ...prev,
      message: templates[newTopic] || ''
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast(
        lang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड (*) भरें।' : 'Please fill out all required fields (*).',
        'info'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData, topic });
      showToast(
        lang === 'hi'
          ? `धन्यवाद ${formData.name}! आपका संदेश सफलतापूर्वक भेजा गया।`
          : `Thank you ${formData.name}! Your message was sent successfully.`,
        'success'
      );
    }, 900);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setTopic('General Inquiry');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="leaf-icon">🌿</span>
            <span>{t('contactTag')}</span>
            <span className="leaf-icon">🌿</span>
          </div>
          <h2 className="section-subtitle">{t('contactSubtitle')}</h2>
          <p className="section-description">{t('contactDesc')}</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Info Cards & Social Channels */}
          <div className="contact-info-col">
            <div className="contact-info-list">
              {/* Phone Card */}
              <a href="tel:+919876543210" className="contact-card-item" title="Click to Call Helpline">
                <div className="contact-icon-bubble">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-meta">
                  <div className="contact-meta-header">
                    <h4>+91 98765 43210</h4>
                    <span className="contact-status-badge">● Active Now</span>
                  </div>
                  <p>Mon - Sat, 9AM - 6PM • Toll-Free Kisan Helpline</p>
                </div>
                <span className="contact-card-arrow">➔</span>
              </a>

              {/* Email Card */}
              <a href="mailto:info@krishisansar.in" className="contact-card-item" title="Click to Send Email">
                <div className="contact-icon-bubble">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1-0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-meta">
                  <div className="contact-meta-header">
                    <h4>info@krishisansar.in</h4>
                    <span className="contact-reply-time">⚡ ~2h reply</span>
                  </div>
                  <p>Direct response for product orders & inquiries</p>
                </div>
                <span className="contact-card-arrow">➔</span>
              </a>

              {/* Location Card */}
              <a href="https://maps.google.com/?q=Ranchi,+Jharkhand,+India" target="_blank" rel="noopener noreferrer" className="contact-card-item" title="View on Google Maps">
                <div className="contact-icon-bubble">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-meta">
                  <div className="contact-meta-header">
                    <h4>Ranchi, Jharkhand, India</h4>
                  </div>
                  <p>Regional Agri-Hub & Distribution Headquarters</p>
                </div>
                <span className="contact-card-arrow">➔</span>
              </a>

              {/* WhatsApp Quick Connect Banner Card */}
              <a href="https://wa.me/919876543210?text=Namaste%20Krishi%20Sansar!%20I%20have%20a%20farming%20question." target="_blank" rel="noopener noreferrer" className="whatsapp-card-item">
                <div className="wa-icon-bubble">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.53C8.87 7.53 8.61 7.59 8.38 7.84C8.16 8.09 7.54 8.68 7.54 9.87C7.54 11.07 8.41 12.22 8.53 12.38C8.65 12.55 10.22 14.97 12.63 16C14.63 16.86 15.04 16.69 15.48 16.65C15.92 16.61 16.9 16.06 17.11 15.48C17.31 14.89 17.31 14.39 17.25 14.28C17.19 14.18 17.03 14.12 16.78 14C16.53 13.88 15.31 13.28 15.08 13.19C14.85 13.11 14.69 13.07 14.52 13.32C14.36 13.57 13.89 14.12 13.74 14.28C13.6 14.45 13.45 14.47 13.2 14.35C12.95 14.22 11.89 13.88 10.63 12.75C9.65 11.88 8.99 10.8 8.87 10.59C8.75 10.38 8.85 10.27 8.98 10.14C9.09 10.03 9.23 9.85 9.35 9.71C9.48 9.56 9.52 9.46 9.6 9.29C9.69 9.13 9.64 8.98 9.58 8.86C9.52 8.73 9.07 7.63 8.88 7.18C8.7 6.74 8.52 6.8 8.38 6.79L8 6.79C7.83 6.79 7.6 6.86 7.42 7.05"></path>
                  </svg>
                </div>
                <div className="wa-text-col">
                  <strong>Instant WhatsApp Kisan Chat</strong>
                  <span>Direct advisory & quick order queries • 24/7</span>
                </div>
                <span className="wa-chat-badge">Chat ➔</span>
              </a>
            </div>

            {/* Social Media Follow */}
            <div className="contact-social-group">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-icons-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-brand-btn fb-btn" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-brand-btn yt-btn" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-brand-btn ig-btn" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-brand-btn in-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {/* Quick Inquiry Topic Pills */}
              <div className="form-topics-header">
                <span className="topic-label">
                  {lang === 'hi' ? 'पूछताछ का विषय:' : 'Inquiring About:'}
                </span>
                <div className="form-topic-pills">
                  {['General Inquiry', 'Seeds Booking', 'Fertilizers', 'Machinery', 'Doctor Advice'].map((tName) => (
                    <button
                      key={tName}
                      type="button"
                      className={`topic-pill ${topic === tName ? 'active' : ''}`}
                      onClick={() => handleTopicChange(tName)}
                    >
                      {tName === 'General Inquiry' && '🌿 General'}
                      {tName === 'Seeds Booking' && '🌾 Seeds'}
                      {tName === 'Fertilizers' && '🧪 Fertilizer'}
                      {tName === 'Machinery' && '🚜 Tractor & Tools'}
                      {tName === 'Doctor Advice' && '👨‍🔬 Advisor'}
                    </button>
                  ))}
                </div>
              </div>

              {!submittedData ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group-pill">
                    <input
                      type="text"
                      name="name"
                      className="form-input-pill"
                      placeholder={lang === 'hi' ? 'आपका नाम *' : 'Your Name *'}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>

                  <div className="form-group-pill">
                    <input
                      type="email"
                      name="email"
                      className="form-input-pill"
                      placeholder={lang === 'hi' ? 'आपका ईमेल *' : 'Your Email *'}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-icon">✉️</span>
                  </div>

                  <div className="form-group-pill">
                    <input
                      type="tel"
                      name="phone"
                      className="form-input-pill"
                      placeholder={lang === 'hi' ? 'मोबाइल नंबर (+91 ...)' : 'Your Mobile Number (+91 ...)'}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <span className="input-icon">📱</span>
                  </div>

                  <div className="form-group-pill">
                    <textarea
                      name="message"
                      className="form-textarea-pill"
                      placeholder={lang === 'hi' ? 'आपका संदेश *' : 'Your Message *'}
                      maxLength={500}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="textarea-bottom-row">
                      <span className="input-icon-textarea">💬</span>
                      <span
                        className="char-counter"
                        style={{ color: formData.message.length >= 480 ? '#ef4444' : '#94a3b8' }}
                      >
                        {formData.message.length} / 500
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-pill-submit"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting
                        ? lang === 'hi' ? 'संदेश भेजा जा रहा है... ⏳' : 'Sending Message... ⏳'
                        : lang === 'hi' ? 'संदेश भेजें' : 'Send Message'}
                    </span>
                    <span className="btn-arrow-icon">➔</span>
                  </button>
                </form>
              ) : (
                <div className="contact-success-box" style={{ display: 'block' }}>
                  <div className="success-icon-ring">✓</div>
                  <h3 className="success-title">
                    {lang === 'hi' ? 'संदेश सफलतापूर्वक भेजा गया!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="success-desc">
                    {lang === 'hi' ? (
                      <>
                        धन्यवाद, <strong>{submittedData.name}</strong>! आपकी पूछताछ{' '}
                        <strong>"{submittedData.topic}"</strong> प्राप्त हो गई है। एक पुष्टि संदेश{' '}
                        <em>{submittedData.email}</em> पर भेजा गया है।
                      </>
                    ) : (
                      <>
                        Thank you, <strong>{submittedData.name}</strong>! Your inquiry regarding{' '}
                        <strong>"{submittedData.topic}"</strong> has been received. A confirmation has been sent to{' '}
                        <em>{submittedData.email}</em>.
                      </>
                    )}
                  </p>
                  <div className="success-actions">
                    <button type="button" className="btn btn-secondary" onClick={handleReset}>
                      {lang === 'hi' ? 'दूसरा संदेश भेजें' : 'Send Another Message'}
                    </button>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ background: '#25d366', borderColor: '#25d366' }}
                    >
                      <span>{lang === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Banner / Slogan */}
        <div className="together-bottom-bar">
          <div className="together-decor-leaf left-leaf">🌿</div>
          <div className="together-slogan-wrapper">
            <span className="slogan-sparkle">✦</span>
            <span className="together-cursive-text">{t('togetherSlogan')}</span>
            <span className="slogan-sparkle">✦</span>
          </div>
          <div className="together-decor-leaf right-leaf">🌿</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

