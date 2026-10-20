import React, { useState } from 'react';
import { Flame, Sparkles, Utensils, CheckCircle2, ChevronRight, Volume2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';
import { SmartImage } from './SmartImage';

export const GizzDodoRatioExplorer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [spiceLevel, setSpiceLevel] = useState<number>(2); // 1 = Mellow, 2 = Signature, 3 = Firestorm
  const [sizzleActive, setSizzleActive] = useState<boolean>(true);

  const layers = [
    {
      percentage: '45%',
      name: 'Tender Braised Chicken Gizzard',
      subtitle: 'Slow-poached in native stock, then flash-seared for succulent resistance',
      description:
        'We refuse shortcuts. Each chicken gizzard is hand-trimmed, washed in fresh citrus, and braised with garlic, thyme, and native aromatics for 75 minutes. The exterior catches a crisp wok char while the interior remains melt-in-the-mouth succulent.',
      accent: 'Umami · Collagen-Rich · Savory Chew',
      metrics: {
        tenderness: '98%',
        flavorInfusion: '95%',
        mouthfeel: 'Firm & Juicy',
      },
      tag: 'THE FOUNDATION',
    },
    {
      percentage: '35%',
      name: 'Caramelized Sweet Golden Dodo',
      subtitle: 'Naturally ripened plantain cubes browned to golden amber perfection',
      description:
        'Timing is an art. We only pick plantains at their sweet golden maturity spot — never hard and starchy, never overly mushy. Diced into perfect bite-sized cubes and flash-fried in small batches so natural fruit sugars caramelize into deep honeyed sweetness.',
      accent: 'Natural Fructose · Golden Crust · Velvety Core',
      metrics: {
        tenderness: '94%',
        flavorInfusion: '92%',
        mouthfeel: 'Caramelized & Sweet',
      },
      tag: 'THE SWEET CONTRAST',
    },
    {
      percentage: '15%',
      name: 'Fire-Simmered Tatashe & Ata Rodo Emulsion',
      subtitle: 'Coarse-crushed red bell peppers, scotch bonnet fire & caramelized onions',
      description:
        'The soul that binds the skillet together. Sweet tatashe peppers and fiery scotch bonnets are roughly crushed, then slow-simmered in cold-pressed oil with julienned red onions until the liquid reduces into a glossy, fragrant, cling-to-every-bite glaze.',
      accent: 'Smoky Sweetness · Capsaicin Glow · Aromatic Oil',
      metrics: {
        tenderness: '100%',
        flavorInfusion: '99%',
        mouthfeel: 'Rich & Glossy Glaze',
      },
      tag: 'THE MASTER GLAZE',
    },
    {
      percentage: '5%',
      name: 'Secret Chef Aromatics & Finishing Spark',
      subtitle: 'The private seasoning formulation of Mr Fun',
      description:
        'Just before coming off high heat, the wok is kissed with our proprietary spice blend, cracked sea salt, and a shower of crisp green scallions. This final burst locks in that unforgettable aroma that hits the senses the moment you open the container.',
      accent: 'Garden Freshness · Mineral Salt · Signature Perfume',
      metrics: {
        tenderness: '90%',
        flavorInfusion: '100%',
        mouthfeel: 'Crisp Finishing Kick',
      },
      tag: 'THE MAGIC SEAL',
    },
  ];

  const spiceDescriptions = [
    { level: 1, title: 'Lagos Mellow', subtitle: 'A gentle pepper warmth. Sweet plantain forward with a rounded savory hum.' },
    { level: 2, title: 'Signature Mr Fun', subtitle: 'The gold standard. Authentic Lagos scotch bonnet punch balanced perfectly with caramelized sweet dodo.' },
    { level: 3, title: 'Ata Rodo Firestorm', subtitle: 'For true pepper champions. Extra scotch bonnets, charred chili flakes, and intense wok sizzle.' },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#160B06] text-[#F4EAD9] overflow-hidden border-b border-[#3A2012]">
      {/* Background ambient glow rings */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#EA580C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#D97706]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#3A2012]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#EA580C] text-[11px] font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CULINARY ANATOMY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              The Golden Ratio of <span className="text-[#EA580C]">Gizz Dodo</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 lg:text-right">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8C5D3E] font-bold">Wok Status</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-white">385°F High Heat Sizzle</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSizzleActive(!sizzleActive)}
              className="p-2.5 rounded-xl bg-[#2A160A] border border-[#3A2012] text-[#EA580C] hover:bg-[#3A2012] transition-colors"
              title="Toggle Live Audio Visualizer"
              aria-label="Toggle Sizzle Visualizer"
            >
              <Volume2 className={`w-4 h-4 ${sizzleActive ? 'text-[#EA580C]' : 'text-stone-500'}`} />
            </button>
          </div>
        </div>

        {/* Audio Visualizer Graphic Sizzle Bar */}
        {sizzleActive && (
          <div className="mb-10 p-3 rounded-xl bg-[#23140C]/80 border border-[#3A2012] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#EA580C] animate-bounce" />
              <span className="text-xs font-bold text-[#F4EAD9]/80 uppercase tracking-wider">
                Skillet Sizzle Frequency
              </span>
            </div>
            <div className="flex items-end gap-1 h-5 flex-1 max-w-md mx-auto">
              {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 60, 100, 75, 50, 90, 65, 80, 45, 95, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#EA580C] to-[#FBBF24] rounded-t-xs transition-all duration-300"
                  style={{
                    height: `${Math.min(100, Math.max(20, (h * (spiceLevel * 0.4 + 0.6))))}%`,
                    opacity: 0.7 + (i % 3) * 0.1,
                  }}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono text-[#EA580C] font-bold">
              {spiceLevel === 1 ? '180 BPM' : spiceLevel === 2 ? '240 BPM' : '320 BPM'}
            </span>
          </div>
        )}

        {/* Grid: Left Side Interactive Layer Selector, Right Side Visual & Scientific Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: 4 Interactive Layers */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {layers.map((layer, index) => {
              const isActive = activeLayer === index;
              return (
                <button
                  key={layer.name}
                  type="button"
                  onClick={() => setActiveLayer(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2A160A] to-[#1E0F07] border-[#EA580C] shadow-lg shadow-[#EA580C]/10 translate-x-1'
                      : 'bg-[#1E0F07]/60 border-[#3A2012] hover:border-[#54321D] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-display text-2xl font-black ${
                        isActive ? 'text-[#EA580C]' : 'text-stone-400'
                      }`}
                    >
                      {layer.percentage}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5D3E] bg-[#2A160A] px-2.5 py-0.5 rounded-full border border-[#3A2012]">
                      {layer.tag}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-base font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-[#D4C3B3]'
                    }`}
                  >
                    {layer.name}
                  </h3>

                  <p className="text-xs text-[#8C5D3E] mt-1 line-clamp-1">{layer.subtitle}</p>

                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-[#3A2012] flex items-center justify-between text-xs text-[#EA580C] font-bold">
                      <span>Explore this element</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Culinary Dossier for Active Element */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1E0F07] to-[#160B06] border-2 border-[#3A2012] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Watermark in background */}
            <div className="absolute right-4 bottom-4 text-9xl font-black font-display text-white/[0.02] pointer-events-none select-none">
              {layers[activeLayer].percentage}
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                  {layers[activeLayer].tag}
                </span>
                <span className="font-mono text-xs text-[#8C5D3E]">
                  INDEX 0{activeLayer + 1} / 04
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                {layers[activeLayer].name}
              </h3>
              <p className="text-sm font-semibold text-[#D97706] mt-1">
                {layers[activeLayer].accent}
              </p>

              <p className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed mt-4">
                {layers[activeLayer].description}
              </p>

              {/* Culinary Metrics Breakdown */}
              <div className="grid grid-cols-3 gap-3 my-8 p-4 rounded-2xl bg-[#160B06] border border-[#3A2012]">
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#8C5D3E]">Consistency</p>
                  <p className="font-display text-lg font-black text-white mt-0.5">
                    {layers[activeLayer].metrics.tenderness}
                  </p>
                </div>
                <div className="border-l border-[#3A2012] pl-3">
                  <p className="text-[10px] uppercase font-bold text-[#8C5D3E]">Flavor Depth</p>
                  <p className="font-display text-lg font-black text-[#EA580C] mt-0.5">
                    {layers[activeLayer].metrics.flavorInfusion}
                  </p>
                </div>
                <div className="border-l border-[#3A2012] pl-3">
                  <p className="text-[10px] uppercase font-bold text-[#8C5D3E]">Mouthfeel</p>
                  <p className="font-display text-xs sm:text-sm font-bold text-white mt-1 truncate">
                    {layers[activeLayer].metrics.mouthfeel}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Heat Customizer */}
            <div className="pt-6 border-t border-[#3A2012]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#EA580C]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Select Your Skillet Heat Setting:
                  </span>
                </div>
                <span className="text-xs font-black text-[#EA580C] uppercase">
                  {spiceDescriptions[spiceLevel - 1].title}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSpiceLevel(lvl)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      spiceLevel === lvl
                        ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-md shadow-[#EA580C]/20'
                        : 'bg-[#2A160A] text-stone-400 border-[#3A2012] hover:text-white'
                    }`}
                  >
                    {lvl === 1 ? '1. Mellow' : lvl === 2 ? '2. Signature' : '3. Firestorm'}
                  </button>
                ))}
              </div>

              <p className="text-xs text-[#8C5D3E] mt-3 italic">
                "{spiceDescriptions[spiceLevel - 1].subtitle}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
