export interface Language {
  code: 'id' | 'en';
  name: string;
}

export interface Translation {
  id: string;
  en: string;
}

export interface PortfolioItem {
  id: string;
  title: Translation;
  location: string;
  category: 'hunian' | 'komersial' | 'furnitur';
  materials: Translation;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: Translation;
  description: Translation;
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: Translation;
  description: Translation;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: Translation;
  rating: number;
}

export interface FAQ {
  id: string;
  question: Translation;
  answer: Translation;
}