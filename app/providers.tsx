"use client";
import React from "react";
import { LanguageProvider } from "../src/contexts/LanguageContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
