import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const testimonies = [
    {
      imageSrc: "/profile.png",
      name: "John Demure",
      title: "Columbia Business School Grad",
      description: "Adventurer, Traveler, World-seer",
      testimony:
        "Great Rift Run is a running experience, for all walks of life. We banded together, and it was fun to experience the run.",
    },
    {
      imageSrc: "/profile.png",
      name: "John Demure 2",
      title: "Columbia Business School Grad",
      description: "Adventurer, Traveler, World-seer",
      testimony:
        "Great Rift Run is a running experience, for all walks of life. We banded together, and it was fun to experience the run.",
    },
    {
      imageSrc: "/profile.png",
      name: "John Demure 3",
      title: "Columbia Business School Grad",
      description: "Adventurer, Traveler, World-seer",
      testimony:
        "Great Rift Run is a running experience, for all walks of life. We banded together, and it was fun to experience the run.",
    },
  ];

  return (
    <div className="m-0 p-0">
      <div className="p-0">
        <div className="testimonials-carousel">
          <Carousel className="w-full overflow-hidden">
            <CarouselContent>
              {testimonies.map((testimony, index) => (
                <CarouselItem key={index} className="testimony-item">
                  <p className="mt-4 text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-medium)] text-lg sm:text-lg md:text-xl lg:text-2xl leading-normal">
                    {testimony.testimony}
                  </p>
                  <div className="flex items-center justify-start mt-4">
                    <div className="w-[60px] sm:w-[70px] md:w-[128px] flex items-center justify-start">
                      <Image
                        src={testimony.imageSrc}
                        height={128}
                        width={128}
                        alt={`Image of ${testimony.name}`}
                        className="border-2 sm:border-4 md:border-8 border-[#009951] rounded-full sm:mb-4 w-full"
                      />
                    </div>
                    <div className="ml-5">
                      <h2 className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-medium)] text-xl sm:text-lg md:text-xl lg:text-3xl leading-none">
                        {testimony.name}
                      </h2>
                      <p className="text-left text-[#FFFFFF] mt-3 mb-1 font-[family-name:var(--font-roboto-medium)] text-base sm:text-lg md:text-xl lg:text-2xl leading-none">
                        {testimony.title}
                      </p>
                      <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-medium)] text-base sm:text-lg md:text-xl lg:text-2xl leading-none">
                        {testimony.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end my-12">
              <div className="flex items-center justify-center">
                <CarouselPrevious
                  imgSrc="/arrow-left-white.svg"
                  className="bg-[#009951] hover:bg-[#009951] h-[68px] w-[74px] mx-3 flex items-center justify-center rounded-none"
                ></CarouselPrevious>
                <CarouselNext
                  imgSrc="/arrow-right-white.svg"
                  className="bg-[#009951] hover:bg-[#009951] h-[68px] w-[74px] mx-3 flex items-center justify-center rounded-none"
                ></CarouselNext>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
