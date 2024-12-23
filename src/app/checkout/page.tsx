"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import { useCart } from "@/context/CartContext";
import { useLocation } from "@/context/LocationContext";

function Checkout() {
  const router = useRouter();
  const { items, totalPrice } = useCart();
  const { updateLocation } = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    street: "",
    house: "",
    additionalInfo: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save all form data to location context
    updateLocation(formData);
    // Navigate to payment page
    router.push('/payment');
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
              CHECKOUT
            </div>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="max-w-4xl mx-auto p-6 py-20">
        <h2 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">Your cart</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            {/* Contact Information */}
            <h3 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">
              1. Contact Information
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
            </div>

            {/* Delivery Information */}
            <h3 className="text-lg font-semibold font-[family-name:var(--font-roboto-bold)] mb-4">
              2. Delivery Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  City/Town
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  Street Name
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder="Enter street name"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  House/Building
                </label>
                <input
                  type="text"
                  name="house"
                  value={formData.house}
                  onChange={handleInputChange}
                  placeholder="House or building name"
                  required
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#757575] font-[family-name:var(--font-roboto-medium)]">
                  Additional Information
                </label>
                <input
                  type="text"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Landmarks, delivery instructions, etc."
                  className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="pb-20">
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
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.category === "WATER" ? item.capacity : item.size}</p>
                  </div>
                  <p className="ml-auto font-semibold">{item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p className="font-semibold">KES {totalPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Delivery Fee</p>
              <p className="font-semibold">KES {0}</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Total</p>
              <p className="font-semibold">KES {totalPrice + (0)}</p>
            </div>
            <button
              type="submit"
              className="px-8 w-full py-3 bg-green-600 hover:bg-green-800 transition-all rounded-md text-white font-semibold"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>

        <Socials />
      <Footer />
    </>
  );
}

export default Checkout;
