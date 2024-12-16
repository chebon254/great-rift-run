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
        <h2 className="text-lg font-bold mb-4">Your cart</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">3. Payment Option</h3>
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
                <span className="font-semibold">Debit/Credit Card</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Cardashian Namur"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1111-2222-3333-4444"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Expiry</label>
                  <input
                    type="text"
                    placeholder="12/12"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">CCV</label>
                  <input
                    type="text"
                    placeholder="***"
                    className="w-full border rounded-md p-2"
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
              <span className="font-semibold">Visa</span>
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
              <span className="font-semibold">PayPal</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex items-center mb-4">
              <Image
                src="https://via.placeholder.com/50"
                alt="T-shirt"
                className="w-14 h-14"
              />
              <div className="ml-4">
                <p className="font-semibold">GRR PATRIOT T-SHIRT</p>
                <p>SMALL</p>
              </div>
              <p className="ml-auto font-semibold">2</p>
            </div>

            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p className="font-semibold">KES 2,000</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping</p>
              <p className="font-semibold">KES 2,000</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">KES 4,000</p>
            </div>

            <button className="w-full bg-green-500 text-white py-2">
              Proceed with Payment
            </button>
          </div>
        </div>
      </div>
      {/* Related */}
      <div className="mx-auto max-w-7xl w-full py-10">
        <h3 className="text-center font-[family-name:var(--font-roboto-medium)] my-5 text-[32px] leading-normal mt-4">
          Related Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
