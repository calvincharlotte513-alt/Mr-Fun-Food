import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Sparkles, MessageCircle, Utensils, CheckCircle2, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CulinaryMarquee } from '../components/CulinaryMarquee';
import { GizzDodoRatioExplorer } from '../components/GizzDodoRatioExplorer';
import { TastingBoxSelector } from '../components/TastingBoxSelector';
import { SmartImage } from '../components/SmartImage';
import { BUSINESS_CONFIG, CURRENT_MENU_ITEMS, UPCOMING_MENU_ITEMS } from '../data/config';
import { useCart } from '../context/CartContext';

export const HomePage: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const signatureItem = CURRENT_MENU_ITEMS[0];

  return (
    <div className="bg-[#FDF8F0] selection:bg-[#EA580C] selection:text-white">
      {/* 1. MANDATORY HERO SECTION WITH OFFICIAL CHEF BACKGROUND IMAGE */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.chef}
        badgeText="Official Home of Mr Fun GizzDODO"
        archiveNumber="ARCHIVE N° 01 · LAGOS"
        title="MR FUN FOOD REPUBLIC HUB"
        highlightedTitlePart="Tastier Than Ever!"
        subtitle="The definitive Nigerian gastronomy experience. Slow-braised tender gizzards, golden caramelized plantains, and fire-simmered scotch bonnet reduction."
        primaryCta={{
          label: 'EXPLORE GIZZ DODO ARCHIVE',
          href: '/gizz-dodo',
        }}
        secondaryCta={{
          label: 'VIEW ALL SELECTIONS',
          href: '/menu',
        }}
      />

      {/* 2. INFINITE KINETIC MARQUEE TICKER */}
      <CulinaryMarquee theme="dark" />

      {/* 3. THE WOK THEATER: ANATOMY OF GIZZ DODO (INTERACTIVE ARCHITECTURE) */}
      <GizzDodoRatioExplorer />

      {/* 4. THE PROMINENT FLAGSHIP SPOTLIGHT WITH SENSORY DEPTH */}
      <section className="py-20 sm:py-28 bg-[#FDF8F0] border-b border-[#EADCCE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Showcase of Gizz Dodo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EADCCE] bg-[#23140C] shadow-2xl group">
                <SmartImage
                  src={BUSINESS_CONFIG.assets.gizzdodoPanoramic}
                  alt="Freshly simmered pan of chopped gizzard and sweet chopped plantain dodo"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-104"
                />

                {/* Floating Stamp Badge */}
                <div className="absolute top-5 left-5 bg-[#160B06]/90 backdrop-blur-md border border-[#3A2012] px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 shadow-lg">
                  <Flame className="w-4 h-4 text-[#EA580C]" />
                  <span>SIGNATURE MASTERWORK</span>
                </div>

                <div className="absolute bottom-5 right-5 bg-[#EA580C] text-white px-5 py-2 rounded-2xl text-sm font-black shadow-xl tabular-nums">
                  ₦{signatureItem.price?.toLocaleString()}
                </div>
              </div>

              {/* Floating Decorative Stamp */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white border-2 border-[#EA580C] rounded-2xl p-4 shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display text-xs font-black uppercase text-[#23140C]">100% Guaranteed</p>
                  <p className="text-[11px] text-[#8C5D3E] font-medium">Tastier Than Ever</p>
                </div>
              </div>
            </div>

            {/* Right Column: Clear Product Explanation & Story */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4" />
                <span>CRAFTED IN LEKKI, LAGOS</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#23140C] tracking-tight uppercase leading-[1.05]">
                The Gold Standard of <span className="text-[#EA580C]">Gizz Dodo</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#3A2012]/85 leading-relaxed">
                At <strong className="text-[#23140C]">MR FUN FOOD REPUBLIC HUB</strong>, we treat Gizz Dodo not as a side dish, but as the pinnacle of Nigerian comfort cuisine.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-white border border-[#EADCCE] shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <Utensils className="w-5 h-5 text-[#EA580C]" />
                  <h3 className="font-display text-base font-bold text-[#23140C]">
                    The Equation: Chopped Gizzard + Sweet Dodo + Pepper Glaze
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#54321D] leading-relaxed">
                  Tender chicken gizzard pieces carefully chopped, slow-braised, and lightly wok-crisped, paired with golden sweet ripe plantain cubes, all tossed in a fragrant scotch bonnet and red bell pepper reduction.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#54321D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Chopped tender gizzards braised with fragrant rosemary, thyme & garlic</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#54321D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Naturally sweet ripe plantains fried to golden bronze caramelization</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#54321D]">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>Slow-simmered tatashe & ata rodo sauce that coats every single bite</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    addItem(signatureItem, 1);
                    setIsCartOpen(true);
                  }}
                  className="px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Order Flagship Gizz Dodo
                </button>
                <Link
                  to="/gizz-dodo"
                  className="px-6 py-4 text-xs sm:text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore 4 Recipes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TASTING BOX CUSTOMIZER */}
      <TastingBoxSelector />

      {/* 6. THE SENSORY FLAVOR CHEMISTRY MATRIX */}
      <section className="py-20 bg-[#FAF3E7] border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest block mb-2">
              Sensory Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] tracking-tight uppercase">
              Why Gizz Dodo Is Unrivaled
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#54321D]">
              A precise culinary balance of four fundamental taste sensations designed to ignite the palate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#EADCCE] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#EA580C] block mb-2">01 · UMAMI</span>
              <h3 className="font-display text-lg font-bold text-[#23140C]">Savory Depth</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Tender chicken gizzard juices slow-braised with native aromatics produce deep, savory natural umami.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EADCCE] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#EA580C] block mb-2">02 · SWEETNESS</span>
              <h3 className="font-display text-lg font-bold text-[#23140C]">Golden Dodo Fructose</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Naturally matured ripe plantains fried to golden perfection create a honeyed counterbalance to spice.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EADCCE] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#EA580C] block mb-2">03 · CAPSICUM</span>
              <h3 className="font-display text-lg font-bold text-[#23140C]">Ata Rodo Fire</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Fresh scotch bonnets provide an invigorating pepper heat that awakens every tastebud without masking flavour.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EADCCE] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#EA580C] block mb-2">04 · AROMA</span>
              <h3 className="font-display text-lg font-bold text-[#23140C]">Sautéed Onion Essence</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Sweet red and white onions sizzled in high-heat woks fuse all elements into a unified golden perfume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING WHATSAPP DISPATCH CALL TO ACTION */}
      <section className="py-20 bg-[#160B06] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#EA580C]/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Flame className="w-10 h-10 text-[#EA580C] mx-auto mb-4 animate-bounce" />
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Hungry Yet? Your Next Meal Is Sizzling.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D4C3B3] max-w-xl mx-auto leading-relaxed">
            Order your steaming pack of Mr Fun GizzDODO right now. Prepared fresh, sealed tamper-proof, and delivered straight to your door across Lagos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello MR FUN FOOD REPUBLIC HUB! I would like to order Gizz Dodo right now.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-2xl transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Order ({BUSINESS_CONFIG.phone})</span>
            </a>
            <Link
              to="/menu"
              className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#23140C] bg-[#F4EAD9] hover:bg-white rounded-xl transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
