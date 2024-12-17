"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";

function Checkout() {
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
              CHECKOUT
            </div>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-lg font-bold mb-4">Your cart</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              1. Contact Information
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Checkout"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Nameson"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="555-555"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">2. Delivery</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Delivery Date</label>
                <input
                  type="text"
                  placeholder="November 25th, 2024"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="text"
                  placeholder="11:00AM - 1:00PM"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">City</label>
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex items-center mb-4">
              <Image
                src={"/50x50.png"}
                height={48}
                width={48}
                alt="T-shirt"
                className="w-12 h-12 rounded"
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

            <Link href={"/payment"} className="w-full bg-green-500 px-10 text-white py-2">
              Proceed with Payment
            </Link>
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

export default Checkout;
