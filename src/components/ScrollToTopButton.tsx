'use client';

import React, { useState, useEffect } from 'react';

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    const handleScroll = () => {
      toggleVisibility();
      updateScrollProgress();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate the stroke-dasharray and stroke-dashoffset for the progress circle
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 w-12 h-12 
            bg-background text-foreground 
            rounded-full shadow-lg 
            hover:shadow-xl transition-all duration-300 
            hover:scale-110 
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 
            group 
            ${className}
          `}
          aria-label="Scroll to top"
        >
          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Background Circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-muted-foreground/30"
            />
            {/* Progress Circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="var(--accent)" // Using accent color from Globals.tsx
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          {/* Arrow Up Icon */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <svg
              className={`
                w-5 h-5 
                text-foreground 
                group-hover:text-primary 
                transition-colors duration-300 
                transform group-hover:scale-110 group-hover:animate-bounce-subtle
              `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </button>
      )}
      {/* Custom CSS for subtle bounce animation */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .group:hover .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ScrollToTopButton;