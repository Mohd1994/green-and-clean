'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientWrapperProps {
  children: React.ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // التحقق من زيارة سابقة في هذه الجلسة
    const hasVisited = sessionStorage.getItem('hasVisitedSite');
    
    if (hasVisited) {
      setIsFirstVisit(false);
      setIsLoading(false);
    } else {
      // إظهار شاشة التحميل للزوار الجدد فقط
      setIsLoading(true);
      setIsFirstVisit(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // حفظ حالة الزيارة في sessionStorage (تنتهي عند إغلاق المتصفح)
    sessionStorage.setItem('hasVisitedSite', 'true');
  };

  // إظهار شاشة التحميل للزوار الجدد فقط
  if (isLoading && isFirstVisit) {
    return (
      <LoadingScreen 
        onComplete={handleLoadingComplete}
        logoSrc="/images/LoadingSC/LoadingSC.png" // تأكد من المسار الصحيح لشعارك
        logoAlt="Green and Clean Company Logo"
        loadingText="Loading..." // تغيير للإنجليزية
        subText="Welcome to Green and Clean" // تغيير للإنجليزية
        duration={7500} // زيادة المدة إلى 7.5 ثانية (3.5 + 4 ثواني)
      />
    );
  }

  // إظهار المحتوى الرئيسي بعد انتهاء التحميل أو للزوار العائدين
  return <>{children}</>;
};

export default ClientWrapper;
