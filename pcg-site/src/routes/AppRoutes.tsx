import { useEffect } from 'react';
import { Route, Routes, Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
};

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-[#f7f9fc]">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <SchemaOrg />
  </div>
);

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);

export default AppRoutes;
