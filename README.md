# Green & Clean - Environmental Solutions Website

A modern, bilingual (English/Arabic) website for Green & Clean, an environmental solutions company focused on green energy and environmental services in Saudi Arabia.

## 🌟 Features

### Core Features
- **Bilingual Support**: Full English and Arabic language support with RTL layout
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

### Pages
- **Home**: Hero section, services overview, statistics, Vision 2030 alignment
- **About Us**: Company story, mission, vision, values, and team introduction
- **Services**: Environmental consulting, renewable energy, monitoring, treatment, green building
- **Products**: Environmental monitoring equipment and testing devices
- **Clients**: Client showcase, testimonials, and industry coverage
- **Partners**: Technology partners and strategic alliances
- **Team**: Leadership and team member profiles
- **Contact**: Contact form, office information, and location

### Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: State management for language, theme, and direction
- **Component-based**: Reusable React components
- **Static Generation**: Optimized for performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd green-and-clean
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Green and Clean Project
│
├── .next
├── node_modules
├── public
│     ├──images
│     │    └── achievements
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── clients
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── Counter-Bg
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── flags
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── hero
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── LoadingSC
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── manufacturers
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── mediaGallery
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── Navbar_CompanyLogo
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── partners
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── products
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── SaudiVision
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── services
│     │         └── عدة صور عشان تخدم اللوغوهات
│     │    └── team
│     │         └── عدة صور عشان تخدم اللوغوهات
│     ├── specs
│     │    └── عدة ملفات عشان تخدم المواصفات التقنية
│     ├── videos
│     │    └── HomePage
│     │         └── عدة فيديوهات عشان تخدم اللوغوهات
│     │    └── PartnersPage
│     │         └── عدة فيديوهات عشان تخدم اللوغوهات     
│     │    └── ServicePage
│     │         └── عدة فيديوهات عشان تخدم اللوغوهات
│     │
│     ├── file.svg
│     │
│     ├── globe.svg
│     │
│     ├── next.svg
│     │
│     ├── vercel.svg
│     │
│     └── window.svg
│
src/
├── app/
│   ├── about/
│   │      └── page.tsx
│   ├── clients/
│   │      └── page.tsx
│   ├── contact/
│   │      └── page.tsx
│   ├── partners/
│   │      └── page.tsx
│   ├── products/
│   │      └── page.tsx
│   ├── services/
│   │      └── page.tsx
│   └── team/
│          └── page.tsx
│
│
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── sitemap.ts
│
├── components/
│   │
│   ├── AchievementsCarousel.tsx
│   │
│   ├── ClientCard.tsx
│   │
│   ├── ClientWrapper.tsx
│   │
│   ├── DynamicCounter.tsx
│   │   
│   ├── Footer.tsx
│   │   
│   ├── FullScreenMediaGallery.tsx
│   │   
│   ├── HeroSection.tsx
│   │ 
│   ├── LanguageToggle.tsx
│   │   
│   ├── LoadingScreen.css
│   │   
│   ├── LoadingScreen.tsx
│   │
│   ├── Navbar.tsx
│   │   
│   ├── PartnerCard.tsx
│   │   
│   ├── ProductCard.tsx
│   │
│   ├── ProductModal.tsx
│   │
│   ├── ScrollToTopButton.tsx
│   │
│   ├── ServiceCard.tsx
│   │      
│   ├── TeamCard.tsx
│   │
│   ├── ThemeToggle.tsx
│   │
│   ├── TypewriterEffect.css
│   │      
│   └── TypewriterEffect.tsx
│          
├── contexts/
│   │
│   ├── DirectionContext.tsx
│   │      
│   ├── LanguageContext.tsx
│   │      
│   └── ThemeContext.tsx
│
├── data/
│   │
│   ├── clients.json
│   │
│   ├── partners.json
│   │
│   ├── products.json
│   │      
│   ├── services.json
│   │      
│   └── team.json
│
├── types/
│   │      
│   └── index.ts
│
├── .gitignore
│
├── eslint.config.mjs
│
├── next-env.d.ts
│
├── next.config.ts
│
├── package-lock.json
│
├── package.json
│
├── postcss.config.mjs
│
├── README.md
│
├── todo.md
│
└── tsconfig.json
```

## 🎨 Design System

### Colors
- **Primary**: Green (#22c55e) - Environmental theme
- **Secondary**: Blue (#3b82f6) - Technology theme
- **Accent**: Purple (#8b5cf6) - Innovation theme

### Typography
- **Arabic**: IBM Plex Sans Arabic
- **English**: Inter

### Components
- Responsive navigation with mobile menu
- Hero sections with background images
- Card-based layouts for services, products, clients
- Form components with validation
- Dark/light mode toggle
- Language switcher with RTL support

## 🌍 Internationalization

The website supports both English and Arabic languages:

- **Language Context**: Manages current language state
- **Direction Context**: Handles RTL/LTR layout direction
- **Translation System**: JSON-based translations for all content
- **Font Support**: Proper Arabic font rendering with IBM Plex Sans Arabic

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, IBM Plex Sans Arabic)

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🚀 Deployment

The website can be deployed on various platforms:

- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static site hosting
- **AWS**: S3 + CloudFront
- **Traditional Hosting**: Any hosting that supports Node.js

### Environment Variables

No environment variables required for basic functionality.

## 📄 License

This project is proprietary and confidential. All rights reserved by Green & Clean.

## 🤝 Contributing

This is a private project. For any modifications or updates, please contact the development team.

## 📞 Support

For technical support or questions about the website:
- Email: malhajj@greenandclean.sa.com
- Phone: +962 78 7671 576

---

Built with ❤️ for a sustainable future in Saudi Arabia 🇸🇦

