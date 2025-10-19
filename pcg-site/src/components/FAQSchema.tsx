import { SITE_URL } from '@/config';

type FAQSchemaProps = {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  path: string;
};

const FAQSchema = ({ faqs, path }: FAQSchemaProps) => {
  if (!faqs.length) {
    return null;
  }

  const pageUrl = new URL(path, SITE_URL).toString();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export default FAQSchema;
