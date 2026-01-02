"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";

// Mock data - in a real app, this would come from a database or API
const cocktailData: Record<string, any> = {
  "aperol-spritz": {
    name: "Aperol Spritz",
    image: "/images/aperoll.jpg",
    tags: ["Beiskt", "Ferskt"],
    description: "Klassískur ítalskur kokteill sem er ferskur og létt. Fullkominn sumardrykur með bittersætu bragði af appelsínu og jurtum. Þessi vinsæli drykur er orðinn órjúfanlegur hluti af ítalskri drykkjarmenningu og hentar frábærlega sem fordrykkur.",
    ingredients: [
      { name: "Aperol", amount: 60, unit: "ml", isAlcohol: true },
      { name: "Prosecco", amount: 90, unit: "ml", isAlcohol: true },
      { name: "Sódavatn", amount: 30, unit: "ml", isAlcohol: false },
      { name: "Appelsínusneið", amount: 1, unit: "stk", isAlcohol: false },
    ],
    instructions: [
      "Byrjaðu á að fylla stórt vínarglas (eða highball glas) með ísbita. Notaðu nægan ís til að halda drykknum köldum lengur.",
      "Helltu 60ml af Aperol yfir ísinn. Aperol er ítalskur bitter apéritif með bittersætu appelsínubragði.",
      "Bættu 90ml af köldu Prosecco víninu varlega við. Hallaðu glasinu lítillega til að halda gosinu.",
      "Toppaðu með 30ml af sódavatni til að gera drykkinn léttari og ferskari.",
      "Hrærðu mjög varlega saman með langri skeið eða straw í nokkrar sekúndur. Ekki ofhræra til að halda gosinu.",
      "Skreyttu með ferskri appelsínusneið eða hálfu sneiðinni. Þú getur einnig bætt við olífu eða rosmarin fyrir auka sjarma.",
    ],
    nonAlcoholicSubstitutes: {
      "Aperol": "Appelsínusafi með smá bittersukri",
      "Prosecco": "Gosdrykkur eða sódavatn",
    },
  },
  "basil-gimlet": {
    name: "Basil Gimlet",
    image: "/images/basil.jpg",
    tags: ["Jurtaríkur", "Súrsætur"],
    description: "Nútímaleg útgáfa af klassískum gimlet með ferskum basilíku. Þessi kokteill sameinar klassískan gin gimlet með ömmu jurtabragði fersks basilíku sem gefur drykknum einstakt og ferskt bragð. Fullkominn fyrir þá sem vilja prófa eitthvað nýstárlegt.",
    ingredients: [
      { name: "Gin", amount: 60, unit: "ml", isAlcohol: true },
      { name: "Límónusafi", amount: 20, unit: "ml", isAlcohol: false },
      { name: "Einfaldur sírópur", amount: 15, unit: "ml", isAlcohol: false },
      { name: "Basilíkublöð", amount: 6, unit: "stk", isAlcohol: false },
    ],
    instructions: [
      "Byrjaðu á að muldra 6-8 fersk basilíkublöð í botninn á cocktail shaker með muddler. Vertu ekki of harður, bara nóg til að losa ilmefnin.",
      "Bættu 60ml af góðum gin (t.d. Hendrick's eða Tanqueray), 20ml af fersku límónusafa og 15ml af einföldum sírópum við.",
      "Fylltu shaker með ís upp að 3/4 hlutum. Notaðu stóra ísbita ef mögulegt.",
      "Settu lokið á og hristaðu kröftuglega í 15-20 sekúndur þar til shakerinn verður kaldur að utan.",
      "Sigti í vel kælt martini glas eða coupe glas með fínum sigti til að fjarlægja alla bita.",
      "Skreyttu með ferskri basilíkublaði og límónubáti. Klappað létt á basilíkuna fyrir að setja á til að losa ilmefni.",
    ],
    nonAlcoholicSubstitutes: {
      "Gin": "Alkóhólfrítt gin eða tonic vatn",
    },
  },
  "amaretto-sour": {
    name: "Amaretto Sour",
    image: "/images/amaretto.webp",
    tags: ["Sætur", "Súrsætur"],
    description: "Sætur og súr kokteill með möndlubragði. Þessi klassíski drykur blandar saman sætleika amaretto og súrleika límónu á fullkominn hátt. Silkimjúkur áferð eggjarauðu gerir hann að einum vinsælasta kokteili allra tíma.",
    ingredients: [
      { name: "Amaretto", amount: 50, unit: "ml", isAlcohol: true },
      { name: "Bourbon", amount: 25, unit: "ml", isAlcohol: true },
      { name: "Límónusafi", amount: 30, unit: "ml", isAlcohol: false },
      { name: "Einfaldur sírópur", amount: 15, unit: "ml", isAlcohol: false },
      { name: "Eggjarauða", amount: 1, unit: "stk", isAlcohol: false },
    ],
    instructions: [
      "Byrjaðu með 'dry shake' - blandaðu Amaretto, Bourbon, límónusafa, sírópum og eggjarauðu í shaker án íss. Þetta hjálpar til við að mynda betri froðu.",
      "Hristaðu mjög kröftuglega í 15-20 sekúndur. Þú vilt fá sem besta froðu úr eggjarauðunni.",
      "Bættu nú við ís (fullt af) og hristaðu aftur í 10-15 sekúndur til að kæla drykkinn.",
      "Sigti í rocks glas (old fashioned glas) með fersku ísi. Notaðu stóra ísbita ef mögulegt.",
      "Skreyttu með maraschino kirsuber og appelsínusneið. Þú getur einnig bætt við nokkrum dropum af Angostura bitters á toppinn fyrir auka bragð og útlit.",
    ],
    nonAlcoholicSubstitutes: {
      "Amaretto": "Möndlusírópur",
      "Bourbon": "Tebolli af svörtum te",
    },
  },
  "espresso-martini": {
    name: "Espresso Martini",
    image: "/images/espresso.webp",
    tags: ["Kaffi", "Sætur"],
    description: "Fullkominn kokteill fyrir kaffináma. Þessi kraftmikli drykur sameinar ríkt bragð espresso við sætleika kaffílíkjörs og mjúkleika vodka. Kremalaga toppur og kaffibaunir að skreytingu gera hann að einum fallegasta kokteili á barnum.",
    ingredients: [
      { name: "Vodka", amount: 50, unit: "ml", isAlcohol: true },
      { name: "Kaffílíkjör", amount: 30, unit: "ml", isAlcohol: true },
      { name: "Espresso", amount: 30, unit: "ml", isAlcohol: false },
      { name: "Einfaldur sírópur", amount: 10, unit: "ml", isAlcohol: false },
    ],
    instructions: [
      "Brúgguðu double shot af ferskum espresso (30ml) og leyfðu því að kólna í nokkrar mínútur. Ekki nota heitan espresso þar sem það bræðir ísinn of hratt.",
      "Bættu köldum espresso, vodka, kaffílíkjör og einfaldan síróp í cocktail shaker. Fylltu með ís.",
      "Hristaðu MJÖG kröftuglega í 20-30 sekúndur. Þú vilt fá kremþykka froðu á toppinn - hristaðu lengur en þú heldur!",
      "Tvöfalt-sigti (fine strain) í vel kælt martini glas eða coupe glas fyrir silkimjúka áferð án ís.",
      "Skreyttu með 3 kaffibaunum á kremþykka toppnum í þríhyrningslaga. Þetta táknar heilsu, auð og hamingju í klassískri hefð.",
    ],
    nonAlcoholicSubstitutes: {
      "Vodka": "Vatn eða ísvatn",
      "Kaffílíkjör": "Kaffi sírópur",
    },
  },
};

