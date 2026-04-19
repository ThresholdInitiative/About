import { generateOrganizationSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

interface ServerSchemaProps {
  locale: string;
  isAboutPage?: boolean;
}

export default function ServerSchema({ locale, isAboutPage = false }: ServerSchemaProps) {
  const organizationSchema = generateOrganizationSchema(locale);
  const breadcrumbSchema = generateBreadcrumbSchema(locale);
  const faqSchema = isAboutPage ? generateFAQSchema(locale) : null;

  const schemas = [organizationSchema, breadcrumbSchema];
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
}
