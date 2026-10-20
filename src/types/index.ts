import { MenuItem } from '../data/config';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CateringFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  location: string;
  message: string;
}
