"use client";

import * as React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";

function Payment() {
  const products = [
    {
      name: "GRR PATRIOT",
      price: 1000,
      image: "/products/shirts/mockup-shirt.png",
    },
    {
      name: "GRR PATRIOT2",
      price: 2000,
      image: "/products/shirts/mockup-shirt.png",
    },
    {
      name: "GRR PATRIOT3",
      price: 3000,
      image: "/products/shirts/mockup-shirt.png",
    },
  ];

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
        <h2 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">Your cart</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">3. Payment Option</h3>
            <div className="border rounded-md p-4 mb-4">
              <div className="flex items-center mb-4">
                <input type="radio" name="payment" className="mr-2  h-[24px] w-[24px]" />
                <Image
                  src={"/mastercard.svg"}
                  height={40}
                  width={40}
                  alt="Mastercard"
                  className="mr-2"
                />
                <span className="font-[family-name:var(--font-roboto-bold)]">Debit/Credit Card</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-[#757575]  font-[family-name:var(--font-roboto-medium)]">Name</label>
                  <input
                    type="text"
                    placeholder="Cardashian Namur"
                    className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#757575]  font-[family-name:var(--font-roboto-medium)]">Card Number</label>
                  <input
                    type="text"
                    placeholder="1111-2222-3333-4444"
                    className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#757575]  font-[family-name:var(--font-roboto-medium)]">Expiry</label>
                  <input
                    type="text"
                    placeholder="12/12"
                    className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#757575]  font-[family-name:var(--font-roboto-medium)]">CCV</label>
                  <input
                    type="text"
                    placeholder="***"
                    className="font-[family-name:var(--font-roboto-regular)] placeholder-[#B3B3B3] focus:outline-none focus:border-[#14AE5C] text-base w-full border rounded-md p-2"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded-md p-4 mb-4 flex items-center">
              <input type="radio" name="payment" className="mr-2  h-[24px] w-[24px]" />
              <Image
                src={"/visa.svg"}
                height={48}
                  width={48}
                alt="Visa"
                className="mr-2"
              />
              <span className="font-[family-name:var(--font-roboto-bold)] ">Visa</span>
            </div>

            <div className="border rounded-md p-4 flex items-center">
              <input type="radio" name="payment" className="mr-2 h-[24px] w-[24px]" />
              <Image
                src={"/paypal.svg"}
                height={40}
                width={40}
                alt="PayPal"
                className="mr-2"
              />
              <span className="font-[family-name:var(--font-roboto-bold)] ">PayPal</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-[family-name:var(--font-roboto-bold)] mb-4">Order Summary</h3>
            <div className="mb-20">
              <div className="flex items-center mb-4">
              <Image
                src={"/50x50.png"}
                height={56}
                width={56}
                alt="T-shirt"
                className="w-14 h-14"
              />
              <div className="ml-4">
                <p className="font-[family-name:var(--font-roboto-bold)] ">GRR PATRIOT T-SHIRT</p>
                <p>SMALL</p>
              </div>
              <p className="ml-auto font-[family-name:var(--font-roboto-bold)] ">2</p>
            </div>
            </div>

            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p className="font-[family-name:var(--font-roboto-bold)] ">KES 2,000</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping</p>
              <p className="font-[family-name:var(--font-roboto-bold)] ">KES 2,000</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-[family-name:var(--font-roboto-bold)] ">Total</p>
              <p className="font-[family-name:var(--font-roboto-bold)] ">KES 4,000</p>
            </div>

            <button className="w-full block text-center mt-6 mb-3 bg-[#14AE5C] hover:bg-green-700 text-white py-2 px-10 text-base font-semibold transition">
              Proceed with Payment
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6  items-center justify-center hidden">
          <div className="text-center p-8">
            <Image 
            src={"/payment-success.svg"}
            height={200}
            width={200}
            alt="Payment Success"
            className="mx-auto my-4"
            />
            <h1 className="font-[family-name:var(--font-roboto-extrabold)] text-5xl">Thank you for ordering</h1>
            <p  className="font-[family-name:var(--font-roboto-medium)] text-lg mt-4">Your payment was successful. Reciept was sent to email. Order ID: <strong>234-323</strong></p>
            <div className="flex items-center justify-evenly w-fit mx-auto py-10">
              <button className="bg-[#14AE5C] mx-2 text-[#FFFFFF] py-3 px-10">VIEW ORDER</button>
              <button className="bg-[#FFFFFF] mx-2 border border-[#14AE5C] text-[#14AE5C] py-3 px-10">CONTINUE SHOPPING</button>
            </div>
          </div>
      </div>
      {/* Related */}
      <div className="mx-auto max-w-7xl w-full py-10">
        <h3 className="text-center font-[family-name:var(--font-roboto-medium)] my-5 text-[32px] leading-normal mt-4">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-md text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-t-md mx-auto"
              />
              <div className="p-4 text-center">
                <h3 className=" font-[family-name:var(--font-roboto-bold)] text-lg">
                  {product.name}
                </h3>
                <p className=" font-[family-name:var(--font-roboto-bold)] text-gray-600">
                  KES {product.price}
                </p>
                <button className="bg-[#14AE5C] hidden text-white px-4 py-2 mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Socials */}
      <Socials />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Payment;
