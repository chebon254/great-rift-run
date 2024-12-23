export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  size?: string;
  capacity?: string;
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  house: string;
  additionalInfo?: string;
}
