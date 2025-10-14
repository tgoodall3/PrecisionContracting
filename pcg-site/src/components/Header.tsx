import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Container from '@/components/Container';
import { buttonStyles } from '@/components/Button';
import { useUI } from '@/store/ui';
import logo from '@/assets/logo.svg';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' }
];

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
    <header
      className={clsx(
        'sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow',
        scrolled && 'shadow-md'
      )}
    >
      <Container className="flex items-center justify-between gap-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 text-brand-navy" aria-label="Precision Contracting Group home">
          <img src={logo} alt="" className="h-10 w-10" />
          <span className="hidden text-sm font-semibold sm:inline-block">
            Precision Contracting Group
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'relative px-1 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-navy',
                  isActive &&
                    'text-brand-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-blue'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:inline-flex">
          <Link to="/contact" className={buttonStyles({ variant: 'primary', size: 'sm' })}>
            Request a Quote
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent p-2 text-brand-navy transition hover:bg-brand-gray/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue md:hidden"
          onClick={toggleMobileNav}
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {mobileNavOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </Container>
      <div
        id="mobile-navigation"
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-200 ease-out',
          mobileNavOpen
            ? 'max-h-96 opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileNavOpen}
      >
        <div
          className={clsx(
            'space-y-2 border-t border-brand-gray bg-white px-4 py-4 shadow-md transition-opacity',
            mobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMobileNav}
              className={clsx(
                'block rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy/80 transition hover:bg-brand-blue/10 hover:text-brand-navy',
                pathname === item.to && 'bg-brand-blue/10 text-brand-navy'
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
