import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { DirectionProvider } from "@/contexts/DirectionContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Green and Clean - Your Partner in Sustainable Future",
  description: "Leading consultancy in sustainable energy, environmental solutions, and training. We optimize resources, reduce risks, and drive sustainability transitions with expert guidance.",
  keywords: "sustainable energy, environmental solutions, carbon management, regulatory compliance, environmental services, sustainability training, consultancy, green solutions, energy project management, hybrid & renewable systems, net zero strategies, decarbonization strategies, environmental permitting, legal compliance, impact assessment, radiation detection, nuclear safety, water treatment solutions, project management, asset management, شركة طاقة وحلول بيئية, خدمات بيئية, تدريب استدامة, استشارات بيئية, حلول خضراء, إدارة الكربون, الامتثال البيئي, إدارة مشاريع الطاقة, تصميم أنظمة هجينة ومتجددة, استراتيجيات صافي الصفر وتقليل الكربون, الترخيص البيئي والامتثال القانوني, تقييم الأثر البيئي والاجتماعي, الكشف عن الإشعاع وأنظمة السلامة النووية, حلول معالجة المياه, إدارة المشاريع والأصول",
  // الجزء الجديد لـ Open Graph
  openGraph: {
    title: "Green and Clean - Your Partner in Sustainable Future ", // عنوان يظهر عند المشاركة
    description: "Leading consultancy in sustainable energy, environmental solutions, and training. We optimize resources, reduce risks, and drive sustainability transitions with expert guidance.", // وصف يظهر عند المشاركة
    url: "https://greenandcleansa.com", // رابط موقعك الجديد
    siteName: "Green and Clean SA", // اسم موقعك
    images: [
      {
        url: "https://greenandcleansa.com/images/LoadingSC/LoadingSC.png", // رابط الصورة اللي طلبتها
        width: 1200, // أبعاد مناسبة للـ Open Graph
        height: 630, // أبعاد مناسبة للـ Open Graph
        alt: "Green and Clean Logo",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* هذا هو المكان اللي بتحط فيه كود إثبات الملكية من Google Search Console */}
        <meta name="google-site-verification" content="3LJkPcnY17T9Kh3b50_KeCyJgniKCKO1q0dejrWzW3g" />
      </head>
      <body
        className={`${inter.variable} ${ibmPlexArabic.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <DirectionProvider>
              <ClientWrapper>
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <ScrollToTopButton />
              </ClientWrapper>
            </DirectionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
