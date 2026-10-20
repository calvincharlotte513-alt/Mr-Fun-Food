/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GizzDodoPage } from './pages/GizzDodoPage';
import { ContactPage } from './pages/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { MobileOrderBar } from './components/MobileOrderBar';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#FDF8F0] text-[#23140C] flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
          {/* Global Sticky Multi-Page Navbar */}
          <Navbar />

          {/* Dedicated Page Routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/gizz-dodo" element={<GizzDodoPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all route redirects to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Overlays & Modals */}
          <CartDrawer />
          <CheckoutModal />
          <ItemDetailModal />
          <MobileOrderBar />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
