import Image from "next/image";

export default function Hero() {
  return (
    <div 
      className="relative overflow-hidden -mt-[80px] pt-[80px]" 
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 100%)',
      }}
    >
      {/* Background blur image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/Background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Title on top */}
        <div className="text-center mb-8">
          <h1 
            className="text-5xl sm:text-6xl text-white tracking-wide leading-tight"
            style={{ fontFamily: 'var(--font-clash-bold)' }}
          >
            HRISTU UPP<br/>KVÖLDIÐ
          </h1>
        </div>
        
        {/* Cocktail image below */}
        <div className="relative w-full max-w-md h-[450px] sm:h-[550px]">
          <Image
            src="/images/Drink-background.png"
            alt="Green cocktail"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex relative z-10 items-center justify-center w-full px-10 min-h-screen">
        {/* Centered title */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
          <h1 
            className="text-8xl lg:text-9xl text-white whitespace-nowrap tracking-wider"
            style={{ fontFamily: 'var(--font-clash-bold)' }}
          >
            Hristu upp kvöldið
          </h1>
        </div>

        {/* Cocktail image */}
        <div className="relative w-full max-w-2xl h-[700px] lg:h-[800px]">
          <Image
            src="/images/Drink-background.png"
            alt="Green cocktail"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* White gradient overlay at bottom - fades upward */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 md:h-80 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
    </div>
  );
}
