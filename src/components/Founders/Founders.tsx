"use client"
import { useState, useRef } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      image: "/eliud-kipchoge.png",
      title: "ELIUD KIPCHOGE",
      description: "World Marathon Champion"
    },
    {
      image: "/eliud-kipchoge.png",
      title: "ELIUD KIPCHOGE",
      description: "World Marathon Champion"
    },
    {
      image: "/eliud-kipchoge.png",
      title: "ELIUD KIPCHOGE",
      description: "World Marathon Champion"
    }
  ];

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="mt-[240px] bg-[#FFFFFF] w-full pb-14">
      <div className=" mx-auto max-w-7xl">
        <div className="flex items-center justify-evenly mb-6">
          <div className="relative w-full overflow-x-hidden">
            <div
              className="flex transition-transform duration-300 -mt-[200px] ease-in-out"
              ref={cardRef}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col items-center"
                >
                  <Image
                    src={card.image}
                    height={400}
                    width={400}
                    alt="great rift run eliud kipchoge"
                  />
                  <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">
                    {card.title}
                  </h1>
                  <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-6 pt-3 pb-4 w-full">
          <button onClick={goToPrev}>
            <Image
              src="/arrow-left.svg"
              height={48}
              width={42}
              alt="left arrow"
            />
          </button>
          <button onClick={goToNext}>
            <Image
              src="/arrow-right.svg"
              height={48}
              width={42}
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
