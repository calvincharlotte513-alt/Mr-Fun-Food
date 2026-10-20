import React, { useState } from 'react';
import { Plus, Flame, CheckCircle2, MessageCircle, Utensils, Sparkles, ChefHat, GlassWater, ShieldCheck, Heart } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CulinaryMarquee } from '../components/CulinaryMarquee';
import { SmartImage } from '../components/SmartImage';
import { BUSINESS_CONFIG, CURRENT_MENU_ITEMS, GIZZ_DODO_RECIPES, TASTING_PACKS } from '../data/config';
import { useCart } from '../context/CartContext';

export const GizzDodoPage: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const signatureGizzDodo = CURRENT_MENU_ITEMS[0];
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'spicy' | 'nutty' | 'tropical'>('all');

  const handleOrder = (item = signatureGizzDodo) => {
    addItem(item, 1);
    setIsCartOpen(true);
  };

  const handleOrderRecipe = (recipe: (typeof GIZZ_DODO_RECIPES)[0]) => {
    addItem(
      {
        id: recipe.id,
        name: recipe.title,
        category: 'gizz-dodo',
        description: `${recipe.subtitle}. ${recipe.description}`,
        price: recipe.price,
        image: recipe.image,
        isAvailable: true,
        portionDetails: 'Prepared Recipe Pack',
        ingredients: ['Chopped Chicken Gizzard', 'Sweet Caramelized Dodo', recipe.culinaryHighlight],
      },
      1
    );
    setIsCartOpen(true);
  };

  return (
    <div className="bg-[#FDF8F0] selection:bg-[#EA580C] selection:text-white">
      {/* 1. DEDICATED GIZZ DODO HERO WITH PANORAMIC FOOD BACKGROUND */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.gizzdodoPanoramic}
        badgeText="Our Flagship Specialty"
        archiveNumber="RECIPE COLLECTION · VOL. 1"
        title="THE GIZZ DODO EXPERIENCE"
        highlightedTitlePart="Bold & Irresistible"
        subtitle="Chopped tender chicken gizzards and sweet caramelized plantains tossed in a fragrant, savory scotch bonnet and onion glaze."
        primaryCta={{
          label: `ORDER SIGNATURE PACK · ₦${signatureGizzDodo.price?.toLocaleString()}`,
          onClick: () => handleOrder(signatureGizzDodo),
        }}
        secondaryCta={{
          label: 'CHAT ON WHATSAPP',
          href: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
            'Hello MR FUN FOOD REPUBLIC HUB! I would like to order the signature Gizz Dodo.'
          )}`,
        }}
      />

      {/* 2. INFINITE KINETIC MARQUEE TICKER */}
      <CulinaryMarquee theme="orange" />

      {/* 3. THE ANATOMY OF GIZZ DODO */}
      <section className="py-20 sm:py-24 border-b border-[#EADCCE] bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
              The Fundamental Core
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#23140C] uppercase tracking-tight">
              Chopped Gizzard + Chopped Plantain
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3A2012]/80 leading-relaxed">
              A celebrated Nigerian culinary masterpiece born from the exquisite contrast of tender braised poultry and sweet caramelized dodo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-[#EADCCE] p-8 shadow-xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-5 group-hover:scale-110 transition-transform">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#EA580C] uppercase">ELEMENT 01</span>
              <h3 className="font-display text-xl font-bold text-[#23140C] mt-1">Chopped Gizzard</h3>
              <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                Fresh chicken gizzards carefully cleaned, braised with native aromatics until tender, and pan-seared to yield a firm, savory bite.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#EADCCE] p-8 shadow-xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#EA580C] uppercase">ELEMENT 02</span>
              <h3 className="font-display text-xl font-bold text-[#23140C] mt-1">Chopped Plantain (Dodo)</h3>
              <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                Naturally ripened sweet plantains cubed into bite-sized morsels and fried to golden bronze caramelization for honeyed sweetness.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#EADCCE] p-8 shadow-xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#EA580C] uppercase">ELEMENT 03</span>
              <h3 className="font-display text-xl font-bold text-[#23140C] mt-1">Rich Pepper Glaze</h3>
              <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                Sautéed red peppers, scotch bonnets, and sweet onions bound together in a fragrant, clinging glaze that brings harmony to every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE GRAND ATELIER OF GIZZ DODO RECIPES (4 VARIATIONS) */}
      <section id="recipes" className="py-20 sm:py-28 bg-[#FAF3E7] border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#EADCCE]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-widest mb-2">
                <ChefHat className="w-4 h-4" />
                <span>MR FUN RECIPE ARCHIVE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#23140C] tracking-tight uppercase">
                Gizz Dodo <span className="text-[#EA580C]">Recipes</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#54321D] max-w-md">
              Four distinctive culinary expressions celebrating chopped tender gizzard and sweet caramelized plantain through artfully balanced seasoning.
            </p>
          </div>

          {/* 4 Recipe Variation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {GIZZ_DODO_RECIPES.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl border-2 border-[#EADCCE] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image with High-Fidelity Photography & Badge */}
                  <div className="relative aspect-[4/3] w-full bg-[#23140C] overflow-hidden">
                    <SmartImage
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    />

                    {/* Clean Tag */}
                    <div className="absolute top-4 left-4 bg-[#160B06]/90 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5 border border-white/10 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>{recipe.badge}</span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 bg-[#EA580C] text-white px-4 py-1.5 rounded-xl text-xs font-black shadow-lg">
                      ₦{recipe.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider">
                        RECIPE VARIATION
                      </span>
                      {/* Heat Rating Meter */}
                      <div className="flex items-center gap-1" title={`Heat level: ${recipe.heatLevel} of 5`}>
                        <span className="text-[10px] font-bold text-[#8C5D3E] uppercase mr-1">Heat:</span>
                        {[1, 2, 3, 4, 5].map((flame) => (
                          <Flame
                            key={flame}
                            className={`w-3.5 h-3.5 ${
                              flame <= recipe.heatLevel ? 'text-[#EA580C] fill-[#EA580C]' : 'text-[#EADCCE]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#23140C] mt-1 group-hover:text-[#EA580C] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-xs font-bold text-[#EA580C] mt-0.5">
                      {recipe.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#54321D] mt-4 leading-relaxed">
                      {recipe.description}
                    </p>

                    {/* Texture and Chef Secret Note */}
                    <div className="mt-5 space-y-2.5 pt-4 border-t border-[#F5EBE1]">
                      <div className="p-3 rounded-xl bg-[#FAF3E7] border border-[#EADCCE] text-xs">
                        <span className="font-bold text-[#23140C] block text-[10px] uppercase tracking-wider mb-0.5">
                          Texture & Mouthfeel:
                        </span>
                        <p className="text-[#54321D]">{recipe.crunchLevel}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#F5EBE1] border border-[#EADCCE] text-xs">
                        <span className="font-bold text-[#EA580C] block text-[10px] uppercase tracking-wider mb-0.5 flex items-center gap-1">
                          <GlassWater className="w-3.5 h-3.5" />
                          Recommended Drink Pairing:
                        </span>
                        <p className="text-[#23140C] font-semibold">{recipe.pairingDrink}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action: Dual Buttons */}
                <div className="p-7 sm:p-8 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleOrderRecipe(recipe)}
                    className="py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add To Bag</span>
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello MR FUN FOOD REPUBLIC HUB! I would like to order the ${recipe.title} (₦${recipe.price.toLocaleString()}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 text-xs font-bold text-[#23140C] hover:text-[#EA580C] bg-[#F5EBE1] hover:bg-white border border-[#EADCCE] rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EA580C]" />
                    <span>WhatsApp Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AVAILABLE GIZZ DODO ORDER PACKS */}
      <section className="py-20 bg-[#FDF8F0] border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest block mb-2">
              Ready-To-Order Sizes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] uppercase tracking-tight">
              Standard Prepared Packs
            </h2>
            <p className="text-xs sm:text-sm text-[#3A2012]/80 mt-1">
              Freshly prepared to order, securely sealed in tamper-proof containers, and delivered steaming hot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CURRENT_MENU_ITEMS.map((pack) => (
              <div
                key={pack.id}
                className="bg-white rounded-3xl border-2 border-[#EADCCE] overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#23140C] overflow-hidden">
                    <SmartImage
                      src={pack.image}
                      alt={pack.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#160B06]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                      {pack.portionDetails}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-[#23140C]">{pack.name}</h3>
                      <span className="font-display text-xl font-black text-[#EA580C] tabular-nums shrink-0">
                        ₦{pack.price?.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#F5EBE1]">
                      <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider block mb-1.5">
                        Ingredients:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pack.ingredients.map((ing, i) => (
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

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => handleOrder(pack)}
                    className="w-full py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add To Bag · ₦{pack.price?.toLocaleString()}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
