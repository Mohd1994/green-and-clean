'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDirection } from '@/contexts/DirectionContext';

interface ServiceCardProps {
  service: {
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
    features?: {
      en: string[];
      ar: string[];
    };
    icon: string;
    image: string;
    category: string;
  };
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const { language } = useLanguage();
  const { direction } = useDirection();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'h-150' : 'h-48'}`}>
          <img
            src={service.image}
            alt={service.title[language]}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Icon */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-2xl">{service.icon}</span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground">
            {service.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {service.title[language]}
          </h3>

          <p className={`text-muted-foreground leading-relaxed mb-4 ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {service.description[language]}
          </p>

          {/* Features */}
          {featured && service.features && (
            <ul className="space-y-2 mb-6">
              {service.features[language]?.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
            >
              {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
              <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                direction === 'rtl' ? 'rotate-180' : ''
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="/contact"
              className={`px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-sm ${
                featured ? 'block' : 'hidden group-hover:block'
              }`}
            >
              {language === 'en' ? 'Get Quote' : 'احصل على عرض'}
            </a>
            {service.id === 'radiation-nuclear-safety' && (
                <a
                  href="https://anfasmedical.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors duration-200 text-sm ${
                    featured ? 'block' : 'hidden group-hover:block'
                  }`}
                >
                  {language === 'en' ? 'Visit ANFAS Group' : 'زيارة موقع أنفاس'}
                </a>
              )}

              {/* زر روح النظام */}
                {service.id === 'permitting-compliance' && (
                  <a
                    href="https://www.spirit-of-law.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors duration-200 text-sm ${
                      featured ? 'block' : 'hidden group-hover:block'
                    }`}
                  >
                    {language === 'en' ? 'Visit Spirit Of Law' : 'زيارة موقع روح النظام'}
                  </a>
                )}


          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/80 via-black/70 to-black/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-background rounded-2xl max-w-3xl w-full p-8 relative shadow-xl transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalShow 0.25s ease forwards' }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-foreground hover:text-primary text-4xl font-bold leading-none"
              aria-label={language === 'en' ? 'Close modal' : 'إغلاق النافذة'}
            >
              &times;
            </button>

            <h2 className="text-4xl font-extrabold mb-6 text-foreground">
              {service.title[language]}
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
              {service.fullDescription?.[language] || service.description[language]}
            </p>
          </div>

          <style jsx>{`
            @keyframes modalShow {
              0% {
                opacity: 0;
                transform: scale(0.9);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
