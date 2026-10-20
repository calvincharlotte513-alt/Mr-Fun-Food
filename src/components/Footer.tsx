import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { setIsCartOpen } = useCart();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#23140C] text-[#F5EBE1] border-t border-[#3A2012] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3A2012]">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_CONFIG.assets.logo}
                alt="Mr Fun Food Republic Hub Logo"
                className="w-14 h-14 object-contain rounded-full border border-white/20 bg-white/10 p-0.5"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display text-lg font-black text-white tracking-tight uppercase block leading-none">
                  {BUSINESS_CONFIG.brandName}{' '}
                  <span className="text-[#EA580C]">FOOD HUB</span>
                </span>
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mt-1 block">
                  “{BUSINESS_CONFIG.tagline}”
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D4C3B3] leading-relaxed max-w-sm">
              Home of {BUSINESS_CONFIG.productName}. Dedicated to authentic Nigerian taste, quality ingredients,
              and our signature Gizz Dodo.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#3A2012] hover:bg-[#EA580C] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#3A2012] hover:bg-[#EA580C] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                TK
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#3A2012] hover:bg-[#EA580C] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={BUSINESS_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#3A2012] hover:bg-[#EA580C] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D4C3B3]">
              <li>
                <Link to="/" className="hover:text-[#EA580C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#EA580C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#EA580C] transition-colors">
                  Menu &amp; Offerings
                </Link>
              </li>
              <li>
                <Link to="/gizz-dodo" className="hover:text-[#EA580C] transition-colors">
                  Gizz Dodo Special
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#EA580C] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Order Channels */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Order Channels
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D4C3B3]">
              <li>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Online Food Bag
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EA580C] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>WhatsApp Order</span>
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-[#EA580C] transition-colors">
                  Call: {BUSINESS_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Food Hub Updates
            </h4>
            <p className="text-xs text-[#D4C3B3] leading-relaxed">
              Subscribe to get notified about our future culinary launches (including our upcoming Coconut Rice).
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#3A2012] border border-[#EA580C]/40 text-xs text-[#EA580C] font-semibold">
                ✓ You're on our updates list! Thank you.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3.5 py-2.5 text-xs bg-[#3A2012] border border-[#54321D] rounded-xl text-white placeholder:text-[#8C5D3E] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#8C5D3E]">
              Hub Dispatch: {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C5D3E]">
          <p>© 2026 {BUSINESS_CONFIG.fullName}. All Rights Reserved. Tastier Than Ever!</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#EA580C]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
