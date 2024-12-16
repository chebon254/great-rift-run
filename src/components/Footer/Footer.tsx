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

function Footer() {
  return (
    <div>

      {/* Catch Us */}
      <div
        id="contact-nav"
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/Socials.png)" }}
      >
        <div className="w-full h-full py-5">
          <StaggerContainer staggerChildren={0.3}>
            <motion.h1
              variants={fadeInVariants}
              className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-medium)] my-5 text-[32px] leading-normal"
            >
              CATCH US ON
            </motion.h1>
          </StaggerContainer>
          <div className="mx-auto flex items-center my-8 justify-evenly w-[200px]">
            <ScrollReveal variant="slideInLeft">
              <Link href={""}>
                <Image
                  src={"/facebook.svg"}
                  height={40}
                  width={25}
                  alt="great rift run"
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="scaleUp">
              <Link href={""}>
                <Image
                  src={"/instagram.svg"}
                  height={40}
                  width={35}
                  alt="great rift run"
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="slideInRight">
              <Link href={""}>
                <Image
                  src={"/x-twitter.svg"}
                  height={40}
                  width={40}
                  alt="great rift run"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Footer */}
      <ScrollReveal variant="fadeIn">
        <footer className="bg-white my-8 py-8 px-4 md:px-16">
          <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-start">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="font-bold text-lg text-black text-center md:text-left">
                <Image
                  src={"/footer-logo.svg"}
                  height={64}
                  width={174}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
            </div>

            {/* Explore Section */}
            <div className="my-6 md:my-0">
              <h3 className="text-left text-[#1E1E1E] mb-4 font-[family-name:var(--font-roboto-bold)] text-[32px]">
                Explore
              </h3>
              <ul className="mt-2 text-center md:text-left">
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <a href="#home">Home</a>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <a href="#about">About</a>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <a href="#programs">Programs</a>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <a href="#faq">FAQ</a>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-left text-[#1E1E1E] mb-4 font-[family-name:var(--font-roboto-bold)] text-[32px]">
                Contact Us
              </h3>
              <ul className="mt-2 text-center md:text-left">
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 text-[24px] leading-none">
                  +1 (555) 678 980
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 text-[24px] leading-none">
                  +254712 345678
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  )
}

export default Footer
