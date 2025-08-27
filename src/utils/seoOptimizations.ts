// Performance and SEO optimization utilities
export const preloadCriticalImages = () => {
  if (typeof window !== "undefined") {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = "/images/hero-1648776.jpg";

    // Preload other critical images
    const criticalImages = [
      "/images/portfolio-1648768.jpg",
      "/images/portfolio-2724749.jpg",
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
};

// SEO-friendly scroll behavior
export const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.replace("#", ""));
  if (element) {
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update URL without page reload for better SEO
    window.history.pushState(null, "", `#${sectionId.replace("#", "")}`);
  }
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Performance monitoring
export const measureWebVitals = () => {
  if (typeof window !== "undefined" && "web-vitals" in window) {
    // This would require installing web-vitals package
    // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

    console.log("Web Vitals monitoring would be implemented here");
  }
};
