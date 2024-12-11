import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ExperiencesCarousel() {
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
    <div className="mx-auto max-w-7xl pt-10 pb-20">
        <h1 className="text-center mt-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)]  text-3xl sm:text-4xl md:text-6xl lg:text-8xl leading-none">
            PROGRAM
          </h1>
          <p className="text-center my-4 sm:my-6 md:my-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-extrabold)] text-[16px] sm:text-[20px] md:[40px] lg:text-[40px]] leading-none">
            THE BEST SPORTING GETAWAY EXPERIENCE
          </p>
      <Carousel className="w-full px-4">
        <CarouselContent className="flex justify-evenly gap-6">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className=" h-[560px] w-full min-w-[280px] max-w-[400px] bg-cover bg-center relative pt-6 pb-4 px-4"
              style={{ backgroundImage: item.backgroundImage }}
            >
              <div className="w-full max-w-[368px] absolute bottom-6 text-left px-2 py-4">
                <h2 className="text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[32px] leading-none">
                  {item.title}
                </h2>
                <p className="text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] my-6 text-[20px] leading-normal">
                  {item.description}
                </p>
                <button className="bg-[#EC221F] text-[#FFFFFF] w-full min-w-[140px] max-w-[300px] py-4 px-6 mt-4 font-[family-name:var(--font-roboto-extrabold)]">
                  {item.buttonText}
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between my-6 py-8 w-full">
          <CarouselPrevious imgSrc="/arrow-left-white.svg" className="bg-[#009951] hover:bg-[#009951]"></CarouselPrevious>
          <CarouselNext imgSrc="/arrow-right-white.svg" className="bg-[#009951] hover:bg-[#009951]"></CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
