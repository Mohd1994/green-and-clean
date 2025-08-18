'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import PartnerCard from '@/components/PartnerCard';
import partnersData from '@/data/partners.json';

export default function PartnersPage() {
  const { language } = useLanguage();
  const [selectedType, setSelectedType] = useState('all');

  // Type mapping for filtering
  const typeMap: Record<string, string> = {
    strategic: 'Strategic Partner',
    technology: 'Technology Partner',
    environmental: 'Environmental Partners',
    'lab-industrial': 'Lab & Industrial Equipment Partner'
  };

  // Buttons
  const partnerTypes = [
    { id: 'all', name: { en: 'All Partners', ar: 'جميع الشركاء' } },
    { id: 'strategic', name: { en: 'Strategic Partners', ar: 'الشركاء الاستراتيجيون' } },
    { id: 'technology', name: { en: 'Technology Partners', ar: 'الشركاء التقنيون' } },
    { id: 'environmental', name: { en: 'Environmental Partners', ar: 'شركاء البيئة' } },
    { id: 'lab-industrial', name: { en: 'Lab & Industrial Equipment Partners', ar: 'شركاء المعدات المخبرية والصناعية' } }
  ];

  // Filtering logic
  const filteredPartners =
    selectedType === 'all'
      ? partnersData
      : partnersData.filter(partner => partner.type.en === typeMap[selectedType]);

  const strategicPartners = partnersData.filter(partner => partner.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title={language === 'en' ? 'Our Strategic Partners' : 'شركاؤنا الاستراتيجيون'}
        subtitle={language === 'en' ? 'Global Collaboration for a Greener Tomorrow' : 'تعاون عالمي من أجل مستقبل أكثر خضرة'}
        description={
          language === 'en'
            ? 'We collaborate with world-class partners to deliver impactful, innovative environmental and sustainability solutions aligned with Vision 2030.'
            : 'نتعاون مع شركاء عالميين لتقديم حلول بيئية وابتكارات مستدامة تدعم رؤية المملكة 2030.'
        }
        videoSrc="/videos/PartnersPage/hero-background3.mp4"
        height="full"
      />

      {/* Strategic Partners */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Strategic Partnerships' : 'الشراكات الاستراتيجية'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our strategic partnerships with industry leaders enable us to deliver cutting-edge environmental solutions and drive innovation in sustainability.'
                : 'شراكاتنا الاستراتيجية مع قادة الصناعة تمكننا من تقديم حلول بيئية متطورة ودفع الابتكار في الاستدامة.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicPartners.map(partner => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* All Partners */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'All Partners' : 'جميع الشركاء'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Explore our comprehensive network of technology and strategic partners across various domains.'
                : 'استكشف شبكتنا الشاملة من الشركاء التكنولوجيين والاستراتيجيين عبر مختلف المجالات.'}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {partnerTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
                  selectedType === type.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground border border-border'
                }`}
              >
                {type.name[language]}
              </button>
            ))}
          </div>

          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPartners.map(partner => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Partnership Benefits' : 'فوائد الشراكة'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our partnerships bring together complementary expertise to deliver comprehensive environmental solutions.'
                : 'تجمع شراكاتنا الخبرات المتكاملة لتقديم حلول بيئية شاملة.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: language === 'en' ? 'Innovation Acceleration' : 'تسريع الابتكار',
                description:
                  language === 'en'
                    ? 'Access to cutting-edge technologies and research capabilities from global leaders.'
                    : 'الوصول إلى التقنيات المتطورة وقدرات البحث من القادة العالميين.'
              },
              {
                icon: '🌐',
                title: language === 'en' ? 'Global Reach' : 'الوصول العالمي',
                description:
                  language === 'en'
                    ? 'Expanded market presence and international project capabilities.'
                    : 'توسيع الحضور في السوق وقدرات المشاريع الدولية.'
              },
              {
                icon: '🔬',
                title: language === 'en' ? 'Technical Expertise' : 'الخبرة التقنية',
                description:
                  language === 'en'
                    ? 'Combined knowledge and specialized skills across multiple domains.'
                    : 'المعرفة المجمعة والمهارات المتخصصة عبر مجالات متعددة.'
              },
              {
                icon: '💡',
                title: language === 'en' ? 'Solution Integration' : 'تكامل الحلول',
                description:
                  language === 'en'
                    ? 'Seamless integration of diverse technologies for comprehensive solutions.'
                    : 'التكامل السلس للتقنيات المتنوعة للحصول على حلول شاملة.'
              },
              {
                icon: '📈',
                title: language === 'en' ? 'Market Leadership' : 'ريادة السوق',
                description:
                  language === 'en'
                    ? 'Strengthened position as a leading environmental solutions provider.'
                    : 'تعزيز الموقع كمزود رائد للحلول البيئية.'
              },
              {
                icon: '🤝',
                title: language === 'en' ? 'Collaborative Excellence' : 'التميز التعاوني',
                description:
                  language === 'en'
                    ? 'Joint development of innovative solutions through collaborative partnerships.'
                    : 'التطوير المشترك للحلول المبتكرة من خلال الشراكات التعاونية.'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Become Our Partner' : 'كن شريكنا'}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {language === 'en'
              ? 'Join our network of leading organizations committed to environmental excellence and sustainable innovation.'
              : 'انضم إلى شبكتنا من المؤسسات الرائدة الملتزمة بالتميز البيئي والابتكار المستدام.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Partner With Us' : 'شارك معنا'}
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Learn More' : 'اعرف أكثر'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
