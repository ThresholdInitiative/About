import { Organization, BreadcrumbList, FAQPage, Question, Answer, ListItem } from 'schema-dts';

export function generateOrganizationSchema(locale: string): Organization {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vospek.com';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Vospek';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@vospek.com';
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1-555-123-4567';
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '123 Innovation Drive, San Francisco, CA 94102';
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/vospek';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/vospek';
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/vospek';
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/vospek';

  return {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: locale === 'en'
      ? `${siteName} is a global technology company dedicated to creating innovative solutions that transform how people live, work, and connect.`
      : `${siteName} 是一家全球科技公司，致力于创造创新解决方案，改变人们的生活、工作和连接方式。`,
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactAddress,
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contactPhone,
        contactType: 'Customer Service',
        email: contactEmail
      }
    ],
    sameAs: [
      twitterUrl,
      facebookUrl,
      linkedinUrl,
      instagramUrl
    ]
  };
}

export function generateBreadcrumbSchema(locale: string): BreadcrumbList {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vospek.com';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Vospek';

  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'en' ? 'Home' : '主页',
        item: `${siteUrl}/${locale}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'en' ? 'About Us' : '关于我们',
        item: `${siteUrl}/${locale}/about`
      }
    ]
  };
}

export function generateFAQSchema(locale: string): FAQPage {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Vospek';

  return {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'en' ? `What is ${siteName}?` : `什么是${siteName}？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'en'
            ? `${siteName} is a global technology company dedicated to creating innovative solutions that transform how people live, work, and connect. We offer a wide range of products and services including search, cloud computing, AI, and productivity tools.`
            : `${siteName} 是一家全球科技公司，致力于创造创新解决方案，改变人们的生活、工作和连接方式。我们提供广泛的产品和服务，包括搜索、云计算、人工智能和生产力工具。`
        }
      },
      {
        '@type': 'Question',
        name: locale === 'en' ? `Where is ${siteName} headquartered?` : `${siteName}的总部位于哪里？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'en'
            ? `${siteName} is headquartered in San Francisco, California, with offices in major cities around the world.`
            : `${siteName} 总部位于美国加利福尼亚州旧金山市，并在世界各地的主要城市设有办事处。`
        }
      },
      {
        '@type': 'Question',
        name: locale === 'en' ? `What products does ${siteName} offer?` : `${siteName}提供哪些产品？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'en'
            ? `${siteName} offers a diverse portfolio of products including ${siteName} Search, ${siteName} Cloud, ${siteName} AI, and ${siteName} Workspace, designed to enhance productivity and drive innovation.`
            : `${siteName} 提供多样化的产品组合，包括${siteName}搜索、${siteName}云服务、${siteName}人工智能和${siteName}工作空间，旨在提升生产力和推动创新。`
        }
      }
    ]
  };
}
