import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export type Language = 'id' | 'en';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  // Fallback for SSR/SSG when context is not available
  if (context === undefined) {
    // During server-side rendering or static generation, provide default values
    if (typeof window === 'undefined') {
      return {
        language: 'id' as Language,
        setLanguage: () => {},
        toggleLanguage: () => {},
        t: (text: { id: string; en: string }) => text.id,
      };
    }
    // On client-side, throw error if context is missing
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
