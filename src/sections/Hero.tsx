"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!pathRef.current || !svgRef.current) return;

    const path = pathRef.current;
    const svg = svgRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state - path completely hidden
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.set(svg, {
      opacity: 0,
    });

    // Animate path on scroll
    gsap.to(svg, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "top 100%",
        scrub: 1,
      },
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div 
      className="hero-section relative overflow-hidden -mt-[80px] pt-[80px]" 
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#ffffff',
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

      {/* Animated SVG Path */}
      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-5"
        viewBox="0 0 1728 757" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          transform: isMobile ? 'translateY(0%)' : 'translateY(20%)'
        }}
      >
        <path 
          ref={pathRef}
          d="M-89 104.662C41.3333 32.3283 420.107 -61.7777 678.5 225.161C941 516.661 964.5 678.661 1269 719.661C1704.07 778.243 1753.67 448.661 1898.5 324.161" 
          stroke="#64B56C" 
          strokeWidth="120"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

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
