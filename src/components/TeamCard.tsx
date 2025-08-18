'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TeamCardProps {
  member: {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    position: {
      en: string;
      ar: string;
    };
    bio: {
      en: string;
      ar: string;
    };
    image: string;
    experience: number;
    education: {
      en: string;
      ar: string;
    };
    specialties: {
      en: string[];
      ar: string[];
    };
    linkedin?: string;
    email?: string;
  };
}

export default function TeamCard({ member }: TeamCardProps) {
  const { language } = useLanguage();

  return (
    <div className="group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Social Links */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
          {member.name[language]}
        </h3>
        
        <p className="text-primary font-medium mb-3">
          {member.position[language]}
        </p>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {member.bio[language]}
        </p>

        {/* Experience & Education */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            {member.experience} {language === 'en' ? 'Years Experience' : 'سنة خبرة'}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
            {member.education[language]}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">
            {language === 'en' ? 'Specialties' : 'التخصصات'}
          </h4>
          <div className="flex flex-wrap gap-1">
            {member.specialties[language].slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
            {member.specialties[language].length > 3 && (
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                +{member.specialties[language].length - 3}
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

