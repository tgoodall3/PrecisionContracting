import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  HomeModernIcon,
  PaintBrushIcon,
  Squares2X2Icon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import SEO from '@/components/SEO';
import { buttonStyles } from '@/components/Button';
import { services } from '@/data/services';
import heroImage from '@/assets/placeholders/hero-placeholder.svg';
import grid1 from '@/assets/placeholders/home-grid-1.svg';
import grid2 from '@/assets/placeholders/home-grid-2.svg';
import grid3 from '@/assets/placeholders/home-grid-3.svg';
import grid4 from '@/assets/placeholders/home-grid-4.svg';
import { TAGLINE } from '@/config';

const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  flooring: Squares2X2Icon,
  'drywall-paint': PaintBrushIcon,
  'kitchen-bath': HomeModernIcon,
  basements: HomeModernIcon,
  exterior: BuildingStorefrontIcon
};

const trustSignals = ['Licensed & Insured', 'On-time & On-budget', '5-Star Local Reviews'];

const Home = () => {
  const highlightServices = services.slice(0, 4);

  return (
    <>
      <SEO
        title="Quality contracting for the greater north side of Indianapolis"
        description="From Carmel to Noblesville and beyond, Precision Contracting Group delivers dependable craftsmanship for flooring, remodels, drywall, basements, and exterior upgrades."
        path="/"
      />
      <Section className="pb-16 pt-12 sm:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="mb-6 w-max">North Indy Contractors</Badge>
            <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">
              Quality contracting for the greater north side of Indianapolis.
            </h1>
            <p className="mt-4 text-lg text-brand-navy/80">
              From Carmel to Noblesville and beyond, PCG delivers dependable craftsmanship, transparent communication, and clean job sites.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className={buttonStyles({ variant: 'primary' })}>
                Request a Quote
              </Link>
              <Link
                to="/services"
                className={buttonStyles({ variant: 'secondary' })}
              >
                Our Services
              </Link>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-brand-navy/80 sm:grid-cols-3 sm:gap-4">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden justify-end lg:flex">
            <img
              src={heroImage}
              alt="Stylized blueprint graphics representing Precision Contracting Group services."
              className="w-full max-w-xl rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-white/70">
        <Container>
          <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">Services that keep projects moving</h2>
          <p className="mt-3 max-w-2xl text-brand-navy/70">
            Whether you need a single trade partner or a turnkey remodel lead, our team simplifies every decision with honest scopes and tight scheduling.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {highlightServices.map((service) => {
              const Icon = serviceIcons[service.id] ?? HomeModernIcon;
              return (
                <Card key={service.id} className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy">{service.name}</h3>
                      <p className="text-sm text-brand-navy/70">{service.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-brand-navy/80">
                    {service.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <ArrowRightIcon className="mt-1 h-4 w-4 text-brand-blue" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2">
                    <Badge tone="neutral">{service.timeline}</Badge>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">The Precision Promise</h2>
            <p className="mt-3 text-brand-navy/70">{TAGLINE}</p>
            <div className="mt-6 space-y-4 text-sm text-brand-navy/80">
              <p>
                Every project starts with a walkthrough to understand your priorities, timelines, and investment. We deliver scoped estimates that align with your goals.
              </p>
              <p>
                During production, your project lead keeps you informed with milestone updates, photo documentation, and proactive scheduling adjustments.
              </p>
              <p>
                At closeout, we complete a final punch walk and share maintenance tips so your upgrades look great for the long haul.
              </p>
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-navy">
              Learn more about PCG
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[grid1, grid2, grid3, grid4].map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Project highlight placeholder ${index + 1}`}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover shadow-md"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white/80">
        <Container className="rounded-2xl bg-white px-6 py-10 shadow-lg ring-1 ring-brand-gray/60 sm:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">Ready to start your next project?</h2>
              <p className="mt-2 text-brand-navy/70">
                Share a few details and we&apos;ll prepare a clear scope with honest timelines.
              </p>
            </div>
            <Link to="/contact" className={buttonStyles({ variant: 'primary', size: 'md' })}>
              Contact PCG
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
