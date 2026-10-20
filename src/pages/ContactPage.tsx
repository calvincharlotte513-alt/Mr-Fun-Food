import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BUSINESS_CONFIG } from '../data/config';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Order Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FDF8F0]">
      {/* 1. DEDICATED CONTACT HERO WITH WARM HOSPITALITY BACKGROUND */}
      <PageHero
        backgroundImage={BUSINESS_CONFIG.assets.contactHospitality}
        badgeText="Get In Touch"
        title="CONNECT WITH MR FUN"
        highlightedTitlePart="Always Here For You"
        subtitle="Have a question about our Gizz Dodo, bulk orders, or event catering? Reach out directly to our kitchen and dispatch team."
        primaryCta={{
          label: 'CHAT ON WHATSAPP',
          href: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
            'Hello MR FUN FOOD REPUBLIC HUB! I would like to get in touch.'
          )}`,
        }}
        overlayOpacityClass="bg-[#23140C]/75"
      />

      {/* 2. CONTACT CHANNELS & MESSAGE FORM */}
      <section className="py-16 sm:py-20 border-b border-[#EADCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Contact Info & Hub Location */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 shadow-xs space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8C5D3E] uppercase tracking-wider">Direct Phone</h3>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phone}`}
                      className="text-sm sm:text-base font-bold text-[#23140C] hover:text-[#EA580C] transition-colors"
                    >
                      {BUSINESS_CONFIG.phone}
                    </a>
                    <p className="text-xs text-[#8C5D3E]">Open during kitchen operational hours</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8C5D3E] uppercase tracking-wider">Official WhatsApp</h3>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#23140C] hover:text-[#EA580C] transition-colors"
                    >
                      +{BUSINESS_CONFIG.whatsappNumber}
                    </a>
                    <p className="text-xs text-[#8C5D3E]">Instant orders &amp; customer inquiries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8C5D3E] uppercase tracking-wider">Email Us</h3>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.email}`}
                      className="text-sm sm:text-base font-bold text-[#23140C] hover:text-[#EA580C] transition-colors"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                    <p className="text-xs text-[#8C5D3E]">General inquiries &amp; feedback</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8C5D3E] uppercase tracking-wider">Kitchen Hours</h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#23140C]">
                      {BUSINESS_CONFIG.openingHours}
                    </p>
                  </div>
                </div>

                {/* Kitchen Hub Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8C5D3E] uppercase tracking-wider">Kitchen &amp; Dispatch Hub</h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#23140C]">
                      {BUSINESS_CONFIG.address}
                    </p>
                    <p className="text-xs text-[#8C5D3E]">{BUSINESS_CONFIG.city}</p>
                  </div>
                </div>
              </div>

              {/* Styled Hub Map Placeholder */}
              <div className="bg-white rounded-2xl border border-[#EADCCE] p-4 shadow-xs">
                <div className="w-full h-44 rounded-xl bg-[#FAF3E7] border border-[#EADCCE] flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center mb-2 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#23140C]">MR FUN Culinary Hub</h4>
                  <p className="text-[11px] text-[#8C5D3E] mt-0.5">
                    {BUSINESS_CONFIG.address}, {BUSINESS_CONFIG.city}
                  </p>
                  <span className="mt-2 text-[10px] font-bold text-[#EA580C] uppercase tracking-wider">
                    Dispatch Center · Ready for Google Maps
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#EADCCE] p-6 sm:p-8 shadow-xs">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#15803D]/10 text-[#15803D] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#23140C]">Message Received!</h3>
                    <p className="mt-2 text-sm text-[#54321D] max-w-sm mx-auto">
                      Thank you for contacting MR FUN FOOD REPUBLIC HUB, {formData.fullName}. We will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          subject: 'Order Inquiry',
                          message: '',
                        });
                      }}
                      className="mt-6 px-5 py-2.5 text-xs font-bold text-white bg-[#EA580C] rounded-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-[#F5EBE1] pb-3 mb-2">
                      <h3 className="font-display text-lg font-bold text-[#23140C]">Send Us a Direct Message</h3>
                      <p className="text-xs text-[#8C5D3E]">
                        Leave your message and our team will get in touch with you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#23140C] mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Adeola Adeleke"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#23140C] mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234 812 000 0000"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#23140C] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@email.com"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#23140C] mb-1">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        >
                          <option value="Order Inquiry">Order Inquiry</option>
                          <option value="Event Catering">Event Catering</option>
                          <option value="Bulk Office Orders">Bulk Office Orders</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#23140C] mb-1">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you need or how we can assist you..."
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#EADCCE] rounded-xl text-[#23140C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#23140C]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
