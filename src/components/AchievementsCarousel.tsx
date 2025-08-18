'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDirection } from '@/contexts/DirectionContext';
import { ChevronLeft, ChevronRight, BookOpen, Award, Users, Calendar } from 'lucide-react';

interface Achievement {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  isbn?: string;
  year: string;
  category: 'book' | 'award' | 'certification' | 'recognition';
  authors: {
    nameEn: string;
    nameAr: string;
    role: string;
  }[];
}

const achievements: Achievement[] = [
  {
    id: 1,
    titleEn: "First Arabic Reference on CBRN Threat Management",
    titleAr: "أول مرجع عربي شامل لأمن المواد الخطرة (CBRN)",
    descriptionEn: "Under the patronage of Spirit of Law and Green & Clean, we are proud to announce the release of the first book in the series: 'A Safe Nation from Chemical, Biological, Radiological, and Nuclear Threats' titled: 'Hazardous Materials Security: Chemical, Biological, Radiological, and Nuclear'. This is the first comprehensive Arabic-language publication in this critical field.",
    descriptionAr: "برعاية شركتي روح النظام و Green & Clean، تم بحمد الله وتوفيقه إصدار الكتاب الأول من سلسلة: 'أمّة آمنة من تهديدات المواد الكيميائية والبيولوجية والإشعاعية والنووية' بعنوان: 'أمن المواد الخطرة: الكيميائية والبيولوجية والإشعاعية والنووية'. يُعد هذا الإصدار الأول من نوعه باللغة العربية في هذا المجال الحيوي.",
    image: "/images/achievements/hazardous-materials-security.jpg",
    isbn: "978-603-05-7929-7",
    year: "2025",
    category: "book",
    authors: [
      { nameEn: "Dr. Abdulwali Al-Ajlouni", nameAr: "د. عبدالوالي العجلوني", role: "CEO" },
      { nameEn: "Mr. Ibrahim Al-Ruqaybah", nameAr: "أ. إبراهيم الرقيبة", role: "GM" }
    ]
  },
  {
    id: 2,
    titleEn: "How Drugs Undermine Human Development in the Arab World",
    titleAr: "كيف تهدد المخدرات مستقبل التنمية في الوطن العربي؟",
    descriptionEn: "Under the patronage of Spirit of Law and Green & Clean, we are pleased to announce the release of the new book titled: 'The Economic and Social Impacts of Drugs on Arab Human Development'. This book explores the damaging effects of drug abuse and addiction on Arab societies.",
    descriptionAr: "برعاية شركتي روح النظام و Green & Clean، تم بحمد الله إصدار الكتاب الجديد بعنوان: 'الآثار الاقتصادية والاجتماعية للمخدرات على التنمية البشرية العربية'. يستعرض هذا الكتاب العلاقة الوثيقة بين آفة المخدرات وأثرها الخطير على واقع التنمية البشرية.",
    image: "/images/achievements/drugs-threat-development.jpg",
    isbn: "978-603-05-7748-4",
    year: "2025",
    category: "book",
    authors: [
      { nameEn: "Dr. Abdulwali Al-Ajlouni", nameAr: "د. عبدالوالي العجلوني", role: "CEO" },
      { nameEn: "Mr. Ibrahim Al-Ruqaybah", nameAr: "أ. إبراهيم الرقيبة", role: "GM" }
    ]
  },
  {
    id: 3,
    titleEn: "Leadership Excellence in Environmental Innovation",
    titleAr: "التميز القيادي في الابتكار البيئي",
    descriptionEn: "Recognition of outstanding leadership and innovation in environmental solutions and sustainable development practices across the Middle East region.",
    descriptionAr: "تقدير للقيادة المتميزة والابتكار في الحلول البيئية وممارسات التنمية المستدامة عبر منطقة الشرق الأوسط.",
    image: "/images/achievements/ceo-gm-leadership.jpg",
    year: "2025",
    category: "award",
    authors: [
      { nameEn: "Dr. Abdulwali Al-Ajlouni", nameAr: "د. عبدالوالي العجلوني", role: "CEO" },
      { nameEn: "Mr. Ibrahim Al-Ruqaybah", nameAr: "أ. إبراهيم الرقيبة", role: "GM" }
    ]
  },
  {
    id: 4,
    "titleEn": "Appreciation Letter from Civil Defense",
    "titleAr": "برقية شكر وتقدير من الدفاع المدني",
    "descriptionEn": "An official letter of appreciation from the General Directorate of Civil Defense acknowledging the contribution of Green & Clean through the publication on chemical, biological, radiological, and nuclear threats, and its role in supporting national safety and sustainable development.",
    "descriptionAr": "برقية شكر وتقدير من المديرية العامة للدفاع المدني تعبيراً عن الإشادة بمساهمة شركة جرين آند كلين من خلال إصدارها حول التهديدات الكيميائية والبيولوجية والإشعاعية والنووية، ودورها في دعم السلامة الوطنية والتنمية المستدامة.",
    "image": "/images/achievements/civil-defense-letter.jpg",
    "year": "2025",
    "category": "recognition",
    "authors": [
      { "nameEn": "Dr. Abdulwali Al-Ajlouni", "nameAr": "د. عبدالوالي العجلوني", "role": "CEO" },
      { "nameEn": "Mr. Ibrahim Al-Ruqaybah", nameAr: "أ. إبراهيم الرقيبة", role: "GM" }
    ]
  }
];

