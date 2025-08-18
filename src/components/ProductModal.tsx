'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

interface Product {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  specifications: { en: string[]; ar: string[] };
  applications: { en: string[]; ar: string[] };
  manufacturer: string;
  image: string;
  category: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { language } = useLanguage();

  if (!product) {
    return null;
  }

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-gradient-to-br from-black/80 via-black/70 to-black/90 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        onClick={handleContentClick}
        className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden transform scale-95 hover:scale-100 transition-transform duration-300"
      >
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>

        <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={language === 'en' ? 'Close' : 'إغلاق'}
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl font-bold text-foreground mb-2">{product.name[language]}</h2>
          <p className="text-md text-muted-foreground mb-6">
            {language === 'en' ? 'By' : 'من'}{' '}
            <span className="font-semibold text-primary">{product.manufacturer}</span>
          </p>

          <p className="text-foreground mb-6">{product.description[language]}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {language === 'en' ? 'Specifications' : 'المواصفات'}
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {product.specifications[language].map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {language === 'en' ? 'Applications' : 'التطبيقات'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications[language].map((app, index) => (
                <span
                  key={index}
                  className="bg-muted text-muted-foreground text-sm font-medium px-3 py-1 rounded-full"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6">
            <a
              href="/contact"
              className="w-full text-center block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg"
            >
              {language === 'en' ? 'Request a Quote' : 'طلب عرض سعر'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
