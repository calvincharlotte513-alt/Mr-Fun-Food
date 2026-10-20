import { SmartImage } from './SmartImage';

interface PageHeroProps {
  backgroundImage: string;
  badgeText?: string;
  archiveNumber?: string;
  title: string;
  highlightedTitlePart?: string;
  subtitle?: string;
  metaTags?: string[];
  primaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  minHeightClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  badgeText,
  archiveNumber = 'FOLIO · 2026',
  title,
  highlightedTitlePart,
  subtitle,
  metaTags = ['100% NIGERIAN FLAVOUR', 'SIZZLED FRESH TO ORDER', 'ZERO SHORTCUTS'],
  primaryCta,
  secondaryCta,
  minHeightClass = 'min-h-[520px] sm:min-h-[600px] lg:min-h-[680px]',
}) => {
  return (
    <section className={`relative w-full ${minHeightClass} flex flex-col justify-between overflow-hidden bg-[#160B06] text-white`}>
      {/* 1. Cinematic Background Image with Zoom & High-Luminance Film Scrim */}
      <SmartImage
        src={backgroundImage}
        alt={title}
        containerClassName="absolute inset-0 w-full h-full"
        className="w-full h-full object-cover object-center filter saturate-110 brightness-[0.85] transform scale-105"
      />

      {/* Multi-layered Haute Scrims: Mahogany Black + Warm Amber Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#160B06] via-[#160B06]/65 to-[#160B06]/40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-radial from-transparent via-[#160B06]/30 to-[#160B06]/85 pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Top Archival Header Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#F4EAD9]/80 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
          <span>{badgeText || 'MR FUN CULINARY ARCHIVE'}</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-white/50 tracking-wider">
          <span>{archiveNumber}</span>
          <span>·</span>
          <span>LAGOS, NIGERIA</span>
        </div>
      </div>

      {/* 3. Centerpiece Editorial Title & Story Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-auto">
        <div className="max-w-4xl">
          {/* Main Title Display */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.98] text-balance">
            {title}{' '}
            {highlightedTitlePart && (
              <span className="text-[#EA580C] block sm:inline italic font-serif sm:font-display">
                {highlightedTitlePart}
              </span>
            )}
          </h1>

          {/* Subtitle / Editorial Manifesto Quote */}
          {subtitle && (
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F4EAD9]/90 max-w-2xl leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          {/* Action CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {primaryCta && (
                primaryCta.href ? (
                  <a
                    href={primaryCta.href}
                    className="px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {primaryCta.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={primaryCta.onClick}
                    className="px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {primaryCta.label}
                  </button>
                )
              )}

              {secondaryCta && (
                secondaryCta.href ? (
                  <a
                    href={secondaryCta.href}
                    className="px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#F4EAD9] bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#EA580C]"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={secondaryCta.onClick}
                    className="px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-[#F4EAD9] bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#EA580C]"
                  >
                    {secondaryCta.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4. Bottom Editorial Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs text-white/70 font-semibold uppercase tracking-wider">
        <div className="flex items-center gap-3">
          {metaTags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {i < metaTags.length - 1 && <span className="text-white/30">/</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="text-[#EA580C] font-bold">
          MR FUN FOOD REPUBLIC · TASTIER THAN EVER
        </div>
      </div>
    </section>
  );
};
