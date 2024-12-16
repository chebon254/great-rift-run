"use client";

import { Founders } from "@/components/Founders/Founders";
import { ExperiencesCarousel } from "@/components/Programs/Programs";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  fadeInVariants,
} from "@/components/ScrollAnimations/ScrollReveal";
import Stories from "@/components/Stories/Stories";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";

export default function Home() {
  return (
    <>
      <div id="top-nav"></div>

      {/* Hero */}
      <div
        className="h-screen w-full bg-cover bg-center"
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

            <ScrollReveal variant="slideInLeft">
              <button className="bg-[#EC221F] text-[#FFFFFF] w-[240px] sm:w-[240px] md:w-[300px] p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 font-[family-name:var(--font-roboto-extrabold)] text-sm sm:text-base md:text-lg">
                JOIN THE GREAT RUN
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#1B1B1A] h-fits overflow-hidden" id="about-nav">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <StaggerContainer staggerChildren={0.3}>
            <motion.h1
              variants={fadeInVariants}
              className="text-center text-white font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-8"
            >
              ABOUT US
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-center text-white font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4"
            >
              Iten is situated in the west of Kenya, at an altitude of 8000ft
              above sea level. Iten is the perfect training environment for long
              distance runners, and has been referred regularly as, &ldquo;The
              Home of Champions.&rdquo;
            </motion.p>
            <motion.p
              variants={fadeInVariants}
              className="text-center text-white font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4"
            >
              We seek to provide this exceptional experience to you, in the
              Great Rift Valley.
            </motion.p>
          </StaggerContainer>
        </div>
        <ScrollReveal variant="fadeIn">
          <Founders />
        </ScrollReveal>
      </div>

      {/* Details */}
      <div
        className="w-full bg-cover bg-center py-40"
        style={{ backgroundImage: "url(/runners.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-evenly flex-wrap">
          <ScrollReveal variant="slideInLeft">
            <div className="py-10 px-5 text-center md:text-left">
              <h1 className="text-white font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">
                195
              </h1>
              <p className="text-white font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
                RUNNERS
              </p>
              <p className="text-white font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
                REGISTERED
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scaleUp">
            <div className="py-10 px-5 text-center md:text-left">
              <h1 className="text-white font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">
                5
              </h1>
              <p className="text-white font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
                EVENTS
              </p>
              <p className="text-white font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
                HELD
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideInRight">
            <div className="py-10 px-5 text-center md:text-left">
              <h1 className="text-white font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">
                100
              </h1>
              <p className="text-white font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
                MILES
              </p>
              <p className="text-white font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
                COVERED
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Details */}
      <div className="bg-[#009951] w-full">
        <div className="mx-auto max-w-7xl px-4 py-20">
          {/* Text Section */}
          <StaggerContainer staggerChildren={0.3}>
            <motion.p
              variants={fadeInVariants}
              className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4"
            >
              Iten is situated in the west of Kenya, at an altitude of 8000ft
              above sea level. Iten is the perfect training environment for long
              distance runners, and has been referred regularly as, &ldquo;The
              Home of Champions.&rdquo;
            </motion.p>
            <motion.p
              variants={fadeInVariants}
              className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4"
            >
              We at the Great Rift Run seek to provide an exceptional experience
              in the Great Rift Valley.
            </motion.p>
          </StaggerContainer>

          {/* Image Section */}
          <div className="flex items-center justify-center sm:justify-between mt-32 py-6 flex-wrap">
            <ScrollReveal variant="slideInLeft">
              <Image
                src="/bookingcom-logo.svg"
                width={331} // Optional, scales with height automatically
                height={56} // Optional, scales with width automatically
                alt="great rift run"
                className="my-4"
              />
            </ScrollReveal>

            <ScrollReveal variant="fadeIn">
              <Image
                src={"/Tripadvisor_Logo.svg"}
                height={64}
                width={300}
                alt="great rift run"
                className="my-4"
              />
            </ScrollReveal>

            <ScrollReveal variant="slideInRight">
              <Image
                src={"/Trustpilot_logo.svg"}
                height={64}
                width={281}
                alt="great rift run"
                className="my-4"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div id="programs-nav" className="bg-[#009951] w-full">
        <ExperiencesCarousel />
      </div>

      {/* Our experiences */}
      <div className="w-full bg-[#FFFFFF] py-10">
        <div className="mx-auto max-w-7xl px-4">
          <StaggerContainer staggerChildren={0.3}>
            <motion.h1
              variants={fadeInVariants}
              className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-3xl sm:text-4xl md:text-6xl lg:text-8xl"
            >
              OUR EXPERIENCES
            </motion.h1>
          </StaggerContainer>
          <ScrollReveal variant="scaleUp">
            <div className="my-[50px] flex items-center justify-center flex-wrap">
              <div className="m-3 h-[320px] w-[320px]">
                <Image
                  src={"/gallery-one.png"}
                  height={320}
                  width={320}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
              <div className="m-3 h-[320px] w-[320px]">
                <Image
                  src={"/gallery-two.png"}
                  height={320}
                  width={320}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
              <div className="m-3 h-[320px] w-[320px]">
                <Image
                  src={"/gallery-three.png"}
                  height={320}
                  width={320}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
              <div className="m-3 h-[320px] w-[320px]">
                <Image
                  src={"/gallery-four.png"}
                  height={320}
                  width={320}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
              <div className="m-3 h-[320px] w-[320px]">
                <Image
                  src={"/gallery-five.png"}
                  height={320}
                  width={320}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
              <div className="m-3 h-[320px] w-[320px]">
                <Image
                  src={"/gallery-six.png"}
                  height={320}
                  width={320}
                  alt="great rift run"
                  className="my-4"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#1E1E1E] w-full py-10">
        <div className="mx-auto max-w-7xl px-4 flex items-start justify-between flex-wrap">
          <div className="md:w-1/2 px-2 w-full">
            <StaggerContainer staggerChildren={0.3}>
              <motion.h1
                variants={fadeInVariants}
                className="text-left mt-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-6xl sm:text-4xl md:text-5xl lg:text-6xl leading-none"
              >
                JOIN THE BAND, EVERYONE&apos;S A WINNER
              </motion.h1>
            </StaggerContainer>
            <ScrollReveal variant="fadeIn">
              <Image
                src={"/quote.svg"}
                height={80}
                width={112}
                alt="great rift run"
                className="mt-[100px]"
              />
            </ScrollReveal>
            <ScrollReveal variant="fadeIn">
              <Testimonials />
            </ScrollReveal>
          </div>
          <div className="md:w-1/2 px-2 w-full">
            <ScrollReveal variant="slideInRight">
              <Image
                src={"/testimonial-runners.png"}
                height={896}
                width={624}
                alt="great rift run"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Stories */}
      <Stories/>

      {/* Socials */}
      <Socials/>

      {/* Footer */}
      <Footer/>
    </>
  );
}
