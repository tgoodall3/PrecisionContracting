import { Link } from 'react-router-dom';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSchema from '@/components/FAQSchema';
import SEO from '@/components/SEO';
import { buttonStyles } from '@/components/Button';
import { services, type Service } from '@/data/services';
import { faqs } from '@/data/faqs';
import { useSelections } from '@/store/selections';

const Services = () => {
  const { selectedServices, toggleService, clearServices } = useSelections();

  const selectedServiceNames = useMemo(
    () =>
      selectedServices
        .map((id: string) => services.find((service: Service) => service.id === id))
        .filter((service): service is Service => Boolean(service))
        .map((service) => service.name),
    [selectedServices]
  );

  return (
    <>
      <SEO
        title="Construction and remodeling services"
        description="Explore flooring, drywall, kitchen & bath remodels, basement finishing, and exterior upgrades from Precision Contracting Group."
        path="/services"
      />
      <FAQSchema faqs={faqs} path="/services" />
      <Section className="pt-12">
        <Container>
          <Badge className="w-max">What we do</Badge>
          <div className="mt-6 max-w-3xl space-y-4">
            <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Services built around dependable project delivery.</h1>
            <p className="text-brand-navy/75">
              Choose the scopes you need and we&apos;ll align licensed trades, vetted suppliers, and accountable schedules. Add services to your
              project as you browse, then send the full list through our contact form.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo transition hover:text-brand-navy">
              Ready to get started?
              <ClipboardDocumentCheckIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/80">
        <Container className="space-y-6">
          {services.map((service: Service) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <Card key={service.id} className="space-y-5 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold text-brand-navy">{service.name}</h2>
                  <Badge tone="neutral">{service.timeline}</Badge>
                </div>
                <p className="text-brand-navy/70">{service.blurb}</p>
                <ul className="space-y-3 text-sm text-brand-navy/80">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 border-t border-brand-gray/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={buttonStyles({
                      variant: isSelected ? 'secondary' : 'primary',
                      size: 'sm',
                      className: isSelected ? 'border-brand-indigo text-brand-indigo hover:text-brand-navy' : undefined
                    })}
                  >
                    {isSelected ? 'Remove from project' : 'Add to project'}
                  </button>
                  <Link
                    to="/contact"
                    className={buttonStyles({
                      variant: 'secondary',
                      size: 'sm',
                      className: 'border-brand-indigo text-brand-indigo hover:text-brand-navy sm:w-auto'
                    })}
                  >
                    Ask about this service
                  </Link>
                </div>
              </Card>
            );
          })}
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
      {selectedServices.length > 0 ? (
        <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
          <div className="flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-brand-gray/70 bg-white/95 px-5 py-4 shadow-brand-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-brand-navy">
              <span className="font-semibold text-brand-indigo">{selectedServices.length}</span> service
              {selectedServices.length > 1 ? 's' : ''} added:&nbsp;
              <span className="font-semibold text-brand-navy">
                {selectedServiceNames.slice(0, 2).join(', ')}
                {selectedServiceNames.length > 2 ? `, +${selectedServiceNames.length - 2} more` : ''}
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link to="/contact" className={buttonStyles({ variant: 'primary', size: 'sm' })}>
                Review & send
              </Link>
              <button
                type="button"
                onClick={clearServices}
                className={buttonStyles({ variant: 'ghost', size: 'sm', className: 'text-brand-indigo hover:text-brand-navy' })}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Services;
