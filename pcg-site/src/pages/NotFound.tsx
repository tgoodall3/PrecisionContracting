import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import Section from '@/components/Section';
import SEO from '@/components/SEO';
import { buttonStyles } from '@/components/Button';

const NotFound = () => (
  <>
    <SEO title="Page not found" description="We couldn't find the page you were looking for." path="/*" />
    <Section className="flex min-h-[50vh] items-center">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold text-brand-navy">Page not found</h1>
        <p className="mt-4 text-brand-navy/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/" className={buttonStyles({ variant: 'primary' })}>
            Go home
          </Link>
          <Link to="/contact" className={buttonStyles({ variant: 'secondary' })}>
            Contact us
          </Link>
        </div>
      </Container>
    </Section>
  </>
);

export default NotFound;
