export default function Home() {
  return (
    <main className="w-full">
        {/* Hero */}
        <div className="h-screen w-full bg-cover bg-center absolute top-0 z-40" style={{backgroundImage: 'url(/hero-image.png)'}}>
          <div className="mx-auto max-w-7xl h-full flex justify-center items-center">
            <div className="h-fit text-left w-full">
              <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#14AE5C] leading-[120px]">RUN</h1>
              <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#EC221F] leading-[120px]">WITH</h1>
              <h1 className="font-[family-name:var(--font-opensans-condensed-extrabold-italic)] text-[128px] text-[#FFFFFF] leading-[120px]">CHAMPIONS</h1>
              <button className="bg-[#EC221F] text-[#FFFFFF] w-[300px] p-8 mt-16 font-[family-name:var(--font-roboto-extrabold)]">JOIN THE GREAT RUN</button>
            </div>
          </div>
        </div>
    </main>
  );
}
