'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      className={`
        relative cursor-pointer select-none flex items-center justify-center
        w-16 h-7 rounded-full
        transition-shadow duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-400
        ${
          theme === 'light'
            ? 'bg-white border border-gray-300 shadow-[inset_3px_3px_5px_#bebebe,inset_-3px_-3px_5px_#ffffff]'
            : 'bg-gray-900 border border-gray-700 shadow-[inset_3px_3px_5px_#1a1a1a,inset_-3px_-3px_5px_#2c2c2c]'
        }
      `}
      style={{ willChange: 'transform, opacity' }}
      tabIndex={0}
      onMouseDown={(e) => e.preventDefault()}
    >
      <motion.div
        className={`
          absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full overflow-hidden flex items-center justify-center
          transition-shadow duration-200
          ${
            theme === 'light'
              ? 'bg-white shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]'
              : 'bg-gray-800 shadow-[inset_2px_2px_4px_#1a1a1a,inset_-2px_-2px_4px_#2c2c2c]'
          }
        `}
        animate={{ x: language === 'en' ? 0 : 34 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <Image
          src={language === 'en' ? '/images/flags/us-flag.png' : '/images/flags/sa-flag.png'}
          alt="Language Flag"
          fill
          priority
          unoptimized
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </motion.div>
    </button>
  );
};

export default LanguageToggle;