export default function AchievementsCarousel() {
  const { language } = useLanguage();
  const { direction } = useDirection();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate circular position for each card
  const getCircularPosition = (index: number) => {
    const totalSlides = achievements.length;
    const angleStep = (2 * Math.PI) / totalSlides;
    const currentAngle = (index - currentIndex) * angleStep;
    
    // Radius of the circle - increased to prevent overlap
    const radius = 400;
    
    // Calculate x and y positions on the circle
    const x = Math.sin(currentAngle) * radius;
    const z = Math.cos(currentAngle) * radius;
    
    return { x, z, angle: currentAngle };
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {language === 'en' ? 'Our Achievements' : 'إنجازاتنا'}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Celebrating our contributions to environmental science, security, and sustainable development through groundbreaking publications and leadership excellence.'
              : 'نحتفل بمساهماتنا في العلوم البيئية والأمن والتنمية المستدامة من خلال المنشورات الرائدة والتميز القيادي.'
            }
          </p>
        </motion.div>

        {/* 3D Circular Carousel Container */}
        <div className="relative h-[700px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          <div className="relative w-full h-full preserve-3d">
            {achievements.map((achievement, index) => {
              const { x, z, angle } = getCircularPosition(index);
              const isActive = index === currentIndex;
              
              // Calculate opacity based on z-position (cards behind are more transparent)
              const opacity = z < -200 ? 0.3 : z < 0 ? 0.6 : 1;
              
              return (
                <motion.div
                  key={achievement.id}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    transformOrigin: 'center center',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    x: `calc(-50% + ${x}px)`,
                    y: '-50%',
                    z: z,
                    rotateY: (angle * 180) / Math.PI, // Convert radians to degrees
                    scale: isActive ? 1.1 : z > 0 ? 0.9 : 0.7, // Scale based on position
                    opacity: opacity,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onClick={() => goToSlide(index)}
                  whileHover={{ 
                    scale: isActive ? 1.15 : z > 0 ? 0.95 : 0.75,
                    transition: { duration: 0.2 },
                    zIndex: Math.round(z + 500), // Ensure proper layering
                  }}
                >
                  {/* Achievement Card */}
                  <div className={`
                    w-80 h-96 bg-background rounded-2xl shadow-2xl border border-border
                    ${isActive ? 'ring-2 ring-primary ring-opacity-50 shadow-primary/20' : ''}
                    transition-all duration-300 hover:shadow-3xl
                    transform-gpu preserve-3d
                    ${z < 0 ? 'pointer-events-none' : ''}
                  `}>
                    {/* Card Front */}
                    <div className="relative w-full h-full p-6 flex flex-col">
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          {achievement.category === 'book' && <BookOpen className="w-4 h-4" />}
                          {achievement.category === 'award' && <Award className="w-4 h-4" />}
                          {achievement.category === 'certification' && <Users className="w-4 h-4" />}
                          {achievement.category === 'recognition' && <Users className="w-4 h-4" />}
                          {language === 'en' 
                            ? achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)
                            : achievement.category === 'book' ? 'كتاب' : achievement.category === 'award' ? 'جائزة' : achievement.category === 'recognition' ? 'تقدير' : 'شهادة'
                          }
                        </div>
                      </div>

                      {/* Image */}
                      <div className="w-full h-48 bg-muted rounded-xl mb-4 overflow-hidden">
                        <img 
                          src={achievement.image} 
                          alt={language === 'en' ? achievement.titleEn : achievement.titleAr}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="320" height="192" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#f1f5f9"/>
                                <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b" font-family="Arial" font-size="14">
                                  ${language === 'en' ? 'Achievement Image' : 'صورة الإنجاز'}
                                </text>
                              </svg>
                            `)}`;
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                          {language === 'en' ? achievement.titleEn : achievement.titleAr}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {language === 'en' ? achievement.descriptionEn : achievement.descriptionAr}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {achievement.year}
                          </div>
                          {achievement.isbn && (
                            <div className="text-primary font-medium">
                              ISBN: {achievement.isbn}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }
              `}
            />
          ))}
        </div>

        {/* Achievement Details Modal/Expanded View */}
        <AnimatePresence>
          {currentIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 bg-muted rounded-3xl p-8 border border-border"
            >
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div className={direction === 'rtl' ? 'lg:order-2' : ''}>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {language === 'en' ? achievements[currentIndex].titleEn : achievements[currentIndex].titleAr}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {language === 'en' ? achievements[currentIndex].descriptionEn : achievements[currentIndex].descriptionAr}
                    </p>

                    {/* Authors */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {language === 'en' ? 'Leadership Team' : 'فريق القيادة'}
                      </h4>
                      <div className="space-y-2">
                        {achievements[currentIndex].authors.map((author, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground font-medium">
                              {language === 'en' ? author.nameEn : author.nameAr}
                            </span>
                            <span className="text-muted-foreground">- {author.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="bg-background px-4 py-2 rounded-lg border border-border">
                        <span className="text-muted-foreground">{language === 'en' ? 'Year:' : 'السنة:'}</span>
                        <span className="ml-2 text-foreground font-medium">{achievements[currentIndex].year}</span>
                      </div>
                      {achievements[currentIndex].isbn && (
                        <div className="bg-background px-4 py-2 rounded-lg border border-border">
                          <span className="text-muted-foreground">ISBN:</span>
                          <span className="ml-2 text-foreground font-medium">{achievements[currentIndex].isbn}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${direction === 'rtl' ? 'lg:order-1' : ''} relative`}>
                    <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={achievements[currentIndex].image} 
                        alt={language === 'en' ? achievements[currentIndex].titleEn : achievements[currentIndex].titleAr}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100%" height="100%" fill="#f1f5f9"/>
                              <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b" font-family="Arial" font-size="16">
                                ${language === 'en' ? 'Achievement Image' : 'صورة الإنجاز'}
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full opacity-10"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}