import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, Heart, Utensils, CheckCircle2, Award, ChefHat, ShieldCheck, Clock } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CulinaryMarquee } from '../components/CulinaryMarquee';
import { SmartImage } from '../components/SmartImage';
import { BUSINESS_CONFIG, KITCHEN_LAWS } from '../data/config';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FDF8F0] selection:bg-[#EA580C] selection:text-white">
      {/* 1. DEDICATED ABOUT HERO WITH UNIQUE CULINARY HERITAGE BACKGROUND (DIFFERENT FROM HOME) */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.aboutHeritage}
        badgeText="Our Heritage & Philosophy"
        archiveNumber="CHAPTER I · THE MANIFESTO"
        title="ABOUT MR FUN FOOD REPUBLIC HUB"
        highlightedTitlePart="Passion & Mastery"
        subtitle="Celebrating authentic Nigerian food through disciplined culinary craft, fresh daily ingredients, and unforgettable food experiences."
        primaryCta={{
          label: 'EXPLORE OUR GIZZ DODO',
          href: '/gizz-dodo',
        }}
        secondaryCta={{
          label: 'CONTACT DISPATCH TEAM',
          href: '/contact',
        }}
      />

      {/* 2. INFINITE KINETIC MARQUEE TICKER */}
      <CulinaryMarquee theme="dark" />

      {/* 3. THE BRAND VISION & PHILOSOPHY */}
      <section className="py-20 sm:py-28 border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Storytelling Text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-widest block mb-2">
                Our Foundation & Vision
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#23140C] uppercase tracking-tight leading-[1.05]">
                Food Made With <span className="text-[#EA580C]">Uncompromising Passion</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#3A2012]/85 leading-relaxed">
                <p>
                  <strong className="text-[#23140C]">{BUSINESS_CONFIG.fullName}</strong> was established with a singular, focused mission: to deliver authentic Nigerian flavours with the highest standards of culinary craft, spotless kitchen hygiene, and memorable service.
                </p>
                <p>
                  Under the flag of <strong>Mr Fun GizzDODO</strong>, we champion the rich complexity of Nigerian food culture. Our signature dish — Gizz Dodo — embodies this dedication: tender, hand-trimmed chicken gizzards and sweet, golden plantains chopped to perfection and simmered together in our aromatic scotch bonnet and sweet onion reduction.
                </p>
                <p>
                  We believe that great food is never an accident. It is the result of fresh market ingredients, strict cleanliness, and genuine love for cooking. As we continue to develop future additions like our upcoming Fragrant Coconut Rice, our promise to our customers remains constant: <em className="text-[#EA580C] font-bold">“{BUSINESS_CONFIG.tagline}”</em>
                </p>
              </div>

              {/* Verified Truthful Metrics */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-white border border-[#EADCCE] shadow-xs">
                <div>
                  <p className="font-display text-3xl font-black text-[#EA580C]">100%</p>
                  <p className="text-xs font-bold text-[#23140C] mt-1">Authentic Flavour</p>
                  <p className="text-[11px] text-[#8C5D3E]">Traditional recipes & spices</p>
                </div>
                <div className="sm:border-l border-[#EADCCE] sm:pl-5 pt-4 sm:pt-0 border-t sm:border-t-0">
                  <p className="font-display text-3xl font-black text-[#EA580C]">Daily</p>
                  <p className="text-xs font-bold text-[#23140C] mt-1">Freshly Sourced</p>
                  <p className="text-[11px] text-[#8C5D3E]">Market-ripe plantains & meats</p>
                </div>
                <div className="sm:border-l border-[#EADCCE] sm:pl-5 pt-4 sm:pt-0 border-t sm:border-t-0">
                  <p className="font-display text-3xl font-black text-[#EA580C]">Zero</p>
                  <p className="text-xs font-bold text-[#23140C] mt-1">Shortcuts Taken</p>
                  <p className="text-[11px] text-[#8C5D3E]">Cooked to order with love</p>
                </div>
              </div>
            </div>

            {/* Official Logo Brand Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-2 border-[#EADCCE] p-8 sm:p-10 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#EA580C]" />
                
                <SmartImage
                  src={BUSINESS_CONFIG.assets.logo}
                  alt="Official Mr Fun GizzDODO Logo"
                  className="w-44 h-44 object-contain drop-shadow-md mb-6"
                />

                <h3 className="font-display text-2xl font-black text-[#23140C] uppercase tracking-tight">
                  {BUSINESS_CONFIG.brandName} GIZZDODO
                </h3>
                <p className="text-xs font-bold text-[#EA580C] uppercase tracking-widest mt-1">
                  “{BUSINESS_CONFIG.tagline}”
                </p>
                <p className="text-xs text-[#8C5D3E] mt-3">
                  A flagship division of {BUSINESS_CONFIG.fullName}
                </p>

                <div className="mt-8 w-full pt-6 border-t border-[#EADCCE] grid grid-cols-2 gap-3 text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span>Pristine Hygiene</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span>Fresh Cooking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span>Tamper-Sealed Packs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span>Rapid Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET THE FOUNDER & CEO SECTION (OFFICIAL PHOTOGRAPH PRESERVED) */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#EADCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* CEO Photo with Authentic Apron and Hat */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EADCCE] bg-[#23140C] shadow-2xl group">
                <SmartImage
                  src={BUSINESS_CONFIG.assets.ceoPhoto}
                  alt="Founder & CEO of Mr Fun Food Republic Hub"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-104"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#160B06]/95 via-[#160B06]/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>LEADERSHIP & CULINARY DIRECTOR</span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-white leading-tight">
                    Founder & CEO
                  </h3>
                  <p className="text-xs text-[#F4EAD9] font-medium mt-1">
                    MR FUN FOOD REPUBLIC HUB
                  </p>
                </div>
              </div>
            </div>

            {/* CEO Narrative & Vision */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-widest mb-3">
                <ChefHat className="w-4 h-4" />
                <span>EXECUTIVE CULINARY DIRECTION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#23140C] tracking-tight uppercase leading-[1.05]">
                Meet The <span className="text-[#EA580C]">Founder & CEO</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#3A2012]/90 leading-relaxed">
                The journey of <strong className="text-[#23140C]">MR FUN FOOD REPUBLIC HUB</strong> was born from a profound respect for Nigerian culinary heritage and an unwavering commitment to quality.
              </p>

              <p className="mt-3 text-sm sm:text-base text-[#54321D] leading-relaxed">
                As both chief executive and culinary director, our founder personally oversees our recipes, kitchen cleanliness, and spice profiles. From the precise hand-trimming of chicken gizzards to the perfect caramelization of sweet plantains, his vision ensures that every single order delivered to your home or office meets our hallmark promise: <em className="text-[#EA580C] font-black">Tastier Than Ever!</em>
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-[#FAF3E7] border border-[#EADCCE] space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#23140C]">
                  <Flame className="w-4 h-4 text-[#EA580C]" />
                  <span>“Authentic food begins with authentic passion, discipline, and uncompromising standards.”</span>
                </div>
                <p className="text-xs text-[#8C5D3E]">
                  Leading MR FUN FOOD REPUBLIC HUB toward culinary excellence across Lagos and beyond.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/gizz-dodo"
                  className="px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xl transition-all"
                >
                  Explore Our Signature Gizz Dodo
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 5 SACRED LAWS OF MR FUN'S KITCHEN */}
      <section className="py-20 sm:py-28 bg-[#160B06] text-white border-b border-[#3A2012]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] block mb-2">
              The Code of Culinary Craft
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
              The 5 Kitchen Laws
            </h2>
            <p className="mt-3 text-sm text-[#D4C3B3]">
              The non-negotiable standards upheld behind our burners every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KITCHEN_LAWS.map((law) => (
              <div
                key={law.number}
                className="bg-[#23140C] border border-[#3A2012] rounded-3xl p-7 flex flex-col justify-between hover:border-[#EA580C] transition-colors group"
              >
                <div>
                  <span className="font-display text-3xl font-black text-[#EA580C] group-hover:scale-110 transition-transform inline-block">
                    {law.number}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-2">
                    {law.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4C3B3] mt-3 leading-relaxed">
                    {law.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
