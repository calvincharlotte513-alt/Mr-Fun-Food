import React, { useState } from 'react';
import { Plus, MessageCircle, Flame, Check, Sparkles, Users, Scale, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, TASTING_PACKS, TastingPack } from '../data/config';
import { useCart } from '../context/CartContext';
import { SmartImage } from './SmartImage';

export const TastingBoxSelector: React.FC = () => {
  const [selectedPackId, setSelectedPackId] = useState<string>('pack-feast');
  const [selectedHeat, setSelectedHeat] = useState<string>('Signature Lagos Heat');
  const { addItem, setIsCartOpen } = useCart();

  const activePack = TASTING_PACKS.find((p) => p.id === selectedPackId) || TASTING_PACKS[1];

  const handleAddToCart = () => {
    // Map tasting pack to MenuItem structure
    addItem(
      {
        id: activePack.id,
        name: `${activePack.name} (${selectedHeat})`,
        category: 'gizz-dodo',
        description: `${activePack.description} [Heat: ${selectedHeat}]`,
        price: activePack.price,
        image: activePack.image,
        isAvailable: true,
        portionDetails: `${activePack.serves} · ${activePack.weight}`,
        ingredients: ['Chopped Chicken Gizzard', 'Sweet Ripe Dodo', 'Signature Pepper Glaze'],
      },
      1
    );
    setIsCartOpen(true);
  };

  const generateWhatsAppOrderUrl = () => {
    const text = `Hello MR FUN FOOD REPUBLIC HUB! I would like to order:
• Item: ${activePack.name} (₦${activePack.price.toLocaleString()})
• Size: ${activePack.weight} (${activePack.serves})
• Heat: ${selectedHeat}
Please confirm delivery timing to my address!`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FDF8F0] border-b border-[#EADCCE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOMIZE YOUR TASTING PACK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#23140C] tracking-tight uppercase">
            Curate Your <span className="text-[#EA580C]">Gizz Dodo Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#54321D] leading-relaxed">
            Freshly prepared to order, insulated in heat-preserving foil cartons, and dispatched steaming hot.
          </p>
        </div>

        {/* 3 Pack Cards Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TASTING_PACKS.map((pack) => {
            const isSelected = pack.id === selectedPackId;
            return (
              <div
                key={pack.id}
                onClick={() => setSelectedPackId(pack.id)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between border-2 relative ${
                  isSelected
                    ? 'bg-white border-[#EA580C] shadow-2xl shadow-[#EA580C]/15 -translate-y-1.5'
                    : 'bg-[#FAF3E7] border-[#EADCCE] hover:border-[#8C5D3E] hover:bg-white shadow-xs'
                }`}
              >
                {/* Popular or size badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isSelected
                        ? 'bg-[#EA580C] text-white'
                        : 'bg-[#EADCCE] text-[#23140C]'
                    }`}
                  >
                    {pack.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C5D3E]">
                    <Users className="w-3.5 h-3.5" />
                    <span>{pack.serves}</span>
                  </div>
                </div>

                {/* Pack Image with SmartImage */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#23140C]">
                  <SmartImage
                    src={pack.image}
                    alt={pack.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2.5 right-2.5 bg-[#160B06]/85 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Scale className="w-3 h-3 text-[#EA580C]" />
                    <span>{pack.weight}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-[#23140C]">
                    {pack.name}
                  </h3>
                  <p className="font-display text-2xl sm:text-3xl font-black text-[#EA580C] mt-1 tabular-nums">
                    ₦{pack.price.toLocaleString()}
                  </p>

                  <p className="text-xs sm:text-sm text-[#54321D] mt-3 leading-relaxed">
                    {pack.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#EADCCE]/60 space-y-2">
                    {pack.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#3A2012]">
                        <Check className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selection indicator button */}
                <div className="mt-6 pt-4 border-t border-[#EADCCE]">
                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                      isSelected
                        ? 'bg-[#23140C] text-white'
                        : 'bg-[#F5EBE1] text-[#23140C] hover:bg-[#EADCCE]'
                    }`}
                  >
                    {isSelected ? '✓ Selected Pack' : 'Select Pack'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pack Action Console */}
        <div className="bg-[#23140C] text-white rounded-3xl p-6 sm:p-10 border border-[#3A2012] shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#EA580C] block">
              Step 2: Choose Heat Level For Your {activePack.name}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {['Mellow Lagos Heat', 'Signature Lagos Heat', 'Ata Rodo Firestorm 🔥'].map((heat) => (
                <button
                  key={heat}
                  type="button"
                  onClick={() => setSelectedHeat(heat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedHeat === heat
                      ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-lg shadow-[#EA580C]/25'
                      : 'bg-[#160B06] text-[#D4C3B3] border-[#3A2012] hover:text-white'
                  }`}
                >
                  {heat}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#F4EAD9]/70 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Prepared fresh in Lekki Phase 1 kitchen · Estimated prep: 20–30 mins</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleAddToCart}
              className="px-6 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#23140C] bg-[#F4EAD9] hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#EA580C]" />
              <span>Add To Bag · ₦{activePack.price.toLocaleString()}</span>
            </button>

            <a
              href={generateWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] transition-all shadow-xl shadow-[#EA580C]/20 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
