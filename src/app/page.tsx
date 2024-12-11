import { Founders } from "@/components/Founders/Founders";
import { ExperiencesCarousel } from "@/components/Programs/Programs";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-fit absolute top-0 z-40">
      <div id="top-nav"></div>
      {/* Hero */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            {/* Headings */}
            <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[40px] sm:text-[96px] md:text-[128px] text-[#14AE5C] leading-[64px] sm:leading-[96px] md:leading-[120px]">
              RUN
            </h1>
            <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[40px] sm:text-[96px] md:text-[128px] text-[#EC221F] leading-[64px] sm:leading-[96px] md:leading-[120px]">
              WITH
            </h1>
            <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[40px] sm:text-[96px] md:text-[128px] text-[#FFFFFF] leading-[64px] sm:leading-[96px] md:leading-[120px]">
              CHAMPIONS
            </h1>

            {/* Button */}
            <button className="bg-[#EC221F] text-[#FFFFFF] w-[240px] sm:w-[240px] md:w-[300px] p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 font-[family-name:var(--font-roboto-extrabold)] text-sm sm:text-base md:text-lg">
              JOIN THE GREAT RUN
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#1B1B1A] h-fits overflow-hidden" id="about-nav">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h1 className="text-center text-white font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-8xl pb-8">
            ABOUT US
          </h1>
          <p className="text-center text-white font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4">
            Iten is situated in the west of Kenya, at an altitude of 8000ft
            above sea level. Iten is the perfect training environment for long
            distance runners, and has been referred regularly as, &ldquo;The
            Home of Champions.&rdquo;
          </p>
          <p className="text-center text-white font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4">
            We seek to provide this exceptional experience to you, in the Great
            Rift Valley.
          </p>
        </div>

        <Founders />
      </div>

      {/* Details */}
      <div
        className="w-full bg-cover bg-center py-40"
        style={{ backgroundImage: "url(/runners.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-evenly flex-wrap">
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
        </div>
      </div>

      {/* Details */}
      <div className="bg-[#009951] w-full">
        <div className="mx-auto max-w-7xl px-4 py-20">
          {/* Text Section */}
          <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4">
            Iten is situated in the west of Kenya, at an altitude of 8000ft
            above sea level. Iten is the perfect training environment for long
            distance runners, and has been referred regularly as, &ldquo;The
            Home of Champions.&rdquo;
          </p>
          <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-lg sm:text-xl md:text-2xl py-4">
            We at the Great Rift Run seek to provide an exceptional experience
            in the Great Rift Valley.
          </p>

          {/* Image Section */}
          <div className="flex items-center justify-center sm:justify-between mt-32 py-6 flex-wrap">
            <Image
              src="/bookingcom-logo.svg"
              width={331} // Optional, scales with height automatically
              height={56} // Optional, scales with width automatically
              alt="great rift run"
              className="my-4"
            />

            <Image
              src={"/Tripadvisor_Logo.svg"}
              height={64}
              width={300}
              alt="great rift run"
              className="my-4"
            />
            <Image
              src={"/Trustpilot_logo.svg"}
              height={64}
              width={281}
              alt="great rift run"
              className="my-4"
            />
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
          <h1 className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            OUR EXPERIENCES
          </h1>
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
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#1E1E1E] w-full py-10">
        <div className="mx-auto max-w-7xl px-4 flex items-start justify-between flex-wrap">
          <div className="md:w-1/2 px-2 w-full">
            <h1 className="text-left mt-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-6xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
              JOIN THE BAND, EVERYONE&apos;S A WINNER
            </h1>
            <Image
              src={"/quote.svg"}
              height={80}
              width={112}
              alt="great rift run"
              className="mt-[100px]"
            />
            <Testimonials/>
          </div>
          <div className="md:w-1/2 px-2 w-full">
            <Image
              src={"/testimonial-runners.png"}
              height={896}
              width={624}
              alt="great rift run"
            />
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="w-full bg-[#FFFFFF] py-10">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            STORIES FROM THE RIFT
          </h1>
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
                <button className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]">
                  READ MORE
                </button>
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
                <button className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]">
                  READ MORE
                </button>
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
                <button className="bg-[#EC221F] text-[#FFFFFF] w-fit py-4 px-6 font-[family-name:var(--font-roboto-extrabold)]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catch Us */}
      <div
        id="contact-nav"
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/Socials.png)" }}
      >
        <div className="w-full h-full py-5">
          <h1 className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-medium)] my-5 text-[32px] leading-normal">
            CATCH US ON
          </h1>
          <div className="mx-auto flex items-center my-8 justify-evenly w-[200px]">
            <Link href={""}>
              <Image
                src={"/facebook.svg"}
                height={40}
                width={25}
                alt="great rift run"
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/instagram.svg"}
                height={40}
                width={35}
                alt="great rift run"
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/x-twitter.svg"}
                height={40}
                width={40}
                alt="great rift run"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
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
    </main>
  );
}
