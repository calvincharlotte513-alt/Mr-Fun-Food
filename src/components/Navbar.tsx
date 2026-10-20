import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import { useCart } from '../context/CartContext';
import { SmartImage } from './SmartImage';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Gizz Dodo', path: '/gizz-dodo' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#EADCCE] py-2.5'
          : 'bg-[#FDF8F0] border-b border-[#EADCCE]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6 md:gap-8">
          {/* Zone 1: Single element brand wordmark with official logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-[#EA580C] rounded-lg"
            aria-label="Mr Fun Food Republic Home"
          >
            <SmartImage
              src={BUSINESS_CONFIG.assets.logo}
              alt="Mr Fun Food Republic Official Brand Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full shadow-sm ring-1 ring-[#EA580C]/20 transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display text-sm sm:text-base lg:text-lg font-black tracking-tight text-[#23140C] uppercase leading-none whitespace-nowrap">
                MR FUN <span className="text-[#EA580C]">FOOD REPUBLIC</span>
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-[#8C5D3E] tracking-wider uppercase mt-0.5 whitespace-nowrap">
                {BUSINESS_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Zone 2: Clean single-line text nav links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-[#3A2012]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#EA580C] rounded ${
                    isActive
                      ? 'text-[#EA580C] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#EA580C]'
                      : 'hover:text-[#EA580C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 primary action area */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* WhatsApp quick contact */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello MR FUN FOOD REPUBLIC HUB! I would like to inquire about Gizz Dodo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-lg transition-colors whitespace-nowrap"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>WhatsApp</span>
            </a>

            {/* Cart Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:px-3 sm:py-2 text-xs font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-lg transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#EA580C]"
              aria-label={`Shopping Cart with ${totalCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#EA580C]" />
              <span className="hidden sm:inline">Bag</span>
              {totalCount > 0 && (
                <span className="bg-[#EA580C] text-white text-[11px] font-bold w-5 h-5 rounded-full inline-flex items-center justify-center tabular-nums">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Primary Order CTA (Hidden on mobile top bar, visible on tablet/desktop) */}
            <Link
              to="/menu"
              className="hidden sm:inline-flex px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              View Menu
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#23140C] hover:text-[#EA580C] md:hidden rounded-lg focus-visible:outline-2 focus-visible:outline-[#EA580C]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EADCCE] bg-[#FDF8F0] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-base font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#EA580C]/10 text-[#EA580C] font-bold'
                      : 'text-[#23140C] hover:text-[#EA580C] hover:bg-[#F5EBE1]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#EADCCE] flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello MR FUN FOOD REPUBLIC HUB! I would like to place an order.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#EA580C]" />
              WhatsApp ({BUSINESS_CONFIG.phone})
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              View Bag ({totalCount} {totalCount === 1 ? 'item' : 'items'})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