// Syrup recipes
const syrupRecipes: Record<string, { title: string; ingredients: string[]; steps: string[] }> = {
  "Einfaldur sírópur": {
    title: "Simple Syrup",
    ingredients: ["1 cup sugar", "1 cup water"],
    steps: [
      "Combine equal parts sugar and water in a saucepan",
      "Heat over medium heat, stirring until sugar dissolves completely",
      "Let it cool to room temperature",
      "Store in refrigerator for up to 1 month"
    ]
  }
};

export default function CocktailDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [servings, setServings] = useState(1);
  const [isNonAlcoholic, setIsNonAlcoholic] = useState(false);
  const [showSyrupModal, setShowSyrupModal] = useState<string | null>(null);
  
  const { slug } = use(params);
  const cocktail = cocktailData[slug];

  if (!cocktail) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center px-6">
          <h1 
            className="text-4xl md:text-5xl mb-4"
            style={{ 
              color: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-bold)'
            }}
          >
            Kokteill fannst ekki
          </h1>
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity"
            style={{ 
              color: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-regular)'
            }}
          >
            Fara til baka
          </Link>
        </div>
      </div>
    );
  }

  const handleIncrement = () => setServings(prev => Math.min(prev + 1, 10));
  const handleDecrement = () => setServings(prev => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen">
      {/* Hero Section - Green Background */}
      <section 
        className="pt-32 md:pt-40 pb-16 md:pb-24 px-8 md:px-10"
        style={{ backgroundColor: 'var(--hero-gradient-start)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity mb-12 text-white"
            style={{ fontFamily: 'var(--font-clash-regular)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Til baka
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Image - 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Title and Description */}
              <div>
                <h1 
                  className="text-5xl uppercase md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-clash-bold)' }}
                >
                  {cocktail.name}
                </h1>
                <p 
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                  style={{ fontFamily: 'var(--font-clash-regular)' }}
                >
                  {cocktail.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex gap-3 flex-wrap">
                {cocktail.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-6 py-3 rounded-full text-base border border-white/30 backdrop-blur-sm text-white"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Compact Calculator */}
              <div className="flex gap-4 pt-4">
                {/* Servings */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/20"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <button
                    onClick={handleDecrement}
                    disabled={servings <= 1}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30 text-white text-xl"
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <div className="text-center min-w-[60px]">
                    <div 
                      className="text-3xl text-white leading-none"
                      style={{ fontFamily: 'var(--font-clash-bold)' }}
                    >
                      {servings}
                    </div>
                    <div 
                      className="text-xs text-white/70 mt-1"
                      style={{ fontFamily: 'var(--font-clash-regular)' }}
                    >
                      servings
                    </div>
                  </div>
                  <button
                    onClick={handleIncrement}
                    disabled={servings >= 10}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30 text-white text-xl"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>

                {/* Non-alcoholic toggle */}
                <button
                  onClick={() => setIsNonAlcoholic(!isNonAlcoholic)}
                  className="px-6 py-4 rounded-xl transition-all text-base border border-white/20 flex items-center gap-2"
                  style={{
                    backgroundColor: isNonAlcoholic ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-clash-regular)'
                  }}
                >
                  {isNonAlcoholic && '✓ '} Mocktail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Section - White Background */}
      <section className="py-16 md:py-24 px-8 md:px-10" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Ingredients - 1 column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 
                  className="text-3xl md:text-4xl mb-8"
                  style={{ 
                    color: 'var(--hero-gradient-start)',
                    fontFamily: 'var(--font-clash-bold)'
                  }}
                >
                  Ingredients
                </h3>
                <ul className="space-y-1">
                  {cocktail.ingredients.map((ingredient: any, index: number) => {
                    const displayAmount = typeof ingredient.amount === 'number' 
                      ? ingredient.amount * servings 
                      : ingredient.amount;
                    
                    let displayName = ingredient.name;
                    if (isNonAlcoholic && ingredient.isAlcohol && cocktail.nonAlcoholicSubstitutes[ingredient.name]) {
                      displayName = cocktail.nonAlcoholicSubstitutes[ingredient.name];
                    }

                    const isSyrup = syrupRecipes[displayName];

                    return (
                      <li 
                        key={index} 
                        className="py-4 border-b"
                        style={{ 
                          borderColor: 'rgba(26, 88, 80, 0.1)',
                        }}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            {isSyrup ? (
                              <button
                                onClick={() => setShowSyrupModal(displayName)}
                                className="text-left hover:opacity-70 transition-opacity flex items-center gap-2"
                                style={{ 
                                  color: 'var(--hero-gradient-start)',
                                  fontFamily: 'var(--font-clash-regular)'
                                }}
                              >
                                <span className="text-base md:text-lg underline decoration-dotted">{displayName}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>
                            ) : (
                              <span 
                                className="text-base md:text-lg"
                                style={{ 
                                  color: 'var(--hero-gradient-start)',
                                  fontFamily: 'var(--font-clash-regular)'
                                }}
                              >
                                {displayName}
                              </span>
                            )}
                          </div>
                          <span 
                            className="text-base md:text-lg whitespace-nowrap"
                            style={{ 
                              color: 'var(--hero-gradient-start)',
                              fontFamily: 'var(--font-clash-bold)'
                            }}
                          >
                            {displayAmount} {ingredient.unit}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Instructions - 2 columns */}
            <div className="lg:col-span-2">
              <h3 
                className="text-3xl md:text-4xl mb-8"
                style={{ 
                  color: 'var(--hero-gradient-start)',
                  fontFamily: 'var(--font-clash-bold)'
                }}
              >
                Instructions
              </h3>
              <ol className="space-y-8">
                {cocktail.instructions.map((instruction: string, index: number) => (
                  <li 
                    key={index} 
                    className="flex gap-5"
                  >
                    <span 
                      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl"
                      style={{ 
                        backgroundColor: 'var(--hero-gradient-start)',
                        fontFamily: 'var(--font-clash-bold)'
                      }}
                    >
                      {index + 1}
                    </span>
                    <p 
                      className="flex-1 text-base md:text-lg pt-2 leading-relaxed"
                      style={{ 
                        color: 'var(--hero-gradient-start)',
                        fontFamily: 'var(--font-clash-regular)'
                      }}
                    >
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Syrup Modal */}
      {showSyrupModal && syrupRecipes[showSyrupModal] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowSyrupModal(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h4 
                className="text-2xl md:text-3xl"
                style={{ 
                  color: 'var(--hero-gradient-start)',
                  fontFamily: 'var(--font-clash-bold)'
                }}
              >
                {syrupRecipes[showSyrupModal].title}
              </h4>
              <button
                onClick={() => setShowSyrupModal(null)}
                className="text-2xl hover:opacity-70"
                style={{ color: 'var(--hero-gradient-start)' }}
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <h5 
                className="text-sm uppercase tracking-wider mb-3 opacity-70"
                style={{ 
                  color: 'var(--hero-gradient-start)',
                  fontFamily: 'var(--font-clash-regular)'
                }}
              >
                Ingredients
              </h5>
              <ul className="space-y-2">
                {syrupRecipes[showSyrupModal].ingredients.map((ing, i) => (
                  <li 
                    key={i}
                    className="text-base"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    • {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 
                className="text-sm uppercase tracking-wider mb-3 opacity-70"
                style={{ 
                  color: 'var(--hero-gradient-start)',
                  fontFamily: 'var(--font-clash-regular)'
                }}
              >
                Instructions
              </h5>
              <ol className="space-y-3">
                {syrupRecipes[showSyrupModal].steps.map((step, i) => (
                  <li 
                    key={i}
                    className="flex gap-3 text-base"
                    style={{ 
                      color: 'var(--hero-gradient-start)',
                      fontFamily: 'var(--font-clash-regular)'
                    }}
                  >
                    <span 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ 
                        backgroundColor: 'var(--hero-gradient-start)',
                        fontFamily: 'var(--font-clash-bold)'
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

