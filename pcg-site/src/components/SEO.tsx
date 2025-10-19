import { SITE_NAME, SITE_URL } from '@/config';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const DEFAULT_DESCRIPTION =
  'Precision Contracting Group delivers dependable contracting throughout Carmel, Westfield, Noblesville, Pendleton, and North Indianapolis.';

const SEO = ({ title, description = DEFAULT_DESCRIPTION, path = '/', image, noIndex = false }: SEOProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageUrl = new URL(path, SITE_URL).toString();
  const metaImage = image ?? `${SITE_URL}/og-default.png`;
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

export default SEO;
