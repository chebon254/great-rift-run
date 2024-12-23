"use client";

import * as React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import { useCart } from "@/context/CartContext";
import { useLocation } from "@/context/LocationContext";

function Payment() {
  const { items, totalPrice, clearCart } = useCart();
  const { location, clearLocation } = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState<'card' | 'mpesa'>('card');

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: items,
          shippingDetails: {
            firstName: location.firstName,
            lastName: location.lastName,
            phone: location.phone,
            email: location.email,
            city: location.city,
            street: location.street,
            house: location.house,
            additionalInfo: location.additionalInfo,
          },
          totalAmount: totalPrice + 0, // Including shipping
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Clear cart and location after successful order creation
        clearCart();
        clearLocation();
        // Redirect to Pesapal payment page
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <div
        className="h-[30vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            <div className="text-left text-[#FFFFFF] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              PAYMENT
            </div>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">Payment Details</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">3. Payment Method</h3>
            
            {/* Payment Method Selection */}
            <div className="space-y-4">
              <div 
                className={`border rounded-md p-4 cursor-pointer ${
                  paymentMethod === 'card' ? 'border-green-500' : ''
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="mr-2 h-[24px] w-[24px]" 
                  />
                  <div className="flex items-center gap-2">
                    <Image src="/visa.svg" alt="Visa" width={40} height={40} />
                    <Image src="/mastercard.svg" alt="Mastercard" width={40} height={40} />
                  </div>
                  <span className="ml-2 font-[family-name:var(--font-roboto-bold)]">Card Payment</span>
                </div>
              </div>

              <div 
                className={`border rounded-md p-4 cursor-pointer ${
                  paymentMethod === 'mpesa' ? 'border-green-500' : ''
                }`}
                onClick={() => setPaymentMethod('mpesa')}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    checked={paymentMethod === 'mpesa'}
                    onChange={() => setPaymentMethod('mpesa')}
                    className="mr-2 h-[24px] w-[24px]" 
                  />
                  <Image src="/mpesa.png" alt="M-Pesa" width={40} height={40} />
                  <span className="ml-2 font-[family-name:var(--font-roboto-bold)]">M-Pesa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">Order Summary</h3>
            <div className="mb-20">
              {items.map((item) => (
                <div key={`${item.id}-${item.size || item.capacity}`} className="flex items-center mb-4">
                  <Image
                    src={item.imageURL1 || "/50x50.png"}
                    height={48}
                    width={48}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <div className="ml-4">
                    <p className="font-[family-name:var(--font-roboto-bold)]">{item.name}</p>
                    <p>{item.category === "WATER" ? item.capacity : item.size}</p>
                  </div>
                  <p className="ml-auto font-[family-name:var(--font-roboto-bold)]">{item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p className="font-[family-name:var(--font-roboto-bold)]">KES {totalPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping</p>
              <p className="font-[family-name:var(--font-roboto-bold)]">KES 0</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-[family-name:var(--font-roboto-bold)]">Total</p>
              <p className="font-[family-name:var(--font-roboto-bold)]">
                KES {(totalPrice + 0).toLocaleString()}
              </p>
            </div>

            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full block text-center mt-6 mb-3 bg-[#14AE5C] hover:bg-green-700 text-white py-2 px-10 text-base font-semibold transition disabled:bg-gray-400"
            >
              {isLoading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </div>
      </div>

      <Socials />
      <Footer />
    </>
  );
}

export default Payment;