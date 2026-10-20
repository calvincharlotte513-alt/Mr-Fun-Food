import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

interface CulinaryMarqueeProps {
  className?: string;
  theme?: 'dark' | 'cream' | 'orange';
}

export const CulinaryMarquee: React.FC<CulinaryMarqueeProps> = ({
  className = '',
  theme = 'dark',
}) => {
  const items = [
    'SLOW-BRAISED SUCCULENT GIZZARDS',
    'CARAMELIZED GOLDEN DODO',
    'FIERY SCOTCH BONNET HARMONY',
    '100% TASTIER THAN EVER',
    'SIZZLING WOK REDUCTION',
    'HOT OFF THE FLAME',
    'AUTHENTIC NIGERIAN CRAFT',
    'DELIVERED STEAMING HOT',
  ];

  const themeClasses = {
    dark: 'bg-[#160B06] text-[#F4EAD9] border-y border-[#3A2012]',
    cream: 'bg-[#F4EAD9] text-[#23140C] border-y border-[#EADCCE]',
    orange: 'bg-[#EA580C] text-white border-y border-[#C2410C]',
  };

  return (
    <div className={`overflow-hidden py-3 whitespace-nowrap select-none ${themeClasses[theme]} ${className}`}>
      <div className="inline-flex items-center gap-8 animate-marquee">
        {/* Render 2 identical sets for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="inline-flex items-center gap-3">
            <span className="font-display font-black text-xs sm:text-sm tracking-widest uppercase">
              {text}
            </span>
            {idx % 2 === 0 ? (
              <Flame className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
