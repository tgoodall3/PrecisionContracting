import { Link } from 'react-router-dom';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import CheckboxPill from '@/components/FormControls/CheckboxPill';
import FAQAccordion from '@/components/FAQAccordion';
import SEO from '@/components/SEO';
import { buttonStyles } from '@/components/Button';
import { services, type Service } from '@/data/services';
import { faqs } from '@/data/faqs';
import { useSelections } from '@/store/selections';

const Services = () => {
  const { selectedServices, toggleService } = useSelections();

  return (
    <>
      <SEO
        title="Construction and remodeling services"
        description="Explore flooring, drywall, kitchen & bath remodels, basement finishing, and exterior upgrades from Precision Contracting Group."
        path="/services"
      />
      <Section className="pt-12">
        <Container>
          <Badge className="w-max">What we do</Badge>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr,1fr]">
            <div>
              <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Services built around dependable project delivery.</h1>
              <p className="mt-4 text-brand-navy/75">
                Choose the scope you need and we&apos;ll align licensed trades, vetted suppliers, and accountable schedules. Use the "Add to quote"
                toggle to prefill your contact request.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-navy">
                Ready to get started?
                <ClipboardDocumentCheckIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <Card className="space-y-4">
              <h2 className="text-lg font-semibold text-brand-navy">Current selections</h2>
              <p className="text-sm text-brand-navy/70">
                Services you toggle appear below and will prefill the contact form.
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedServices.length ? (
                  selectedServices.map((id: string) => {
                    const service = services.find((item: Service) => item.id === id);
                    if (!service) return null;
                    return (
                      <span key={id} className="rounded-full bg-brand-blue/15 px-3 py-1 text-xs font-semibold uppercase text-brand-navy">
                        {service.name}
                      </span>
                    );
                  })
                ) : (
                  <p className="text-sm text-brand-navy/60">No services selected yet.</p>
                )}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/80">
        <Container className="space-y-8">
          {services.map((service: Service) => (
            <Card key={service.id} className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold text-brand-navy">{service.name}</h2>
                  <Badge tone="neutral">{service.timeline}</Badge>
                </div>
                <p className="mt-3 text-brand-navy/70">{service.blurb}</p>
                <ul className="mt-5 space-y-3 text-sm text-brand-navy/80">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-lg bg-brand-blue/10 p-5">
                <p className="text-sm font-semibold text-brand-navy">Add to quote</p>
                <CheckboxPill
                  label={selectedServices.includes(service.id) ? 'Selected for quote' : 'Add this service'}
                  checked={selectedServices.includes(service.id)}
                  onChange={() => toggleService(service.id)}
                />
                <p className="text-xs text-brand-navy/60">
                  We&apos;ll confirm details, schedule, and budget range during your consultation.
                </p>
                <Link to="/contact" className={buttonStyles({ variant: 'primary', size: 'sm' })}>
                  Prefill contact form
                </Link>
              </div>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">Common questions</h2>
            <p className="mt-3 text-brand-navy/70">
              We&apos;re always happy to talk through specifics. Here are answers to a few questions we hear most often.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </Section>

      <Section className="bg-brand-blue/10">
        <Container className="rounded-2xl bg-white px-6 py-10 shadow-lg ring-1 ring-brand-gray/60 sm:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">Let&apos;s line up your start date</h2>
              <p className="mt-2 text-brand-navy/70">
                Share your selected services, target timeline, and any inspiration. We&apos;ll respond within one business day.
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

export default Services;
