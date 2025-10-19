import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import { CONTACT_EMAIL, CONTACT_PHONE, GOOGLE_REVIEWS_URL, SERVICE_AREAS, TAGLINE } from '@/config';
import logo from '@/assets/placeholders/ChatGPT Image Oct 18, 2025, 08_45_16 PM.png';

const Footer = () => (
  <footer className="mt-auto border-t border-brand-gray bg-white">
    <Container className="grid gap-10 py-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Precision Contracting Group logo" className="h-12 w-auto rounded-md" />
          <div>
            <p className="text-base font-semibold text-brand-navy">Precision Contracting Group</p>
            <p className="text-sm text-brand-navy/70">{TAGLINE}</p>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm text-brand-navy/70">
          We partner with homeowners and property managers throughout the greater north side of Indianapolis,
          delivering dependable craftsmanship, clear scopes, and accountable timelines.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Quick Links</h3>
        <nav className="mt-4 space-y-2 text-sm">
          <Link to="/" className="block text-brand-navy/80 underline-offset-2 transition hover:text-brand-navy">Home</Link>
          <Link to="/about" className="block text-brand-navy/80 underline-offset-2 transition hover:text-brand-navy">About</Link>
          <Link to="/services" className="block text-brand-navy/80 underline-offset-2 transition hover:text-brand-navy">Services</Link>
        </nav>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Service Area</h3>
        <ul className="mt-4 space-y-2 text-sm text-brand-navy/80">
          {SERVICE_AREAS.map((area: string) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <div className="mt-6 space-y-1 text-sm text-brand-navy/80">
          <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-indigo hover:text-brand-navy">{CONTACT_EMAIL}</a></p>
          <p>Phone: <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="text-brand-indigo hover:text-brand-navy">{CONTACT_PHONE}</a></p>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Reviews</h3>
        <p className="mt-4 text-sm text-brand-navy/80">
          See photos and testimonials from homeowners who trusted Precision Contracting Group with their projects.
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo no-underline transition hover:text-brand-navy hover:no-underline"
          aria-label="Open Precision Contracting Group Google reviews in a new tab"
        >
          Read our Google reviews
        </a>
      </div>
    </Container>
    <div className="border-t border-brand-gray bg-brand-gray/30 py-4">
      <Container className="flex flex-col gap-2 text-xs text-brand-navy/60 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Precision Contracting Group. All rights reserved.</p>
        <p>Built with care for North Indianapolis communities.</p>
      </Container>
    </div>
  </footer>
);

export default Footer;
