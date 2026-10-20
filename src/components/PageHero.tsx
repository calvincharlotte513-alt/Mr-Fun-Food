import React from 'react';

interface PageHeroProps {
  backgroundImage: string;
  badgeText?: string;
  title: string;
  highlightedTitlePart?: string;
  subtitle?: string;
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
  overlayOpacityClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  badgeText,
  title,
  highlightedTitlePart,
  subtitle,
  primaryCta,
  secondaryCta,
  minHeightClass = 'min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]',
  overlayOpacityClass = 'bg-[#23140C]/75',
}) => {
  return (
    <section className={`relative w-full ${minHeightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with object-fit: cover */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />

      {/* Sophisticated Dark/Warm Brand Gradient Overlay */}
      <div
        className={`absolute inset-0 ${overlayOpacityClass} backdrop-brightness-95`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#23140C] via-transparent to-[#23140C]/60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#23140C]/80 via-transparent to-[#23140C]/60"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center text-white flex flex-col items-center">
        {badgeText && (
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold text-[#EA580C] uppercase tracking-widest bg-[#23140C]/80 border border-[#54321D] px-4 py-1.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span>{badgeText}</span>
          </div>
        )}

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl text-balance">
          {title}{' '}
          {highlightedTitlePart && (
            <span className="text-[#EA580C] block sm:inline">{highlightedTitlePart}</span>
          )}
        </h1>

        {subtitle && (
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#F5EBE1] max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>
        )}

        {/* Action Buttons */}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {primaryCta && (
              primaryCta.href ? (
                <a
                  href={primaryCta.href}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-white"
                >
                  {primaryCta.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={primaryCta.onClick}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-white"
                >
                  {primaryCta.label}
                </button>
              )
            )}

            {secondaryCta && (
              secondaryCta.href ? (
                <a
                  href={secondaryCta.href}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#F5EBE1] bg-[#3A2012]/80 hover:bg-[#54321D] border border-[#54321D] rounded-xl shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#EA580C]"
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={secondaryCta.onClick}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#F5EBE1] bg-[#3A2012]/80 hover:bg-[#54321D] border border-[#54321D] rounded-xl shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#EA580C]"
                >
                  {secondaryCta.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};
