'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Thank you for your message! We will get back to you soon.' : 'شكراً لرسالتك! سنتواصل معك قريباً.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/hero/contact.jpg"
        height="full"
      
      />

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {language === 'en' 
                  ? 'Fill out the form below and our team will get back to you within 24 hours.'
                  : 'املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة.'
                }
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {language === 'en' ? 'Full Name' : 'الاسم الكامل'} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder={language === 'en' ? 'Enter your full name' : 'أدخل اسمك الكامل'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder={language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder={language === 'en' ? '+966 ** *** ****' : '+966 ** *** ****'}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {language === 'en' ? 'Company' : 'الشركة'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder={language === 'en' ? 'Your company name' : 'اسم شركتك'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {language === 'en' ? 'Subject' : 'الموضوع'} *
                  </label>
                  <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent 
                            bg-background text-foreground dark:bg-[#1e293b] dark:text-[#f8fafc]"
>

                    <option value="">
                      {language === 'en' ? 'Select a subject' : 'اختر الموضوع'}
                    </option>
                    <option value="consultation">
                      {language === 'en' ? 'Environmental Consultation' : 'استشارة بيئية'}
                    </option>
                    <option value="project">
                      {language === 'en' ? 'Project Inquiry' : 'استفسار مشروع'}
                    </option>
                    <option value="partnership">
                      {language === 'en' ? 'Partnership Opportunity' : 'فرصة شراكة'}
                    </option>
                    <option value="support">
                      {language === 'en' ? 'Technical Support' : 'دعم فني'}
                    </option>
                    <option value="other">
                      {language === 'en' ? 'Other' : 'أخرى'}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {language === 'en' ? 'Message' : 'الرسالة'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                    placeholder={language === 'en' 
                      ? 'Tell us about your project or inquiry...'
                      : 'أخبرنا عن مشروعك أو استفسارك...'
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {language === 'en' 
                  ? 'Reach out to us through any of the following channels. We are here to help you with your environmental needs.'
                  : 'تواصل معنا من خلال أي من القنوات التالية. نحن هنا لمساعدتك في احتياجاتك البيئية.'
                }
              </p>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Office Address' : 'عنوان المكتب'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en' 
                        ? 'Ahmad Ibn Mansour Al Samaani Street, Al Falah District\nRiyadh 13314, Saudi Arabia'
                        : 'شارع أحمد بن منصور السمعاني، حي الفلاح\nالرياض 13314، المملكة العربية السعودية'

                      }
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                    </h3>
                    <p className="text-muted-foreground">+966 54 595 0607</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                    </h3>
                    <p className="text-muted-foreground">info@greenandcleansa.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === 'en' ? 'Working Hours' : 'ساعات العمل'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en' 
                        ? 'Sunday - Thursday: 9:00 AM - 5:00 PM\nFriday - Saturday: Closed'
                        : 'الأحد - الخميس: 8:00 ص - 6:00 م\nالجمعة - السبت: مغلق'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  {language === 'en' ? 'Follow Us' : 'تابعنا'}
                </h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a
                    href="http://linkedin.com/company/greenandclean-sa"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/GreenadClean_SA"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Find Our Office' : 'اعثر على مكتبنا'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Visit us at our headquarters in Riyadh for in-person consultations.'
                  : 'زرنا في مقرنا الرئيسي في الرياض للاستشارات الشخصية.'
                }
              </p>
            </div>

            {/* Container with dynamic bg and border */}
            <div 
              className="rounded-xl overflow-hidden shadow-lg h-96 border"
              style={{
                backgroundColor: 'var(--color-background)', // يتغير حسب الوضع
                borderColor: 'var(--color-border)',          // يتغير حسب الوضع
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.399558403572!2d46.67529541500046!3d24.713551784093812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038d42aa4d35%3A0x90d5f1b1b271e7a3!2z2KfZhNix2YjYr9ix2YrYp9iqINin2YTZitmE2KfYqiDYp9mE2YTYqNmG2KfZhNiq2KfZhtmI2YLYsdmK2Kkg2KfZhNiv2YbYqti52YrYqSDYp9mE2YTZhNmK2Kkg2KfZhNi52LHZitmE2KfYr9mI2YTZg9in2YTYp9mG2KfYr9mI2Kkg2KfZhNi32KfYs9iq2YjZhNmG2YbYp9iq2LHZitin2YQg2KfZhNiv2YrYqQ!5e0!3m2!1sar!2ssa!4v1699422189106!5m2!1sar!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === 'en' ? 'Green and Clean Office Location' : 'موقع مكتب جرين آند كلين'}
              />
            </div>
          </div>
        </section>
    </div>
  );
}

