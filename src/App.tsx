import { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown, Hand, Menu, X, LayoutDashboard, ArrowRight, Mail, MapPin } from 'lucide-react';
import Dashboard from './Dashboard';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import FAQ from './pages/FAQ';
import { Analytics } from '@vercel/analytics/react';

export type Page = 'home' | 'pricing' | 'about' | 'faq' | 'dashboard';

const navLinks: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [page, setPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change + scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Sticky nav shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (target: Page) => setPage(target);

  if (page === 'dashboard') {
    return <Dashboard onGoHome={() => navigate('home')} />;
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col bg-white">

        {/* ── Navigation ── */}
        <header className={`sticky top-0 z-50 bg-white dark:bg-slate-950 transition-shadow duration-200 ${scrolled ? 'shadow-md shadow-slate-900/5 dark:shadow-black/20' : 'border-b border-gray-100 dark:border-slate-800'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-6">

            {/* Logo */}
            <button
              onClick={() => navigate('home')}
              className="group relative flex items-center justify-center h-10 w-36 shrink-0"
              aria-label="PinDot home"
            >
              {/* Text state */}
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 transform origin-center opacity-100 group-hover:opacity-0 group-hover:rotate-[160deg] group-hover:scale-50">
                <span className="font-display font-bold text-2xl tracking-tight text-brand-teal">
                  Abaka<span className="text-brand-orange">Dot</span>
                </span>
              </span>
              {/* Logo state */}
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 transform origin-center opacity-0 -rotate-[160deg] scale-50 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100">
                <img src="/new-logo.png" alt="AbakaDot" className="h-9 w-auto object-contain" onError={e => { e.currentTarget.style.display='none'; }} />
              </span>
            </button>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1 flex-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    page === link.id
                      ? 'text-brand-teal bg-brand-teal/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Devices dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
                  Devices <ChevronDown className="w-4 h-4 transition-transform group-hover:-rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 p-2 z-50">
                  <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="font-display font-bold text-brand-teal flex items-center gap-1.5">
                      Pin<span className="text-brand-orange">Dot</span>
                      <Hand className="w-4 h-4 text-brand-orange" />
                    </span>
                    <span className="bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Flagship</span>
                  </a>
                  <div className="my-1 border-t border-gray-100" />
                  <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-slate-400 font-medium text-sm">Next-Gen Hardware</span>
                    <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Soon</span>
                  </a>
                </div>
              </div>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <button
                className="flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-teal hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Light mode' : 'Dark mode'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => navigate('dashboard')}
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-colors px-3 py-2"
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </button>

              <a href="#" className="hidden md:block text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-teal transition-colors px-2 py-2">
                Sign In
              </a>

              <button
                onClick={() => navigate('pricing')}
                className="bg-brand-teal text-white font-semibold text-sm px-4 py-2 md:px-5 md:py-2.5 rounded-xl hover:bg-[#25B5A3] transition-all shadow-sm shadow-brand-teal/25 hover:shadow-md hover:shadow-brand-teal/30"
              >
                Get PinDot
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl text-slate-600 hover:bg-gray-50 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-950 py-3 px-4 space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    page === link.id ? 'bg-brand-teal/10 text-brand-teal' : 'text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => navigate('dashboard')}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-brand-teal" /> Dashboard Demo
              </button>
              <div className="border-t border-gray-100 pt-3 mt-3 grid grid-cols-2 gap-2">
                <a href="#" className="flex items-center justify-center py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-brand-teal/40 transition-all">Sign In</a>
                <button
                  onClick={() => navigate('pricing')}
                  className="py-2.5 rounded-xl bg-brand-teal text-white text-sm font-semibold hover:bg-[#25B5A3] transition-all"
                >
                  Get PinDot
                </button>
              </div>
            </div>
          )}
        </header>

        {/* ── Page Content ── */}
        <main className="flex-1">
          {page === 'home' && <Home onNavigate={navigate} />}
          {page === 'pricing' && <Pricing onNavigate={navigate} />}
          {page === 'about' && <About onNavigate={navigate} />}
          {page === 'faq' && <FAQ onNavigate={navigate} />}
        </main>

        {/* ── Footer ── */}
        <footer className="bg-gradient-to-br from-[#0d4f47] via-[#0f766e] to-brand-teal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">

              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-4">
                  <span className="font-display font-bold text-2xl text-white">
                    Abaka<span className="text-brand-orange">Dot</span>
                  </span>
                </button>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Democratizing tactile literacy through AI-powered Braille learning technology.
                </p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Ateneo de Naga University, Philippines</span>
                </div>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-bold text-white/90 text-sm uppercase tracking-wider mb-4">Product</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Home', id: 'home' as Page },
                    { label: 'Pricing', id: 'pricing' as Page },
                    { label: 'Dashboard Demo', id: 'dashboard' as Page },
                  ].map(link => (
                    <li key={link.label}>
                      <button onClick={() => navigate(link.id)} className="text-white/70 hover:text-white transition-colors text-sm">
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-white/90 text-sm uppercase tracking-wider mb-4">Company</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'About Us', id: 'about' as Page },
                    { label: 'FAQ', id: 'faq' as Page },
                  ].map(link => (
                    <li key={link.label}>
                      <button onClick={() => navigate(link.id)} className="text-white/70 hover:text-white transition-colors text-sm">
                        {link.label}
                      </button>
                    </li>
                  ))}
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Contact</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold text-white/90 text-sm uppercase tracking-wider mb-4">Contact</h4>
                <ul className="space-y-2.5">
                  <li>
                    <a href="mailto:team@abakadot.edu.ph" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                      <Mail className="w-4 h-4" /> team@abakadot.edu.ph
                    </a>
                  </li>
                </ul>
                <div className="mt-6">
                  <button
                    onClick={() => navigate('pricing')}
                    className="flex items-center gap-2 bg-white text-brand-teal text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-white/90 transition-all shadow-sm"
                  >
                    Get PinDot <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
              <span>© 2026 Team AbakaDot · Ateneo de Naga University. All rights reserved.</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-white/80 font-medium">PinDot v1.0 — Now Available</span>
              </div>
            </div>
          </div>
        </footer>

      </div>
      <Analytics />
    </div>
  );
}
