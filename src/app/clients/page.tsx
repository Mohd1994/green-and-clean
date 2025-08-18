'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import ClientCard from '@/components/ClientCard';
import clientsData from '@/data/clients.json';

export default function ClientsPage() {
  const { language } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // 1. إنشاء قائمة الصناعات ديناميكيًا من ملف JSON
  // نستخرج جميع الصناعات الفريدة من بيانات العملاء
  const uniqueIndustries = Array.from(
    new Map(clientsData.map(client => [client.industry.en, client.industry])).values()
  );

  // نضيف خيار "جميع الصناعات" في البداية
  const industries = [
    { id: 'all', name: { en: 'All Industries', ar: 'جميع الصناعات' } },
    ...uniqueIndustries.map(industry => ({
      id: industry.en, // نستخدم الاسم الإنجليزي كمعرّف فريد
      name: { en: industry.en, ar: industry.ar }
    }))
  ];

  // 2. تعديل منطق الفلترة ليعمل مع `client.industry.en`
  const filteredClients = selectedIndustry === 'all'
    ? clientsData
    : clientsData.filter(client => client.industry.en === selectedIndustry);

  const featuredClients = clientsData.filter(client => client.featured);

  // 3. إنشاء بيانات قسم "الصناعات التي نخدمها" ديناميكيًا
  const industriesWeServe = uniqueIndustries.map(industry => ({
    icon: industry.en === 'Environmental Monitoring' ? '📡' :
          industry.en === 'Industrial Hygiene & Safety' ? '🛡️' :
          industry.en === 'Research & Environmental Labs' ? '🔬' :
          industry.en === 'Sustainable Cities' ? '🏙️' :
          industry.en === 'Water & Wastewater' ? '💧' :
          industry.en === 'Air & Water Quality' ? '🌬️' :
          industry.en === 'Lab & Industrial Equipment' ? '🧪' : '🏢', // أيقونة افتراضية
    title: industry[language],
    description: {
        en: `Solutions for the ${industry.en} sector.`,
        ar: `حلول لقطاع ${industry.ar}.`
    }[language],
    count: clientsData.filter(c => c.industry.en === industry.en).length
  }));


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={language === 'en' ? 'Our Valued Clients' : 'عملاؤنا المميزون'}
        description={language === 'en'
          ? 'Trusted by leading organizations across Saudi Arabia and the region'
          : 'موثوق من قبل المؤسسات الرائدة في المملكة العربية السعودية والمنطقة'
        }
        imageSrc="/images/hero/OurClient.png"
        height="full"
      />

      {/* Featured Clients Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Featured Clients' : 'العملاء المميزون'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Leading organizations that trust us with their environmental and sustainability initiatives.'
                : 'المؤسسات الرائدة التي تثق بنا في مبادراتها البيئية والاستدامة.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* All Clients Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'All Clients' : 'جميع العملاء'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Explore our diverse portfolio of clients across various industries and sectors.'
                : 'استكشف محفظتنا المتنوعة من العملاء عبر مختلف الصناعات والقطاعات.'
              }
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
                  selectedIndustry === industry.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground border border-border'
                }`}
              >
                {industry.name[language]}
              </button>
            ))}
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>

          {/* Empty State */}
          {filteredClients.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'en' ? 'No clients found' : 'لم يتم العثور على عملاء'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Try selecting a different industry or view all clients.'
                  : 'جرب اختيار صناعة مختلفة أو عرض جميع العملاء.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Industries We Serve' : 'الصناعات التي نخدمها'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our environmental solutions span across diverse industries, each with unique challenges and requirements.'
                : 'تمتد حلولنا البيئية عبر صناعات متنوعة، كل منها لها تحديات ومتطلبات فريدة.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {industry.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {industry.count} {language === 'en' ? 'Clients' : 'عميل'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Static as before) */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'What Our Clients Say' : 'ماذا يقول عملاؤنا'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Hear from our satisfied clients about their experience working with Green and Clean.'
                : 'استمع من عملائنا الراضين عن تجربتهم في العمل مع Green and Clean.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: language === 'en'
                  ? "Green and Clean's environmental monitoring solutions have been instrumental in helping us achieve our sustainability goals and maintain compliance with international standards."
                  : "كانت حلول المراقبة البيئية من Green and Clean مفيدة في مساعدتنا على تحقيق أهداف الاستدامة والحفاظ على الامتثال للمعايير الدولية.",
                  company: language === 'en' ? 'Government Entity' : 'جهة حكومية',
                rating: 5
              },
              {
                quote: language === 'en'
                  ? "Their expertise in renewable energy environmental assessments has been crucial for our clean energy projects. Professional, reliable, and results-driven."
                  : "كانت خبرتهم في تقييمات البيئة للطاقة المتجددة حاسمة لمشاريع الطاقة النظيفة لدينا. مهنية وموثوقة ومدفوعة بالنتائج.",
                  company: language === 'en' ? 'Government Entity' : 'جهة حكومية',
                  rating: 5
              },
              {
                quote: language === 'en'
                  ? "The team's deep understanding of Saudi environmental regulations and Vision 2030 objectives made them the perfect partner for our sustainability initiatives."
                  : "فهم الفريق العميق للوائح البيئية السعودية وأهداف رؤية 2030 جعلهم الشريك المثالي لمبادرات الاستدامة لدينا.",
                company: language === 'en' ? 'Government Entity' : 'جهة حكومية',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Join Our Growing Family' : 'انضم إلى عائلتنا المتنامية'}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {language === 'en'
              ? 'Ready to partner with us for your environmental and sustainability needs? Let\'s discuss how we can help you achieve your goals.'
              : 'مستعد للشراكة معنا لاحتياجاتك البيئية والاستدامة؟ دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Start a Project' : 'ابدأ مشروعاً'}
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'View Our Services' : 'عرض خدماتنا'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
