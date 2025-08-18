export type Language = 'en' | 'ar';

export type Direction = 'ltr' | 'rtl';

export type Theme = 'light' | 'dark';

export interface Service {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    ar: string;
  };
  image: string;
  icon: string;
}

export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    ar: string;
  };
  specifications: {
    en: string[];
    ar: string[];
  };
  serialNumber: string;
  partNumber: string;
  countryOfOrigin: {
    en: string;
    ar: string;
  };
  image: string;
  category: string;
  manufacturer: {
    name: string;
    logo: string;
  };
}

export interface TeamMember {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  position: {
    en: string;
    ar: string;
  };
  biography: {
    en: string;
    ar: string;
  };
  photo: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

