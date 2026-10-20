import React, { useState } from 'react';
import { Plus, Sparkles, Clock, Check, MessageCircle, ShieldCheck, Flame, Users, Calendar, GlassWater } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CulinaryMarquee } from '../components/CulinaryMarquee';
import { SmartImage } from '../components/SmartImage';
import { BUSINESS_CONFIG, CURRENT_MENU_ITEMS, GIZZ_DODO_RECIPES, UPCOMING_MENU_ITEMS } from '../data/config';
import { useCart } from '../context/CartContext';

export const MenuPage: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const [guestCount, setGuestCount] = useState<number>(50);

  const handleAddToCart = (item: (typeof CURRENT_MENU_ITEMS)[0]) => {
    addItem(item, 1);
    setIsCartOpen(true);
  };

  const handleAddRecipeToCart = (recipe: (typeof GIZZ_DODO_RECIPES)[0]) => {
    addItem(
      {
        id: recipe.id,
        name: recipe.title,
        category: 'gizz-dodo',
        description: recipe.description,
        price: recipe.price,
        image: recipe.image,
        isAvailable: true,
        portionDetails: 'Prepared Recipe Pack',
        ingredients: ['Chopped Chicken Gizzard', 'Sweet Ripe Dodo', recipe.culinaryHighlight],
      },
      1
    );
    setIsCartOpen(true);
  };

  // Catering Estimations
  const estimatedFeastPacks = Math.ceil(guestCount / 2.5);
  const estimatedOwambeTrays = Math.ceil(guestCount / 7);

  return (
    <div className="bg-[#FDF8F0] selection:bg-[#EA580C] selection:text-white">
      {/* 1. DEDICATED MENU HERO WITH UNIQUE BACKGROUND IMAGE */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.menuBackdrop}
        badgeText="Fresh Kitchen Selections"
        archiveNumber="CATALOGUE · 2026 EDITION"
        title="OUR CURRENT MENU"
        highlightedTitlePart="Authentic & Steaming"
        subtitle="Every plate is prepared fresh to order in our high-heat woks. Explore our flagship Gizz Dodo selections, recipe variations, and party trays."
        primaryCta={{
          label: 'ORDER VIA WHATSAPP',
          href: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
            'Hello MR FUN FOOD REPUBLIC HUB! I would like to place a food order.'
          )}`,
        }}
        secondaryCta={{
          label: 'EXPLORE PARTY CATERING',
          href: '#catering',
        }}
      />

      {/* 2. INFINITE KINETIC MARQUEE TICKER */}
      <CulinaryMarquee theme="dark" />

      {/* 3. CURRENT ACTIVE OFFERINGS (GIZZ DODO PACKS) */}
      <section className="py-20 sm:py-24 border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#EADCCE]">
            <div>
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
                Available To Order Right Now
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] uppercase tracking-tight">
                Signature Gizz Dodo Packs
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#54321D] max-w-sm">
              Chopped tender chicken gizzard cubes and sweet ripe fried plantains tossed in rich savory pepper gravy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {CURRENT_MENU_ITEMS.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-3xl border-2 border-[#EADCCE] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#23140C] overflow-hidden">
                    <SmartImage
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#160B06]/90 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5 border border-white/10">
                      <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Ready to Order</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 text-[#23140C] text-sm font-black px-4 py-2 rounded-xl shadow-md tabular-nums">
                      ₦{dish.price?.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <h3 className="font-display text-2xl font-black text-[#23140C]">{dish.name}</h3>

                    <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                      {dish.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#F5EBE1]">
                      <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider block mb-2">
                        Ingredients Profile:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dish.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#FAF3E7] text-[#3A2012] px-2.5 py-1 rounded-lg border border-[#EADCCE]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(dish)}
                    className="flex-1 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello MR FUN FOOD REPUBLIC HUB! I would like to order: ${dish.name} (₦${dish.price?.toLocaleString()}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 text-xs sm:text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-white border border-[#EADCCE] rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EA580C]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 4 GIZZ DODO RECIPES ON MENU */}
      <section className="py-20 bg-[#FAF3E7] border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
              Culinary Atelier
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] uppercase tracking-tight">
              Gizz Dodo Recipe Variations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#54321D]">
              Choose your personal taste profile: Classic, Spicy, Groundnut, or Coconut Gizz Dodo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GIZZ_DODO_RECIPES.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl border border-[#EADCCE] p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#23140C] mb-4">
                    <SmartImage
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#160B06]/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {recipe.badge}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#23140C] group-hover:text-[#EA580C] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#EA580C] mt-0.5">{recipe.subtitle}</p>
                  <p className="font-display text-lg font-black text-[#23140C] mt-2">₦{recipe.price.toLocaleString()}</p>
                  <p className="text-xs text-[#54321D] mt-2 line-clamp-3 leading-relaxed">{recipe.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F5EBE1] flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleAddRecipeToCart(recipe)}
                    className="w-full py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello MR FUN FOOD REPUBLIC HUB! I would like to order the ${recipe.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 text-xs font-bold text-center text-[#23140C] hover:text-[#EA580C] transition-colors"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FUTURE INNOVATION VAULT (COCONUT RICE) */}
      <section className="py-20 border-b border-[#EADCCE] bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest block mb-2">
              The Innovation Kitchen
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#23140C] uppercase tracking-tight">
              Future Offerings In Development
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#54321D]">
              We continually refine and test new delicacies before official launch.
            </p>
          </div>

          {UPCOMING_MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border-2 border-dashed border-[#EADCCE] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs"
            >
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-[#23140C] shrink-0">
                <SmartImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover filter saturate-75 opacity-90"
                />
                <div className="absolute inset-0 bg-[#160B06]/40 flex items-center justify-center p-2 text-center">
                  <span className="bg-[#160B06]/90 text-[#F4EAD9] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                    IN PERFECTION
                  </span>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3E7] text-[#8C5D3E] text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.statusText}</span>
                </div>
                <h3 className="font-display text-2xl font-black text-[#23140C]">{item.name}</h3>
                <p className="text-xs sm:text-sm text-[#54321D] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OWAMBE & VIP PARTY CATERING CONCIERGE */}
      <section id="catering" className="py-20 sm:py-28 bg-[#160B06] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] block mb-2">
                Weddings · Birthdays · Corporate · Private Chef
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Owambe & VIP Party Catering
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#D4C3B3] leading-relaxed">
                Bring the legendary taste of Mr Fun GizzDODO to your next gathering. From live wok stations to steaming hot party platters, we feed your guests like royalty.
              </p>

              {/* Interactive Platter Calculator */}
              <div className="mt-8 p-6 rounded-3xl bg-[#23140C] border border-[#3A2012]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#EA580C]" />
                    Estimated Guest Count:
                  </span>
                  <span className="font-display text-2xl font-black text-[#EA580C]">
                    {guestCount} Guests
                  </span>
                </div>

                <input
                  type="range"
                  min="15"
                  max="300"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#EA580C] cursor-pointer"
                />

                <div className="mt-6 pt-5 border-t border-[#3A2012] grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-[#8C5D3E] uppercase text-[10px] font-bold">Recommended Feasts</p>
                    <p className="text-lg font-bold text-white mt-0.5">~{estimatedFeastPacks} Feast Packs</p>
                  </div>
                  <div>
                    <p className="text-[#8C5D3E] uppercase text-[10px] font-bold">Or Mega Trays</p>
                    <p className="text-lg font-bold text-[#EA580C] mt-0.5">~{estimatedOwambeTrays} Owambe Platters</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#23140C] to-[#1A0D07] rounded-3xl p-8 border-2 border-[#3A2012] shadow-2xl">
              <h3 className="font-display text-2xl font-black uppercase text-white">
                Request Catering Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#D4C3B3] mt-2">
                Chat directly with our executive chef and dispatch coordinator for custom quotes, tasting sessions, and event dates.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    `Hello MR FUN FOOD REPUBLIC HUB! I would like to book catering for approximately ${guestCount} guests.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire Catering via WhatsApp ({BUSINESS_CONFIG.phone})</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_CONFIG.cateringEmail}?subject=Catering Inquiry for ${guestCount} Guests`}
                  className="w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4C3B3] hover:text-white bg-[#160B06] hover:bg-[#2A160A] border border-[#3A2012] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Catering Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
