import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ItemDetailModal: React.FC = () => {
  const { selectedDishForModal, setSelectedDishForModal, addItem, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [added, setAdded] = useState(false);

  if (!selectedDishForModal) return null;

  const price = selectedDishForModal.price || 0;

  const handleClose = () => {
    setSelectedDishForModal(null);
    setQuantity(1);
    setInstructions('');
    setAdded(false);
  };

  const handleAddToCart = () => {
    addItem(selectedDishForModal, quantity, instructions);
    setAdded(true);
    setTimeout(() => {
      handleClose();
      setIsCartOpen(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#23140C]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl border border-[#EADCCE] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/90 text-[#23140C] hover:bg-white shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Food Image */}
        <div className="relative aspect-[16/10] w-full bg-[#F5EBE1] overflow-hidden">
          <img
            src={selectedDishForModal.image}
            alt={selectedDishForModal.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          <div className="absolute top-3.5 left-3.5 flex gap-2">
            <span className="bg-[#23140C]/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
              <Utensils className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{selectedDishForModal.portionDetails || 'Signature Offering'}</span>
            </span>
          </div>
        </div>

        {/* Details & Controls */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#8C5D3E] uppercase tracking-wider">
                MR FUN GIZZDODO
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#23140C] mt-0.5">
                {selectedDishForModal.name}
              </h2>
            </div>
            {price > 0 && (
              <div className="text-right shrink-0">
                <span className="font-display text-xl sm:text-2xl font-black text-[#EA580C] tabular-nums">
                  ₦{(price * quantity).toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#54321D] leading-relaxed">
            {selectedDishForModal.description}
          </p>

          {/* Ingredients list */}
          {selectedDishForModal.ingredients && selectedDishForModal.ingredients.length > 0 && (
            <div className="bg-[#FDF8F0] border border-[#EADCCE] rounded-xl p-3.5">
              <h3 className="text-xs font-bold text-[#23140C] uppercase tracking-wider mb-1.5">
                Ingredients:
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {selectedDishForModal.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#54321D] bg-white border border-[#EADCCE] px-2.5 py-0.5 rounded-md"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {price > 0 && (
            <>
              {/* Special Cooking Note */}
              <div>
                <label className="block text-xs font-bold text-[#23140C] mb-1">
                  Custom Preparation Note (Optional)
                </label>
                <input
                  type="text"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="e.g. Mild spice, separate packaging..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                />
              </div>

              {/* Quantity and Add Button */}
              <div className="pt-2 flex items-center justify-between gap-4 border-t border-[#F5EBE1]">
                <div className="flex items-center border border-[#EADCCE] rounded-xl bg-[#FAF3E7] p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#EADCCE] text-[#23140C] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-[#23140C] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#EADCCE] text-[#23140C] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-5 text-xs sm:text-sm font-bold text-white rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 ${
                    added ? 'bg-[#15803D]' : 'bg-[#EA580C] hover:bg-[#C2410C]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Food Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag · ₦{(price * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
