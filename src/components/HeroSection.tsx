'use client';

import React from 'react';

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  videoSrc?: string;
  imageSrc?: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: boolean;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  videoSrc,
  imageSrc,
  height = 'large',
  overlay = true,
  children,
}) => {

  const heightClasses = {
    full: 'h-screen',
    large: 'h-[80vh] min-h-[600px]',
    medium: 'h-[60vh] min-h-[400px]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
  {/* Background Video or Image */}
  {videoSrc ? (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={imageSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        {/* fallback handled below */}
      </video>
      {/* Fallback Image if video fails (or before it loads) */}
      <noscript>
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        )}
      </noscript>
    </>
  ) : imageSrc ? (
    <img
      src={imageSrc}
      alt="Hero background"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
  ) : (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30" />
  )}

  {/* Overlay */}
  {overlay && (
    <div className="absolute inset-0 bg-black/20 dark:bg-black/60" />
  )}

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-4xl mx-auto">
      {subtitle && (
        <p className="text-lg md:text-xl text-white/90 mb-4 animate-fade-in">
          {subtitle}
        </p>
      )}

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
        {title}
      </h1>

      {description && (
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          {description}
        </p>
      )}

      {children && (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</section>

  );
};

export default HeroSection;

