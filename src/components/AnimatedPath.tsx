"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedPath() {
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
    const isMobileView = window.innerWidth < 768;

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
        trigger: "body",
        start: "top top",
        end: "top 100%",
        scrub: 1,
      },
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: isMobileView ? "50% bottom" : "65% bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <svg 
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[5]"
      viewBox="0 0 1728 4523" 
      fill="none" 
      preserveAspectRatio={isMobile ? "xMidYMin slice" : "xMidYMin meet"}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: isMobile ? '450vh' : '400vh',
      }}
    >
      <defs>
        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6"/>
          <feOffset dx="0" dy="3" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        ref={pathRef}
        d="M0.5 91.4489C602.833 0.782276 1705.5 52.549 1297.5 984.949C889.5 1917.35 403.333 1953.12 199 1713.45C112.667 1621.28 77.2 1262.45 414 1194.45C750.8 1126.45 1243.91 1343.45 1470 1843.45C1678 2303.45 842.8 2480.75 414 3099.95C-14.8 3719.15 1361.5 4197.78 1757 4472.95" 
        stroke="#92CE66" 
        strokeWidth={isMobile ? "80" : "120"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#dropShadow)"
        style={{ opacity: 0.95 }}
      />
    </svg>
  );
}

