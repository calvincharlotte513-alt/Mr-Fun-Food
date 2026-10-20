import React from 'react';
import { Plus, Sparkles, Clock, Check, MessageCircle, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BUSINESS_CONFIG, CURRENT_MENU_ITEMS, UPCOMING_MENU_ITEMS } from '../data/config';
import { useCart } from '../context/CartContext';

export const MenuPage: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();

  const handleAddToCart = (item: (typeof CURRENT_MENU_ITEMS)[0]) => {
    addItem(item, 1);
    setIsCartOpen(true);
  };

  return (
    <div className="bg-[#FDF8F0]">
      {/* 1. DEDICATED MENU HERO WITH UNIQUE BACKGROUND IMAGE */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.menuBackdrop}
        badgeText="Fresh Kitchen Selections"
        title="OUR CURRENT MENU"
        highlightedTitlePart="Authentic &amp; Fresh"
        subtitle="We focus on culinary mastery, starting with our celebrated flagship Gizz Dodo prepared fresh to order."
        primaryCta={{
          label: 'ORDER VIA WHATSAPP',
          href: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
            'Hello MR FUN FOOD REPUBLIC HUB! I would like to place a food order.'
          )}`,
        }}
        overlayOpacityClass="bg-[#23140C]/75"
      />

      {/* 2. CURRENT ACTIVE OFFERINGS (GIZZ DODO) */}
      <section className="py-16 sm:py-20 border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#EADCCE]">
            <div>
              <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest">
                Available To Order Today
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#23140C] mt-1">
                Gizz Dodo Selections
              </h2>
            </div>
            <p className="text-xs text-[#54321D] max-w-sm">
              Chopped tender chicken gizzard cubes and sweet ripe fried plantains tossed in rich savory pepper gravy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CURRENT_MENU_ITEMS.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl border border-[#EADCCE] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#3A2012] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#23140C]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#EA580C]" />
                      <span>Ready to Order</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 text-[#23140C] text-sm font-bold px-3.5 py-1.5 rounded-lg shadow-xs tabular-nums">
                      ₦{dish.price?.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-[#23140C]">{dish.name}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#54321D] mt-2 leading-relaxed">
                      {dish.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F5EBE1]">
                      <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider block mb-1">
                        Ingredients Profile:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dish.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#FAF3E7] text-[#3A2012] px-2 py-0.5 rounded-md border border-[#EADCCE]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(dish)}
                    className="flex-1 py-3 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag (₦{dish.price?.toLocaleString()})</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello! I would like to order: ${dish.name} (₦${dish.price?.toLocaleString()})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl text-[#23140C] flex items-center justify-center transition-colors"
                    title="Order via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EA580C]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FUTURE OFFERINGS SECTION (HONEST & SUBTLE) */}
      <section className="py-16 sm:py-20 bg-[#FAF3E7] border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest">
              Culinary Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#23140C] mt-1">
              Upcoming Additions (Coming Soon)
            </h2>
            <p className="text-xs sm:text-sm text-[#54321D] mt-1">
              We uphold strict standards: each new meal undergoes meticulous recipe refinement before public release.
              Here is what our culinary team is currently perfecting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl">
            {UPCOMING_MENU_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#EADCCE] overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#3A2012] overflow-hidden opacity-90">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#23140C]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#EA580C]" />
                      <span>{item.statusText}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-[#23140C]">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-[#54321D] mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F5EBE1]">
                      <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider block mb-1">
                        Recipe In Development:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#FAF3E7] text-[#54321D] px-2 py-0.5 rounded-md border border-[#EADCCE]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 rounded-xl bg-[#FAF3E7] border border-[#EADCCE] text-center">
                    <span className="text-xs font-bold text-[#8C5D3E]">
                      Not yet available for order · Launching soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PACKAGING & DISPATCH STANDARDS */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-[#23140C]">
            Safe, Steaming &amp; Tamper-Evident Packaging
          </h3>
          <p className="text-xs sm:text-sm text-[#54321D] max-w-md mx-auto mt-1">
            Every Gizz Dodo meal is packed hot into food-grade, leak-resistant containers with security seals.
          </p>
        </div>
      </section>
    </div>
  );
};
