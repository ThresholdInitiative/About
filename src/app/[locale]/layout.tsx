import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import ServerSchema from '@/components/ServerSchema';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: {
    template: '%s | Vospek',
    default: 'Vospek - Innovative Technology Solutions'
  },
  description: {
    default: 'Vospek is a global technology company dedicated to creating innovative solutions that transform how people live, work, and connect. Learn about our mission, vision, and cutting-edge products.'
  },
  // Open Graph tags for social sharing
  openGraph: {
    title: 'Vospek - About Us',
    description: 'Discover our mission, vision, and innovative technology solutions.',
    url: 'https://vospek.com/about',
    siteName: 'Vospek',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Vospek About Us'
      }
    ],
    locale: 'zh_CN', // Will be overridden dynamically
    type: 'website'
  },
  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: 'Vospek - About Us',
    description: 'Discover our mission, vision, and innovative technology solutions.',
    images: ['/og-image.svg']
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Dynamic metadata based on locale and content
  const dynamicMetadata = {
    title: {
      template: `%s | Vospek`,
      default: locale === 'en' 
        ? 'Vospek - Innovative Technology Solutions' 
        : 'Vospek - 创新科技解决方案'
    },
    description: {
      default: locale === 'en'
        ? 'Vospek is a global technology company dedicated to creating innovative solutions that transform how people live, work, and connect. Learn about our mission, vision, and cutting-edge products.'
        : 'Vospek 是一家全球科技公司，致力于创造创新解决方案，改变人们的生活、工作和连接方式。了解我们的使命、愿景和前沿产品。'
    },
    openGraph: {
      title: locale === 'en' ? 'Vospek - About Us' : 'Vospek - 关于我们',
      description: locale === 'en'
        ? 'Discover our mission, vision, and innovative technology solutions.'
        : '发现我们的使命、愿景和创新技术解决方案。',
      url: `https://vospek.com/${locale}/about`,
      siteName: 'Vospek',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'Vospek About Us' : 'Vospek 关于我们'
        }
      ],
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'en' ? 'Vospek - About Us' : 'Vospek - 关于我们',
      description: locale === 'en'
        ? 'Discover our mission, vision, and innovative technology solutions.'
        : '发现我们的使命、愿景和创新技术解决方案。',
      images: ['/og-image.jpg']
    }
  };

  return (
    <html lang={locale}>
      <head>
        {/* Server-side rendered Schema for SEO */}
        <ServerSchema locale={locale} isAboutPage={true} />
        
        {/* Preload critical resources for LCP */}
        <link rel="preload" href="/og-image.svg" as="image" />
        {/* Preload fonts if using custom ones */}
        {/* <link rel="preload" href="/fonts/inter-variable-latin.woff2" as="font" type="font/woff2" crossorigin /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
