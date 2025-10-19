import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Input from '@/components/FormControls/Input';
import Textarea from '@/components/FormControls/Textarea';
import CheckboxPill from '@/components/FormControls/CheckboxPill';
import Button from '@/components/Button';
import Toast from '@/components/Toast';
import SEO from '@/components/SEO';
import { services, type Service } from '@/data/services';
import { CONTACT_EMAIL, CONTACT_PHONE, FORMSPREE_ID, SERVICE_AREAS } from '@/config';
import { useSelections } from '@/store/selections';
import mapImage from '@/assets/placeholders//download.png';

type FormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectDetails: string;
};

const defaultState: FormState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  projectDetails: ''
};

const Contact = () => {
  const { selectedServices, toggleService, clearServices } = useSelections();
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'services', string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{ message: string; variant: 'success' | 'error' } | null>(null);

  const selectedServiceNames = useMemo(
    () =>
      selectedServices
        .map((id: string) => services.find((service: Service) => service.id === id)?.name)
        .filter((name): name is string => Boolean(name)),
    [selectedServices]
  );

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState | 'services', string>> = {};
    if (!formState.name.trim()) {
      nextErrors.name = 'Please tell us who to contact.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      nextErrors.email = 'Enter a valid email so we can follow up.';
    }
    if (!formState.location.trim()) {
      nextErrors.location = 'Let us know your city or ZIP so we can confirm service coverage.';
    }
    if (!formState.projectDetails.trim()) {
      nextErrors.projectDetails = 'Share a few project details to help us prepare.';
    }
    if (!selectedServices.length) {
      nextErrors.services = 'Select at least one service so we can route your request.';
    }
    return nextErrors;
  };

  const resetForm = () => {
    setFormState(defaultState);
    clearServices();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    const payload = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
      location: formState.location.trim(),
      services: selectedServiceNames.join(', '),
      projectDetails: formState.projectDetails.trim()
    };

    if (!FORMSPREE_ID) {
      const lines = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || 'N/A'}`,
        `Location: ${payload.location}`,
        `Services: ${payload.services}`,
        '',
        'Project details:',
        payload.projectDetails
      ];
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Quote Request')}&body=${encodeURIComponent(
        lines.join('\n')
      )}`;

      window.location.href = mailto;
      setStatus('success');
      resetForm();
      setToast({
        variant: 'success',
        message: "Thanks! We'll be in touch within 1 business day."
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', payload.name);
      formData.append('email', payload.email);
      formData.append('phone', payload.phone);
      formData.append('location', payload.location);
      formData.append('services', payload.services);
      formData.append('projectDetails', payload.projectDetails);
      formData.append('_subject', 'New quote request from precisioncontractinggroup.com');

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        resetForm();
        setToast({
          variant: 'success',
          message: "Thanks! We'll be in touch within 1 business day."
        });
      } else {
        const data = await response.json().catch(() => null);
        const message = data?.error || 'Something went wrong sending your request.';
        throw new Error(message);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setToast({
        variant: 'error',
        message: 'We could not send your request. Please try again or email us directly.'
      });
    }
  };

  return (
    <>
      <SEO
        title="Request a quote"
        description="Contact Precision Contracting Group for flooring, drywall, remodels, basements, and exterior project quotes."
        path="/contact"
      />
      <Section className="pt-12">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <Badge className="mb-6 w-max">Contact PCG</Badge>
            <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Let's start your project scope.</h1>
            <p className="mt-4 text-brand-navy/75">
              Share your project priorities, target timeline, and location. We reply within one business day with next steps.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <Input
                id="name"
                name="name"
                label="Name"
                placeholder="Jane Contractor"
                value={formState.name}
                onChange={handleChange('name')}
                error={errors.name}
                autoComplete="name"
                required
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleChange('email')}
                error={errors.email}
                autoComplete="email"
                required
              />
              <Input
                id="phone"
                name="phone"
                type="tel"
                label="Phone (optional)"
                placeholder="765-617-1065"
                value={formState.phone}
                onChange={handleChange('phone')}
                hint="We'll only call if a quick conversation is the fastest path forward."
                autoComplete="tel"
              />
              <Input
                id="location"
                name="location"
                label="City / ZIP Code"
                placeholder="Carmel 46032"
                value={formState.location}
                onChange={handleChange('location')}
                error={errors.location}
                autoComplete="address-level2"
                required
              />

              <div className="space-y-3">
                <p className="text-sm font-medium text-brand-navy">Service interest</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service: Service) => (
                    <CheckboxPill
                      key={service.id}
                      label={service.name}
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                    />
                  ))}
                </div>
                <p className="text-xs text-brand-navy/60">
                  Choose as many as apply. Need something else? Mention it below.
                </p>
                {errors.services ? <p className="text-xs text-red-600">{errors.services}</p> : null}
              </div>

              <Textarea
                id="projectDetails"
                name="projectDetails"
                label="Project details"
                placeholder="Tell us about the space, timeline, and any existing plans."
                rows={6}
                value={formState.projectDetails}
                onChange={handleChange('projectDetails')}
                error={errors.projectDetails}
                required
              />

              <Button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Submit request'}
              </Button>
              <p className="text-xs text-brand-navy/60">
                Prefer email? Reach us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-indigo hover:text-brand-navy">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </form>
          </div>
          <div className="space-y-6">
            <Card className="space-y-4">
              <h2 className="text-lg font-semibold text-brand-navy">Contact details</h2>
              <div className="space-y-3 text-sm text-brand-navy/80">
                <p className="flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-indigo hover:text-brand-navy">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-brand-indigo" aria-hidden="true" />
                  <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} className="text-brand-indigo hover:text-brand-navy">
                    {CONTACT_PHONE}
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPinIcon className="mt-0.5 h-5 w-5 text-brand-indigo" aria-hidden="true" />
                  <span>
                    North Indianapolis service area:
                    <br />
                    {SERVICE_AREAS.join(' | ')}
                  </span>
                </p>
              </div>
            </Card>
            <Card className="space-y-4">
              <h2 className="text-lg font-semibold text-brand-navy">Where we work</h2>
              <img
                src={mapImage}
                alt="Precision Contracting Group service map illustration"
                className="w-full rounded-lg"
                loading="lazy"
              />
              <p className="text-sm text-brand-navy/70">
                Outside of these communities? Send a note and we&apos;ll confirm availability or refer you to a trusted partner.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
      <Toast
        open={Boolean(toast)}
        message={toast?.message ?? ''}
        variant={toast?.variant}
        onClose={() => setToast(null)}
      />
    </>
  );
};

export default Contact;
