import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-fit absolute top-0 z-40">
        {/* Hero */}
        <div className="h-screen w-full bg-cover bg-center" style={{backgroundImage: 'url(/hero-image.png)'}}>
          <div className="mx-auto max-w-7xl h-full flex justify-center items-center">
            <div className="h-fit text-left w-full">
              <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#14AE5C] leading-[120px]">RUN</h1>
              <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#EC221F] leading-[120px]">WITH</h1>
              <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#FFFFFF] leading-[120px]">CHAMPIONS</h1>
              <button className="bg-[#EC221F] text-[#FFFFFF] w-[300px] p-8 mt-16 font-[family-name:var(--font-roboto-extrabold)]">JOIN THE GREAT RUN</button>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-[#1B1B1A] h-fits">
          <div className="mx-auto max-w-7xl py-20">
            <h1 className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[80px] pb-8">ABOUT US</h1>
            <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[24px] py-4">Iten is situated in the west of Kenya, at an altitude of 8000ft above sea level. Iten is the perfect training environment for long distance runners, and has been referred regularly as,  &ldquo;The Home of Champions.&rdquo;</p>
            <p className="text-center text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[24px] py-4">We seek to provide this exceptional experience to you, in the Great Rift Valley.</p>
          </div>
          <div className="mt-[240px] bg-[#FFFFFF] w-full pb-14">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-evenly mb-6">
                  <div className="-mt-[200px]">
                    <Image src={'/eliud-kipchoge.png'} height={400} width={400} alt="great rift run eliud kipchoge"/>
                    <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">ELIUD KIPCHOGE</h1>
                    <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">World Marathon Champion</p>
                  </div>
                  <div className="-mt-[200px]">
                    <Image src={'/eliud-kipchoge.png'} height={400} width={400} alt="great rift run eliud kipchoge"/>
                    <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">ELIUD KIPCHOGE</h1>
                    <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">World Marathon Champion</p>
                  </div>
                  <div className="-mt-[200px]">
                    <Image src={'/eliud-kipchoge.png'} height={400} width={400} alt="great rift run eliud kipchoge"/>
                    <h1 className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[36px] py-6 leading-[40px]">ELIUD KIPCHOGE</h1>
                    <p className="text-left text-[#000000] font-[family-name:var(--font-roboto-bold)] text-[24px] leading-[24px]">World Marathon Champion</p>
                  </div>
                </div>
                <div className="flex items-center justify-between my-6 pt-3 pb-4 w-full">
                    <button>
                      <Image src={'/arrow-left.svg'} height={48} width={42} alt="great rift run"/>
                    </button>
                    <button>
                      <Image src={'/arrow-right.svg'} height={48} width={42} alt="great rift run"/>
                    </button>
                </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="w-full bg-cover bg-center py-40" style={{backgroundImage: 'url(/runners.png)'}}>
            <div className="mx-auto max-w-7xl flex items-center justify-evenly flex-wrap">
                <div className="py-10 px-5">
                  <h1 className="text-left text-[#FFFFFF] font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">195</h1>
                  <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">RUNNERS</p>
                  <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">REGISTERED</p>
                </div>
                <div className="py-10 px-5">
                  <h1 className="text-left text-[#FFFFFF] font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">5</h1>
                  <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">EVENTS</p>
                  <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">HELD</p>
                </div>
                <div className="py-10 px-5">
                  <h1 className="text-left text-[#FFFFFF] font-[family-name:var(--font-opensans-bold)] text-[64px] leading-none">100</h1>
                  <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">MILES</p>
                  <p className="text-left text-[#FFFFFF] font-[family-name:var(--font-roboto-bold)] text-[48px] leading-none">COVERED</p>
                </div>
            </div>
        </div>

        {/* Details */}
        <div className="bg-[#009951]">

        </div>
    </main>
  );
}
