import { CONTACT_EMAIL, CONTACT_PHONE, GOOGLE_REVIEWS_URL, SERVICE_AREAS, SITE_NAME, SITE_URL } from '@/config';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Precision Contracting Group delivers dependable remodeling, flooring, drywall, and exterior upgrades across North Indianapolis.',
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  image: `${SITE_URL}/og-default.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Serving North Indianapolis Communities',
    addressLocality: 'Indianapolis',
    addressRegion: 'IN',
    postalCode: '46280',
    addressCountry: 'US'
  },
  areaServed: SERVICE_AREAS.map((area: string) => ({
    '@type': 'AdministrativeArea',
    name: area
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  sameAs: [GOOGLE_REVIEWS_URL]
};

const SchemaOrg = () => {
  const jsonLd = JSON.stringify(schema);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
};

export default SchemaOrg;
