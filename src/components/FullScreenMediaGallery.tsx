'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDirection } from '@/contexts/DirectionContext';
import Link from 'next/link';


interface MediaItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  type: 'initiative' | 'event' | 'announcement';
  date: string;
  isVideo: boolean;
  category: string;
}

interface FullScreenMediaGalleryProps {
  mediaItems?: MediaItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const FullScreenMediaGallery: React.FC<FullScreenMediaGalleryProps> = ({ 
  mediaItems, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const { language } = useLanguage();
  const { direction } = useDirection();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // بيانات تجريبية للإعلانات - تم تعديلها لاستخدام الملفات المحلية
  const defaultMediaItems: MediaItem[] = [
  {
    id: 1,
    title: language === 'en' ? 'Clean and Smart Energy Solutions' : 'حلول طاقة نظيفة وذكية',
    description: language === 'en' 
      ? 'Innovative solar and wind energy solutions empowering a cleaner and more efficient future for businesses and communities.'
      : 'حلول مبتكرة للطاقة الشمسية وطاقة الرياح تمكّن المستقبل بأنظف وأكثر كفاءة للشركات والمجتمعات.',
    videoUrl: '/videos/energy/renewable-energy.mp4',
    type: 'initiative',
    date: '2025-01-10',
    isVideo: true,
    category: language === 'en' ? 'Energy Solutions' : 'حلول الطاقة'
  },
  {
    id: 2,
    title: language === 'en' ? 'Business-Driven Sustainability Practices' : 'ممارسات الاستدامة المدفوعة بالأعمال',
    description: language === 'en' 
      ? 'We support organizations in embedding sustainability into strategy and operations through green policies, eco-audits, and carbon footprint reduction.'
      : 'ندعم المؤسسات في دمج الاستدامة ضمن الاستراتيجية والعمليات من خلال السياسات الخضراء والتدقيق البيئي وتقليل البصمة الكربونية.',
    videoUrl: '/videos/energy/sustainability.mp4',
    type: 'initiative',
    date: '2025-02-15',
    isVideo: true,
    category: language === 'en' ? 'Sustainability' : 'الاستدامة'
  },
  
  {
    id: 3,
    title: language === 'en' ? 'Ensuring Regulatory Environmental Compliance' : 'ضمان الامتثال البيئي والتنظيمي',
    description: language === 'en' 
      ? 'Stay ahead of regulations through expert guidance in compliance documentation, environmental reporting, and legal alignment.'
      : 'ابقَ على اطلاع دائم بالقوانين من خلال التوجيه الخبير في إعداد الوثائق، والتقارير البيئية، والامتثال القانوني.',
    imageUrl: '/images/mediaGallery/legal audit.png',
    type: 'event',
    date: '2025-04-25',
    isVideo: false,
    category: language === 'en' ? 'Regulatory Compliance' : 'الامتثال والتنظيم'
  },
  {
    id: 4,
    title: language === 'en' ? 'Sustainable Project Management Excellence' : 'تميز في إدارة المشاريع المستدامة',
    description: language === 'en' 
      ? 'From planning to delivery, we manage green projects efficiently, focusing on deadlines, budgets, and long-term impact.'
      : 'من التخطيط إلى التنفيذ، ندير المشاريع الخضراء بكفاءة، مع التركيز على الجداول الزمنية، الميزانيات، والتأثير طويل المدى.',
    videoUrl: '/videos/energy/project-management.mp4', 
    type: 'initiative',
    date: '2025-05-30',
    isVideo: true,
    category: language === 'en' ? 'Project Management' : 'إدارة المشاريع'
  },
  {
    id: 5,
    title: language === 'en' ? 'Smart Water Treatment Solutions' : 'حلول ذكية لمعالجة المياه',
    description: language === 'en' 
      ? 'Advanced technologies for water purification, wastewater recycling, and efficient usage for industrial and urban sectors.'
      : 'تقنيات متقدمة لتنقية المياه، إعادة تدوير مياه الصرف، والاستخدام الفعال في القطاعات الصناعية والحضرية.',
    imageUrl: '/images/mediaGallery/water-treatment.jpg', // ابحث بـ: "water treatment", "clean water facility"
    type: 'announcement',
    date: '2025-06-05',
    isVideo: false,
    category: language === 'en' ? 'Water Treatment' : 'معالجة المياه'
  }
];

  const items = mediaItems || defaultMediaItems;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !showOverlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, showOverlay, items.length, autoPlayInterval]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'initiative':
        return '🌱';
      case 'event':
        return '📅';
      case 'announcement':
        return '📢';
      default:
        return '📰';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'initiative':
        return language === 'en' ? 'Initiative' : 'مبادرة';
      case 'event':
        return language === 'en' ? 'Event' : 'فعالية';
      case 'announcement':
        return language === 'en' ? 'Announcement' : 'إعلان';
      default:
        return language === 'en' ? 'News' : 'أخبار';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'en' 
      ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {currentItem.isVideo && currentItem.videoUrl ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={currentItem.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16">
        {/* Top Section - Category and Type */}
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground backdrop-blur-sm">
              <span className="mr-2">{getTypeIcon(currentItem.type)}</span>
              {getTypeLabel(currentItem.type)}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
              {currentItem.category}
            </span>
          </motion.div>

          {/* Play/Pause Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>
        </div>

        {/* Bottom Section - Main Content */}
        <div className="max-w-4xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {currentItem.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
              {currentItem.description.substring(0, 200)}...
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/80 text-sm">
                {formatDate(currentItem.date)}
              </span>
              {currentItem.isVideo && (
                <span className="inline-flex items-center text-white/80 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {language === 'en' ? 'Video' : 'فيديو'}
                </span>
              )}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowOverlay(true)}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {language === 'en' ? 'Learn More' : 'تعرف أكثر'}
              </button>
              <button
                onClick={() => setShowOverlay(true)}
                className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
        >
          <svg className={`w-6 h-6 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
        >
          <svg className={`w-6 h-6 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Detailed Overlay Modal */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowOverlay(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                {currentItem.isVideo && currentItem.videoUrl ? (
                  <video
                    className="w-full h-64 md:h-80 object-cover rounded-t-xl"
                    controls
                    poster={currentItem.imageUrl}
                  >
                    <source src={currentItem.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={currentItem.imageUrl}
                    alt={currentItem.title}
                    className="w-full h-64 md:h-80 object-cover rounded-t-xl"
                  />
                )}
                <button
                  onClick={() => setShowOverlay(false)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                    <span className="mr-2">{getTypeIcon(currentItem.type)}</span>
                    {getTypeLabel(currentItem.type)}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground">
                    {currentItem.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(currentItem.date)}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {currentItem.title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {currentItem.description}
                </p>

                <div className="flex gap-4">
                <Link href="/contact" passHref>
                  <button className="flex-1 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                    {language === 'en' ? 'Get Involved' : 'شارك معنا'}
                  </button>
                </Link>

                  <button 
                    onClick={() => setShowOverlay(false)}
                    className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors duration-200"
                  >
                    {language === 'en' ? 'Close' : 'إغلاق'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FullScreenMediaGallery;