import React from 'react';
import { ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/config';

export const MobileOrderBar: React.FC = () => {
  const { totalCount, total, setIsCartOpen, generateWhatsAppOrderUrl } = useCart();

  if (totalCount === 0) return null;

  return (
    <aside
      aria-label="Mobile Order Summary"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#23140C]/95 backdrop-blur-md border-t border-[#54321D] p-3 shadow-2xl animate-in slide-in-from-bottom duration-200"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-lg bg-[#EA580C] text-white flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-[#23140C] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {totalCount}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-[#EA580C] block leading-none">Your Bag</span>
            <span className="font-display text-sm font-black text-white tabular-nums">
              ₦{total.toLocaleString()}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={generateWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#3A2012] hover:bg-[#54321D] text-[#F5EBE1] border border-[#54321D] rounded-xl flex items-center justify-center transition-colors"
            title="Order via WhatsApp"
            aria-label="Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#EA580C]" />
          </a>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="px-4 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <span>Review &amp; Pay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
