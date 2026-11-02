import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const INDIAN_STATES = [
  'Jharkhand',
  'Bihar',
  'Uttar Pradesh',
  'Madhya Pradesh',
  'West Bengal',
  'Odisha',
  'Punjab',
  'Haryana',
  'Rajasthan',
  'Maharashtra',
  'Gujarat',
  'Chhattisgarh'
];

const AuthModal = () => {
  const { lang } = useLanguage();
  const {
    isAuthOpen,
    authMode,
    setAuthMode,
    closeAuth,
    signIn,
    signUp,
    sendOtp,
    verifyOtp,
    loginDemoUser,
    orders
  } = useAuth();
  const { showToast } = useToast();

  // Sign In states
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Sign Up states
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regRole, setRegRole] = useState('Farmer / किसान');
  const [regState, setRegState] = useState('Jharkhand');
  const [regDistrict, setRegDistrict] = useState('Ranchi');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // OTP states
  const [otpPhone, setOtpPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // Forgot password
  const [forgotInput, setForgotInput] = useState('');

  React.useEffect(() => {
    if (isAuthOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAuthOpen]);

  if (!isAuthOpen) return null;

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      showToast(
        lang === 'hi' ? 'कृपया मोबाइल/ईमेल और पासवर्ड दर्ज करें।' : 'Please enter your mobile/email and password.',
        'info'
      );
      return;
    }

    const u = signIn({ identifier, password });
    showToast(
      lang === 'hi' ? `स्वागत है, ${u.name}! आप सफलतापूर्वक लॉग इन हो गए हैं।` : `Welcome back, ${u.name}! Signed in successfully.`,
      'success'
    );
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!regName.trim() || !regPhone.trim() || !regPassword.trim()) {
      showToast(
        lang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill in all required fields.',
        'info'
      );
      return;
    }

    if (regPassword !== regConfirmPassword) {
      showToast(
        lang === 'hi' ? 'पासवर्ड मेल नहीं खा रहे हैं।' : 'Passwords do not match.',
        'error'
      );
      return;
    }

    if (!agreeTerms) {
      showToast(
        lang === 'hi' ? 'कृपया नियम एवं शर्तों को स्वीकार करें।' : 'Please agree to terms & conditions.',
        'info'
      );
      return;
    }

    const u = signUp({
      name: regName,
      phone: regPhone,
      email: regEmail,
      role: regRole,
      state: regState,
      district: regDistrict
    });

    showToast(
      lang === 'hi'
        ? `बधाई हो ${u.name}! आपका कृषि संसार खाता सफलतापूर्वक बन गया है।`
        : `Congratulations ${u.name}! Your Krishi Sansar account was created successfully.`,
      'success'
    );
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!otpPhone.trim() || otpPhone.trim().length < 10) {
      showToast(
        lang === 'hi' ? 'कृपया मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.',
        'info'
      );
      return;
    }

    const code = sendOtp(otpPhone);
    setSentCode(code);
    setOtpSent(true);
    showToast(
      lang === 'hi'
        ? `ओटीपी कोड ${code} (या 1234) आपके नंबर पर भेजा गया!`
        : `OTP Code ${code} (or 1234) sent to your mobile!`,
      'info',
      5000
    );
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const res = verifyOtp(otpPhone, otpCode.trim());
    if (res.success) {
      showToast(
        lang === 'hi' ? 'ओटीपी सत्यापित! सफलतापूर्वक लॉग इन हो गए।' : 'OTP Verified! Signed in successfully.',
        'success'
      );
    } else {
      showToast(res.error, 'error');
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotInput.trim()) return;
    showToast(
      lang === 'hi'
        ? `पासवर्ड रीसेट लिंक ${forgotInput} पर भेज दिया गया है!`
        : `Password reset instructions sent to ${forgotInput}!`,
      'success'
    );
    setAuthMode('signin');
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => e.target.classList.contains('modal-overlay') && closeAuth()}
    >
      <div className="modal-card auth-modal-card">
        <button className="modal-close-btn" onClick={closeAuth} aria-label="Close Auth Modal">
          ✕
        </button>

        {/* Modal Top Header with Brand Leaf */}
        <div className="auth-header">
          <div className="auth-logo-badge">
            <span>🌱</span>
          </div>
          <h2 className="auth-title">
            {authMode === 'signin' && (lang === 'hi' ? 'कृषि संसार में प्रवेश करें' : 'Sign In to Krishi Sansar')}
            {authMode === 'signup' && (lang === 'hi' ? 'नया किसान खाता बनाएं' : 'Create Kisan Account')}
            {authMode === 'otp' && (lang === 'hi' ? 'मोबाइल ओटीपी से लॉगिन' : 'Mobile OTP Login')}
            {authMode === 'forgot' && (lang === 'hi' ? 'पासवर्ड रीसेट करें' : 'Reset Password')}
            {authMode === 'orders' && (lang === 'hi' ? 'मेरे ऑर्डर एवं बुकिंग' : 'My Orders & History')}
          </h2>
          <p className="auth-subtitle">
            {authMode === 'signin' && (lang === 'hi' ? 'प्रमाणित बीज, उर्वरक और फसल परामर्श तक पहुंचें' : 'Access lab-tested seeds, fertilizers, and agronomy advice')}
            {authMode === 'signup' && (lang === 'hi' ? '50,000+ प्रगतिशील किसानों के समुदाय से जुड़ें' : 'Join India’s most trusted community of 50,000+ progressive farmers')}
            {authMode === 'otp' && (lang === 'hi' ? 'अपने पंजीकृत मोबाइल पर त्वरित वन-टाइम पासवर्ड प्राप्त करें' : 'Receive instant one-time password on your mobile')}
            {authMode === 'forgot' && (lang === 'hi' ? 'अपना मोबाइल नंबर या ईमेल दर्ज करें' : 'Enter your registered mobile or email')}
            {authMode === 'orders' && (lang === 'hi' ? 'आपके वर्तमान और पिछले कृषि इनपुट ऑर्डर' : 'Track your active orders and delivery status')}
          </p>
        </div>

        {/* Navigation Tabs (Sign In / Sign Up) */}
        {authMode !== 'orders' && (
          <div className="auth-tabs-row">
            <button
              type="button"
              className={`auth-tab-btn ${authMode === 'signin' || authMode === 'otp' ? 'active' : ''}`}
              onClick={() => setAuthMode('signin')}
            >
              <span>👤</span>
              <span>{lang === 'hi' ? 'लॉग इन' : 'Sign In'}</span>
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${authMode === 'signup' ? 'active' : ''}`}
              onClick={() => setAuthMode('signup')}
            >
              <span>✨</span>
              <span>{lang === 'hi' ? 'साइन अप (खाता बनाएं)' : 'Sign Up'}</span>
            </button>
          </div>
        )}

        {/* 1. SIGN IN MODE */}
        {authMode === 'signin' && (
          <form onSubmit={handleSignInSubmit} className="auth-form">
            <div className="form-field-group">
              <label className="field-label">
                {lang === 'hi' ? 'मोबाइल नंबर या ईमेल *' : 'Mobile Number or Email *'}
              </label>
              <div className="field-input-box">
                <span className="field-icon">📱</span>
                <input
                  type="text"
                  className="auth-input"
                  placeholder={lang === 'hi' ? 'जैसे: 9876543210 या kisan@gmail.com' : 'e.g. 9876543210 or kisan@gmail.com'}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field-group">
              <div className="field-label-row">
                <label className="field-label">
                  {lang === 'hi' ? 'पासवर्ड *' : 'Password *'}
                </label>
                <button
                  type="button"
                  className="field-link-btn"
                  onClick={() => setAuthMode('forgot')}
                >
                  {lang === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot Password?'}
                </button>
              </div>
              <div className="field-input-box">
                <span className="field-icon">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="field-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '👁️' : '🙈'}
                </button>
              </div>
            </div>

            <div className="form-options-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>{lang === 'hi' ? 'मुझे याद रखें' : 'Remember me'}</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit">
              <span>{lang === 'hi' ? 'प्रवेश करें (लॉग इन)' : 'Sign In'}</span>
              <span>➔</span>
            </button>

            {/* Quick OTP Alternative */}
            <div className="auth-divider">
              <span>{lang === 'hi' ? 'या' : 'OR'}</span>
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-otp-mode"
              onClick={() => setAuthMode('otp')}
            >
              <span>📲</span>
              <span>{lang === 'hi' ? 'मोबाइल ओटीपी से त्वरित लॉगिन' : 'Login via Mobile OTP'}</span>
            </button>

            {/* Demo Quick Logins for Instant Testing */}
            <div className="demo-logins-box">
              <span className="demo-label">
                {lang === 'hi' ? '⚡ 1-क्लिक त्वरित डेमो लॉगिन:' : '⚡ 1-Click Quick Demo Login:'}
              </span>
              <div className="demo-chips-row">
                <button
                  type="button"
                  className="demo-chip"
                  onClick={() => {
                    const u = loginDemoUser('farmer');
                    showToast(
                      lang === 'hi' ? `डेमो किसान (${u.name}) के रूप में लॉग इन किया!` : `Signed in as Demo Farmer (${u.name})!`,
                      'success'
                    );
                  }}
                >
                  🚜 Ramesh (Farmer)
                </button>
                <button
                  type="button"
                  className="demo-chip"
                  onClick={() => {
                    const u = loginDemoUser('retailer');
                    showToast(
                      lang === 'hi' ? `डेमो विक्रेता (${u.name}) के रूप में लॉग इन किया!` : `Signed in as Demo Retailer (${u.name})!`,
                      'success'
                    );
                  }}
                >
                  🏪 Sunita (Retailer)
                </button>
              </div>
            </div>
          </form>
        )}

        {/* 2. SIGN UP MODE */}
        {authMode === 'signup' && (
          <form onSubmit={handleSignUpSubmit} className="auth-form">
            <div className="form-field-group">
              <label className="field-label">
                {lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
              </label>
              <div className="field-input-box">
                <span className="field-icon">👤</span>
                <input
                  type="text"
                  className="auth-input"
                  placeholder={lang === 'hi' ? 'जैसे: रमेश कुमार' : 'e.g. Ramesh Kumar'}
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid-2-cols">
              <div className="form-field-group">
                <label className="field-label">
                  {lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                </label>
                <div className="field-input-box">
                  <span className="field-prefix">+91</span>
                  <input
                    type="tel"
                    className="auth-input"
                    placeholder="98765 43210"
                    maxLength={10}
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="field-label">
                  {lang === 'hi' ? 'ईमेल (वैकल्पिक)' : 'Email (Optional)'}
                </label>
                <div className="field-input-box">
                  <span className="field-icon">✉️</span>
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="kisan@gmail.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid-2-cols">
              <div className="form-field-group">
                <label className="field-label">
                  {lang === 'hi' ? 'किसान भूमिका *' : 'Your Role *'}
                </label>
                <div className="field-input-box">
                  <span className="field-icon">🌾</span>
                  <select
                    className="auth-select"
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                  >
                    <option value="Farmer / किसान">🚜 Farmer / किसान</option>
                    <option value="Agri Retailer / कृषि विक्रेता">🏪 Agri Retailer / विक्रेता</option>
                    <option value="Agronomist / कृषि वैज्ञानिक">🔬 Agronomist / वैज्ञानिक</option>
                    <option value="Student / अन्य">🌾 Student / अन्य</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group">
                <label className="field-label">
                  {lang === 'hi' ? 'राज्य (State) *' : 'State *'}
                </label>
                <div className="field-input-box">
                  <span className="field-icon">📍</span>
                  <select
                    className="auth-select"
                    value={regState}
                    onChange={(e) => setRegState(e.target.value)}
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid-2-cols">
              <div className="form-field-group">
                <label className="field-label">
                  {lang === 'hi' ? 'पासवर्ड बनाएं *' : 'Create Password *'}
                </label>
                <div className="field-input-box">
                  <span className="field-icon">🔒</span>
                  <input
                    type="password"
                    className="auth-input"
                    placeholder="••••••••"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="field-label">
                  {lang === 'hi' ? 'पासवर्ड की पुष्टि करें *' : 'Confirm Password *'}
                </label>
                <div className="field-input-box">
                  <span className="field-icon">🔒</span>
                  <input
                    type="password"
                    className="auth-input"
                    placeholder="••••••••"
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-options-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span style={{ fontSize: '0.82rem' }}>
                  {lang === 'hi'
                    ? 'मैं कृषि संसार की सेवा शर्तों एवं किसान गोपनीयता नीतियों से सहमत हूँ।'
                    : 'I agree to the Krishi Sansar Terms of Service and Farmer Privacy Guidelines.'}
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit">
              <span>{lang === 'hi' ? 'खाता बनाएं (पंजीकरण करें)' : 'Create Kisan Account'}</span>
              <span>➔</span>
            </button>
          </form>
        )}

        {/* 3. MOBILE OTP LOGIN MODE */}
        {authMode === 'otp' && (
          <div className="auth-form">
            {!otpSent ? (
              <form onSubmit={handleSendOtp}>
                <div className="form-field-group">
                  <label className="field-label">
                    {lang === 'hi' ? 'अपना 10-अंकीय मोबाइल नंबर दर्ज करें *' : 'Enter 10-digit Mobile Number *'}
                  </label>
                  <div className="field-input-box">
                    <span className="field-prefix">+91</span>
                    <input
                      type="tel"
                      className="auth-input"
                      placeholder="98765 43210"
                      maxLength={10}
                      value={otpPhone}
                      onChange={(e) => setOtpPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-auth-submit">
                  <span>{lang === 'hi' ? 'ओटीपी प्राप्त करें' : 'Send Verification OTP'}</span>
                  <span>➔</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div className="otp-feedback-box">
                  <span>📲</span>
                  <p>
                    {lang === 'hi'
                      ? `नंबर +91 ${otpPhone} पर 4-अंकीय कोड भेजा गया:`
                      : `4-digit verification code sent to +91 ${otpPhone}:`}
                    <br />
                    <strong style={{ fontSize: '1.2rem', color: '#15803d' }}>
                      {sentCode || '1234'}
                    </strong>
                  </p>
                </div>

                <div className="form-field-group">
                  <label className="field-label">
                    {lang === 'hi' ? '4-अंकीय ओटीपी दर्ज करें *' : 'Enter 4-digit OTP *'}
                  </label>
                  <div className="field-input-box">
                    <span className="field-icon">🔑</span>
                    <input
                      type="text"
                      className="auth-input otp-digits-input"
                      placeholder="• • • •"
                      maxLength={4}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-auth-submit">
                  <span>{lang === 'hi' ? 'ओटीपी सत्यापित करें और लॉग इन करें' : 'Verify & Log In'}</span>
                  <span>➔</span>
                </button>

                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <button
                    type="button"
                    className="field-link-btn"
                    onClick={() => {
                      setOtpSent(false);
                      setOtpCode('');
                    }}
                  >
                    {lang === 'hi' ? 'दूसरा मोबाइल नंबर डालें' : 'Change Mobile Number'}
                  </button>
                </div>
              </form>
            )}

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <button
                type="button"
                className="field-link-btn"
                onClick={() => setAuthMode('signin')}
              >
                ← {lang === 'hi' ? 'पासवर्ड द्वारा लॉगिन पर लौटें' : 'Back to Password Login'}
              </button>
            </div>
          </div>
        )}

        {/* 4. FORGOT PASSWORD MODE */}
        {authMode === 'forgot' && (
          <form onSubmit={handleForgotSubmit} className="auth-form">
            <div className="form-field-group">
              <label className="field-label">
                {lang === 'hi' ? 'पंजीकृत मोबाइल या ईमेल *' : 'Registered Mobile or Email *'}
              </label>
              <div className="field-input-box">
                <span className="field-icon">✉️</span>
                <input
                  type="text"
                  className="auth-input"
                  placeholder="9876543210 / kisan@gmail.com"
                  value={forgotInput}
                  onChange={(e) => setForgotInput(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit">
              <span>{lang === 'hi' ? 'रीसेट लिंक / कोड भेजें' : 'Send Reset Link / Code'}</span>
              <span>➔</span>
            </button>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <button
                type="button"
                className="field-link-btn"
                onClick={() => setAuthMode('signin')}
              >
                ← {lang === 'hi' ? 'लॉग इन पर वापस जाएं' : 'Back to Sign In'}
              </button>
            </div>
          </form>
        )}

        {/* 5. USER ORDERS HISTORY MODE */}
        {authMode === 'orders' && (
          <div className="auth-orders-view">
            {orders.length === 0 ? (
              <div className="empty-orders-box">
                <span style={{ fontSize: '2.5rem' }}>📦</span>
                <h4>{lang === 'hi' ? 'कोई सक्रिय ऑर्डर नहीं है' : 'No Active Orders'}</h4>
                <p>
                  {lang === 'hi'
                    ? 'आपने अभी तक कोई कृषि उत्पाद ऑर्डर नहीं किया है।'
                    : 'You haven\'t placed any agriculture orders yet.'}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    closeAuth();
                    const sec = document.getElementById('products');
                    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ marginTop: '12px' }}
                >
                  <span>{lang === 'hi' ? 'उत्पाद कैटलॉग देखें' : 'Explore Products'}</span>
                </button>
              </div>
            ) : (
              <div className="orders-list">
                {orders.map((ord) => (
                  <div key={ord.id} className="order-history-card">
                    <div className="order-card-header">
                      <div>
                        <strong>#{ord.id}</strong>
                        <div className="order-date">{ord.date}</div>
                      </div>
                      <span className={`order-status-pill status-${ord.status.toLowerCase()}`}>
                        ● {ord.status}
                      </span>
                    </div>

                    <div className="order-items-list">
                      {ord.items.map((it, idx) => (
                        <div key={idx} className="order-item-row">
                          <span>
                            {it.name} <strong>× {it.qty}</strong>
                          </span>
                          <span>₹{(it.price * it.qty).toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>

                    <div className="order-card-footer">
                      <div>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                          {ord.paymentMode}
                        </span>
                      </div>
                      <div className="order-total-amount">
                        <span>{lang === 'hi' ? 'कुल:' : 'Total:'}</span>
                        <strong>₹{ord.total.toLocaleString('en-IN')}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

