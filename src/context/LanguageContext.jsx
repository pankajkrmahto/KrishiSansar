import React, { createContext, useContext, useState, useEffect } from 'react';
import { I18N } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('krishi_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('krishi_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      return I18N[lang][key];
    }
    if (I18N.en && I18N.en[key] !== undefined) {
      return I18N.en[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

