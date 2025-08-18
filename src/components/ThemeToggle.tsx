'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`
        relative cursor-pointer select-none flex items-center justify-center
        w-12 h-7 rounded-lg
        transition-shadow duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-400
        ${
          theme === 'light'
            ? 'bg-white border border-gray-300 shadow-[inset_3px_3px_5px_#bebebe,inset_-3px_-3px_5px_#ffffff]'
            : 'bg-gray-900 border border-gray-700 shadow-[3px_3px_5px_#1a1a1a,-3px_-3px_5px_#2c2c2c]'
        }
      `}
      // لتقليل أي تأثيرات تؤدي للتعليق
      style={{ willChange: 'transform, opacity' }}
      tabIndex={0}
      onMouseDown={e => e.preventDefault()} // منع التركيز الثقيل على الزر عند الضغط
    >
      {/* Sun Icon */}
      <svg
        className={`
          w-5 h-5 absolute
          transition-transform transition-opacity duration-400 ease-in-out
          ${theme === 'light' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon */}
      <svg
        className={`
          w-5 h-5 absolute
          transition-transform transition-opacity duration-400 ease-in-out
          ${theme === 'dark' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
