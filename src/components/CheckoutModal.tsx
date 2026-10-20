import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, MessageCircle, ArrowLeft, Copy, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/config';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    subtotal,
    deliveryFee,
    packagingFee,
    total,
    clearCart,
    generateWhatsAppOrderUrl,
    orderSuccessData,
    setOrderSuccessData,
  } = useCart();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'transfer'>('paystack');
  const [copied, setCopied] = useState(false);

  if (!isCheckoutOpen && !orderSuccessData) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const orderId = `MFG-${Math.floor(100000 + Math.random() * 900000)}`;
    const successDetails = {
      orderId,
      customerName: fullName,
      phone,
      address: `${address}${landmark ? ` (Near ${landmark})` : ''}`,
      items: [...items],
      total,
      paymentMethod:
        paymentMethod === 'paystack'
          ? 'Paystack Gateway'
          : paymentMethod === 'flutterwave'
          ? 'Flutterwave Gateway'
          : 'Direct Bank Transfer / Pay on Delivery',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setOrderSuccessData(successDetails);
    clearCart();
  };

  const handleCloseAll = () => {
    setIsCheckoutOpen(false);
    setOrderSuccessData(null);
  };

  const handleWhatsAppForward = () => {
    if (!orderSuccessData) return;
    const text = [
      `*🍛 ORDER CONFIRMATION - ${BUSINESS_CONFIG.fullName}*`,
      `*Order ID:* #${orderSuccessData.orderId}`,
      `*Customer:* ${orderSuccessData.customerName}`,
      `*Phone:* ${orderSuccessData.phone}`,
      `*Address:* ${orderSuccessData.address}`,
      `*Payment:* ${orderSuccessData.paymentMethod}`,
      '',
      '*ITEMS:*',
      ...orderSuccessData.items.map(
        (ci, i) => `${i + 1}. ${ci.item.name} x${ci.quantity} — ₦${((ci.item.price || 0) * ci.quantity).toLocaleString()}`
      ),
      '',
      `*TOTAL:* ₦${orderSuccessData.total.toLocaleString()}`,
      '',
      'Please confirm preparation is underway!',
    ].join('\n');

    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#23140C]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#FDF8F0] rounded-2xl border border-[#EADCCE] shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="bg-white p-5 border-b border-[#EADCCE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-[#23140C]">
              {orderSuccessData ? 'Order Confirmed!' : 'Checkout & Delivery'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCloseAll}
            className="p-1.5 text-[#3A2012] hover:text-[#EA580C] hover:bg-[#F5EBE1] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {orderSuccessData ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#15803D]/10 text-[#15803D] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#8C5D3E] uppercase tracking-widest">
                Thank You For Your Order!
              </span>
              <h3 className="font-display text-2xl font-black text-[#23140C] mt-1">
                Order #{orderSuccessData.orderId}
              </h3>
              <p className="text-xs sm:text-sm text-[#54321D] mt-1">
                We're firing up the pans! Your hot meals are being prepped fresh.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-white rounded-xl border border-[#EADCCE] p-5 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#F5EBE1] pb-2 font-bold text-[#23140C]">
                <span>Order Reference:</span>
                <span className="font-mono text-[#EA580C]">#{orderSuccessData.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C5D3E]">Recipient:</span>
                <span className="font-semibold text-[#23140C]">{orderSuccessData.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C5D3E]">Phone:</span>
                <span className="font-semibold text-[#23140C]">{orderSuccessData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C5D3E]">Delivery Destination:</span>
                <span className="font-semibold text-[#23140C] text-right max-w-xs">{orderSuccessData.address}</span>
              </div>
              <div className="flex justify-between border-t border-[#F5EBE1] pt-2 font-bold text-[#23140C]">
                <span>Total Amount:</span>
                <span className="text-base text-[#EA580C] font-display tabular-nums">
                  ₦{orderSuccessData.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppForward}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Track / Forward to WhatsApp ({BUSINESS_CONFIG.phone})</span>
              </button>

              <button
                type="button"
                onClick={handleCloseAll}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] rounded-xl transition-all"
              >
                Back to Mr Fun GizzDODO Home
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-5">
            {/* Contact & Address Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#23140C] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Babatunde Johnson"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#23140C] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 812 345 6789"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#23140C] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#23140C] mb-1">Delivery Address *</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street name, house/flat number, estate..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#23140C] mb-1">Prominent Landmark</label>
                  <input
                    type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    placeholder="e.g. Near Filmhouse Cinema"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#23140C] mb-1">Special Cooking Instructions</label>
                  <input
                    type="text"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g. Extra spicy, separate dodo..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="border-t border-[#EADCCE] pt-4">
              <label className="block text-xs font-bold text-[#23140C] mb-2">Select Payment Method</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paystack')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === 'paystack'
                      ? 'border-[#EA580C] bg-[#EA580C]/5 ring-1 ring-[#EA580C]'
                      : 'border-[#EADCCE] bg-white hover:bg-[#F5EBE1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#23140C]">Paystack</span>
                    <CreditCard className="w-4 h-4 text-[#EA580C]" />
                  </div>
                  <p className="text-[11px] text-[#8C5D3E]">Debit Card, Bank Transfer, USSD</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('flutterwave')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === 'flutterwave'
                      ? 'border-[#EA580C] bg-[#EA580C]/5 ring-1 ring-[#EA580C]'
                      : 'border-[#EADCCE] bg-white hover:bg-[#F5EBE1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#23140C]">Flutterwave</span>
                    <CreditCard className="w-4 h-4 text-[#EA580C]" />
                  </div>
                  <p className="text-[11px] text-[#8C5D3E]">Cards, Mobile Money &amp; Barter</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('transfer')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === 'transfer'
                      ? 'border-[#EA580C] bg-[#EA580C]/5 ring-1 ring-[#EA580C]'
                      : 'border-[#EADCCE] bg-white hover:bg-[#F5EBE1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#23140C]">Direct / Cash</span>
                    <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                  </div>
                  <p className="text-[11px] text-[#8C5D3E]">Bank Transfer on Dispatch</p>
                </button>
              </div>

              {/* Developer Notice for Integration */}
              <p className="text-[11px] text-[#8C5D3E] mt-2 italic">
                * Note: Frontend order architecture ready for live Paystack &amp; Flutterwave public key activation.
              </p>
            </div>

            {/* Total and Submit */}
            <div className="border-t border-[#EADCCE] pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#8C5D3E] block">Final Total Due</span>
                <span className="font-display text-xl sm:text-2xl font-black text-[#EA580C] tabular-nums">
                  ₦{total.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="w-1/2 sm:w-auto px-4 py-3 text-xs font-bold text-[#23140C] bg-[#F5EBE1] hover:bg-[#EADCCE] rounded-xl transition-colors"
                >
                  Back to Bag
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-sm transition-colors"
                >
                  Confirm &amp; Place Order
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
