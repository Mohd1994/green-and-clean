import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // الصفحة الرئيسية - أهم صفحة
    {
      url: "https://www.greenandcleansa.com/",
      lastModified: new Date(),
      changeFrequency: "daily",  // تتغير بشكل يومي مع تحديث الأخبار أو المنتجات الجديدة
      priority: 1.0,             // أعلى أولوية لمحركات البحث
    },

    // صفحة الخدمات
    {
      url: "https://www.greenandcleansa.com/services",
      lastModified: new Date(),
      changeFrequency: "weekly", // الخدمات نادراً ما تتغير، تحديث أسبوعي مناسب
      priority: 0.8,             // مهمة لكن أقل من الرئيسية
    },

    // صفحة المنتجات (رابط عام فقط)
    {
      url: "https://www.greenandcleansa.com/products",
      lastModified: new Date(),
      changeFrequency: "weekly", // المنتجات يمكن تحديثها أسبوعياً
      priority: 0.7,             // أقل من الخدمات
    },

    // صفحة العملاء
    {
      url: "https://www.greenandcleansa.com/clients",
      lastModified: new Date(),
      changeFrequency: "monthly", // عادة لا تتغير كثيرًا
      priority: 0.6,              // مهمة لكنها أقل من الصفحات الرئيسية
    },

    // صفحة الشركاء
    {
      url: "https://www.greenandcleansa.com/partners",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // صفحة الفريق
    {
      url: "https://www.greenandcleansa.com/team",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7, // الفريق قد يتغير أحيانًا، لذلك أعلى قليلاً من العملاء
    },

    // صفحة من نحن
    {
      url: "https://www.greenandcleansa.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly", 
      priority: 0.8, // مهمة للتعريف بالشركة
    },

    // صفحة اتصل بنا
    {
      url: "https://www.greenandcleansa.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly", 
      priority: 0.5, // أقل أهمية بالنسبة للـ SEO لكنها لازمة
    },
  ];
}
