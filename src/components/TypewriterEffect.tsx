'use client';

import React, { useState, useEffect } from 'react';
import './TypewriterEffect.css';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100, // سرعة الكتابة بالميلي ثانية
  delay = 0, // تأخير قبل بدء الكتابة
  className = '',
  showCursor = true,
  cursorChar = '|',
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);

  // تأثير الكتابة
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete && onComplete();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  // تأثير وميض المؤشر
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, 530); // وميض كل 530ms

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={`typewriter-container ${className}`}>
      <span className="typewriter-text">
        {displayedText}
      </span>
      {showCursor && (
        <span 
          className={`typewriter-cursor ${showCursorState ? 'visible' : 'hidden'}`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypewriterEffect;