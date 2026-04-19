import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/about/HeroSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import StatsSection from '@/components/about/StatsSection';
import ProductsSection from '@/components/about/ProductsSection';
import TeamSection from '@/components/about/TeamSection';
import ContactSection from '@/components/about/ContactSection';
import Schema from '@/components/Schema';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen">
        <Schema />
        <Navbar />
        <main>
          <HeroSection />
          <MissionVisionSection />
          <StatsSection />
          <ProductsSection />
          <TeamSection />
          <ContactSection />
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
