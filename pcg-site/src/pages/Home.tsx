import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BuildingStorefrontIcon,
  CheckCircleIcon,
  HomeModernIcon,
  PaintBrushIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import SEO from '@/components/SEO';
import { buttonStyles } from '@/components/Button';
import { services } from '@/data/services';
import heroImage from '@/assets/placeholders/AdobeStock_520355094.jpeg';
import grid1 from '@/assets/placeholders/AdobeStock_993908864.jpeg';
import grid2 from '@/assets/placeholders/AdobeStock_209110308.jpeg';
import grid3 from '@/assets/placeholders/AdobeStock_338501268.jpeg';
import grid4 from '@/assets/placeholders/AdobeStock_295763262.jpeg';
import { GOOGLE_REVIEWS_URL, TAGLINE } from '@/config';

const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  flooring: Squares2X2Icon,
  'drywall-paint': PaintBrushIcon,
  'kitchen-bath': HomeModernIcon,
  basements: HomeModernIcon,
  exterior: BuildingStorefrontIcon
};

const trustSignals = ['Licensed & Insured', 'On-time & On-budget', '5-Star Local Reviews'];

const stats = [
  { value: '250+', label: 'Projects delivered' },
  { value: '48 hrs', label: 'Average proposal turnaround' },
  { value: '5.0 ★', label: 'Check Our Google Rating', href: GOOGLE_REVIEWS_URL }
];

const processSteps = [
  {
    title: 'Collaborative scope & selections',
    description:
      'We walk the space with you, capture priorities, and document material choices so every trade knows the plan.'
  },
  {
    title: 'Coordinated production',
    description:
      'Your lead schedules crews, shares milestone updates, and keeps the worksite safe and tidy day after day.'
  },
  {
    title: 'Documented closeout',
    description:
      'We punch out details together, share maintenance tips, and leave you with a space that is truly move-in ready.'
  }
];

const gallery = [
  {
    src: grid1,
    alt: 'Custom kitchen island with white cabinetry and natural wood accents.'
  },
  {
    src: grid2,
    alt: 'Finished living space with built-in shelving and modern fireplace.'
  },
  {
    src: grid3,
    alt: 'Spa-inspired primary bathroom featuring dual vanity and tile surround.'
  },
  {
    src: grid4,
    alt: 'Outdoor living space with covered porch and updated siding.'
  }
];

