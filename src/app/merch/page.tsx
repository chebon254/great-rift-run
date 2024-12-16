"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  fadeInVariants,
} from "@/components/ScrollAnimations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import Stories from "@/components/Stories/Stories";
import Footer from "@/components/Footer/Footer";

function merch() {
  const [activeTab, setActiveTab] = React.useState("T-SHIRTS");

  const productData = [
    {
      category: "T-SHIRTS",
      products: [
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
        {
          name: "GRR PATRIOT4",
          price: 4000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR PATRIOT5",
          price: 5000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR PATRIOT6",
          price: 6000,
          image: "/products/shirts/mockup-shirt.png",
        },
      ],
    },

    {
      category: "HOODIES",
      products: [
        {
          name: "GRR HOODIE",
          price: 1000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR HOODIE2",
          price: 2000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR HOODIE3",
          price: 3000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR HOODIE4",
          price: 4000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR HOODIE5",
          price: 5000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR HOODIE6",
          price: 6000,
          image: "/products/shirts/mockup-shirt.png",
        },
      ],
    },
    {
      category: "CAPS",
      products: [
        {
          name: "GRR CAP",
          price: 1000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR CAP2",
          price: 2000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR CAP3",
          price: 3000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR CAP4",
          price: 4000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR CAP5",
          price: 5000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
          name: "GRR CAP6",
          price: 6000,
          image: "/products/shirts/mockup-shirt.png",
        },
      ],
    },
    {
      category: "WATER",
      products: [
        {
          name: "GRR WATER",
          price: 1000,
          image: "/products/shirts/mockup-shirt.png",
        },
        {
            name: "GRR WATER2",
            price: 2000,
            image: "/products/shirts/mockup-shirt.png",
          },
          {
            name: "GRR WATER3",
            price: 3000,
            image: "/products/shirts/mockup-shirt.png",
          },
          {
            name: "GRR WATER4",
            price: 4000,
            image: "/products/shirts/mockup-shirt.png",
          },
          {
            name: "GRR WATER5",
            price: 5000,
            image: "/products/shirts/mockup-shirt.png",
          },
          {
            name: "GRR WATER6",
            price: 6000,
            image: "/products/shirts/mockup-shirt.png",
          },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <div
        className="h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            <StaggerContainer staggerChildren={0.3}>
              <motion.h1
                variants={fadeInVariants}
                className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[40px] sm:text-[96px] md:text-[128px] text-[#14AE5C] leading-[64px] sm:leading-[96px] md:leading-[120px]"
              >
                RUN
              </motion.h1>
              <motion.h1
                variants={fadeInVariants}
                className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[40px] sm:text-[96px] md:text-[128px] text-[#EC221F] leading-[64px] sm:leading-[96px] md:leading-[120px]"
              >
                WITH
              </motion.h1>
              <motion.h1
                variants={fadeInVariants}
                className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[40px] sm:text-[96px] md:text-[128px] text-[#FFFFFF] leading-[64px] sm:leading-[96px] md:leading-[120px]"
              >
                CHAMPIONS
              </motion.h1>
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#FFFFFF] h-fits overflow-hidden" id="about-nav">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <StaggerContainer staggerChildren={0.3}>
            <motion.h1
              variants={fadeInVariants}
              className="text-center text-[#1B1B1A] font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-8"
            >
              OUR SELECTION
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-center text-[#1B1B1A] font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4"
            >
              Discover our merch designed premium lightweight fine fabric and
              material.
            </motion.p>
            <motion.p
              variants={fadeInVariants}
              className="text-center text-[#1B1B1A] font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4"
            >
              Inspired by the Samburu, each color has a meaning. Green for
              pasture, red for blood from their cattle (a symbol of wealth),
              yellow for harmony, blue means water, and white for purity. For
              the Iten Samburu, we took inspiration from the colors of the
              national flag, red, green,black and white
            </motion.p>
          </StaggerContainer>
        </div>
      </div>

      {/* Products */}
      <div className="bg-[#FFFFFF] h-fits overflow-hidden" id="products-nav">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <StaggerContainer staggerChildren={0.3}>
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8">
              {["T-SHIRTS", "HOODIES", "CAPS", "WATER"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-[family-name:var(--font-roboto-bold)] tracking-[1px] ${
                    activeTab === tab
                      ? "bg-[#434343] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {productData
                .find((data) => data.category === activeTab)
                ?.products.map((product) => (
                  <div
                    key={product.name}
                    className="bg-white rounded-md text-center"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-t-md mx-auto"
                    />
                    <div className="p-4 text-center">
                      <h3 className=" font-[family-name:var(--font-roboto-bold)] text-lg">{product.name}</h3>
                      <p className=" font-[family-name:var(--font-roboto-bold)] text-gray-600">KES {product.price}</p>
                      <button className="bg-[#14AE5C] hidden text-white px-4 py-2 mt-4">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </StaggerContainer>
        </div>
      </div>

      {/* Stories */}
      <Stories/>

      {/* Footer */}
      <Footer/>
    </>
  );
}

export default merch;
