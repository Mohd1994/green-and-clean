'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDirection } from '@/contexts/DirectionContext';
import HeroSection from '@/components/HeroSection';
import DynamicCounter from '@/components/DynamicCounter';
import FullScreenMediaGallery from '@/components/FullScreenMediaGallery';
import AchievementsCarousel from '@/components/AchievementsCarousel';
import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: number;
  suffix: string;
  label: string;
}

export default function HomePage() {
  const { t, language } = useLanguage();
  const { direction } = useDirection();

  const features: Feature[] = [
    {
      icon: '🌍',
      title: language === 'en' ? 'Environmental Consultancy' : 'الاستشارات البيئية',
      description: language === 'en'
        ? 'Specialized guidance on sustainability, compliance, and environmental risk management.'
        : 'إرشادات متخصصة في الاستدامة والامتثال وإدارة المخاطر البيئية.'
    },
    {
      icon: '♻️',
      title: language === 'en' ? 'Sustainable Energy' : 'الطاقة المتجددة',
      description: language === 'en'
        ? 'Integrated solutions for solar, wind, and hybrid Sustainable Energy systems.'
        : 'حلول متكاملة للطاقة الشمسية والرياح والأنظمة المتجددة الهجينة.'
    }
    ,
    {
      icon: 'CO₂',
      title: language === 'en' ? 'Carbon Management' : 'إدارة الكربون',
      description: language === 'en'
        ? 'Tools and strategies to measure, reduce, and offset carbon footprints.'
        : 'أدوات واستراتيجيات لقياس وتقليل وتعويض الانبعاثات الكربونية.'
    },
    {
      icon: '🔎',
      title: language === 'en' ? 'Environmental Due Diligence' : 'العناية البيئية الواجبة',
      description: language === 'en'
        ? 'Risk assessments, audits, and legal compliance reviews for informed decisions.'
        : 'تقييمات للمخاطر، وتدقيقات بيئية، ومراجعات امتثال قانوني لاتخاذ قرارات مستنيرة.'
    }
  ];
  
  const stats: Stat[] = [
    {
      number: 35,
      suffix: '+',
      label: language === 'en' ? 'Years Experience' : 'سنة خبرة'
    },
    {
      number: 10,
      suffix: '+',
      label: language === 'en' ? 'Partnerships' : 'شراكات استراتيجية'
    },
    {
      number: 5,
      suffix: '+',
      label: language === 'en' ? 'Pilot Projects' : 'مشاريع تجريبية'
    },
    {
      number: 100,
      suffix: '%',
      label: language === 'en' ? 'Vision 2030 Aligned' : 'متماشي مع رؤية 2030'
    }
  ];

  const statsSectionBackground = '/images/Counter-Bg/stats-background.png'; // Path to your background image

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        description={t("home.mission.description")}
        videoSrc="/videos/HomePage/hero-background1.mp4" // أضف هذا السطر بمسار الفيديو الخاص بك
        height="full"
      >

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            href="/services"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('nav.services')}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </HeroSection>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('home.mission.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('home.mission.description')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 hover-lift group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with Dynamic Counter and Background */}
      <section 
        className="py-20 text-primary-foreground bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${statsSectionBackground})` }}
      >
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/10  backdrop-blur-lg p-8 rounded-3xl shadow-xl ring-1 ring-white/10 transition-all duration-500">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <DynamicCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2.5}
                  />
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards Preview */}
            <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Environmental Consulting' : 'الاستشارات البيئية'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'Expert environmental assessment and consulting services for sustainable development projects.'
                  : 'خدمات تقييم واستشارات بيئية متخصصة لمشاريع التنمية المستدامة.'
                }
              </p>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                {t('common.readMore')}
                <svg className={`w-4 h-4 ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Sustainable Energy Solutions' : 'حلول الطاقة المتجددة'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'Solar, wind, and other Sustainable Energy systems design and installation.'
                  : 'تصميم وتركيب أنظمة الطاقة الشمسية والرياح وغيرها من أنظمة الطاقة المتجددة.'
                }
              </p>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                {t('common.readMore')}
                <svg className={`w-4 h-4 ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Water Treatment Solutions' : 'حلول معالجة المياه'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'Water purification, wastewater treatment, and water conservation systems.'
                  : 'أنظمة تنقية المياه ومعالجة مياه الصرف الصحي والحفاظ على المياه.'
                }
              </p>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                {t('common.readMore')}
                <svg className={`w-4 h-4 ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'View All Services' : 'عرض جميع الخدمات'}
              <svg className={`w-5 h-5 ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FullScreenMediaGallery - القسم الجديد */}
      <FullScreenMediaGallery />

      {/* Achievements Section - NEW 3D Carousel */}
      <AchievementsCarousel />

    {/* Vision 2030 Section - Modern 3D Touch */}
      <section className="py-24 bg-background transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* العنوان الرئيسي */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-[72px] md:text-[84px] font-black text-primary select-none font-serif"
            >
              2030
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
            >
              {language === 'en'
                ? 'Aligned with Saudi Vision 2030'
                : 'متوافق مع رؤية السعودية 2030'}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-[3px] bg-primary mx-auto rounded-full"
            />
          </div>

          {/* البطاقة المحتوى */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-muted rounded-3xl border border-border p-12 shadow-xl dark:shadow-[rgba(255,255,255,0.05)_0px_10px_20px] transition-all duration-500"
          >
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              {language === 'en'
                ? "Our environmental solutions and green energy services directly support Saudi Arabia's Vision 2030 goals for sustainability, economic diversification, and environmental protection."
                : 'حلولنا البيئية وخدمات الطاقة الخضراء تدعم بشكل مباشر أهداف رؤية السعودية 2030 للاستدامة والتنويع الاقتصادي وحماية البيئة.'}
            </p>

            {/* الإحصائيات مع العداد الديناميكي */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              {/* عنصر 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2 font-serif">
                  <DynamicCounter 
                    end={100} 
                    suffix="%" 
                    duration={2.5}
                  />
                </div>
                <div className="text-muted-foreground font-medium">
                  {language === 'en' ? 'Vision Aligned' : 'متوافق مع الرؤية'}
                </div>
              </motion.div>

              {/* عنصر 2 (جديد) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
                  {language === 'en' ? 'Green Goals in Action' : 'أهداف خضراء قيد التنفيذ'}
                </div>
                <div className="text-muted-foreground font-medium">
                  {language === 'en' ? 'Impact-Driven Vision' : 'رؤية قائمة على الأثر'}
                </div>
              </motion.div>

              {/* عنصر 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2 font-serif">
                  <DynamicCounter 
                    end={35} 
                    suffix="+" 
                    duration={2.5}
                  />
                </div>
                <div className="text-muted-foreground font-medium">
                  {language === 'en' ? 'Years Experience' : 'سنة خبرة'}
                </div>
              </motion.div>
            </div>

            {/* زر الإجراء */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {language === 'en' ? 'Learn More About Our Vision' : 'تعرف أكثر على رؤيتنا'}
                <svg className={`w-5 h-5 ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Ready to Make a Difference?' : 'مستعد لإحداث فرق؟'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en'
              ? 'Join us in creating a sustainable future for generations to come.'
              : 'انضم إلينا في خلق مستقبل مستدام للأجيال القادمة.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Explore Services' : 'استكشف الخدمات'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}