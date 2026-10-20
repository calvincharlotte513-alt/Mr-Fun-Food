import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, Heart, Utensils, CheckCircle2, Award, ChefHat } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BUSINESS_CONFIG } from '../data/config';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FDF8F0]">
      {/* 1. DEDICATED ABOUT HERO WITH UNIQUE CULINARY HERITAGE BACKGROUND (DIFFERENT FROM HOME) */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.aboutHeritage}
        badgeText="Our Brand Story &amp; Heritage"
        title="ABOUT MR FUN FOOD REPUBLIC HUB"
        highlightedTitlePart="Passion &amp; Flavour"
        subtitle="Celebrating authentic Nigerian food through traditional recipes, premium preparation, and memorable culinary hospitality."
        primaryCta={{
          label: 'EXPLORE OUR GIZZ DODO',
          href: '/gizz-dodo',
        }}
        secondaryCta={{
          label: 'CONTACT OUR TEAM',
          href: '/contact',
        }}
        overlayOpacityClass="bg-[#23140C]/75"
      />

      {/* 2. THE BRAND VISION & PHILOSOPHY */}
      <section className="py-16 sm:py-20 border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Storytelling Text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] mt-1">
                Food Made With <span className="text-[#EA580C]">Passion.</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#3A2012]/85 leading-relaxed">
                <p>
                  <strong className="text-[#23140C]">{BUSINESS_CONFIG.fullName}</strong> was established with a singular,
                  focused mission: to deliver authentic Nigerian flavours with the highest standards of culinary craft,
                  spotless hygiene, and memorable service.
                </p>
                <p>
                  Under the flag of <strong>Mr Fun GizzDODO</strong>, we champion the richness of Nigerian food culture.
                  Our signature dish — Gizz Dodo — embodies this dedication: tender, hand-trimmed chicken gizzards and
                  sweet, golden plantains chopped to perfection and simmered together in our aromatic scotch bonnet and
                  onion reduction.
                </p>
                <p>
                  We believe that great food is not an accident. It is the result of fresh market ingredients, strict
                  cleanliness, and genuine love for cooking. As we continue to develop future additions like our upcoming
                  Coconut Rice, our promise to our customers remains constant: <em className="text-[#EA580C] font-semibold">{BUSINESS_CONFIG.tagline}</em>
                </p>
              </div>

              {/* Verified Truthful Metrics (Responsive layout preventing text overflow) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-[#EADCCE] shadow-xs">
                <div className="text-center sm:text-left">
                  <p className="font-display text-2xl sm:text-3xl font-black text-[#EA580C]">100%</p>
                  <p className="text-xs font-bold text-[#23140C] mt-0.5">Authentic Flavour</p>
                  <p className="text-[11px] text-[#8C5D3E]">Traditional spices &amp; recipes</p>
                </div>
                <div className="text-center sm:text-left sm:border-l border-[#EADCCE] sm:pl-4 pt-3 sm:pt-0 border-t sm:border-t-0">
                  <p className="font-display text-2xl sm:text-3xl font-black text-[#EA580C]">Daily</p>
                  <p className="text-xs font-bold text-[#23140C] mt-0.5">Fresh Sourced</p>
                  <p className="text-[11px] text-[#8C5D3E]">Plantains &amp; prime meats</p>
                </div>
                <div className="text-center sm:text-left sm:border-l border-[#EADCCE] sm:pl-4 pt-3 sm:pt-0 border-t sm:border-t-0">
                  <p className="font-display text-2xl sm:text-3xl font-black text-[#EA580C]">Crafted</p>
                  <p className="text-xs font-bold text-[#23140C] mt-0.5">With Passion</p>
                  <p className="text-[11px] text-[#8C5D3E]">Cooked with care to order</p>
                </div>
              </div>
            </div>

            {/* Official Logo Brand Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border-2 border-[#EADCCE] p-8 shadow-sm flex flex-col items-center text-center">
                <img
                  src={BUSINESS_CONFIG.assets.logo}
                  alt="Official Mr Fun GizzDODO Logo"
                  className="w-44 h-44 object-contain drop-shadow-md mb-4"
                  referrerPolicy="no-referrer"
                />

                <h3 className="font-display text-xl font-black text-[#23140C] uppercase">
                  {BUSINESS_CONFIG.brandName} GIZZDODO
                </h3>
                <p className="text-xs font-bold text-[#EA580C] uppercase tracking-widest mt-1">
                  “{BUSINESS_CONFIG.tagline}”
                </p>
                <p className="text-xs text-[#8C5D3E] mt-3">
                  Part of {BUSINESS_CONFIG.fullName}
                </p>

                <div className="mt-6 w-full pt-5 border-t border-[#EADCCE] grid grid-cols-2 gap-3 text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                    <span>Pristine Hygiene</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                    <span>Fresh Cooking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                    <span>Tamper-Sealed Packs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#54321D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                    <span>Reliable Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE FOUNDER & CEO SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* CEO Photo with Authentic Apron and Hat */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#EADCCE] bg-[#3A2012] shadow-xl group">
                <img
                  src={BUSINESS_CONFIG.assets.ceoPhoto}
                  alt="Founder & CEO of Mr Fun Food Republic Hub"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#23140C]/90 via-[#23140C]/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#EA580C] block">
                    Leadership &amp; Culinary Vision
                  </span>
                  <h3 className="font-display text-xl font-bold text-white leading-tight mt-0.5">
                    Founder &amp; CEO
                  </h3>
                  <p className="text-xs text-[#F5EBE1] font-medium mt-1">
                    MR FUN FOOD REPUBLIC HUB
                  </p>
                </div>
              </div>
            </div>

            {/* CEO Narrative & Vision */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-widest mb-2">
                <ChefHat className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#23140C] tracking-tight">
                Meet The <span className="text-[#EA580C]">Founder &amp; CEO</span>
              </h2>

              <p className="mt-4 text-base text-[#3A2012]/90 leading-relaxed">
                The journey of <strong className="text-[#23140C]">MR FUN FOOD REPUBLIC HUB</strong> was born from a
                profound respect for Nigerian culinary heritage and an unwavering commitment to quality.
              </p>

              <p className="mt-3 text-sm text-[#54321D] leading-relaxed">
                As both chief executive and culinary director, our founder personally oversees our recipes, kitchen
                cleanliness, and spice profiles. From the precise hand-trimming of chicken gizzards to the perfect
                caramelization of sweet plantains, his vision ensures that every single order delivered to your home or
                office meets our hallmark promise: <em className="text-[#EA580C] font-bold">Tastier Than Ever!</em>
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#FAF3E7] border border-[#EADCCE] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#23140C]">
                  <Flame className="w-4 h-4 text-[#EA580C]" />
                  <span>"Authentic food begins with authentic passion and high standards."</span>
                </div>
                <p className="text-[11px] text-[#8C5D3E]">
                  Leading MR FUN FOOD REPUBLIC HUB toward culinary excellence across Lagos and beyond.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/gizz-dodo"
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xs transition-colors"
                >
                  Explore Our Signature Gizz Dodo
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-3.5 text-xs sm:text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHEF & KITCHEN COMMITMENT */}
      <section className="py-16 bg-[#23140C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-8 h-8 text-[#EA580C] mx-auto mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase">
            Behind Every Great Plate Is Great Passion
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#D4C3B3] leading-relaxed max-w-2xl mx-auto">
            From the sizzle of high heat pans to the careful balancing of peppers, every dish that leaves our kitchen
            reflects our dedication to professional culinary standards and warm Nigerian hospitality.
          </p>
          <div className="mt-8">
            <Link
              to="/menu"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl transition-all"
            >
              Taste The Difference Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
