import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/config';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    packagingFee,
    total,
    totalCount,
    generateWhatsAppOrderUrl,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl();
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#23140C]/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDF8F0] shadow-2xl flex flex-col border-l border-[#EADCCE]">
          {/* Header */}
          <div className="p-5 bg-white border-b border-[#EADCCE] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-display text-base font-bold text-[#23140C]">Your Food Bag</h2>
                <p className="text-[11px] text-[#8C5D3E] tabular-nums">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-[#8C5D3E] hover:text-[#EA580C] px-2 py-1 transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-[#3A2012] hover:text-[#EA580C] hover:bg-[#F5EBE1] rounded-lg transition-colors"
                aria-label="Close food bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {items.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C5D3E] mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-display text-base font-bold text-[#23140C]">Your bag is currently empty</h3>
                <p className="text-xs text-[#8C5D3E] max-w-xs mt-1">
                  Explore our menu to add mouth-watering Gizdodo, traditional soups, or smoky party jollof.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-5 px-5 py-2.5 text-xs font-bold text-white bg-[#EA580C] rounded-xl hover:bg-[#C2410C] transition-colors"
                >
                  Explore Delicious Meals
                </button>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="bg-white rounded-xl border border-[#EADCCE] p-3.5 shadow-xs flex gap-3 items-center"
                >
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-[#F5EBE1]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-[#23140C] truncate">
                      {cartItem.item.name}
                    </h3>
                    <p className="text-xs font-bold text-[#EA580C] mt-0.5 tabular-nums">
                      ₦{(cartItem.item.price || 0).toLocaleString()}
                    </p>
                    {cartItem.specialInstructions && (
                      <p className="text-[10px] text-[#8C5D3E] italic truncate mt-0.5">
                        Note: {cartItem.specialInstructions}
                      </p>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="inline-flex items-center border border-[#EADCCE] rounded-lg bg-[#FAF3E7]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(cartItem.item.id, -1)}
                          className="p-1 hover:bg-[#EADCCE] text-[#23140C] rounded-l-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#23140C] tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(cartItem.item.id, 1)}
                          className="p-1 hover:bg-[#EADCCE] text-[#23140C] rounded-r-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(cartItem.item.id)}
                        className="p-1 text-[#8C5D3E] hover:text-[#EA580C] transition-colors"
                        aria-label={`Remove ${cartItem.item.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="text-right shrink-0">
                    <span className="font-display text-xs sm:text-sm font-bold text-[#23140C] tabular-nums">
                      ₦{((cartItem.item.price || 0) * cartItem.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Billing Breakdown & Actions */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#EADCCE] space-y-3">
              <div className="space-y-1.5 text-xs text-[#54321D]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#23140C] tabular-nums">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Packaging &amp; Tamper Seals</span>
                  <span className="font-semibold text-[#23140C] tabular-nums">₦{packagingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold text-[#23140C] tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-[#15803D] font-bold">FREE</span>
                    ) : (
                      `₦${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                {subtotal < BUSINESS_CONFIG.freeDeliveryThreshold && (
                  <p className="text-[10px] text-[#8C5D3E]">
                    Add ₦{(BUSINESS_CONFIG.freeDeliveryThreshold - subtotal).toLocaleString()} more for free delivery!
                  </p>
                )}
                <div className="flex justify-between pt-2 border-t border-[#EADCCE] text-sm sm:text-base font-bold text-[#23140C]">
                  <span>Total Amount</span>
                  <span className="text-[#EA580C] font-display tabular-nums">₦{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleProceedToCheckout}
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#23140C]"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] border border-[#EADCCE] rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#EA580C]" />
                  <span>ORDER VIA WHATSAPP</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8C5D3E] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                <span>Safe packing &amp; fast doorstep dispatch</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
