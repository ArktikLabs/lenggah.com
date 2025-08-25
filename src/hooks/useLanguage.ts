import { useState, useEffect } from 'react';

export type Language = 'id' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('id');

  // Read initial value from localStorage on client only
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('lenggah-language') as Language | null;
    if (stored && (stored === 'id' || stored === 'en')) {
      setLanguage(stored);
    }
  }, []);

  // Persist selection and update <html lang> on client
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('lenggah-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = (text: { id: string; en: string }) => text[language];

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
};
