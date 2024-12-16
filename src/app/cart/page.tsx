"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";

function Cart() {
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
              CART
            </div>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="max-w-5xl mx-auto p-4 md:p-6 bg-white shadow-sm rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
          {/* Cart Items */}
          <div>
            <h2 className="font-bold text-lg mb-4">Your cart</h2>
            <div className="space-y-4">
              {/* Cart Item */}
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={"https://via.placeholder.com/60x60"}
                      height={64}
                      width={64}
                      alt="T-Shirt"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        GRR PATRIOT T-SHIRT SMALL
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-gray-700">2</span>
                    <span className="font-semibold text-gray-900">
                      KES 1,000
                    </span>
                    <button className="text-gray-600 hover:text-red-600 transition">
                      <Image
                        src={"/close-button-x.svg"}
                        height={24}
                        width={24}
                        alt="great rift run"
                        className="my-4"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-4 rounded-md">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">KES 2,000</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">KES 2,000</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>KES 4,000</span>
              </div>
            </div>
            <Link
              href={"/checkout"}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-10 text-lg font-semibold transition"
            >
              Checkout
            </Link>
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

export default Cart;
