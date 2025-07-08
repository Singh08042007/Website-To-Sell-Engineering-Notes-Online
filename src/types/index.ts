// Common types used across the application
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}