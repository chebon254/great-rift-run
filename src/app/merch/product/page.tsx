"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";

function productDetail() {
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
            <Link href={"/merch"} className="flex items-center justify-start">
              <Image
                src={"/arrow-left-white.svg"}
                height={54}
                width={64}
                alt="Great Rift Run"
                className="pr-3"
              />
              <div className="text-center text-[#FFFFFF] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                MERCH/T-SHIRTS
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-md p-6 w-full">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/300x300.png"
                height={300}
                width={300}
                alt="GRR Patriot T-Shirt"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 h-[48px] w-[54px] rounded-sm p-2 cursor-pointer flex items-center justify-center">
                <Image
                  src={"/left-grey-arrow.svg"}
                  height={25}
                  width={32}
                  alt="Great Rift Run"
                />
              </div>
              <div className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 h-[48px] w-[54px] rounded-sm p-2 cursor-pointer flex items-center justify-center">
                <Image
                  src={"/right-grey-arrow.svg"}
                  height={25}
                  width={32}
                  alt="Great Rift Run"
                />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Image
                src="/60x60.png"
                height={60}
                width={60}
                alt="Thumbnail"
                className="w-20 h-20 border-2 border-green-600 rounded-md cursor-pointer"
              />
              <Image
                src="/60x60.png"
                height={60}
                width={60}
                alt="Thumbnail"
                className="w-20 h-20 border-2 rounded-md cursor-pointer"
              />
              <Image
                src="/60x60.png"
                height={60}
                width={60}
                alt="Thumbnail"
                className="w-20 h-20 border-2 rounded-md cursor-pointer"
              />
              <Image
                src="/60x60.png"
                height={60}
                width={60}
                alt="Thumbnail"
                className="w-20 h-20 border-2 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">GRR PATRIOT</h2>
              <p className="text-gray-600 text-sm mt-2">
                Designed premium lightweight fine fabric and material. Inspired
                by the Samburu, colors of blood and wealth.
              </p>
            </div>

            <div className="text-2xl font-bold text-gray-900">KES 1,000</div>

            <div>
              <h4 className="text-gray-700 mb-2">Size</h4>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border rounded-md hover:bg-green-600 hover:text-white transition">
                  S
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-green-600 hover:text-white transition">
                  L
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-green-600 hover:text-white transition">
                  M
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-green-600 hover:text-white transition">
                  XL
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-green-600 hover:text-white transition">
                  XXL
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-gray-700 mb-2">Quantity</h4>
              <div className="flex items-center gap-2 border rounded-md w-max px-4 py-2">
                <button className="px-2 text-gray-700 hover:text-black">
                  &minus;
                </button>
                <span>2</span>
                <button className="px-2 text-gray-700 hover:text-black">
                  +
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-semibold">Color:</span>
                RED GREEN PATRIOT
              </p>
              <p>
                <span className="font-semibold">Material:</span>
                100% COTTON
              </p>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition">
              Add to Cart
            </button>
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

export default productDetail;
