'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.clients': 'Clients',
    'nav.partners': 'Partners',
    'nav.team': 'Our Team',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    
    // Home Page
    'home.hero.title': 'Leading Energy and Environmental Solutions in Saudi Arabia',
    'home.hero.subtitle': 'Green and Clean - Your Partner in Sustainable Future',
    'home.mission.title': 'Our Mission',
    'home.mission.description': 'We deliver expert consultancy in sustainable Energy, carbon management, regulatory compliance, and environmental due diligence. Combining technical excellence, digital innovation, and region-specific insight, we help clients optimize resource use, reduce environmental risks, and accelerate their sustainability transitions.',
    
    // About Page
    'about.hero.title': 'About Green and Clean',
    'about.hero.description': 'Driving sustainable change through environmental innovation and responsibility.',
    'about.story.title': 'Our Story',
    'about.story.description': 'Green & Clean is a specialized consulting firm in energy and environment, offering expert guidance to help organizations and governments overcome sustainability challenges. We combine technical expertise in sustainable Energy, resource efficiency, and climate risk with strategic planning and regulatory compliance.Our team’s deep knowledge and passion for environmental protection ensure impactful, sustainable solutions.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the partner of choice for innovative and sustainable energy and environmental solutions-empowering communities and businesses to build a resilient, low carbon future.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We deliver expert consultancy in sustainable Energy, carbon management, regulatory compliance, and environmental due diligence. Combining technical excellence, digital innovation, and region specific insight, we help clients optimize resource use, reduce environmental risks, and accelerate their sustainability transitions.',
    
    // Services
    'services.title': 'Our Services',
    'services.description': 'Comprehensive environmental solutions tailored to your needs',
    
    // Products
    'products.title': 'Our Products',
    'products.categories.radiation': 'Radiation Devices',
    'products.categories.environmental': 'Environmental Devices',
    'products.filter.all': 'All Products',
    'products.filter.manufacturer': 'Filter by Manufacturer',
    
    // Team
    'team.title': 'Our Expert Team',
    'team.description': 'Meet the professionals driving environmental innovation',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.address.title': 'Our Location',
    
    // Footer
    'footer.slogan': 'Partners for the Planet',
    'footer.address': 'Riyadh, Saudi Arabia',
    'footer.rights': 'All rights reserved',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.close': 'Close',
    'common.readMore': 'Read More',
    'common.viewDetails': 'View Details',

    // Differentiators (What Sets Us Apart)
    'about.differentiators.title': 'What Sets Us Apart',
    'about.differentiators.description': 'Green & Clean combines ethical integrity with cutting-edge technology, local regulatory insight with global sustainability standards, and a deeply personalized, client-focused approach — ensuring both trusted guidance and impactful results.',

    // Outcome
    'about.outcome.title': 'Our Impact',
    'about.outcome.description': 'Green & Clean is positioned as both a technical expert and strategic ally. By integrating comprehensive lifecycle services with a mission-driven identity, we help clients:',
    'about.outcome.points.1': 'Navigate shifting regulations and net zero requirements',
    'about.outcome.points.2': 'Optimize energy use and lower costs through smart investments',
    'about.outcome.points.3': 'Implement robust environmental safeguards and transparency',
    'about.outcome.points.4': 'Leverage digital innovation for sustainable impact',
    'about.outcome.points.5': 'Build lasting capacity and trust within communities and sectors',

  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.products': 'المنتجات',
    'nav.clients': 'العملاء',
    'nav.partners': 'الشركاء',
    'nav.team': 'فريقنا',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    
    // Home Page
    'home.hero.title': 'الرائدون في حلول الطاقة والبيئة في المملكة العربية السعودية',
    'home.hero.subtitle': 'جرين آند كلين - شريكك في المستقبل المستدام',
    'home.mission.title': 'مهمتنا',
    'home.mission.description': 'نقدم استشارات متخصصة في الطاقة المتجددة، وإدارة الكربون، والامتثال للوائح التنظيمية، والعناية البيئية الواجبة. من خلال الجمع بين التميز التقني والابتكار الرقمي والرؤية الخاصة بكل منطقة، نساعد عملائنا على تحسين استخدام الموارد، وتقليل المخاطر البيئية، وتسريع تحولاتهم نحو الاستدامة.',
    
    // About Page
    'about.hero.title': 'عن جرين آند كلين',
    'about.hero.description': 'نقود التغيير المستدام من خلال الابتكار البيئي والمسؤولية.',
    'about.story.title': 'قصتنا',
    'about.story.description': '"جرين آند كلين" شركة متخصصة في استشارات الطاقة والبيئة، تقدم حلولًا احترافية لمساعدة المؤسسات والحكومات على تجاوز تحديات الاستدامة. نجمع بين الخبرة التقنية في الطاقة المتجددة وكفاءة الموارد ومخاطر المناخ، مع التخطيط الاستراتيجي والامتثال التنظيمي.ويضمن فريقنا بخبرته وشغفه البيئي تقديم حلول فعّالة تُحدث أثرًا مستدامًا.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'أن نكون الشريك الأمثل لحلول الطاقة والبيئة المبتكرة والمستدامة، ونُمكّن المجتمعات والشركات من بناء مستقبل مرن ومنخفض الكربون.',
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'نقدم استشارات متخصصة في الطاقة المتجددة، وإدارة الكربون، والامتثال للوائح التنظيمية، والعناية البيئية الواجبة. من خلال الجمع بين التميز التقني والابتكار الرقمي والرؤية الخاصة بكل منطقة، نساعد عملائنا على تحسين استخدام الموارد، وتقليل المخاطر البيئية، وتسريع تحولاتهم نحو الاستدامة',
    // Services
    'services.title': 'خدماتنا',
    'services.description': 'حلول بيئية شاملة مصممة خصيصاً لاحتياجاتك',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.categories.radiation': 'أجهزة الإشعاع',
    'products.categories.environmental': 'الأجهزة البيئية',
    'products.filter.all': 'جميع المنتجات',
    'products.filter.manufacturer': 'تصفية حسب الشركة المصنعة',
    
    // Team
    'team.title': 'فريق الخبراء لدينا',
    'team.description': 'تعرف على المحترفين الذين يقودون الابتكار البيئي',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.success': 'تم إرسال الرسالة بنجاح!',
    'contact.address.title': 'موقعنا',
    
    // Footer
    'footer.slogan': 'بناء مستقبل مستدام',
    'footer.address': 'الرياض، المملكة العربية السعودية',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.close': 'إغلاق',
    'common.readMore': 'اقرأ المزيد',
    'common.viewDetails': 'عرض التفاصيل',

    // Differentiators (ما يميزنا)
    'about.differentiators.title': 'ما يميزنا',
    'about.differentiators.description': 'تجمع شركة Green & Clean بين النزاهة الأخلاقية وأحدث التقنيات، وبين الفهم العميق للتشريعات المحلية والمعايير العالمية للاستدامة، إلى جانب نهج شخصي يركز على العميل — مما يضمن تقديم إرشاد موثوق وتحقيق نتائج مؤثرة.',

    // Outcome (المخرجات)
    'about.outcome.title': 'المخرجات',
    'about.outcome.description': 'شركة "جرين آند كلين" للاستشارات في البيئة والطاقة، هي شركة متخصصة في مجال الطاقة والبيئة، تُعتبر خبيرًا فنيًا وحليفًا استراتيجيًا. من خلال دمج خدمات دورة حياة شاملة مع هوية مُوجهة نحو تحقيق الأهداف والقيمة، تُساعد الشركة عملاءها على:',
    'about.outcome.points.1': 'مواكبة اللوائح التنظيمية المتغيرة ومتطلبات صافي الانبعاثات الصفري',
    'about.outcome.points.2': 'تحسين استخدام الطاقة وخفض التكاليف من خلال استثمارات ذكية',
    'about.outcome.points.3': 'تطبيق ضمانات بيئية قوية وشفافية',
    'about.outcome.points.4': 'الاستفادة من الابتكار الرقمي لتحقيق تأثير مستدام',
    'about.outcome.points.5': 'بناء قدرات مستدامة وبناء الثقة داخل المجتمعات والقطاعات',

  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

