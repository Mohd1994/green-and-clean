'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDirection } from '@/contexts/DirectionContext';
import HeroSection from '@/components/HeroSection';
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const { direction } = useDirection();

  const values = [
    {
      icon: '🤝',
      title: language === 'en' ? 'Integrity & Trust' : 'النزاهة والثقة',
      description: language === 'en'
        ? 'We act with honesty and transparency in everything we do, building long-term trust with clients and communities.'
        : 'نتصرف بنزاهة وشفافية في كل ما نقوم به، لبناء ثقة طويلة الأمد مع العملاء والمجتمعات.'
    },
    {
      icon: '⚙️',
      title: language === 'en' ? 'Innovation-Driven' : 'مدفوعون بالابتكار',
      description: language === 'en'
        ? 'We embrace digital innovation and advanced technologies to provide sustainable energy and environmental solutions.'
        : 'نُعزز الابتكار الرقمي والتقنيات المتقدمة لتقديم حلول طاقة وبيئة مستدامة.'
    },
    {
      icon: '📍',
      title: language === 'en' ? 'Local Expertise' : 'الخبرة المحلية',
      description: language === 'en'
        ? 'Our deep understanding of regional needs allows us to tailor effective solutions that make a real impact.'
        : 'فهمنا العميق لاحتياجات المنطقة يتيح لنا تصميم حلول فعالة تُحدث فرقاً حقيقياً.'
    },
    {
      icon: '🎯',
      title: language === 'en' ? 'Client-Centric Approach' : 'تركيزنا على العميل',
      description: language === 'en'
        ? 'We put our clients first, delivering personalized support to help them meet their sustainability goals.'
        : 'نضع عملاءنا في المقام الأول ونُقدم لهم دعمًا مخصصًا لتحقيق أهدافهم في الاستدامة.'
    }
  ];  

  const milestones = [
    {
      year: '2020',
      title: language === 'en' ? 'Startup Idea' : 'نشأة الفكرة',
      description: language === 'en'
        ? 'The initial idea for Green & Clean was born to provide innovative energy and environmental solutions in Saudi Arabia.'
        : 'وُلدت الفكرة الأولى لـ "جرين آند كلين" لتوفير حلول مبتكرة في مجالات الطاقة والبيئة في المملكة العربية السعودية.'
    },
    {
      year: '2021',
      title: language === 'en' ? 'Prototype Development' : 'تطوير النموذج الأولي',
      description: language === 'en'
        ? 'The Green & Clean prototype was developed, and the team was formed.'
        : 'تم تطوير النموذج الأولي لفكرة "جرين آند كلين"، وتشكيل فريق العمل.'
    },
    {
      year: '2022',
      title: language === 'en' ? 'Primary Funding and Team Expansion' : 'تمويل أولي وتوسع الفريق',
      description: language === 'en'
        ? 'Primary funding was obtained to establish the team and conduct a trial in the market.'
        : 'الحصول على تمويل أولي لتأسيس الفريق وإجراء اختبار للفكرة في السوق.'
    },
    {
      year: '2025',
      title: language === 'en' ? 'Company Officially Established' : 'تأسيس الشركة رسمياً',
      description: language === 'en'
        ? 'Green & Clean was officially established as a startup serving the energy and environment sectors in Saudi Arabia.'
        : 'تم تأسيس "جرين آند كلين" رسمياً كشركة ناشئة لخدمة قطاعي الطاقة والبيئة في السعودية.'
    },
    {
      year: '2025',
      title: language === 'en' ? 'Launching the Core Solution' : 'إطلاق الحل الرئيسي',
      description: language === 'en'
        ? 'We launched our core solution for our services in the energy and environment sectors, aiming to create a qualitative transformation based on science and technology.'
        : 'أطلقنا الحل الرئيسي لخدماتنا في قطاعي الطاقة والبيئة، بهدف إحداث تحول نوعي مبني على العلوم والتقنية.'
    }
  ];
  
  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        videoSrc="/videos/AboutUs/About.mp4" // أضف هذا السطر بمسار الفيديو الخاص بك
        height="full">
      </HeroSection>

      {/* Story Section */}
      <section className="bg-background py-30 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12"
          dir="ltr"
        >
          {/* صورة القسم بدون بطاقة */}  
            <motion.div
              className="flex-1 max-w-md md:max-w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotateY: 4,
                rotateX: 2,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <img
                src="/images/hero/OurStory.png"
                alt="Environmental technology"
                className="object-cover w-full max-h-[650px]" // ← بدون shadow أو rounded
              />
            </motion.div>

          {/* النص */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center text-center gap-6"
            dir={language === "ar" ? "rtl" : "ltr"}
            initial={{ opacity: 0, x: language === "ar" ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold text-foreground"
              style={{ fontFamily: language === "ar" ? "var(--font-arabic)" : "inherit" }}
            >
              {t('about.story.title')}
            </h2>

            <p
              className="text-base md:text-lg leading-loose text-muted-foreground max-w-xl"
              style={{ fontFamily: language === "ar" ? "var(--font-arabic)" : "inherit" }}
            >
              {t('about.story.description')}
            </p>

            <p
              className="text-base md:text-lg leading-loose text-muted-foreground max-w-xl"
              style={{ fontFamily: language === "ar" ? "var(--font-arabic)" : "inherit" }}
            >
              {language === 'en'
                ? 'Since our inception, we have been dedicated to providing innovative environmental solutions that not only meet today\'s challenges but also anticipate tomorrow\'s needs. Our team of experts combines deep technical knowledge with a passion for environmental protection, ensuring that every project we undertake contributes to a more sustainable future.'
                : 'منذ تأسيسنا، كنا مكرسين لتقديم حلول بيئية مبتكرة لا تلبي تحديات اليوم فحسب، بل تتوقع أيضًا احتياجات الغد. يجمع فريق خبرائنا بين المعرفة التقنية العميقة والشغف لحماية البيئة، مما يضمن أن كل مشروع نقوم به يساهم في مستقبل أكثر استدامة.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <motion.button
                  className="bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ fontFamily: language === "ar" ? "var(--font-arabic)" : "inherit" }}
                >
                  {t('nav.services')}
                </motion.button>
              </Link>

              <Link href="/team">
                <motion.button
                  className="border border-border text-foreground font-medium px-6 py-3 rounded-lg shadow hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ fontFamily: language === "ar" ? "var(--font-arabic)" : "inherit" }}
                >
                  {t('nav.team')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Vision, Mission, Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Our Values' : 'قيمنا'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'en' 
                  ? 'Integrity, innovation, local expertise, and a client-first mindset guide everything we do at Green & Clean as we shape a more sustainable future.'
                  : 'النزاهة، الابتكار، الخبرة المحلية، وتركيزنا على العميل تقود كل ما نقوم به في جرين آند كلين نحو مستقبل أكثر استدامة.'
                }
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Outcome & Differentiators Section */}
          <section className="py-24 bg-[var(--color-muted)] flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-7xl bg-[var(--color-background)] rounded-3xl shadow-2xl p-16 w-full mx-6 md:mx-12"
              style={{ minWidth: '320px' }}
            >
              {/* Outcome Section */}
              <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md"
                  style={{ color: 'var(--color-foreground)' }}
                >
                  {t('about.outcome.title')}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-xl max-w-3xl mx-auto leading-relaxed"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  {t('about.outcome.description')}
                </motion.p>

                {/* أول 3 بطاقات في شبكة */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                  className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
                >
                  {[1, 2, 3].map((i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-400 cursor-default"
                      style={{ backgroundColor: 'var(--color-muted)' }}
                    >
                      <span
                        className="absolute -top-3 -left-3 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md select-none"
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          color: 'var(--color-primary-foreground)'
                        }}
                      >
                        {i}
                      </span>
                      <p
                        className="font-semibold text-lg leading-snug select-text"
                        style={{ color: 'var(--color-foreground)' }}
                      >
                        {t(`about.outcome.points.${i}`)}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* البطاقتين 4 و 5 بنفس حجم الثلاث الأولى مع أرقام */}
                <motion.ul
                  className="mt-14 flex justify-center gap-10 max-w-5xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.3 } },
                  }}
                >
                  {[4, 5].map((i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-400 cursor-default flex-1 max-w-md"
                      style={{ backgroundColor: 'var(--color-muted)' }}
                    >
                      <span
                        className="absolute -top-3 -left-3 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md select-none"
                        style={{ 
                          backgroundColor: 'var(--color-primary)',
                          color: 'var(--color-primary-foreground)'
                        }}
                      >
                        {i}
                      </span>
                      <p
                        className="font-semibold text-lg leading-snug select-text text-center"
                        style={{ color: 'var(--color-foreground)' }}
                      >
                        {t(`about.outcome.points.${i}`)}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Differentiators Section */}
              <div className="text-center max-w-3xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md"
                  style={{ color: 'var(--color-foreground)' }}
                >
                  {t('about.differentiators.title')}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-xl leading-relaxed"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  {t('about.differentiators.description')}
                </motion.p>
              </div>
            </motion.div>
          </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Our Journey' : 'رحلتنا'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Key Milestones in Our Commitment to Excellence in the fields of Energy, Environment, and Sustainable Development.'
                : 'المعالم الرئيسية في التزامنا بالتميز في مجالات الطاقة والبيئة والتنمية المستدامة.'
              }
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <div className={`bg-muted rounded-xl p-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 hidden lg:block" />

                  {/* Spacer */}
                  <div className="flex-1 lg:max-w-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Ready to Work Together?' : 'مستعد للعمل معاً؟'}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? 'Join us in building a sustainable future for Saudi Arabia. Contact our team to discuss your environmental and energy needs.'
              : 'انضم إلينا في بناء مستقبل مستدام للمملكة العربية السعودية. اتصل بفريقنا لمناقشة احتياجاتك البيئية والطاقة.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('nav.contact')}
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('nav.services')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

