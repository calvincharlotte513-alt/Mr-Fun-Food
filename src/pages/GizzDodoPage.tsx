import React from 'react';
import { Plus, Flame, CheckCircle2, MessageCircle, Utensils, Sparkles, ChefHat } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BUSINESS_CONFIG, CURRENT_MENU_ITEMS, GIZZ_DODO_RECIPES } from '../data/config';
import { useCart } from '../context/CartContext';

export const GizzDodoPage: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const signatureGizzDodo = CURRENT_MENU_ITEMS[0];

  const handleOrder = (item = signatureGizzDodo) => {
    addItem(item, 1);
    setIsCartOpen(true);
  };

  return (
    <div className="bg-[#FDF8F0]">
      {/* 1. DEDICATED GIZZ DODO HERO WITH PANORAMIC FOOD BACKGROUND */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.gizzdodoPanoramic}
        badgeText="Our Flagship Specialty"
        title="THE GIZZ DODO EXPERIENCE"
        highlightedTitlePart="Bold &amp; Irresistible"
        subtitle="Chopped tender gizzard and sweet caramelized plantain tossed in a savory, aromatic pepper sauce."
        primaryCta={{
          label: `ORDER GIZZ DODO NOW · ₦${signatureGizzDodo.price?.toLocaleString()}`,
          onClick: () => handleOrder(signatureGizzDodo),
        }}
        secondaryCta={{
          label: 'CHAT ON WHATSAPP',
          href: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
            'Hello MR FUN FOOD REPUBLIC HUB! I would like to order the signature Gizz Dodo.'
          )}`,
        }}
        overlayOpacityClass="bg-[#23140C]/75"
      />

      {/* 2. THE ANATOMY OF GIZZ DODO */}
      <section className="py-16 sm:py-20 border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest">
              What Is Gizz Dodo?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] mt-1">
              Chopped Gizzard + Chopped Plantain
            </h2>
            <p className="mt-2 text-sm text-[#3A2012]/80 leading-relaxed">
              A beloved Nigerian culinary masterpiece, celebrated for the delicious contrast between savory, tender
              chicken gizzards and sweet, caramelized plantain cubes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-3">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-[#23140C]">1. Chopped Gizzard</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Fresh chicken gizzards carefully cleaned, braised with native aromatics until tender, and pan-seared to
                yield a firm, savory bite.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-[#23140C]">2. Chopped Plantain (Dodo)</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Naturally ripened sweet plantains cubed into bite-sized morsels and fried to golden bronze sweetness.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C] mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-[#23140C]">3. Rich Pepper Sauce</h3>
              <p className="text-xs text-[#54321D] mt-2 leading-relaxed">
                Sautéed red peppers, scotch bonnets, and sweet onions bound together in a fragrant glaze that coats every
                piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM GIZZ DODO RECIPES SECTION (NEW FEATURE) */}
      <section id="recipes" className="py-16 sm:py-24 bg-[#FAF3E7] border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest flex items-center gap-1.5">
              <ChefHat className="w-4 h-4" />
              <span>Gizz Dodo Variations</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#23140C] tracking-tight mt-1">
              Gizz Dodo <span className="text-[#EA580C]">Recipes</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3A2012]/80 leading-relaxed">
              Explore the diverse culinary expressions of our signature dish. Each variation celebrates chopped
              tender gizzard and sweet caramelized plantain through distinct, artfully balanced seasoning.
            </p>
          </div>

          {/* 4 Recipe Variation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {GIZZ_DODO_RECIPES.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl border border-[#EADCCE] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image with High-Fidelity Photography & Badge */}
                  <div className="relative aspect-[4/3] w-full bg-[#3A2012] overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />

                    {/* Clean Tag */}
                    <div className="absolute top-3.5 left-3.5 bg-[#23140C]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#EA580C]" />
                      <span>{recipe.badge}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider block">
                      MR FUN RECIPE VARIATION
                    </span>
                    <h3 className="font-display text-2xl font-black text-[#23140C] mt-0.5 group-hover:text-[#EA580C] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C5D3E] mt-0.5">
                      {recipe.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                      {recipe.description}
                    </p>

                    {/* Culinary Highlight Pill */}
                    <div className="mt-4 pt-3 border-t border-[#F5EBE1]">
                      <div className="text-[11px] text-[#23140C] font-medium bg-[#FAF3E7] p-2.5 rounded-lg border border-[#EADCCE]">
                        <span className="font-bold text-[#EA580C] block text-[10px] uppercase tracking-wider mb-0.5">
                          Flavour Profile:
                        </span>
                        {recipe.culinaryHighlight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello MR FUN FOOD REPUBLIC HUB! I would like to inquire about ordering the ${recipe.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-[#23140C] hover:text-white bg-[#F5EBE1] hover:bg-[#EA580C] border border-[#EADCCE] hover:border-transparent rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EA580C] group-hover:text-white" />
                    <span>Inquire / Order {recipe.title} via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AVAILABLE GIZZ DODO ORDER PACKS */}
      <section className="py-16 sm:py-20 bg-[#FDF8F0] border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest">
              Standard Prepared Packs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] mt-1">
              Select Your Gizz Dodo Pack
            </h2>
            <p className="text-xs sm:text-sm text-[#3A2012]/80 mt-1">
              Freshly prepared to order, securely packed, and delivered steaming hot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CURRENT_MENU_ITEMS.map((pack) => (
              <div
                key={pack.id}
                className="bg-white rounded-2xl border border-[#EADCCE] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#3A2012] overflow-hidden">
                    <img
                      src={pack.image}
                      alt={pack.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#23140C]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                      {pack.portionDetails}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-[#23140C]">{pack.name}</h3>
                      <span className="font-display text-lg font-black text-[#EA580C] tabular-nums shrink-0">
                        ₦{pack.price?.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#54321D] mt-2 leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F5EBE1]">
                      <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider block mb-1">
                        Ingredients:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pack.ingredients.map((ing, i) => (
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

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleOrder(pack)}
                    className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag · ₦{pack.price?.toLocaleString()}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHATSAPP DIRECT ORDER CALLOUT */}
      <section className="py-14 bg-[#23140C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase">
            Order On WhatsApp
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#D4C3B3]">
            Chat directly with our kitchen dispatch team to place your order with fast delivery.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              'Hello MR FUN FOOD REPUBLIC HUB! I want to order Gizz Dodo.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#23140C] bg-white hover:bg-[#F5EBE1] rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#EA580C]" />
            <span>Chat On WhatsApp ({BUSINESS_CONFIG.phone})</span>
          </a>
        </div>
      </section>
    </div>
  );
};
