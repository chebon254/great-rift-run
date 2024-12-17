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

          <div className="">
            <div className="relative">
              <div className="absolute top-0 right-0 border-[1px] border-[#14AE5C] py-1 px-[10px] font-[family-name:var(--font-roboto-bold)] text-[#14AE5C] text-lg">IN STOCK</div>
              <h2 className="text-2xl font-[family-name:var(--font-roboto-bold)] text-[#000000]">GRR PATRIOT</h2>
              <p className="text-[#303030] mt-[25px] text-lg font-[family-name:var(--font-roboto-regular)]">
                Designed premium lightweight fine fabric and material. Inspired
                by the Samburu, colors of blood and wealth.
              </p>
            </div>

            <div className="text-2xl mt-[40px] font-[family-name:var(--font-roboto-bold)] text-[#000000]">KES 1,000</div>

            <div className="my-10">
              <div className="flex items-center -gap-[1px] w-full">
                <button className="px-4 py-2 border hover:bg-green-600 hover:text-white transition w-1/5">
                  S
                </button>
                <button className="px-4 py-2 border hover:bg-green-600 hover:text-white transition w-1/5">
                  L
                </button>
                <button className="px-4 py-2 border hover:bg-green-600 hover:text-white transition w-1/5">
                  M
                </button>
                <button className="px-4 py-2 border hover:bg-green-600 hover:text-white transition w-1/5">
                  XL
                </button>
                <button className="px-4 py-2 border hover:bg-green-600 hover:text-white transition w-1/5">
                  XXL
                </button>
              </div>
            </div>

            <div className="my-10">
              <div className="flex items-center justify-between -gap-[1px] rounded-md w-full">
                <button className="px-2 py-4 border w-2/6 text-gray-700 hover:text-black">
                  &minus;
                </button>
                <div className="w-2/6 py-4 border text-center flex items-center justify-center">2</div>
                <button className="px-2 py-4 border w-2/6 text-gray-700 hover:text-black">
                  +
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600 my-10">
              <div className="flex items-center my-6 justify-between font-[family-name:var(--font-roboto-extrabold)] text-[20px]">
                <span>Color:</span>
                <span>RED GREEN PATRIOT</span>
              </div>
              <div className="flex items-center my-6 justify-between font-[family-name:var(--font-roboto-extrabold)] text-[20px]">
                <span>Material:</span>
                <span>100% COTTON</span>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-6 text-lg font-semibold hover:bg-green-700 transition">
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
