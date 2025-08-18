import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { DirectionProvider } from "@/contexts/DirectionContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper"; // مكون wrapper جديد
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
  title: "Green and Clean - Environmental Solutions",
  description: "Leading environmental solutions and green energy services in Saudi Arabia, aligned with Vision 2030",
  keywords: "environmental solutions, green energy, Saudi Arabia, Vision 2030, sustainability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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