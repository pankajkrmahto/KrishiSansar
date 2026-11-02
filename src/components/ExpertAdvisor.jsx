import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';
import { KNOWLEDGE_BASE } from '../data/knowledgeBase';

const QUICK_PROMPTS = [
  { en: "Paddy leaves turning yellow", hi: "धान की पत्तियां पीली हो रही हैं", icon: "🌾" },
  { en: "Stem borer insect pest attack", hi: "तना छेदक कीट प्रकोप", icon: "🐛" },
  { en: "Wheat rust yellow pustules", hi: "गेहूं पर पीला रतुआ रोग", icon: "🍂" },
  { en: "Soil testing & acidic lime", hi: "मिट्टी जांच एवं चूना संतुलन", icon: "🧪" },
  { en: "Tomato & potato blight cure", hi: "टमाटर व आलू में झुलसा रोग", icon: "🍅" },
  { en: "Drip irrigation subsidy", hi: "ड्रिप सिंचाई सब्सिडी योजना", icon: "💧" }
];

const ExpertAdvisor = ({ onOpenAdvisorModal }) => {
  const { lang, t } = useLanguage();
  const { showToast } = useToast();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [activePromptQuery, setActivePromptQuery] = useState('');

  const triggerSearch = (queryText) => {
    const q = queryText.trim().toLowerCase();
    if (!q) {
      showToast(
        lang === 'hi' ? 'कृपया पहले अपनी फसल का सवाल लिखें।' : 'Please type your farming question first.',
        'info'
      );
      return;
    }

    let matched = null;
    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(kw => q.includes(kw))) {
        matched = item;
        break;
      }
    }

    let finalAnswer = '';
    if (matched) {
      finalAnswer = lang === 'hi' ? matched.answerHi : matched.answerEn;
    } else {
      finalAnswer =
        lang === 'hi'
          ? `🌾 <strong>डॉ. रमेश कुमार की सलाह:</strong> आपके सवाल <em>"${queryText.trim()}"</em> के लिए धन्यवाद। हमारे कृषि वैज्ञानिकों की सलाह है कि खेत में जैविक खाद की मात्रा बढ़ाएं, प्रमाणित बायो-स्टिमुलेंट का उपयोग करें और नमी बनाए रखें। आपका सवाल दर्ज कर लिया गया है; हमारे विशेषज्ञ 2 घंटे के भीतर आपसे फोन पर संपर्क करेंगे।`
          : `🌾 <strong>Dr. Ramesh Kumar's Advice:</strong> Thank you for your question regarding <em>"${queryText.trim()}"</em>. Our agronomists recommend maintaining soil organic matter, applying certified biostimulants, and keeping soil moisture consistent. We have logged your query; an expert will call your registered number within 2 hours.`;
    }

    setAnswer(finalAnswer);
    setHasAnswered(true);
    showToast(
      lang === 'hi' ? 'कृषि वैज्ञानिक की सलाह प्राप्त हुई!' : 'Agronomist advice generated!',
      'success'
    );
  };

  const handleAsk = (e) => {
    e.preventDefault();
    triggerSearch(question);
  };

  const handlePromptClick = (promptItem) => {
    const q = lang === 'hi' ? promptItem.hi : promptItem.en;
    setQuestion(q);
    setActivePromptQuery(q);
    triggerSearch(q);
  };

  return (
    <section className="advisor-section" id="advisor">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="leaf-icon">🌿</span>
            <span>{t('advisorTag')}</span>
            <span className="leaf-icon">🌿</span>
          </div>
          <h2 className="section-subtitle">{t('advisorSubtitle')}</h2>
        </div>

        {/* Main Doctor Profile & Checklist Card */}
        <div className="advisor-container-card">
          <div className="advisor-profile-grid">
            {/* Left Column: Doctor Profile */}
            <div className="doctor-profile-box">
              <div className="doctor-avatar-wrapper">
                <img
                  src="/images/doctor_ramesh.jpg"
                  alt="Dr. Ramesh Kumar - Senior Agriculture Expert"
                  className="doctor-avatar-img"
                />
                <span className="doctor-online-pulse" title="Agronomist Online Now"></span>
                <span className="doctor-verified-badge" title="Verified Agriculture Scientist">
                  ✔
                </span>
              </div>
              <div className="doctor-details">
                <div className="doctor-status-pill">
                  <span className="pulse-dot"></span>
                  <span>{lang === 'hi' ? 'लाइव परामर्श उपलब्ध' : 'Available for Consultation'}</span>
                </div>
                <h3 className="doctor-name">{t('doctorName')}</h3>
                <p className="doctor-designation">{t('doctorDesignation')}</p>
                <div className="doctor-rating-pill">
                  <span>★★★★★</span>
                  <span>4.8 (5k+ Advice Given)</span>
                </div>
                <p className="doctor-exp">{t('doctorExp')}</p>
                <button
                  type="button"
                  className="btn btn-primary btn-advisor-profile"
                  onClick={onOpenAdvisorModal}
                >
                  <span>{t('viewProfileBtn')}</span>
                  <span>👨‍🔬</span>
                </button>
              </div>
            </div>

            {/* Right Column: 5 Key Capabilities Checklist */}
            <div className="advisor-checklist">
              <div className="checklist-header">
                <span className="checklist-icon">📋</span>
                <h4>{lang === 'hi' ? 'डॉ. रमेश की विशेषज्ञता क्षेत्र' : 'Specialization & Advisory Scope'}</h4>
              </div>
              <div className="check-item">
                <div className="check-circle">✔</div>
                <div className="check-text">{t('check1')}</div>
              </div>
              <div className="check-item">
                <div className="check-circle">✔</div>
                <div className="check-text">{t('check2')}</div>
              </div>
              <div className="check-item">
                <div className="check-circle">✔</div>
                <div className="check-text">{t('check3')}</div>
              </div>
              <div className="check-item">
                <div className="check-circle">✔</div>
                <div className="check-text">{t('check4')}</div>
              </div>
              <div className="check-item">
                <div className="check-circle">✔</div>
                <div className="check-text">{t('check5')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive "Ask Your Question" Widget */}
        <div className="ask-question-box">
          <div className="ask-avatar-box">
            <div className="ask-avatar-wrap">
              <img
                src="/images/farmer_ask.jpg"
                alt="Farmer asking question - Krishi Sansar"
                className="ask-avatar-img"
              />
              <span className="ask-badge-pill">AI Help</span>
            </div>
            <div>
              <h4 className="ask-avatar-title">{t('askAvatarTitle')}</h4>
              <p className="ask-avatar-sub">{t('askAvatarSub')}</p>
            </div>
          </div>

          <form className="ask-form" onSubmit={handleAsk}>
            <div className="ask-input-wrap">
              <span className="ask-input-icon">🔍</span>
              <input
                type="text"
                className="ask-input"
                placeholder={t('askPlaceholder')}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              {question && (
                <button
                  type="button"
                  className="ask-input-clear"
                  onClick={() => setQuestion('')}
                >
                  ✕
                </button>
              )}
            </div>
            <button type="submit" className="btn btn-primary ask-btn-submit">
              <span>{t('askNowBtn')}</span>
            </button>
          </form>

          {/* Quick Clickable Symptom Prompts */}
          <div className="quick-prompts-wrapper">
            <span className="quick-prompts-label">
              ⚡ {lang === 'hi' ? 'त्वरित प्रश्न सुझाव:' : 'Quick Common Issues:'}
            </span>
            <div className="quick-prompts-list">
              {QUICK_PROMPTS.map((p, idx) => {
                const text = lang === 'hi' ? p.hi : p.en;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`prompt-chip ${activePromptQuery === text ? 'active' : ''}`}
                    onClick={() => handlePromptClick(p)}
                  >
                    <span>{p.icon}</span>
                    <span>{text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive AI Crop Doctor Response Card */}
        {hasAnswered && (
          <div className="ai-answer-card">
            <div className="ai-answer-header">
              <div className="ai-doctor-tag">
                <span className="ai-leaf-icon">🌿</span>
                <span className="ai-doctor-title">
                  {lang === 'hi' ? 'डॉ. रमेश कुमार की वैज्ञानिक सिफारिश' : "Dr. Ramesh Kumar's Scientific Recommendation"}
                </span>
              </div>
              <span className="ai-verified-stamp">● Verified Prescription</span>
            </div>
            <div
              className="ai-answer-body"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
            <div className="ai-answer-footer">
              <div className="ai-footer-note">
                <span>💡</span>
                <span>
                  {lang === 'hi'
                    ? 'अधिक जानकारी के लिए ऊपर दिए गए "View Profile" बटन से 1-on-1 परामर्श स्लॉट बुक करें।'
                    : 'For custom soil test analysis, book a 1-on-1 phone slot with Dr. Ramesh Kumar above.'}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onOpenAdvisorModal}
              >
                <span>{lang === 'hi' ? 'कॉल बुक करें' : 'Book Call'} 📞</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpertAdvisor;