const Home = () => {
  const highlightServices = services.slice(0, 4);

  return (
    <>
      <SEO
        title="Precision Contracting Group | Coordinated remodeling for North Indianapolis"
        description="Precision Contracting Group manages remodels, flooring, basements, drywall, and exterior upgrades with transparent scopes, firm schedules, and clean job sites across Carmel, Westfield, Noblesville, and the north side of Indianapolis."
        path="/"
      />
      <main>
        <Section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/10 via-white to-brand-sand">
          <div className="absolute inset-0 bg-radial-spotlight opacity-35" aria-hidden="true" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-mint/30 blur-3xl" aria-hidden="true" />
          <Container className="relative grid items-center gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <Badge className="mb-6 w-max bg-brand-blue/15 text-brand-cobalt ring-0">North Indy Contractors</Badge>
              <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">
                Quality contracting for the greater north side of Indianapolis.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-brand-cobalt">
                From Carmel to Noblesville and beyond, PCG delivers dependable craftsmanship, transparent communication,
                and clean job sites.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className={buttonStyles({ variant: 'primary' })}>
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className={buttonStyles({
                    variant: 'secondary',
                    className: 'border-brand-cobalt/40 bg-white/80 text-brand-navy hover:bg-white focus-visible:outline-brand-blue'
                  })}
                >
                  Our Services
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-3 text-sm text-brand-cobalt">
                {trustSignals.map((signal) => (
                  <li
                    key={signal}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white/80 px-4 py-2 shadow-brand-soft"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
                    <span className="font-medium">{signal}</span>
                  </li>
                ))}
              </ul>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => {
                  const cardClass =
                    'rounded-2xl border border-brand-gray/60 bg-white/80 p-4 text-left shadow-brand-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-brand';
                  if (stat.href) {
                    return (
                      <a
                        key={stat.label}
                        href={stat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${cardClass} block group no-underline`}
                        aria-label={`${stat.label} (opens in a new tab)`}
                      >
                        <div className="flex items-center gap-3">
                          <div>
                            <dt className="text-xs font-semibold uppercase tracking-widest text-brand-cobalt/70">{stat.label}</dt>
                            <dd className="mt-2 text-2xl font-semibold text-brand-navy">{stat.value}</dd>
                          </div>
                          <ArrowRightIcon className="ml-auto h-4 w-4 text-brand-indigo transition group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </a>
                    );
                  }

                  return (
                    <div key={stat.label} className={cardClass}>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-brand-cobalt/70">{stat.label}</dt>
                      <dd className="mt-2 text-2xl font-semibold text-brand-navy">{stat.value}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
            <div className="relative hidden lg:flex">
              <div className="absolute -top-10 -right-6 h-24 w-24 rounded-full bg-brand-blue/25 blur-3xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-3xl border border-brand-gray/60 bg-white/85 p-4 shadow-brand-soft backdrop-blur">
                  <img
                    src={heroImage}
                    alt="Precision Contracting Group crew installing custom cabinetry in a modern kitchen."
                    className="h-full w-full max-w-md rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="mt-5 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-4 text-sm text-brand-cobalt">
                  <p className="font-semibold text-brand-navy">Your in-house project lead</p>
                  <p className="mt-1">
                    Seamless communication, milestone updates, and accountable trades so your renovation stays on schedule.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-brand-sand">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="bg-brand-blue/15 text-brand-cobalt ring-0">Services</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-brand-navy sm:text-4xl">
                Renovation support that keeps every decision clear
              </h2>
              <p className="mt-3 text-base text-brand-cobalt">
                Pair individual trades with our project leadership or hand us the whole remodel. Either way, scopes,
                schedules, and craftsmanship stay in sync.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {highlightServices.map((service) => {
                const Icon = serviceIcons[service.id] ?? HomeModernIcon;
                return (
                  <Card
                    key={service.id}
                    className="group relative overflow-hidden rounded-2xl border border-brand-gray/60 bg-white p-7 shadow-brand-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-brand"
                  >
                    <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-blue/15 text-brand-indigo">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-navy">{service.name}</h3>
                        <p className="text-sm text-brand-cobalt">{service.summary}</p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm text-brand-cobalt">
                      {service.highlights.slice(0, 2).map((highlight) => (
                        <li key={highlight} className="flex items-start">
                        <ArrowRightIcon className="mr-2 mt-1 h-4 w-4 flex-none text-brand-indigo" aria-hidden="true" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-brand-cobalt">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden="true" />
                        {service.timeline}
                      </span>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1 text-brand-indigo transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                        aria-label={`Explore ${service.name} services`}
                      >
                        Explore
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <Badge className="bg-brand-blue/15 text-brand-cobalt ring-0">The Precision Promise</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-brand-navy sm:text-4xl">
                Your project lead from walkthrough to final punch
              </h2>
              <p className="mt-4 text-base text-brand-cobalt">{TAGLINE}</p>
              <div className="mt-8 space-y-5">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-brand-gray/60 bg-white px-5 py-4 shadow-brand-soft"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-blue/15 text-sm font-semibold text-brand-cobalt">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-brand-navy">{step.title}</h3>
                      <p className="mt-1 text-sm text-brand-cobalt">{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              Learn more about PCG
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((item, index) => (
                <figure
                  key={item.alt ?? index}
                  className="group relative overflow-hidden rounded-2xl border border-brand-gray/60 shadow-brand-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </figure>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-brand-sand">
          <Container className="relative overflow-hidden rounded-3xl border border-brand-gray/60 bg-gradient-to-r from-white via-brand-sand to-brand-mint/15 px-8 py-12 shadow-brand-soft">
            <div className="absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-sky/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-4">
                <h2 className="text-3xl font-semibold text-brand-navy">Ready to start your next project?</h2>
                <p className="text-base text-brand-cobalt">
                  Share a few details and we will assemble a clear scope, transparent pricing, and schedule checkpoints
                  that keep your renovation on track.
                </p>
                <ul className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-widest text-brand-cobalt">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-indigo" aria-hidden="true" />
                    <span>24-hour response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-indigo" aria-hidden="true" />
                    <span>Licensed & insured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-indigo" aria-hidden="true" />
                    <span>Clean job sites</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className={buttonStyles({ variant: 'primary', size: 'md' })}>
                  Request a quote
                </Link>
                <Link
                  to="/services"
                  className={buttonStyles({
                    variant: 'secondary',
                    size: 'md',
                    className:
                      'border-brand-cobalt bg-white text-brand-navy hover:bg-brand-sand focus-visible:outline-brand-blue'
                  })}
                >
                  Browse services
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
