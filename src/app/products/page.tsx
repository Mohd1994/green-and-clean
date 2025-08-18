'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal'; // <-- التعديل الأول: إضافة هذا السطر
import productsData from '@/data/products.json';

interface Product {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  specifications: { en: string[]; ar: string[] };
  applications: { en: string[]; ar: string[] };
  manufacturer: string;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  
  // <-- التعديل الثاني: إضافة هذا السطر
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', name: { en: 'All Products', ar: 'جميع المنتجات' } },
    { id: 'Air Quality Devices', name: { en: 'Air Quality Devices', ar: 'أجهزة قياس جودة الهواء' } },
    { id: 'Water Analysis Instruments', name: { en: 'Water Analysis Instruments', ar: 'أجهزة تحليل المياه' } },
    { id: 'Gas Analyzers', name: { en: 'Gas Analyzers', ar: 'محللات الغازات' } },
    { id: 'Environmental Monitoring Instruments', name: { en: 'Environmental Monitoring Instruments', ar: 'أجهزة الرصد والقياس البيئي' } },
    { id: 'Unmanned Aerial Vehicles (UAV)', name: { en: 'Unmanned Aerial Vehicles (UAV)', ar: 'طائرات بدون طيار' } },
    { id: 'Lab Instruments', name: { en: 'Lab Instruments', ar: 'أجهزة مخبرية متخصصة' } },
    { id: 'Electric Heaters', name: { en: 'Electric Heaters', ar: 'السخانات الكهربائية' } }
  ];


  const sortOptions = [
    { id: 'name', name: { en: 'Name', ar: 'الاسم' } },
    { id: 'category', name: { en: 'Category', ar: 'الفئة' } },
    { id: 'manufacturer', name: { en: 'Manufacturer', ar: 'الشركة المصنعة' } }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name[language].localeCompare(b.name[language]);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortBy === 'manufacturer') {
      return a.manufacturer.localeCompare(b.manufacturer);
    }
    return 0;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        
        imageSrc="/images/hero/environmental-tech.jpg"
        height="full"
      />

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {category.name[language]}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {language === 'en' ? 'Sort by:' : 'ترتيب حسب:'}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              // <-- التعديل الثالث: إضافة خاصية جديدة هنا
              <ProductCard
                key={product.id}
                product={product}
                featured={index === 0 && selectedCategory === 'all'}
                onViewDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {language === 'en' ? 'No products found' : 'لم يتم العثور على منتجات'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Try selecting a different category or view all products.'
                  : 'جرب اختيار فئة مختلفة أو عرض جميع المنتجات.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

{/* Product Categories Section */}
<section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {language === 'en' ? 'Product Categories' : 'فئات المنتجات'}
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {language === 'en' 
          ? 'Explore our comprehensive range of environmental monitoring and testing equipment.'
          : 'استكشف مجموعتنا الشاملة من معدات المراقبة والاختبار البيئي.'
        }
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: '🌬️',
          title: language === 'en' ? 'Air Quality Devices' : 'أجهزة قياس جودة الهواء',
          description: language === 'en' 
            ? 'Devices to monitor and improve air quality for healthier environments.'
            : 'أجهزة لرصد وتحسين جودة الهواء لبيئات صحية أكثر.',
          count: productsData.filter(p => p.category === 'Air Quality Devices').length
        },
        {
          icon: '💧',
          title: language === 'en' ? 'Water Analysis Instruments' : 'أجهزة تحليل المياه',
          description: language === 'en' 
            ? 'Precision instruments for water quality testing and analysis.'
            : 'أجهزة دقيقة لاختبار وتحليل جودة المياه.',
          count: productsData.filter(p => p.category === 'Water Analysis Instruments').length
        },
        {
          icon: '🔥',
          title: language === 'en' ? 'Gas Analyzers' : 'محللات الغازات',
          description: language === 'en' 
            ? 'Advanced gas detection and analysis tools for safety and compliance.'
            : 'أدوات متقدمة للكشف عن الغازات وتحليلها لضمان السلامة والامتثال.',
          count: productsData.filter(p => p.category === 'Gas Analyzers').length
        },
        {
          icon: '📡',
          title: language === 'en' ? 'Environmental Monitoring Instruments' : 'أجهزة الرصد والقياس البيئي',
          description: language === 'en' 
            ? 'Instruments for real-time monitoring of environmental conditions.'
            : 'أجهزة لرصد الظروف البيئية في الوقت الحقيقي.',
          count: productsData.filter(p => p.category === 'Environmental Monitoring Instruments').length
        },
        {
          icon: '🚁',
          title: language === 'en' ? 'Unmanned Aerial Vehicles (UAV)' : 'طائرات بدون طيار',
          description: language === 'en' 
            ? 'Drones and UAVs for aerial environmental inspection and data collection.'
            : 'طائرات بدون طيار لفحص البيئة جواً وجمع البيانات.',
          count: productsData.filter(p => p.category === 'Unmanned Aerial Vehicles (UAV)').length
        },
        {
          icon: '🔬',
          title: language === 'en' ? 'Lab Instruments' : 'أجهزة مخبرية متخصصة',
          description: language === 'en' 
            ? 'Specialized laboratory instruments for environmental testing.'
            : 'أجهزة مخبرية متخصصة لاختبار البيئة.',
          count: productsData.filter(p => p.category === 'Lab Instruments').length
        },
        {
          icon: '🔥',
          title: language === 'en' ? 'Electric Heaters' : 'سخانات كهربائية',
          description: language === 'en' 
            ? 'Reliable electric heaters suitable for industrial and environmental applications.'
            : 'سخانات كهربائية موثوقة مناسبة للتطبيقات الصناعية والبيئية.',
          count: productsData.filter(p => p.category === 'Electric Heaters').length
        }
      ].map((category, index) => (
        <div
          key={index}
          className="text-center p-6 rounded-xl bg-background hover:shadow-lg transition-all duration-300 hover-lift"
        >
          <div className="text-4xl mb-4">{category.icon}</div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {category.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {category.description}
          </p>
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {category.count} {language === 'en' ? 'Products' : 'منتج'}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Technical Support Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Technical Support & Services' : 'الدعم الفني والخدمات'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Comprehensive support services to ensure optimal performance of your environmental monitoring equipment.'
                : 'خدمات دعم شاملة لضمان الأداء الأمثل لمعدات المراقبة البيئية الخاصة بك.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🛠️',
                title: language === 'en' ? 'Installation' : 'التركيب',
                description: language === 'en' 
                  ? 'Professional installation and setup services by certified technicians.'
                  : 'خدمات التركيب والإعداد المهنية من قبل فنيين معتمدين.'
              },
              {
                icon: '📚',
                title: language === 'en' ? 'Training' : 'التدريب',
                description: language === 'en' 
                  ? 'Comprehensive training programs for equipment operation and maintenance.'
                  : 'برامج تدريبية شاملة لتشغيل وصيانة المعدات.'
              },
              {
                icon: '🔧',
                title: language === 'en' ? 'Maintenance' : 'الصيانة',
                description: language === 'en' 
                  ? 'Regular maintenance and calibration services to ensure accuracy.'
                  : 'خدمات الصيانة والمعايرة المنتظمة لضمان الدقة.'
              },
              {
                icon: '📞',
                title: language === 'en' ? '24/7 Support' : 'دعم 24/7',
                description: language === 'en' 
                  ? 'Round-the-clock technical support for critical monitoring applications.'
                  : 'دعم فني على مدار الساعة لتطبيقات المراقبة الحرجة.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Need Custom Solutions?' : 'تحتاج حلول مخصصة؟'}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? 'Our team of experts can design and develop custom environmental monitoring solutions tailored to your specific requirements.'
              : 'يمكن لفريق خبرائنا تصميم وتطوير حلول مراقبة بيئية مخصصة مصممة خصيصاً لمتطلباتك المحددة.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {language === 'en' ? 'Request Custom Quote' : 'طلب عرض مخصص'}
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

      {/* <-- التعديل الرابع: إضافة هذا المكون في النهاية */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
