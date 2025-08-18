'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    {
      href: '/products',
      label: t('nav.products'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/products?category=radiation', label: t('products.categories.radiation') },
        { href: '/products?category=environmental', label: t('products.categories.environmental') },
        { href: '/products', label: t('products.filter.all') },
      ]
    },
    { href: '/clients', label: t('nav.clients') },
    { href: '/partners', label: t('nav.partners') },
    { href: '/team', label: t('nav.team') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav dir="ltr" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/Navbar_CompanyLogo/Companylogo.png"
                alt="Green & Clean Logo"
                className="w-12 h-19 md:w-30 md:h-30 object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-foreground leading-snug">
                  Green & Clean
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground leading-tight max-w-[140px] md:max-w-none truncate">
                  {t('footer.slogan')}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <button
                        className="relative text-foreground font-medium transition-all duration-300 ease-in-out flex items-center gap-1 hover:text-primary"
                      >
                        <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                          {link.label}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg transition-all duration-200 z-50
                          ${isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                        `}
                      >
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                ) : (
                  // بقية الروابط بدون Dropdown تبقى كما هي
                  <Link
                    href={link.href}
                    className="relative text-foreground font-medium transition-all duration-300 ease-in-out hover:text-primary"
                  >
                    <span className="after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                      {link.label}
                    </span>
                  </Link>
                )}

              </div>
            ))}
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        className="w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200 flex items-center justify-between"
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isProductsOpen && (
                        <div className="ml-4 space-y-1">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
