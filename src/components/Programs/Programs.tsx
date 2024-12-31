"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  fadeInVariants,
} from "@/components/ScrollAnimations/ScrollReveal";
import { useState } from "react";
import ContactForm from "../Form/Contact";

export function ExperiencesCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => setIsVisible(!isVisible);

  const items = [
    {
      backgroundImage: "url(/card-one.png)",
      title: "RUN WITH LEGENDS",
      description:
        "Run and train fully guided by coaches, workouts and gym facilities",
      buttonText: "JOIN NOW",
    },
    {
      backgroundImage: "url(/card-two.png)",
      title: "OPEN SEASON COURSE",
      description:
        "Represent your country in the great rift running course challenge!",
      buttonText: "JOIN NOW",
    },
    {
      backgroundImage: "url(/card-three.png)",
      title: "SCHOOL CAMP",
      description:
        "Premier camps with great views of the Rift Valley, perfect for holiday",
      buttonText: "JOIN NOW",
    },
  ];

  return (
    <>
      {/* Modal */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000033] z-50">
          <div className="p-6 w-full max-w-[600px] rounded shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 z-50 right-2 text-xl flex items-center justify-center bg-red-500 hover:bg-red-400  text-white h-9 w-9 rounded-full p-2"
            >
              ✕
            </button>
            <ContactForm />
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl w-full pt-10 pb-20 overflow-hidden">
        <StaggerContainer staggerChildren={0.3}>
          <motion.h1
            variants={fadeInVariants}
            className="text-center mt-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)]  text-3xl sm:text-4xl md:text-6xl lg:text-8xl leading-none"
          >
            PROGRAM
          </motion.h1>
          <motion.p
            variants={fadeInVariants}
            className="text-center my-4 sm:my-6 md:my-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-extrabold)] text-[16px] sm:text-[20px] md:[40px] lg:text-[40px]] leading-none"
          >
            THE BEST SPORTING GETAWAY EXPERIENCE
          </motion.p>
        </StaggerContainer>
        <ScrollReveal variant="fadeIn">
          <Carousel className="w-full px-4">
            <CarouselContent className="flex justify-evenly gap-6">
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" h-[560px] w-full min-w-[260px] max-w-[400px] bg-cover bg-center relative pt-6 pb-4 px-4"
                  style={{ backgroundImage: item.backgroundImage }}
                >
                  <div className="w-full max-w-[368px] absolute bottom-6 left-0 text-left px-4 py-4">
                    <h2 className="text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[32px] leading-none">
                      {item.title}
                    </h2>
                    <p className="text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] my-6 text-[20px] leading-normal">
                      {item.description}
                    </p>
                    <button
                      onClick={toggleModal}
                      className="bg-[#EC221F] text-[#FFFFFF] w-full min-w-[120px] max-w-[300px] py-4 px-6 mt-4 font-[family-name:var(--font-roboto-extrabold)]"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-between my-6 py-8 w-full">
              <CarouselPrevious
                imgSrc="/arrow-left-white.svg"
                className="bg-[#009951] hover:bg-[#009951]"
              ></CarouselPrevious>
              <CarouselNext
                imgSrc="/arrow-right-white.svg"
                className="bg-[#009951] hover:bg-[#009951]"
              ></CarouselNext>
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </>
  );
}
