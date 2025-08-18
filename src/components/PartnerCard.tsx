'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PartnerCardProps {
  partner: {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
    type: {
      en: string;
      ar: string;
    };
    logo: string;
    website?: string;
    since?: number;
    featured?: boolean;
  };
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  const { language } = useLanguage();

  return (
    <div className={`group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift ${
      partner.featured ? 'ring-2 ring-primary/20' : ''
    }`}>
      {/* Logo Section */}
      <div className="relative h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-6">
        <img
          src={partner.logo}
          alt={partner.name[language]}
          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Featured Badge */}
        {partner.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {language === 'en' ? 'Strategic Partner' : 'شريك استراتيجي'}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full text-foreground">
          {partner.type[language]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {partner.name[language]}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {partner.description[language]}
        </p>

        {/* Partnership Info */}
        {partner.since && (
          <div className="flex items-center text-xs text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            {language === 'en' ? `Partnership since ${partner.since}` : `شراكة منذ ${partner.since}`}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          {partner.website ? (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 text-sm"
            >
              {language === 'en' ? 'Visit Website' : 'زيارة الموقع'}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Global Partner' : 'شريك عالمي'}
            </div>
          )}

        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

