import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import SEO from '@/components/SEO';
import { TAGLINE, SERVICE_AREAS } from '@/config';
import { buttonStyles } from '@/components/Button';

const About = () => {
  const values = [
    {
      title: 'Quality',
      description:
        'Licensed specialists, vetted trade partners, and proven materials keep every deliverable on spec.'
    },
    {
      title: 'Honesty',
      description:
        'We communicate scopes, allowances, and contingencies up front so you always know what is happening next.'
    },
    {
      title: 'Communication',
      description:
        'Weekly updates, photo logs, and a direct point of contact keep your project transparent from kickoff to closeout.'
    }
  ];

  const steps = [
    {
      title: '01 - Listen & scope',
      detail:
        'We walk the space, capture goals, and build a scope that pairs the right trades with realistic timelines.'
    },
    {
      title: '02 - Plan & protect',
      detail:
        'Permits, logistics, and protection plans are handled before work begins to keep your home clean and safe.'
    },
    {
      title: '03 - Build & review',
      detail:
        'Crew leads execute the plan with daily check-ins, QA checkpoints, and punch walkthroughs you can trust.'
    }
  ];

  return (
    <>
      <SEO
        title="About Precision Contracting Group"
        description="Discover Precision Contracting Group's story, values, and the communities we serve across North Indianapolis."
        path="/about"
      />
      <Section className="pt-12">
        <Container className="space-y-8">
          <Badge className="w-max">Our Story</Badge>
          <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
            <div>
              <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Craftsmanship with clear communication.</h1>
              <p className="mt-4 text-brand-navy/75">
                Precision Contracting Group was founded to make hiring a contractor feel calm, collaborative, and accountable.
                We bring decades of trade experience and a love for modern design to every project, from simple repairs to full-scale remodels.
              </p>
              <p className="mt-4 text-brand-navy/75">
                Our team is based on the north side of Indianapolis and operates with a simple promise: detail-driven workmanship,
                honest schedules, and straightforward communication. We believe a successful project is one where you finish with confidence and clarity.
              </p>
            </div>
            <Card className="h-full">
              <h2 className="text-xl font-semibold text-brand-navy">What guides our work</h2>
              <ul className="mt-4 space-y-6">
                {values.map((value) => (
                  <li key={value.title}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">{value.title}</h3>
                    <p className="mt-2 text-sm text-brand-navy/70">{value.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/80">
        <Container>
          <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">How we work</h2>
          <p className="mt-3 max-w-2xl text-brand-navy/70">
            From the first walkthrough to final punch, our process keeps expectations clear and schedules reliable.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.title} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">{step.title}</h3>
                <p className="text-sm text-brand-navy/70">{step.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">Serving North Indianapolis</h2>
            <p className="mt-3 text-brand-navy/70">
              We proudly support homeowners and property managers across the north side. If you are nearby, reach out—we&apos;re happy to confirm availability.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-brand-navy/80 sm:grid-cols-2">
              {SERVICE_AREAS.map((area: string) => (
                <li key={area} className="flex items-center gap-2">
                  <CheckCircleIcon aria-hidden="true" className="h-4 w-4 text-brand-blue" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-navy">Let&apos;s build your next project</h3>
            <p className="text-sm text-brand-navy/70">
              Share your goals and we&apos;ll craft a scope that balances budget, timing, and craftsmanship. We can collaborate on design selections or work from a plan you already have.
            </p>
            <Link to="/contact" className={buttonStyles({ variant: 'primary' })}>
              Start the conversation
            </Link>
            <p className="text-xs text-brand-navy/60">
              Prefer a call? Reach us at <a href="tel:17656171065" className="text-brand-blue hover:underline">765-617-1065</a>.
            </p>
          </Card>
        </Container>
      </Section>

      <Section className="bg-brand-blue/10">
        <Container className="rounded-2xl bg-white px-6 py-10 shadow-lg ring-1 ring-brand-gray/60 sm:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">We&apos;re ready when you are</h2>
              <p className="mt-2 max-w-xl text-brand-navy/70">
                Schedule a walkthrough, request a second opinion, or hand us the punch list you need handled this month. PCG keeps projects moving.
              </p>
            </div>
            <Link to="/contact" className={buttonStyles({ variant: 'primary', size: 'md' })}>
              Request a Quote
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
};

const CheckCircleIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default About;
