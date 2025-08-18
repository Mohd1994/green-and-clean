'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDirection } from '@/contexts/DirectionContext';

interface ProductCardProps {
  product: {
    id: string;
    name: { en: string; ar: string };
    description: { en: string; ar: string };
    specifications: { en: string[]; ar: string[] };
    applications: { en: string[]; ar: string[] };
    manufacturer: string;
    image: string;
    category: string;
    price?: { en: string; ar: string };
    specSheet?: string; // 🔽 Optional spec sheet
  };
  featured?: boolean;
  onViewDetails: () => void;
}

export default function ProductCard({ product, featured = false, onViewDetails }: ProductCardProps) {
  const { language } = useLanguage();
  const { direction } = useDirection();

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.specSheet) {
      const link = document.createElement('a');
      link.href = product.specSheet;
      link.setAttribute('download', product.specSheet.split('/').pop() || 'spec-sheet.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(language === 'en' ? 'Specification sheet is not available.' : 'ملف المواصفات غير متوفر.');
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${featured ? 'h-120' : 'h-130'}`}>
        <img
          src={product.image}
          alt={product.name[language]}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground">
          {product.category}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
          {product.manufacturer}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}
        >
          {product.name[language]}
        </h3>

        <p className={`text-muted-foreground leading-relaxed mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
          {product.description[language]}
        </p>

        {/* Specifications */}
        {featured && product.specifications?.[language]?.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              {language === 'en' ? 'Key Specifications:' : 'المواصفات الرئيسية:'}
            </h4>
            <ul className="space-y-1">
              {product.specifications[language].slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-center text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applications */}
        {product.applications?.[language]?.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              {language === 'en' ? 'Applications:' : 'التطبيقات:'}
            </h4>
            <div className="flex flex-wrap gap-1">
              {product.applications[language].slice(0, featured ? 4 : 2).map((app, index) => (
                <span key={index} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-md">
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <button
            onClick={onViewDetails}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 text-sm"
          >
            {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 ${
                direction === 'rtl' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex gap-2">
            <Link
              href="/contact"
              className={`px-3 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-xs ${
                featured ? 'block' : 'hidden group-hover:block'
              }`}
            >
              {language === 'en' ? 'Get Quote' : 'احصل على عرض'}
            </Link>

            {product.specSheet && (
              <button
                onClick={handleDownload}
                className={`px-3 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200 text-xs ${
                  featured ? 'block' : 'hidden group-hover:block'
                }`}
              >
                {language === 'en' ? 'Download Spec' : 'تحميل المواصفات'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
