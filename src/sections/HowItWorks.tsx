export default function HowItWorks() {
  return (
    <section 
      className="relative z-20 min-h-screen flex items-center justify-center py-16 md:py-24 px-8 md:px-10"
      style={{ backgroundColor: 'var(--hero-gradient-start)' }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: 'var(--font-clash-bold)' }}
          >
            SVONA VIRKAR BARINN
          </h2>
          <p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-clash-regular)' }}
          >
            Einföld skref til að búa til fullkominn kokteíl
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
            >
              <span 
                className="text-4xl md:text-5xl text-white"
                style={{ fontFamily: 'var(--font-clash-bold)' }}
              >
                1
              </span>
            </div>
            <h3 
              className="text-2xl md:text-3xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Veldu Kokteíl
            </h3>
            <p 
              className="text-lg text-white/80"
              style={{ fontFamily: 'var(--font-clash-regular)' }}
            >
              Skoðaðu gríðarlegt úrval af uppskriftum og veldu þann kokteíl sem þú hefur mest áhuga á að búa til
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
            >
              <span 
                className="text-4xl md:text-5xl text-white"
                style={{ fontFamily: 'var(--font-clash-bold)' }}
              >
                2
              </span>
            </div>
            <h3 
              className="text-2xl md:text-3xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Safnaðu Hráefnum
            </h3>
            <p 
              className="text-lg text-white/80"
              style={{ fontFamily: 'var(--font-clash-regular)' }}
            >
              Hver uppskrift kemur með nákvæmum mælingum og lista yfir öll nauðsynleg hráefni og áhöld
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
            >
              <span 
                className="text-4xl md:text-5xl text-white"
                style={{ fontFamily: 'var(--font-clash-bold)' }}
              >
                3
              </span>
            </div>
            <h3 
              className="text-2xl md:text-3xl text-white mb-4"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Fylgdu Uppskriftinni
            </h3>
            <p 
              className="text-lg text-white/80"
              style={{ fontFamily: 'var(--font-clash-regular)' }}
            >
              Ítarlegar skref-fyrir-skref leiðbeiningar með ábendingum frá sérfræðingum til að tryggja fullkominn drykk
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
            <div>
              <h4 
                className="text-xl text-white mb-2"
                style={{ fontFamily: 'var(--font-clash-bold)' }}
              >
                Skammtareiknivél
              </h4>
              <p 
                className="text-white/80"
                style={{ fontFamily: 'var(--font-clash-regular)' }}
              >
                Stilltu fjölda drykja og við reiknum hráefnin fyrir þig
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
            <div>
              <h4 
                className="text-xl text-white mb-2"
                style={{ fontFamily: 'var(--font-clash-bold)' }}
              >
                Alkóhólfrír Valkostir
              </h4>
              <p 
                className="text-white/80"
                style={{ fontFamily: 'var(--font-clash-regular)' }}
              >
                Margar uppskriftir með alkóhólfrjálsum útgáfum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

