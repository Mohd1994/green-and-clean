'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import TeamCard from '@/components/TeamCard';
import teamData from '@/data/team.json';

export default function TeamPage() {
  const { language } = useLanguage();

  const leadership = teamData.filter(member =>
    member.position.en.includes('CEO') || member.position.en.includes('CTO')
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/hero/team.png"
        height="full"
      />

        {/* Leadership Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header section with improved dark mode styling */}
            <div className="max-w-5xl mx-auto mb-20 px-4">
              <div className="relative group">
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/80 to-accent/5 dark:from-primary/10 dark:via-background/60 dark:to-accent/10 backdrop-blur-sm border border-border/50 dark:border-border/30 rounded-3xl shadow-xl dark:shadow-2xl"></div>
                
                {/* Content */}
                <div className="relative px-10 py-12 text-center space-y-6">
                  {/* Title with enhanced styling */}
                  <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent dark:from-foreground dark:via-primary dark:to-accent animate-fade-in">
                      {language === 'en' ? 'Leadership Team' : 'فريق القيادة'}
                    </h2>
                    {/* Decorative line */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                  
                  {/* Description with better contrast */}
                  <p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-4xl mx-auto animate-slide-in-left">
                    {language === 'en'
                      ? `Our leadership team is the driving force behind our success and sustainability vision. With decades of experience in environmental science, business strategy, and innovation, they shape the path forward through bold decisions, ethical practices, and a deep commitment to Saudi Arabia's Vision 2030. Their collective leadership empowers our teams, partners, and clients to create measurable environmental impact at scale.`
                      : `فريق القيادة لدينا هو القوة الدافعة وراء نجاحنا ورؤيتنا للاستدامة. يتمتع القادة بخبرات تمتد لعقود في مجالات العلوم البيئية، واستراتيجيات الأعمال، والابتكار، وهم الذين يرسمون ملامح المستقبل من خلال قرارات جريئة، وممارسات أخلاقية، والتزام راسخ برؤية السعودية 2030. قيادتهم الجماعية تُلهم فرقنا وشركاءنا وعملاءنا لتحقيق تأثير بيئي ملموس واسع النطاق.`}
                  </p>
                  
                  {/* Stats or highlights section */}
                  <div className="flex flex-wrap justify-center gap-8 mt-8 pt-6 border-t border-border/30 dark:border-border/20">
                    <div className="text-center group">
                      <div className="text-2xl font-bold text-primary dark:text-primary group-hover:scale-110 transition-transform duration-300">
                        {language === 'en' ? '25+' : '٢٥+'}
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                        {language === 'en' ? 'Years Experience' : 'سنة خبرة'}
                      </div>
                    </div>
                    <div className="text-center group">
                      
                    </div>
                    <div className="text-center group">
                      <div className="text-2xl font-bold text-primary dark:text-primary group-hover:scale-110 transition-transform duration-300">
                        {language === 'en' ? '2030' : '٢٠٣٠'}
                      </div>
                      <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                        {language === 'en' ? 'Vision Aligned' : 'رؤية متوافقة'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team cards grid with enhanced styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((member, index) => (
                <div 
                  key={member.id} 
                  className="group animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced TeamCard wrapper */}
                  <div className="relative">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    
                    {/* Card background */}
                    <div className="relative bg-background/80 dark:bg-background/40 backdrop-blur-sm border border-border/50 dark:border-border/30 rounded-2xl p-6 shadow-lg dark:shadow-2xl group-hover:shadow-xl dark:group-hover:shadow-3xl transition-all duration-300">
                      <TeamCard member={member} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to action section */}
            <div className="mt-16 text-center">
          <div className="relative inline-block group">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 dark:from-primary/20 dark:via-accent/10 dark:to-primary/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
            
            {/* Main content */}
            <div className="relative flex items-center gap-5 px-10 py-5 bg-gradient-to-r from-background/80 via-muted/10 to-background/80 dark:from-muted/10 dark:via-background/80 dark:to-muted/10 backdrop-blur-sm border border-border/40 dark:border-border/30 rounded-2xl shadow-lg dark:shadow-xl group-hover:shadow-xl dark:group-hover:shadow-2xl transition-all duration-300">
              
              {/* Left decorative element */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary dark:bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary/60 dark:bg-primary/80 rounded-full animate-pulse animation-delay-300"></div>
                <div className="w-1 h-1 bg-primary/40 dark:bg-primary/60 rounded-full animate-pulse animation-delay-600"></div>
              </div>
              
              {/* Text content */}
              <span className="text-sm md:text-base font-medium text-foreground/90 dark:text-foreground/95 group-hover:text-foreground dark:group-hover:text-foreground transition-colors duration-300">
                {language === 'en' 
                  ? 'Leading the way towards a sustainable future' 
                  : 'نقود الطريق نحو مستقبل مستدام'}
              </span>
              
              {/* Right decorative element */}
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent/40 dark:bg-accent/60 rounded-full animate-pulse animation-delay-600"></div>
                <div className="w-2 h-2 bg-accent/60 dark:bg-accent/80 rounded-full animate-pulse animation-delay-300"></div>
                <div className="w-3 h-3 bg-accent dark:bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </section>

      {/* All Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Our Team' : 'فريقنا'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Discover the talented professionals who make our environmental solutions possible.'
                : 'اكتشف المهنيين الموهوبين الذين يجعلون حلولنا البيئية ممكنة.'}
            </p>
          </div>

          {/* All Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Team Excellence' : 'تميز الفريق'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our team brings together diverse expertise and extensive experience in environmental solutions.'
                : 'يجمع فريقنا خبرات متنوعة وتجربة واسعة في الحلول البيئية.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '5+',
                label: language === 'en' ? 'Team Members' : 'عضو فريق',
                icon: '👥'
              },
              {
                number: '35+',
                label: language === 'en' ? 'Years Combined Experience' : 'سنة خبرة مجمعة',
                icon: '🎓'
              },
              {
                number: '15+',
                label: language === 'en' ? 'Certifications' : 'شهادة مهنية',
                icon: '🏆'
              },
              {
                number: '10+',
                label: language === 'en' ? 'Specializations' : 'تخصص',
                icon: '🔬'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 flex justify-center" style={{ backgroundColor: 'var(--background)' }}>
        <div
          className="relative max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-75"
            style={{ backgroundImage: "url('/images/team/green-overlay.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40" aria-hidden="true" />

          <div className="relative z-10 p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {language === 'en' ? 'Join Our Vision for a Greener Tomorrow' : 'انضم إلى رؤيتنا لمستقبل أكثر خضرة'}
            </h2>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              {language === 'en'
                ? 'We’re building a team of passionate experts, innovators, and visionaries committed to sustainability. Be part of something bigger—drive change, protect the environment, and help shape the future of green innovation in Saudi Arabia and beyond.'
                : 'نحن نبني فريقاً من الخبراء المتحمسين والمبتكرين وأصحاب الرؤية، الملتزمين بالاستدامة. كن جزءاً من شيء أعظم — اصنع التغيير، واحمِ البيئة، وساهم في تشكيل مستقبل الابتكار الأخضر في السعودية وخارجها.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--primary)',
                  border: '1px solid var(--primary)',
                }}
              >
                {language === 'en' ? 'Explore Careers' : 'استعرض الوظائف'}
              </a>
              <a
                href="/about"
                className="px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.style.backgroundColor = 'var(--background)');
                  (e.currentTarget.style.color = 'var(--primary)');
                }}
                onMouseLeave={e => {
                  (e.currentTarget.style.backgroundColor = 'transparent');
                  (e.currentTarget.style.color = 'white');
                }}
              >
                {language === 'en' ? 'Discover Our Mission' : 'اكتشف رسالتنا'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
