// src/app/cart/page.tsx

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import { useCart } from "@/context/CartContext";

function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

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
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          {/* Cart Items */}
          <div>
            <h2 className="font-[family-name:var(--font-roboto-bold)] text-lg mb-4">
              Your cart ({items.length} items)
            </h2>
            <div className="space-y-4">
              {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.id}-${item.size || item.capacity}`}
                    className="flex items-center justify-between border-b pb-2 font-[family-name:var(--font-roboto-extrabold)]"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.imageURL1 || "/60x60.png"}
                        height={64}
                        width={64}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-[family-name:var(--font-roboto-bold)] text-gray-800">
                          {item.name}
                        </p>
                        <p className="font-semibold text-gray-800">
                          {item.category === "WATER"
                            ? item.capacity
                            : item.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 text-center border rounded-md"
                      />
                      <span className="font-semibold text-gray-900">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-600 hover:text-red-600 transition"
                      >
                        <Image
                          src={"/close-button-x.svg"}
                          height={24}
                          width={24}
                          alt="Remove"
                          className="my-4"
                        />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-4 mt-5 rounded-md">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="mb-2 w-full mt-14 text-gray-700">
              <div className="flex justify-between my-3">
                <span>Subtotal</span>
                <span className="font-semibold">
                  KES {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between my-3">
                <span>Shipping</span>
                <span className="font-semibold">KES 0</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-gray-900 my-3">
                <span>Total</span>
                <span>KES {(totalPrice + 0).toLocaleString()}</span>
              </div>
              <Link
                href={items.length > 0 ? "/checkout" : "#"}
                className={`w-full block text-center mt-6 mb-3 ${
                  items.length > 0
                    ? "bg-[#14AE5C] hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white py-2 px-10 text-lg font-semibold transition`}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Socials />
      <Footer />
    </>
  );
}

export default Cart;
