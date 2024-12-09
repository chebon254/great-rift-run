import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-fit absolute top-0 z-40">
      {/* Hero */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl h-full flex justify-center items-center">
          <div className="h-fit text-left w-full">
            <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#14AE5C] leading-[120px]">
              RUN
            </h1>
            <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#EC221F] leading-[120px]">
              WITH
            </h1>
            <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#FFFFFF] leading-[120px]">
              CHAMPIONS
            </h1>
            <button className="bg-[#EC221F] text-[#FFFFFF] w-[300px] p-8 mt-16 font-[family-name:var(--font-roboto-extrabold)]">
              JOIN THE GREAT RUN
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#1B1B1A] h-fits">
        <div className="mx-auto max-w-7xl py-20">
          <h1 className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[80px] pb-8">
            ABOUT US
          </h1>
          <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[24px] py-4">
            Iten is situated in the west of Kenya, at an altitude of 8000ft
            above sea level. Iten is the perfect training environment for long
            distance runners, and has been referred regularly as, &ldquo;The
            Home of Champions.&rdquo;
          </p>
          <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[24px] py-4">
            We seek to provide this exceptional experience to you, in the Great
            Rift Valley.
          </p>
        </div>
        <div className="mt-[240px] bg-[#FFFFFF] w-full pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-evenly mb-6">
              <div className="-mt-[200px]">
                <Image
                  src={"/eliud-kipchoge.png"}
                  height={400}
                  width={400}
                  alt="great rift run eliud kipchoge"
                />
                <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">
                  ELIUD KIPCHOGE
                </h1>
                <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">
                  World Marathon Champion
                </p>
              </div>
              <div className="-mt-[200px]">
                <Image
                  src={"/eliud-kipchoge.png"}
                  height={400}
                  width={400}
                  alt="great rift run eliud kipchoge"
                />
                <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">
                  ELIUD KIPCHOGE
                </h1>
                <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">
                  World Marathon Champion
                </p>
              </div>
              <div className="-mt-[200px]">
                <Image
                  src={"/eliud-kipchoge.png"}
                  height={400}
                  width={400}
                  alt="great rift run eliud kipchoge"
                />
                <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">
                  ELIUD KIPCHOGE
                </h1>
                <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">
                  World Marathon Champion
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between my-6 pt-3 pb-4 w-full">
              <button>
                <Image
                  src={"/arrow-left.svg"}
                  height={48}
                  width={42}
                  alt="great rift run"
                />
              </button>
              <button>
                <Image
                  src={"/arrow-right.svg"}
                  height={48}
                  width={42}
                  alt="great rift run"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        className="w-full bg-cover bg-center py-40"
        style={{ backgroundImage: "url(/runners.png)" }}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-evenly flex-wrap">
          <div className="py-10 px-5">
            <h1 className="text-left text-[#FFFFFF] font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">
              195
            </h1>
            <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
              RUNNERS
            </p>
            <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
              REGISTERED
            </p>
          </div>
          <div className="py-10 px-5">
            <h1 className="text-left text-[#FFFFFF] font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">
              5
            </h1>
            <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
              EVENTS
            </p>
            <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
              HELD
            </p>
          </div>
          <div className="py-10 px-5">
            <h1 className="text-left text-[#FFFFFF] font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">
              100
            </h1>
            <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
              MILES
            </p>
            <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">
              COVERED
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-[#009951] w-full">
        <div className="mx-auto max-w-7xl py-20">
          <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[24px] py-4">
            Iten is situated in the west of Kenya, at an altitude of 8000ft
            above sea level. Iten is the perfect training environment for long
            distance runners, and has been referred regularly as, &ldquo;The
            Home of Champions.&rdquo;
          </p>
          <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[24px] py-4">
            We at the Great Rift Run seek to provide an exceptional experience
            in the Great Rift Valley.
          </p>
          <div className="flex items-center justify-between mt-32 py-6 flex-wrap">
            <Image
              src={"/bookingcom-logo.svg"}
              height={46}
              width={330}
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
      <div className="bg-[#009951] w-full">
        <div className="mx-auto max-w-7xl pt-10 pb-20">
          <h1 className="text-center mt-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[80px] leading-none">
            PROGRAM
          </h1>
          <p className="text-center my-8 text-[#FFFFFF] font-[family-name:var(--font-roboto-extrabold)] text-[40px] leading-none">
            THE BEST SPORTING GETAWAY EXPERIENCE
          </p>
          <div className="flex items-center justify-evenly my-8">
            <div
              className="h-[560px] w-[400px] p-6 relative"
              style={{ backgroundImage: "url(/card-one.png)" }}
            >
              <div className="text-left absolute bottom-6">
                <h2 className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[32px] leading-none">
                  RUN WITH LEGENDS
                </h2>
                <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] my-6 text-[20px] leading-normal">
                  Run and train fully guided by coaches, workouts and gym
                  facilities
                </p>
                <button className="bg-[#EC221F] text-[#FFFFFF] w-[300px] py-4 px-6 mt-4 font-[family-name:var(--font-roboto-extrabold)]">
                  JOIN NOW
                </button>
              </div>
            </div>
            <div
              className="h-[560px] w-[400px] p-6 relative"
              style={{ backgroundImage: "url(/card-one.png)" }}
            >
              <div className="text-left absolute bottom-6">
                <h2 className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[32px] leading-none">
                  OPEN SEASON COURSE
                </h2>
                <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] my-6 text-[20px] leading-normal">
                  Represent your country in the great rift running course
                  challenge!
                </p>
                <button className="bg-[#EC221F] text-[#FFFFFF] w-[300px] py-4 px-6 mt-4 font-[family-name:var(--font-roboto-extrabold)]">
                  JOIN NOW
                </button>
              </div>
            </div>
            <div
              className="h-[560px] w-[400px] p-6 relative"
              style={{ backgroundImage: "url(/card-one.png)" }}
            >
              <div className="text-left absolute bottom-6">
                <h2 className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[32px] leading-none">
                  SCHOOL CAMP
                </h2>
                <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] my-6 text-[20px] leading-normal">
                  Premier camps with great views of the Rift Valley, perfect for
                  holiday
                </p>
                <button className="bg-[#EC221F] text-[#FFFFFF] w-[300px] py-4 px-6 mt-4 font-[family-name:var(--font-roboto-extrabold)]">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between my-6 py-8 w-full">
            <button>
              <Image
                src={"/arrow-left-white.svg"}
                height={48}
                width={42}
                alt="great rift run"
              />
            </button>
            <button>
              <Image
                src={"/arrow-right-white.svg"}
                height={48}
                width={42}
                alt="great rift run"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Our experiences */}
      <div className="w-full bg-[#FFFFFF] py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-[94px]">
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
      <div className="bg-[#1E1E1E] w-full">
        <div className="mx-auto max-w-7xl"></div>
      </div>

      {/* Stories */}
      <div className="w-full bg-[#FFFFFF] py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-[#303030] my-10 font-[family-name:var(--font-roboto-bold)] text-[94px]">
            STORIES FROM THE RIFT
          </h1>
          <div className="flex items-center justify-evenly my-8">
            <div className="my-6 mx-8 h-fit w-[400px]">
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
            <div className="my-6 mx-8 h-fit w-[400px]">
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
            <div className="my-6 mx-8 h-fit w-[400px]">
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
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: "url(/Socials.png)" }}>
        <div className="w-full h-full py-5">
          <h1 className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-medium)] my-5 text-[32px] leading-normal">CATCH US ON</h1>
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
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start">
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
              <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 text-[24px] leading-none">+1 (555) 678 980</li>
              <li className="text-left text-[#1E1E1E] font-[family-name:var(--font-roboto-medium)] my-3 text-[24px] leading-none">+254712 345678</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
