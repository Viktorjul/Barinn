export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 px-8 md:px-10 pt-32 md:pt-40"
        style={{ backgroundColor: 'var(--hero-gradient-start)' }}
      >
        <div className="max-w-4xl">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
            style={{ fontFamily: 'var(--font-clash-bold)' }}
          >
            UM BARINN
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            style={{ fontFamily: 'var(--font-clash-regular)' }}
          >
            Þar sem list og vísindi mætast í glasi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 md:py-24 px-8 md:px-10">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Our Story */}
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Okkar Saga
            </h2>
            <div 
              className="space-y-4 text-lg md:text-xl leading-relaxed"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              <p>
                Barinn er meira en bara staður til að fá sér drykk – það er upplifun. Við trúum því að 
                kokteílar séu list, og hvert glas sem við búum til er smekkbót fyrir skynfærin.
              </p>
              <p>
                Okkar markmið er að gera heiminn af fínum kokteílum aðgengilegan öllum. Hvort sem þú ert 
                vanur bartender eða byrjandi sem vill læra, þá erum við hér til að hjálpa þér að búa til 
                fullkomna drykkinn.
              </p>
              <p>
                Við tökum stolt í því að nota aðeins ferskustu hráefnin, bestu áfenga drykkjuna og 
                skapandi aðferðir til að búa til uppskriftir sem allir geta gert heima hjá sér.
              </p>
            </div>
          </div>

          {/* Our Philosophy */}
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Okkar Hugmyndafræði
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Gæði Fremst",
                  description: "Við bjóðum aðeins upp á uppskriftir sem við höfum prófað og fullkomnað. Hvert hráefni er valið með umhyggju."
                },
                {
                  title: "Einfaldleiki",
                  description: "Góðir kokteílar þurfa ekki að vera flóknir. Við einblínum á klassískar aðferðir og skýrar leiðbeiningar."
                },
                {
                  title: "Nýsköpun",
                  description: "Við eigum við klassíkina en erum ekki hræddir við að prófa nýja hluti og blanda við hefðbundnu uppskriftirnar."
                },
                {
                  title: "Menntun",
                  description: "Við viljum ekki bara gefa þér uppskrift – við viljum kenna þér hvers vegna það virkar og hvernig þú getur gert það betra."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2"
                  style={{ borderColor: 'var(--hero-gradient-start)' }}
                >
                  <h3 
                    className="text-2xl md:text-3xl mb-3"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-bold)'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-base md:text-lg"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Hvað Við Bjóðum
            </h2>
            <div 
              className="space-y-6 text-lg md:text-xl"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              <div className="flex gap-4">
                <span className="text-3xl">🍸</span>
                <div>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-clash-bold)' }}>
                    Nákvæmar Uppskriftir
                  </h3>
                  <p>
                    Allar uppskriftirnar okkar eru með nákvæmum mælingum, ítarlegum leiðbeiningum og 
                    hjálplegum ábendingum til að tryggja að þú fáir fullkominn drykk í hvert skipti.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">📚</span>
                <div>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-clash-bold)' }}>
                    Fræðsluefni
                  </h3>
                  <p>
                    Lærðu grunninn í Kokteílar 101 hlutanum okkar. Frá áhöldum til tækni, við kennum 
                    þér allt sem þú þarft að vita.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">🧮</span>
                <div>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-clash-bold)' }}>
                    Skammtareiknivél
                  </h3>
                  <p>
                    Ertu að búa til fyrir hóp? Skammtareiknivélin okkar gerir það auðvelt að stækka 
                    uppskriftir fyrir hvaða fjölda sem er.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">🚫</span>
                <div>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-clash-bold)' }}>
                    Alkóhólfrír Valkostir
                  </h3>
                  <p>
                    Hver ætti að geta notið góðs kokteils. Margar uppskriftir okkar eru með 
                    alkóhólfrjálsum valkostum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div 
            className="p-8 md:p-12 rounded-2xl text-center"
            style={{ backgroundColor: 'var(--hero-gradient-start)' }}
          >
            <h2 
              className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontFamily: 'var(--font-clash-bold)' }}
            >
              Vertu Hluti af Samfélaginu
            </h2>
            <p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-clash-regular)' }}
            >
              Skráðu þig til að fá aðgang að einkauppskriftum, sérstökum ráðum og vera fyrst/ur 
              til að vita um nýjar uppskriftir.
            </p>
            <button
              className="px-8 py-4 bg-white text-lg rounded-full transition-transform hover:scale-105"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Skráðu Þig Núna
            </button>
          </div>

          {/* Contact */}
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Hafðu Samband
            </h2>
            <div 
              className="space-y-4 text-lg md:text-xl"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              <p>
                Ertu með spurningar, uppskriftarbeiðnir eða viltu bara segja hæ? 
                Við værum til í að heyra frá þér!
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Tölvupóstur:</strong> hello@barinn.is
                </p>
                <p>
                  <strong>Instagram:</strong> @barinn.is
                </p>
                <p>
                  <strong>Staðsetning:</strong> Reykjavík, Ísland
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

