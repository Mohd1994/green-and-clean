'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';
import './LoadingScreen.css';
import './TypewriterEffect.css';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
  logoSrc?: string;
  logoAlt?: string;
  loadingText?: string;
  subText?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 7500,
  logoSrc = '/images/LoadingSC/LoadingSC.png',
  logoAlt = 'Company Logo',
  loadingText = 'Loading...',
  subText = 'Please wait'
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // منع التمرير أثناء التحميل
    document.body.style.overflow = 'hidden';

    const progressSteps = 100;
    const updateInterval = duration / progressSteps;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          
          // انتقال أنيق عند الانتهاء
          setTimeout(() => {
            setIsVisible(false);
            
            setTimeout(() => {
              document.body.style.overflow = 'auto';
              onComplete && onComplete();
            }, 600);
          }, 400);
          
          return 100;
        }
        
        // إظهار تأثير الآلة الكاتبة عند وصول التقدم إلى 30%
        if (prev >= 30 && !showTypewriter) {
          setShowTypewriter(true);
        }
        
        // زيادة عشوائية لمحاكاة التحميل الحقيقي
        const increment = Math.random() * 2 + 0.3;
        return Math.min(prev + increment, 100);
      });
    }, updateInterval);

    // تنظيف عند إلغاء المكون
    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, [duration, onComplete, showTypewriter]);

  if (!isVisible && isComplete) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: "blur(10px)" 
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="loading-container">
            {/* حاوية الشعار مع تأثير Zoom In/Out Premium */}
            <div className="logo-container">
              <motion.div 
                className="logo-wrapper"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.2 
                }}
              >
                {/* تأثير Zoom In/Out للشعار */}
                <motion.div
                  className="logo-motion-wrapper"
                  animate={{ 
                    scale: [1, 1.08, 0.96, 1.04, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.6, 1],
                    times: [0, 0.3, 0.6, 0.8, 1]
                  }}
                >
                  <div className="logo-transparent-container">
                    <Image
                      id="loading-logo"
                      src={logoSrc}
                      alt={logoAlt}
                      width={200}
                      height={200}
                      className="company-logo"
                      priority
                      unoptimized
                      style={{
                        backgroundColor: 'transparent',
                        mixBlendMode: 'multiply',
                        filter: 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15))'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
              
              {/* الدائرة الدوارة الأنيقة */}
              <motion.div 
                className="spinner-ring"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              {/* الدائرة النابضة الفخمة */}
              <motion.div 
                className="spinner-ring-pulse"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.1, 0.4]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            {/* نص التحميل الأنيق */}
            <motion.div 
              className="loading-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.h2
                animate={{ 
                  opacity: [1, 0.8, 1],
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {loadingText}
              </motion.h2>
              
              {/* النقاط المتحركة الأنيقة */}
              <motion.div className="loading-dots">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    className="dot"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                {subText}
              </motion.p>
            </motion.div>
            
            {/* شريط التقدم الفخم */}
            <motion.div 
              className="progress-container"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <motion.div 
                className="progress-percentage"
                animate={{ 
                  scale: progress > 95 ? [1, 1.05, 1] : 1 
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: progress > 95 ? Infinity : 0 
                }}
              >
                {Math.floor(progress)}%
              </motion.div>
            </motion.div>

            {/* الجملة مع تأثير الآلة الكاتبة */}
            <motion.div 
              className="tagline-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: showTypewriter ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              {showTypewriter && (
                <TypewriterEffect
                  text="Partner for the Planet — Committed to Clean Energy and Greener Choices"
                  speed={30}
                  delay={500}
                  className="loading-typewriter"
                  showCursor={true}
                  cursorChar="|"
                />
              )}
            </motion.div>
          </div>
          
          {/* تأثير الجسيمات الأنيق في الخلفية */}
          <motion.div 
            className="particles-background"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"] 
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;