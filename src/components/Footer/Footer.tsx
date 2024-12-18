"use client";

import * as React from "react";
import {
  ScrollReveal,
} from "@/components/ScrollAnimations/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
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
                  <Link href="#home">Home</Link>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <Link href="/Tracking">Track Order</Link>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <Link href="#programs">Programs</Link>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <Link href="#faq">FAQ</Link>
                </li>
                <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 uppercase text-[24px] leading-none">
                  <Link href="#blog">Blog</Link>
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
    </>
  )
}

export default Footer
