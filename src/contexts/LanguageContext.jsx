import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz'); // Default language is Uzbek

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'uz' ? 'ru' : 'uz'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
