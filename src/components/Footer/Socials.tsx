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

function Socials() {
  return (
    <>
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
    </>
  )
}

export default Socials
