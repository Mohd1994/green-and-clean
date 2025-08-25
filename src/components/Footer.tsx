'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/products', label: t('nav.products') },
    { href: '/clients', label: t('nav.clients') },
    { href: '/partners', label: t('nav.partners') },
    { href: '/team', label: t('nav.team') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'http://linkedin.com/company/greenandclean-sa',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/GreenadClean_SA',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer dir="ltr" className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col mt-[-1.5rem]">
            <div className="flex items-center space-x-3 mb-4 ml-[-1rem] max-h-[100px]">
              <img
                src="/images/Navbar_CompanyLogo/Companylogo.png"
                alt="Green & Clean Logo"
                className="max-h-full w-auto object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Green & Clean</span>
                <span className="text-sm text-muted-foreground">{t('footer.slogan')}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 max-w-md">
              {t('home.mission.description')}
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t('nav.home')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('contact.address.title')}</h4>
              <p className="text-muted-foreground">
                {t('footer.address')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('contact.form.email')}</h4>
              <p className="text-muted-foreground">
                info@greenandcleansa.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('contact.form.phone')}</h4>
              <p className="text-muted-foreground">
                +966 54 595 0607
              </p>
            </div>
          </div>
        </div>

        {/* Vision 2030 and Copyright */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                    <a
                  href="https://www.vision2030.gov.sa/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/SaudiVision/Vision2030-logo.png"
                    alt="Saudi Vision 2030"
                    className="h-15 object-contain transform transition-transform ease-out duration-150 hover:scale-105 hover:ease-in hover:duration-500"
                  />
                </a>

                <span className="text-sm text-muted-foreground">
                  Aligned with Saudi Vision 2030
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Green & Clean. {t('footer.rights')}.
            </p>
          </div>

      </div>
    </footer>
  );
};

export default Footer;

