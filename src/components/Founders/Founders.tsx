import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Founders() {
  const items = [
    {
      imageSrc: "/eliud-kipchoge.png",
      name: "ELIUD KIPCHOGE",
      title: "World Marathon Champion",
    },
    {
      imageSrc: "/eliud-kipchoge.png",
      name: "ELIUD KIPCHOGE 2",
      title: "World Marathon Champion",
    },
    {
      imageSrc: "/eliud-kipchoge.png",
      name: "ELIUD KIPCHOGE 3",
      title: "World Marathon Champion",
    },
  ];

  return (
    <div className="mt-[240px] bg-[#FFFFFF] w-full pb-14 overflow-card">
      <div className="mx-auto max-w-7xl">
        <Carousel className="w-full px-4">
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card>
                  <CardContent className="-mt-[200px] w-full max-w-[400px] p-0 overflow-hidden -pt-2">
                    <Image
                      src={item.imageSrc}
                      height={400}
                      width={400}
                      alt={`Image of ${item.name}`}
                      className="align-middle -mt-2"
                    />
                    <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">
                      {item.name}
                    </h1>
                    <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">
                      {item.title}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between my-6 pt-3 pb-4 w-full">
            <CarouselPrevious
              imgSrc="/arrow-left.svg"
              className="bg-white hover:bg-white"
            ></CarouselPrevious>
            <CarouselNext
              imgSrc="/arrow-right.svg"
              className="bg-white hover:bg-white"
            ></CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
