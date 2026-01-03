"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="hero-section relative overflow-hidden -mt-[80px] pt-[80px] z-10" 
      style={{ 
        minHeight: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      {/* Background blur image */}
      <div className="absolute inset-0">
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
            HRISTU UPP KVÖLDIÐ
          </h1>
        </div>

        {/* Cocktail image */}
        <div className="relative w-full max-w-4xl h-[1000px] lg:h-[1100px]">
          <Image
            src="/images/Drink-background.png"
            alt="Green cocktail"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* White gradient overlay at bottom - covers entire hero section bottom half */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
    </div>
  );
}
