import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, EnvelopeIcon, PhoneIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Container from '@/components/Container';
import { buttonStyles } from '@/components/Button';
import { useUI } from '@/store/ui';
import logo from '@/assets/placeholders/ChatGPT Image Oct 18, 2025, 08_45_16 PM.png';
import { CONTACT_PHONE, GOOGLE_REVIEWS_URL, TAGLINE } from '@/config';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
];

const phoneHref = `tel:${CONTACT_PHONE.replace(/\D/g, '')}`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { mobileNavOpen, openMobileNav, closeMobileNav, toggleMobileNav } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileNav();
  }, [pathname, closeMobileNav]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-navy text-white md:block">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-2 text-[11px] uppercase tracking-wide text-white/85">
          <div className="flex min-w-0 items-center gap-2">
            <SparklesIcon className="h-4 w-4 text-brand-sky" aria-hidden="true" />
            <span className="truncate font-medium tracking-wide text-white">{TAGLINE}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 font-semibold transition hover:text-white"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              <span>{CONTACT_PHONE}</span>
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 font-semibold transition hover:text-white lg:inline-flex"
              aria-label="Read Precision Contracting Group Google reviews (opens in a new tab)"
            >
              <SparklesIcon className="h-4 w-4 text-brand-sky" aria-hidden="true" />
              <span>Google Reviews</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20"
              aria-label="Contact Precision Contracting Group"
            >
              <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
              <span>Contact</span>
            </Link>
          </div>
        </Container>
      </div>
      <div
        className={clsx(
          'border-b border-brand-gray/60 bg-white backdrop-blur transition-[background-color,shadow,border-color] duration-200',
          scrolled && 'border-brand-gray/30 shadow-brand-soft'
        )}
      >
        <Container className="flex items-center justify-between gap-4 py-3 md:py-4">
          <Link
            to="/"
            className="group flex items-center text-brand-navy"
            aria-label="Precision Contracting Group home"
          >
            <img
              src={logo}
              alt="Precision Contracting Group"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <nav className="hidden items-center gap-2 rounded-full border border-brand-gray/60 bg-white px-2 py-1.5 shadow-sm md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'rounded-full px-4 py-2 text-sm font-semibold text-brand-cobalt/80 transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue',
                    isActive &&
                      'bg-brand-blue/10 text-brand-navy shadow-sm'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:inline-flex">
            <Link
              to="/contact"
              className={buttonStyles({ variant: 'primary', size: 'sm' })}
            >
              Request a Quote
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-brand-gray/60 bg-white p-2 text-brand-cobalt shadow-sm transition hover:bg-brand-blue/10 hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue md:hidden"
            onClick={toggleMobileNav}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </Container>
      </div>
      <div
        id="mobile-navigation"
        className={clsx(
          'overflow-hidden transition-all duration-200 ease-out md:hidden',
          mobileNavOpen
            ? 'max-h-96 opacity-100 pointer-events-auto'
            : 'pointer-events-none max-h-0 opacity-0'
        )}
        aria-hidden={!mobileNavOpen}
      >
        <div
          className={clsx(
            'space-y-3 border-t border-brand-gray/60 bg-white px-4 py-4 shadow-brand-soft transition-opacity',
            mobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMobileNav}
              className={clsx(
                'block rounded-xl border border-brand-gray/50 px-3 py-3 text-sm font-semibold text-brand-cobalt/80 transition hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-navy',
                pathname === item.to && 'border-brand-blue/40 bg-brand-blue/10 text-brand-navy'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMobileNav}
            className={buttonStyles({ variant: 'primary', fullWidth: true })}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
