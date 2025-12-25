import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-foreground rounded-2xl flex flex-col md:flex-row relative overflow-hidden" style={{ margin: '24px', minHeight: 'calc(100vh - 80px - 48px)' }}>
      {/* Left side - Text content */}
      <div className="flex-[0.25] md:flex-[0.4] flex items-start justify-center pt-8 md:pt-16 pb-6 md:pb-12 px-8 md:px-12 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-background font-custom leading-tight" style={{ fontWeight: 400 }}>
          Hristu upp kvöldið
        </h1>
      </div>

      {/* Right side - Image with simple curved overlay */}
      <div className="flex-[0.75] md:flex-[0.6] relative overflow-hidden md:rounded-r-2xl">
        <Image
          src="/images/hero.jpg"
          alt="Cocktail glasses"
          fill
          className="object-cover"
          priority
        />
        {/* Simple curved overlay - mobile: from top (downward), desktop: from left */}
        <div 
          className="md:hidden absolute top-0 left-0 right-0 h-1/3 bg-foreground"
          style={{
            clipPath: 'ellipse(70% 100% at 50% 0%)',
            WebkitClipPath: 'ellipse(70% 100% at 50% 0%)',
          }}
        />
        <div 
          className="hidden md:block absolute left-0 top-0 bottom-0 w-1/4 bg-foreground"
          style={{
            clipPath: 'ellipse(100% 70% at 0% 50%)',
            WebkitClipPath: 'ellipse(100% 70% at 0% 50%)'
          }}
        />
      </div>
    </div>
  );
}
