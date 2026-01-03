import Link from "next/link";

export default function CallToAction() {
  return (
    <section 
      className="relative py-16 md:py-24 px-8 md:px-10"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl mb-6"
          style={{ 
            color: 'var(--hero-gradient-start)',
            fontFamily: 'var(--font-clash-bold)'
          }}
        >
          TILBÚINN AÐ BYRJA?
        </h2>
        
        <p 
          className="text-xl md:text-2xl mb-12"
          style={{ 
            color: 'var(--hero-gradient-start)',
            fontFamily: 'var(--font-clash-regular)'
          }}
        >
          Skoðaðu öll okkar uppskriftir og byrjaðu að búa til frábæra kokteila í dag
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/cocktails"
            className="px-8 py-4 rounded-xl text-lg text-white transition-transform hover:scale-105"
            style={{ 
              backgroundColor: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-bold)'
            }}
          >
            Sjá allar uppskriftir
          </Link>
          
          <Link
            href="/about"
            className="px-8 py-4 rounded-xl text-lg border-2 transition-all hover:bg-white"
            style={{ 
              color: 'var(--hero-gradient-start)',
              borderColor: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-regular)'
            }}
          >
            Læra meira
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 md:mt-24">
          <div>
            <p 
              className="text-5xl md:text-6xl mb-2"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              50+
            </p>
            <p 
              className="text-lg"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              Uppskriftir
            </p>
          </div>

          <div>
            <p 
              className="text-5xl md:text-6xl mb-2"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              100%
            </p>
            <p 
              className="text-lg"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              Ókeypis
            </p>
          </div>

          <div>
            <p 
              className="text-5xl md:text-6xl mb-2"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              24/7
            </p>
            <p 
              className="text-lg"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              Aðgengilegt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

