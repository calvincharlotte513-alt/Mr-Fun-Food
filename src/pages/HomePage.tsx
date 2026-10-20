import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Sparkles, MessageCircle, Utensils, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BUSINESS_CONFIG, CURRENT_MENU_ITEMS, UPCOMING_MENU_ITEMS } from '../data/config';
import { useCart } from '../context/CartContext';

export const HomePage: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const signatureItem = CURRENT_MENU_ITEMS[0];

  return (
    <div>
      {/* 1. MANDATORY HERO SECTION WITH UNIQUE BACKGROUND IMAGE */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.chef}
        badgeText="Official Home of Mr Fun GizzDODO"
        title="MR FUN FOOD REPUBLIC HUB"
        highlightedTitlePart="Tastier Than Ever!"
        subtitle="A premier culinary brand delivering bold flavours, fresh ingredients, and unforgettable food experiences with our signature Gizz Dodo."
        primaryCta={{
          label: 'DISCOVER GIZZ DODO',
          href: '/gizz-dodo',
        }}
        secondaryCta={{
          label: 'VIEW OUR MENU',
          href: '/menu',
        }}
        overlayOpacityClass="bg-[#23140C]/70"
      />

      {/* 2. PROMINENT GIZZ DODO SPOTLIGHT */}
      <section className="py-16 sm:py-20 bg-[#FDF8F0] border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Visual Showcase of Gizz Dodo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#EADCCE] bg-[#3A2012] shadow-xl group">
                <img
                  src={BUSINESS_CONFIG.assets.gizzdodoPanoramic}
                  alt="Freshly simmered pan of chopped gizzard and sweet chopped plantain dodo"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 left-4 bg-[#23140C]/85 backdrop-blur-md border border-[#54321D] px-3.5 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Flagship Specialty</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#EA580C] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-md">
                  ₦{signatureItem.price?.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Right Column: Clear Product Explanation */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest mb-2">
                Our Current Star Dish
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] tracking-tight">
                The Gizz Dodo <span className="text-[#EA580C]">Standard</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#3A2012]/85 leading-relaxed">
                At <strong className="text-[#23140C]">MR FUN FOOD REPUBLIC HUB</strong>, our primary culinary obsession
                is perfection in every bite of Gizz Dodo.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white border border-[#EADCCE] shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-[#EA580C]" />
                  <h3 className="font-display text-sm font-bold text-[#23140C]">
                    Gizz Dodo = Chopped Gizzard + Chopped Plantain
                  </h3>
                </div>
                <p className="text-xs text-[#54321D] leading-relaxed">
                  Tender chicken gizzard pieces carefully chopped, braised, and lightly crisped, paired with golden sweet
                  ripe plantain cubes, all tossed in a savory scotch bonnet and red bell pepper reduction.
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Chopped tender gizzards cooked with fragrant herbs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Naturally sweet ripe plantains fried to golden caramelization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Slow-simmered pepper and onion sauce that harmonizes every bite</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/gizz-dodo"
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Explore Gizz Dodo Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    addItem(signatureItem, 1);
                    setIsCartOpen(true);
                  }}
                  className="px-5 py-3.5 text-xs sm:text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl transition-all"
                >
                  Order Gizz Dodo Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PILLARS: PASSION, FRESHNESS & PROFESSIONAL SERVICE */}
      <section className="py-16 sm:py-20 bg-[#FAF3E7] border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] mt-1">
              Food Made With <span className="text-[#EA580C]">Passion</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#3A2012]/80">
              MR FUN FOOD REPUBLIC HUB unites authentic Nigerian taste with uncompromising quality, spotless kitchen
              hygiene, and respectful customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#23140C]">100% Authentic Flavour</h3>
                <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                  Cooked using authentic native seasoning techniques and fresh scotch bonnets to preserve true culinary
                  identity.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#23140C]">Daily Fresh Ingredients</h3>
                <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                  Only the freshest sweet ripe plantains, quality meats, and crisp vegetables make it to our cutting board.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#23140C]">Cleanliness &amp; Hygiene</h3>
                <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                  Prepared in an inspected, modern kitchen environment with sealed food-grade packaging for every customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HONEST FUTURE EXPANSION ROADMAP */}
      <section className="py-14 bg-[#FDF8F0] border-b border-[#EADCCE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#EA580C]" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#EA580C] bg-[#EA580C]/10 px-2.5 py-0.5 rounded-full mb-1">
                Culinary Development
              </div>
              <h3 className="font-display text-lg font-bold text-[#23140C]">
                Future Offering: Authentic Coconut Rice
              </h3>
              <p className="text-xs text-[#54321D] mt-1 leading-relaxed">
                As MR FUN FOOD REPUBLIC HUB expands, our kitchen is perfecting our signature Coconut Rice recipe.
                Look forward to this upcoming addition once culinary testing is complete!
              </p>
            </div>
            <Link
              to="/menu"
              className="px-4 py-2 text-xs font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl whitespace-nowrap transition-colors"
            >
              See Current Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="py-16 bg-[#23140C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight uppercase">
            Tastier Than Ever!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F5EBE1]">
            Experience authentic Gizz Dodo from MR FUN FOOD REPUBLIC HUB today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            <Link
              to="/menu"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-md transition-all"
            >
              Order Online
            </Link>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello MR FUN FOOD REPUBLIC HUB! I would like to order Gizz Dodo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#23140C] bg-white hover:bg-[#F5EBE1] rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-[#EA580C]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
