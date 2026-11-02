import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

const AdvisorModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const { showToast } = useToast();

  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingTopic, setBookingTopic] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingName.trim() || !bookingPhone.trim() || !bookingTopic) {
      showToast(
        lang === 'hi' ? 'कृपया सभी फ़ील्ड भरें।' : 'Please fill in all consultation fields.',
        'info'
      );
      return;
    }

    showToast(
      lang === 'hi'
        ? `धन्यवाद ${bookingName}! डॉ. रमेश कुमार के साथ परामर्श स्लॉट आरक्षित हो गया है (SMS भेजा गया)।`
        : `Thank you ${bookingName}! Consultation slot confirmed with Dr. Ramesh Kumar (SMS sent).`,
      'success'
    );
    onClose();
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}
    >
      <div className="modal-card advisor-modal-card">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="/images/doctor_ramesh.jpg"
            alt="Dr. Ramesh Kumar"
            className="advisor-modal-avatar"
          />
          <h3 className="advisor-modal-name">
            {lang === 'hi' ? 'डॉ. रमेश कुमार' : 'Dr. Ramesh Kumar'}
          </h3>
          <p className="advisor-modal-desig">
            {lang === 'hi'
              ? 'वरिष्ठ कृषि वैज्ञानिक एवं पादप रोग विशेषज्ञ'
              : 'Senior Agriculture Scientist & Agronomy Head'}
          </p>
          <div className="advisor-modal-rating-badge">
            ★★★★★ 4.8 Rating (5,000+ Consultations)
          </div>
        </div>

        <div className="advisor-modal-bio-box">
          <strong>{lang === 'hi' ? 'योग्यता एवं अनुसंधान अनुभव:' : 'Qualifications & Research:'}</strong>
          <br />
          • Ph.D. in Soil Science & Agronomy (ICAR - IARI, New Delhi)
          <br />
          • Former Principal Scientist at Birsa Agricultural University, Ranchi
          <br />
          • Specialization: Organic Soil Regeneration, Paddy Stem Borer Eradication, High-Density Vegetable Cropping.
          <br />
          • Published 40+ Research Papers on sustainable smallholder farming in Eastern India.
        </div>

        <h4 className="advisor-modal-form-title">
          {lang === 'hi'
            ? '1-ऑन-1 फोन / फील्ड परामर्श बुक करें (निःशुल्क)'
            : 'Book a 1-on-1 Phone / Field Consultation (Free)'}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="advisor-modal-grid">
            <input
              type="text"
              placeholder={lang === 'hi' ? 'किसान का नाम *' : 'Farmer Name *'}
              className="form-input"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder={lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
              className="form-input"
              value={bookingPhone}
              onChange={(e) => setBookingPhone(e.target.value)}
              required
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <select
              className="form-input"
              value={bookingTopic}
              onChange={(e) => setBookingTopic(e.target.value)}
              required
            >
              <option value="">{lang === 'hi' ? 'परामर्श का विषय चुनें *' : 'Select Topic of Consultation *'}</option>
              <option value="crop-disease">
                {lang === 'hi' ? 'फसल रोग एवं कीट निवारण' : 'Crop Disease & Pest Diagnosis'}
              </option>
              <option value="soil-test">
                {lang === 'hi' ? 'मृदा स्वास्थ्य एवं खाद की सिफारिश' : 'Soil Health & Fertilizer Recommendation'}
              </option>
              <option value="crop-choice">
                {lang === 'hi' ? 'मौसमी उत्तम फसल का चयन' : 'Seasonal Crop Selection'}
              </option>
              <option value="drip">
                {lang === 'hi' ? 'ड्रिप सिंचाई एवं सरकारी सब्सिडी' : 'Drip Irrigation & Subsidy Guidance'}
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            <span>{lang === 'hi' ? 'परामर्श स्लॉट की पुष्टि करें' : 'Confirm Consultation Slot (Free)'}</span>
            <span>➔</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvisorModal;
