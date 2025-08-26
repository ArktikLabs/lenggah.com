"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from 'next/navigation';

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (text: { id: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Read initial value from URL path or localStorage on client only
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      // Check if we're on the /en route
      const isEnglishRoute = pathname.startsWith('/en');
      
      if (isEnglishRoute) {
        setLanguage('en');
        window.localStorage.setItem("lenggah-language", 'en');
      } else {
        // Check localStorage for non-English routes
        const stored = window.localStorage.getItem(
          "lenggah-language"
        ) as Language | null;
        if (stored && (stored === "id" || stored === "en")) {
          setLanguage(stored);
        }
      }
    }
  }, [pathname]);

  // Persist selection and update <html lang> on client
  useEffect(() => {
    if (typeof window !== "undefined" && mounted) {
      window.localStorage.setItem("lenggah-language", language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    const newLanguage = language === "id" ? "en" : "id";
    setLanguage(newLanguage);
    
    // Navigate to appropriate route using Next.js router
    if (newLanguage === "en") {
      // Switch to English route
      if (!pathname.startsWith('/en')) {
        router.push('/en');
      }
    } else {
      // Switch to Indonesian route (root)
      if (pathname.startsWith('/en')) {
        router.push('/');
      }
    }
  };

  const t = (text: { id: string; en: string }) => text[language];

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
