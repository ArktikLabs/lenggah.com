"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

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

  // Read initial value from localStorage on client only
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(
        "lenggah-language"
      ) as Language | null;
      if (stored && (stored === "id" || stored === "en")) {
        setLanguage(stored);
      }
    }
  }, []);

  // Persist selection and update <html lang> on client
  useEffect(() => {
    if (typeof window !== "undefined" && mounted) {
      window.localStorage.setItem("lenggah-language", language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
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
