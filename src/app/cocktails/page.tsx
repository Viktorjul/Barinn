export default function CocktailsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-10"
        style={{ backgroundColor: 'var(--hero-gradient-start)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
            style={{ fontFamily: 'var(--font-clash-bold)' }}
          >
            KOKTEILAR 101
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            style={{ fontFamily: 'var(--font-clash-regular)' }}
          >
            Allt sem þú þarft að vita um að búa til frábæra kokteila heima
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-8 md:px-10" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          
          {/* Essential Tools */}
          <div className="mb-20">
            <h2 
              className="text-4xl md:text-5xl mb-8"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Nauðsynleg Áhöld
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Cocktail Shaker",
                  description: "Mikilvægasta áhaldið. Boston shaker eða cobbler shaker virkar frábærlega til að blanda drykkinn með ís.",
                  tip: "Ryðfrítt stál er best - það verður kaldara hraðar og endist lengur."
                },
                {
                  name: "Jigger (Mæliglas)",
                  description: "Nákvæmni er lykilatriði í kokteílum. Jigger hjálpar þér að mæla hráefni nákvæmlega.",
                  tip: "Fáðu einn með mörgum mælingum (15ml, 30ml, 45ml, 60ml)."
                },
                {
                  name: "Barskeið",
                  description: "Löng skeið til að hræra drykkina varlega án þess að þynna of mikið.",
                  tip: "Einnig gagnleg til að laga drykkja og mæla lítið magn."
                },
                {
                  name: "Sigti",
                  description: "Nauðsynlegt til að halda ís og föstu efni frá fullbúnum drykknum.",
                  tip: "Hawthorne sigti fyrir hristaða drykkja, julep sigti fyrir hræða."
                },
                {
                  name: "Muddler (Mölari)",
                  description: "Notað til að mölva jurtir, ávexti og krydd til að losa bragðefnin.",
                  tip: "Trémuddlarar eru vægir á jurtir, málmmuddlarar eru endingarbetri."
                },
                {
                  name: "Sítrusþrystingur",
                  description: "Ferskur safi skiptir öllu máli. Aldrei nota safann úr flösku!",
                  tip: "Handþrystingur er fullkominn fyrir sítrónur og lájm."
                }
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border"
                  style={{ 
                    backgroundColor: 'rgba(26, 88, 80, 0.03)',
                    borderColor: 'rgba(26, 88, 80, 0.1)'
                  }}
                >
                  <h3 
                    className="text-xl md:text-2xl mb-3"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-bold)'
                    }}
                  >
                    {tool.name}
                  </h3>
                  <p 
                    className="text-base mb-3 leading-relaxed"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    {tool.description}
                  </p>
                  <p 
                    className="text-sm opacity-70 italic"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    💡 {tool.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Techniques */}
          <div className="mb-20">
            <h2 
              className="text-4xl md:text-5xl mb-8"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Grunnfærslur
            </h2>
            <div className="space-y-8">
              {[
                {
                  name: "Hristing",
                  when: "Fyrir drykkja með safa, rjóma eða eggjarauðu",
                  how: "Fylltu shaker 2/3 hluta með ís, bættu við hráefnum, hristaðu kröftuglega í 10-15 sekúndur þar til frost myndast að utan.",
                  why: "Hristing kælir hratt, þynnir og loftræsir drykkinn og skapar mjúka áferð."
                },
                {
                  name: "Hræring",
                  when: "Fyrir sterka drykkja eins og Martini og Manhattan",
                  how: "Bættu hráefnum í hræriglas með ís, hrærðu varlega í 30 sekúndur í sléttu hringhreyfingu.",
                  why: "Hræring kælir og þynnir án þess að bæta við lofti og heldur drykknum silkimjúkum."
                },
                {
                  name: "Möl",
                  when: "Fyrir jurtir og mýkt ávexti",
                  how: "Þrýstu varlega á hráefnin í botninum á glasinu eða shaker. Ekki mylja of mikið - bara mala nóg til að losa olíurnar.",
                  why: "Losar ilmolíur og bragðefni án þess að gera drykkinn beittan."
                },
                {
                  name: "Tvöföld Sigtun",
                  when: "Fyrir sérstaklega sléttan kokteílinn",
                  how: "Notaðu bæði venjulegan sigti og fínan sigti þegar þú heltur.",
                  why: "Fjarlægir ísbita, jurtabita og sítrusþýði fyrir kristaltæran drykk."
                },
                {
                  name: "Þurr Hristing",
                  when: "Fyrir drykkja með eggjarauðu",
                  how: "Hristaðu öll hráefni án íss fyrst í 15 sekúndur, bættu síðan við ís og hristaðu aftur.",
                  why: "Skapar betri froðu og blöndun á eggjarauðunni."
                }
              ].map((technique, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: 'rgba(26, 88, 80, 0.05)' }}
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                      style={{ 
                        backgroundColor: 'var(--hero-gradient-start)',
                        fontFamily: 'var(--font-clash-bold)'
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-2xl md:text-3xl mb-2"
                        style={{ 
                          color: 'var(--hero-gradient-start)',
                          fontFamily: 'var(--font-clash-bold)'
                        }}
                      >
                        {technique.name}
                      </h3>
                      <div 
                        className="space-y-2 text-base md:text-lg"
                        style={{ 
                          color: 'var(--hero-gradient-start)',
                          fontFamily: 'var(--font-clash-regular)'
                        }}
                      >
                        <p><strong>Hvenær:</strong> {technique.when}</p>
                        <p><strong>Hvernig:</strong> {technique.how}</p>
                        <p><strong>Hvers vegna:</strong> {technique.why}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Glassware Guide */}
          <div className="mb-20">
            <h2 
              className="text-4xl md:text-5xl mb-8"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Glös og Notkun
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Highball / Collins",
                  size: "300-350ml",
                  use: "Langir drykkir, spritzers, mojitos, gin & tonic",
                  note: "Hátt og beint"
                },
                {
                  name: "Rocks / Old Fashioned",
                  size: "180-300ml",
                  use: "Sterkir drykkir á ís, old fashioned, negroni",
                  note: "Lágt og breitt"
                },
                {
                  name: "Martini / Cocktail",
                  size: "180-240ml",
                  use: "Martini, manhattan, cosmopolitan",
                  note: "V-laga eða coupe"
                },
                {
                  name: "Coupe",
                  size: "150-240ml",
                  use: "Kampavínsdrykkir, daiquiri, sidecar",
                  note: "Grunnt og glæsilegt"
                },
                {
                  name: "Vínarglas",
                  size: "300-400ml",
                  use: "Spritz, sangría, vínsdrykkir",
                  note: "Stór skál"
                },
                {
                  name: "Shotglas",
                  size: "30-60ml",
                  use: "Shots, mælingar, lagskiptir drykkir",
                  note: "Lítið og beint"
                }
              ].map((glass, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border"
                  style={{ borderColor: 'rgba(26, 88, 80, 0.15)' }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 
                      className="text-xl md:text-2xl"
                      style={{ 
                        color: 'var(--hero-gradient-start)',
                        fontFamily: 'var(--font-clash-bold)'
                      }}
                    >
                      {glass.name}
                    </h3>
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: 'rgba(26, 88, 80, 0.1)',
                        color: 'var(--hero-gradient-start)',
                        fontFamily: 'var(--font-clash-regular)'
                      }}
                    >
                      {glass.size}
                    </span>
                  </div>
                  <p 
                    className="text-base mb-2"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    {glass.use}
                  </p>
                  <p 
                    className="text-sm opacity-70 italic"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    {glass.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-8"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              Prófaráð
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Notaðu Alltaf Ferskan Ís",
                  tip: "Gamall frystikassaís getur tekið upp lykt. Notaðu ferskan, hreinn ís í hvern drykk."
                },
                {
                  title: "Kældu Glösin",
                  tip: "Settu glösin í frystinn í 10 mínútur áður en þú afgreiðir. Kalt glas = kaldari drykkur."
                },
                {
                  title: "Aðeins Ferskur Safi",
                  tip: "Forpressaður safi missir bragð hratt. Pressaðu sítrus rétt áður en þú notar."
                },
                {
                  title: "Gæði Hráefna Skipta Máli",
                  tip: "Þú getur ekki lagað lélegan spírit með góðum mixerum. Kauptu það besta sem þú hefur efni á."
                },
                {
                  title: "Bragðaðu Á Meðan",
                  tip: "Allir hafa mismunandi bragðskyn. Stilltu sætleika og súrleika að þínu höfði."
                },
                {
                  title: "Stærð Íss Skiptir Máli",
                  tip: "Stórir ísbitar bráðna hægar. Notaðu þá fyrir drykkja sem þú sippir hægt."
                },
                {
                  title: "Þynning Er Gott",
                  tip: "Rétt þynning frá ís gerir kokteila mjúka. Slepptu ekki ísnum!"
                },
                {
                  title: "Geymdu Vermouth í Ísskáp",
                  tip: "Vermouth er vín og oxar. Geymdu kalt og notaðu innan 2 mánaða."
                }
              ].map((tip, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(26, 88, 80, 0.05)' }}
                >
                  <h3 
                    className="text-lg md:text-xl mb-2"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-bold)'
                    }}
                  >
                    {tip.title}
                  </h3>
                  <p 
                    className="text-base"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    {tip.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

