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

function Stories() {
  return (
    <div>
      {/* Stories */}
      <div className="w-full bg-[#FFFFFF] py-10">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer staggerChildren={0.3}>
            <motion.h1
              variants={fadeInVariants}
              className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              STORIES FROM THE RIFT
            </motion.h1>
          </StaggerContainer>
          <ScrollReveal variant="fadeIn">
            <div className="flex items-center justify-evenly flex-wrap my-8">
              <div className="my-6 mx-4 h-fit w-[380px]">
                <div className="text-left">
                  <Image
                    src={"/story-1.png"}
                    height={320}
                    width={400}
                    alt="great rift run"
                    className="my-4"
                  />
                  <h3 className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-condensed-medium)] text-[32px] leading-none">
                    October 10, 2024
                  </h3>
                  <p className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-8 text-[32px] leading-normal">
                    THE HEAT OF THE MOMENT
                  </p>
                  <Link href={"#"} className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]">
                    READ MORE
                  </Link>
                </div>
              </div>
              <div className="my-6 mx-4 h-fit w-[380px]">
                <div className="text-left">
                  <Image
                    src={"/story-2.png"}
                    height={320}
                    width={400}
                    alt="great rift run"
                    className="my-4"
                  />
                  <h3 className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-condensed-medium)] text-[32px] leading-none">
                    October 10, 2024
                  </h3>
                  <p className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-8 text-[32px] leading-normal">
                    A CROSS COUNTRY EXPERIENCE
                  </p>
                  <Link href={"#"} className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]">
                    READ MORE
                  </Link>
                </div>
              </div>
              <div className="my-6 mx-4 h-fit w-[380px]">
                <div className="text-left">
                  <Image
                    src={"/story-3.png"}
                    height={320}
                    width={400}
                    alt="great rift run"
                    className="my-4"
                  />
                  <h3 className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-condensed-medium)] text-[32px] leading-none">
                    October 10, 2024
                  </h3>
                  <p className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-8 text-[32px] leading-normal">
                    BUCKET LIST - QUITE A MUDDY ENDING
                  </p>
                  <Link href={"#"} className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default Stories
