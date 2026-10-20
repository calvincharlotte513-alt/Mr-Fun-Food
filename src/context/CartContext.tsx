import React, { createContext, useContext, useEffect, useState } from 'react';
import { BUSINESS_CONFIG, MenuItem } from '../data/config';
import { CartItem } from '../types';

interface OrderSuccessDetails {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
  paymentMethod: string;
  createdAt: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number, instructions?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedDishForModal: MenuItem | null;
  setSelectedDishForModal: (dish: MenuItem | null) => void;
  subtotal: number;
  deliveryFee: number;
  packagingFee: number;
  total: number;
  totalCount: number;
  generateWhatsAppOrderUrl: (details?: {
    name?: string;
    phone?: string;
    address?: string;
    instructions?: string;
  }) => string;
  orderSuccessData: OrderSuccessDetails | null;
  setOrderSuccessData: (data: OrderSuccessDetails | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'mr_fun_food_hub_cart_v2';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [orderSuccessData, setOrderSuccessData] = useState<OrderSuccessDetails | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable
    }
  }, [items]);

  const addItem = (item: MenuItem, quantity = 1, instructions = '') => {
    if (!item.price) return;
    setItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          specialInstructions: instructions || next[existingIndex].specialInstructions,
        };
        return next;
      }
      return [...prev, { item, quantity, specialInstructions: instructions }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((acc, ci) => acc + (ci.item.price || 0) * ci.quantity, 0);
  const totalCount = items.reduce((acc, ci) => acc + ci.quantity, 0);

  const deliveryFee =
    subtotal === 0 ? 0 : subtotal >= BUSINESS_CONFIG.freeDeliveryThreshold ? 0 : BUSINESS_CONFIG.standardDeliveryFee;

  const packagingFee = subtotal === 0 ? 0 : BUSINESS_CONFIG.packagingFee;
  const total = subtotal + deliveryFee + packagingFee;

  const generateWhatsAppOrderUrl = (details?: {
    name?: string;
    phone?: string;
    address?: string;
    instructions?: string;
  }) => {
    const lines = [
      `*🍛 ORDER INQUIRY - ${BUSINESS_CONFIG.fullName}*`,
      `*Brand:* ${BUSINESS_CONFIG.brandName} (${BUSINESS_CONFIG.productName})`,
      `*Tagline:* _${BUSINESS_CONFIG.tagline}_`,
      '',
      `*Customer:* ${details?.name || 'Customer'}`,
      details?.phone ? `*Phone:* ${details.phone}` : '',
      details?.address ? `*Delivery Address:* ${details.address}` : '*Order Type:* Delivery Request',
      details?.instructions ? `*Special Notes:* ${details.instructions}` : '',
      '',
      '*ORDER SUMMARY:*',
      ...items.map(
        (ci, i) =>
          `${i + 1}. ${ci.item.name} x${ci.quantity} — ₦${((ci.item.price || 0) * ci.quantity).toLocaleString()}${
            ci.specialInstructions ? ` (Note: ${ci.specialInstructions})` : ''
          }`
      ),
      '',
      `*Subtotal:* ₦${subtotal.toLocaleString()}`,
      `*Packaging:* ₦${packagingFee.toLocaleString()}`,
      `*Delivery Fee:* ${deliveryFee === 0 ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}`,
      `*TOTAL AMOUNT:* ₦${total.toLocaleString()}`,
      '',
      'Please confirm my order and share estimated preparation & delivery time. Thank you!',
    ].filter((line) => line !== '');

    const message = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${message}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedDishForModal,
        setSelectedDishForModal,
        subtotal,
        deliveryFee,
        packagingFee,
        total,
        totalCount,
        generateWhatsAppOrderUrl,
        orderSuccessData,
        setOrderSuccessData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
