'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Schema() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Extract locale from path like /en/about

  // Determine current page type for schema
  const isAboutPage = pathname.includes('/about');

  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vospek.com/#organization",
      "name": "Vospek",
      "url": "https://vospek.com",
      "logo": "https://vospek.com/logo.png",
      "description": locale === 'en' 
        ? 'Vospek is a global technology company dedicated to creating innovative solutions that transform how people live, work, and connect.'
        : 'Vospek 是一家全球科技公司，致力于创造创新解决方案，改变人们的生活、工作和连接方式。',
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Innovation Drive",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94102",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "Customer Service",
          "email": "hello@vospek.com"
        }
      ],
      "sameAs": [
        "https://twitter.com/vospek",
        "https://facebook.com/vospek",
        "https://linkedin.com/company/vospek",
        "https://instagram.com/vospek"
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": locale === 'en' ? 'Home' : '主页',
          "item": `https://vospek.com/${locale}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": locale === 'en' ? 'About Us' : '关于我们',
          "item": `https://vospek.com/${locale}/about`
        }
      ]
    };

    // FAQ Schema for About page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": locale === 'en' 
            ? 'What is Vospek?' 
            : '什么是Vospek？',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": locale === 'en'
              ? 'Vospek is a global technology company dedicated to creating innovative solutions that transform how people live, work, and connect. We offer a wide range of products and services including search, cloud computing, AI, and productivity tools.'
              : 'Vospek 是一家全球科技公司，致力于创造创新解决方案，改变人们的生活、工作和连接方式。我们提供广泛的产品和服务，包括搜索、云计算、人工智能和生产力工具。'
          }
        },
        {
          "@type": "Question",
          "name": locale === 'en'
            ? 'Where is Vospek headquartered?'
            : 'Vospek的总部位于哪里？',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": locale === 'en'
              ? 'Vospek is headquartered in San Francisco, California, with offices in major cities around the world.'
              : 'Vospek 总部位于美国加利福尼亚州旧金山市，并在世界各地的主要城市设有办事处。'
          }
        },
        {
          "@type": "Question",
          "name": locale === 'en'
            ? 'What products does Vospek offer?'
            : 'Vospek提供哪些产品？',
          "acceptedAnswer": {
            "@type": "Answer",
            "text": locale === 'en'
              ? 'Vospek offers a diverse portfolio of products including Vospek Search, Vospek Cloud, Vospek AI, and Vospek Workspace, designed to enhance productivity and drive innovation.'
              : 'Vospek 提供多样化的产品组合，包括Vospek搜索、Vospek云服务、Vospek人工智能和Vospek工作空间，旨在提升生产力和推动创新。'
          }
        }
      ]
    };

    // Add schemas to the document head
    const schemas = [organizationSchema, breadcrumbSchema];
    if (isAboutPage) {
      schemas.push(faqSchema);
    }

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      document.head.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        script.remove();
      });
    };
  }, [locale, pathname, t, isAboutPage]);

  return null; // This component doesn't render anything visible
}