'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import servicesData from '@/data/services.json';

export default function ServicesPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: { en: 'All Services', ar: 'جميع الخدمات' } },
    { id: 'energy', name: { en: 'Energy Solutions', ar: 'حلول الطاقة' } },
    { id: 'sustainability', name: { en: 'Sustainability', ar: 'الاستدامة' } },
    { id: 'consulting', name: { en: 'Environmental Consulting', ar: 'الاستشارات البيئية' } },
    { id: 'compliance', name: { en: 'Regulatory Compliance', ar: 'الامتثال والتنظيم' } },
    { id: 'management', name: { en: 'Project Management', ar: 'إدارة المشاريع' } },
    { id: 'treatment', name: { en: 'Water Treatment', ar: 'معالجة المياه' } }
  ];
  

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
            subtitle={
              language === 'en'
                ? 'Green and Clean – Powering Sustainable Solutions'
                : 'جرين أند كلين – نمكّن الحلول المستدامة'
            }
            title={
              language === 'en'
                ? 'Leading Environmental Innovation Across Saudi Arabia'
                : 'ريادة الابتكار البيئي في أنحاء المملكة'
            }
            description={
              language === 'en'
                ? 'We provide cutting-edge environmental services and green energy solutions tailored to industries, communities, and the Kingdom’s sustainability goals — supporting Saudi Vision 2030 with smart, eco-friendly innovations.'
                : 'نقدم خدمات بيئية متطورة وحلول طاقة خضراء مصممة خصيصاً لتلبية احتياجات القطاعات والمجتمعات، وندعم رؤية السعودية 2030 من خلال ابتكارات ذكية وصديقة للبيئة.'
            }
            videoSrc="/videos/ServicePage/hero-background2.mp4"
            height="full"
          />


      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {category.name[language]}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0 && selectedCategory === 'all'}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'en' ? 'No services found' : 'لم يتم العثور على خدمات'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Try selecting a different category or view all services.'
                  : 'جرب اختيار فئة مختلفة أو عرض جميع الخدمات.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Why Choose Our Services?' : 'لماذا تختار خدماتنا؟'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'We combine cutting-edge technology with deep environmental expertise to deliver solutions that make a real difference.'
                : 'نحن نجمع بين التكنولوجيا المتطورة والخبرة البيئية العميقة لتقديم حلول تحدث فرقاً حقيقياً.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: language === 'en' ? 'Precision & Accuracy' : 'الدقة والصحة',
                description: language === 'en' 
                  ? 'Advanced monitoring and assessment technologies for precise environmental data.'
                  : 'تقنيات مراقبة وتقييم متقدمة للحصول على بيانات بيئية دقيقة.'
              },
              {
                icon: '🌍',
                title: language === 'en' ? 'Global Standards' : 'المعايير العالمية',
                description: language === 'en' 
                  ? 'All our services comply with international environmental standards and best practices.'
                  : 'جميع خدماتنا تتوافق مع المعايير البيئية الدولية وأفضل الممارسات.'
              },
              {
                icon: '⚡',
                title: language === 'en' ? 'Rapid Response' : 'الاستجابة السريعة',
                description: language === 'en' 
                  ? 'Quick deployment and implementation of environmental solutions when you need them.'
                  : 'نشر وتنفيذ سريع للحلول البيئية عندما تحتاجها.'
              },
              {
                icon: '🤝',
                title: language === 'en' ? 'Partnership Approach' : 'نهج الشراكة',
                description: language === 'en' 
                  ? 'We work as your trusted partner, providing ongoing support and consultation.'
                  : 'نعمل كشريك موثوق، نقدم الدعم والاستشارة المستمرة.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
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

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Our Process' : 'عمليتنا'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'A systematic approach to delivering exceptional environmental solutions.'
                : 'نهج منهجي لتقديم حلول بيئية استثنائية.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: language === 'en' ? 'Assessment' : 'التقييم',
                description: language === 'en' 
                  ? 'Comprehensive analysis of your environmental needs and challenges.'
                  : 'تحليل شامل لاحتياجاتك وتحدياتك البيئية.'
              },
              {
                step: '02',
                title: language === 'en' ? 'Planning' : 'التخطيط',
                description: language === 'en' 
                  ? 'Development of customized solutions tailored to your specific requirements.'
                  : 'تطوير حلول مخصصة مصممة خصيصاً لمتطلباتك.'
              },
              {
                step: '03',
                title: language === 'en' ? 'Implementation' : 'التنفيذ',
                description: language === 'en' 
                  ? 'Professional execution of environmental solutions with minimal disruption.'
                  : 'تنفيذ مهني للحلول البيئية مع أقل قدر من الاضطراب.'
              },
              {
                step: '04',
                title: language === 'en' ? 'Monitoring' : 'المراقبة',
                description: language === 'en' 
                  ? 'Ongoing monitoring and optimization to ensure long-term success.'
                  : 'مراقبة وتحسين مستمر لضمان النجاح على المدى الطويل.'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Connector Line */}
                  {index < 3 && (
                    <div
                      className={`hidden lg:block absolute top-8 ${
                        language === 'ar' ? 'right-full' : 'left-full'
                      } w-full h-0.5 bg-primary/20 transform -translate-y-1/2`}
                    />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Ready to Get Started?' : 'مستعد للبدء؟'}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? 'Contact our team of environmental experts to discuss your project requirements and get a customized solution.'
              : 'اتصل بفريق خبرائنا البيئيين لمناقشة متطلبات مشروعك والحصول على حل مخصص.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Get Free Consultation' : 'احصل على استشارة مجانية'}
            </a>
            <a
              href="tel:+966123456789"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Call Now' : 'اتصل الآن'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

