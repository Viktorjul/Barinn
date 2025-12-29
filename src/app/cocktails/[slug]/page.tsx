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
    description: "Klassískur ítalskur kokteill sem er ferskur og létt.",
    ingredients: [
      { name: "Aperol", amount: 60, unit: "ml", isAlcohol: true },
      { name: "Prosecco", amount: 90, unit: "ml", isAlcohol: true },
      { name: "Sódavatn", amount: 30, unit: "ml", isAlcohol: false },
      { name: "Appelsínusneið", amount: 1, unit: "stk", isAlcohol: false },
    ],
    instructions: [
      "Fylltu vínarglas með ís.",
      "Helltu Aperol yfir ísinn.",
      "Bættu Prosecco við.",
      "Toppaðu með sódavatni.",
      "Hrærðu varlega saman.",
      "Skreyttu með appelsínusneið.",
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
    description: "Nútímaleg útgáfa af klassískum gimlet með ferskum basilíku.",
    ingredients: [
      { name: "Gin", amount: 60, unit: "ml", isAlcohol: true },
      { name: "Límónusafi", amount: 20, unit: "ml", isAlcohol: false },
      { name: "Einfaldur sírópur", amount: 15, unit: "ml", isAlcohol: false },
      { name: "Basilíkublöð", amount: 6, unit: "stk", isAlcohol: false },
    ],
    instructions: [
      "Muldu basilíkublöðin í shaker.",
      "Bættu gin, límónusafa og sírópum við.",
      "Fylltu shaker með ís.",
      "Hristaðu kröftuglega í 15 sekúndur.",
      "Sigti í kælt martini glas.",
      "Skreyttu með basilíkublaði.",
    ],
    nonAlcoholicSubstitutes: {
      "Gin": "Alkóhólfrítt gin eða tonic vatn",
    },
  },
  "amaretto-sour": {
    name: "Amaretto Sour",
    image: "/images/amaretto.webp",
    tags: ["Sætur", "Súrsætur"],
    description: "Sætur og súr kokteill með möndlubragði.",
    ingredients: [
      { name: "Amaretto", amount: 50, unit: "ml", isAlcohol: true },
      { name: "Bourbon", amount: 25, unit: "ml", isAlcohol: true },
      { name: "Límónusafi", amount: 30, unit: "ml", isAlcohol: false },
      { name: "Einfaldur sírópur", amount: 15, unit: "ml", isAlcohol: false },
      { name: "Eggjarauða", amount: 1, unit: "stk", isAlcohol: false },
    ],
    instructions: [
      "Blandaðu öllum hráefnum í shaker án íss (dry shake).",
      "Hristaðu kröftuglega í 15 sekúndur.",
      "Bættu ís við og hristaðu aftur.",
      "Sigti í glas með ís.",
      "Skreyttu með kirsuberjum og appelsínusneið.",
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
    description: "Fullkominn kokteill fyrir kaffináma.",
    ingredients: [
      { name: "Vodka", amount: 50, unit: "ml", isAlcohol: true },
      { name: "Kaffílíkjör", amount: 30, unit: "ml", isAlcohol: true },
      { name: "Espresso", amount: 30, unit: "ml", isAlcohol: false },
      { name: "Einfaldur sírópur", amount: 10, unit: "ml", isAlcohol: false },
    ],
    instructions: [
      "Brúgguðu ferskt espresso og leyfðu því að kólna.",
      "Bættu öllum hráefnum í shaker með ís.",
      "Hristaðu kröftuglega í 20 sekúndur.",
      "Sigti í kælt martini glas.",
      "Skreyttu með 3 kaffibaunum á toppinn.",
    ],
    nonAlcoholicSubstitutes: {
      "Vodka": "Vatn eða ísvatn",
      "Kaffílíkjör": "Kaffi sírópur",
    },
  },
};

export default function CocktailDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [servings, setServings] = useState(1);
  const [isNonAlcoholic, setIsNonAlcoholic] = useState(false);
  
  const { slug } = use(params);
  const cocktail = cocktailData[slug];

  if (!cocktail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-custom text-foreground mb-4">Kokteill fannst ekki</h1>
          <Link href="/" className="text-subtext hover:underline font-paragraph">
            Fara til baka
          </Link>
        </div>
      </div>
    );
  }

  const handleIncrement = () => setServings(prev => Math.min(prev + 1, 10));
  const handleDecrement = () => setServings(prev => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="py-8 md:py-12 mx-2 md:mx-6">
        {/* Back button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-foreground hover:text-subtext transition-colors font-paragraph mb-6 md:mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Til baka
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Left side - Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-foreground">
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            {/* Title and tags */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-orange-squash text-foreground mb-4">
                {cocktail.name}
              </h1>
              <div className="flex gap-2 flex-wrap mb-4">
                {cocktail.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border-2 border-foreground text-foreground text-sm font-paragraph"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg font-paragraph text-foreground/80">
                {cocktail.description}
              </p>
            </div>

            {/* Skammtareiknivél (Serving Calculator) */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-orange-squash text-foreground mb-6">
                Skammtareiknivél
              </h3>
              
              {/* Servings counter */}
              <div className="mb-8">
                <span className="text-sm font-paragraph text-foreground/70 uppercase tracking-wider block mb-4">
                  Fjöldi drykja
                </span>
                <div className="flex items-center gap-6">
                  <button
                    onClick={handleDecrement}
                    disabled={servings <= 1}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 border-foreground text-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all text-3xl disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
                    aria-label="Minna"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-6xl md:text-7xl font-custom text-foreground">
                      {servings}
                    </span>
                  </div>
                  <button
                    onClick={handleIncrement}
                    disabled={servings >= 10}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 border-foreground text-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all text-3xl disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
                    aria-label="Meira"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Non-alcoholic toggle */}
              <div>
                <span className="text-sm font-paragraph text-foreground/70 uppercase tracking-wider block mb-4">
                  Alkóhólfrítt
                </span>
                <button
                  onClick={() => setIsNonAlcoholic(!isNonAlcoholic)}
                  className={`w-full py-4 px-6 rounded-xl border-2 transition-all font-paragraph text-lg md:text-xl ${
                    isNonAlcoholic 
                      ? 'bg-subtext border-subtext text-white' 
                      : 'bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  {isNonAlcoholic ? '✓ Alkóhólfrítt virkt' : 'Gera alkóhólfrítt'}
                </button>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-orange-squash text-foreground mb-6">
                Hráefni
              </h3>
              <ul className="space-y-3">
                {cocktail.ingredients.map((ingredient: any, index: number) => {
                  const displayAmount = typeof ingredient.amount === 'number' 
                    ? ingredient.amount * servings 
                    : ingredient.amount;
                  
                  let displayName = ingredient.name;
                  if (isNonAlcoholic && ingredient.isAlcohol && cocktail.nonAlcoholicSubstitutes[ingredient.name]) {
                    displayName = cocktail.nonAlcoholicSubstitutes[ingredient.name];
                  }

                  return (
                    <li key={index} className="flex justify-between items-center py-3 border-b border-foreground/10 font-paragraph text-foreground">
                      <span className="text-base md:text-lg">{displayName}</span>
                      <span className="font-semibold text-subtext text-base md:text-lg">
                        {displayAmount} {ingredient.unit}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-3xl md:text-4xl font-orange-squash text-foreground mb-6">
                Leiðbeiningar
              </h3>
              <ol className="space-y-4">
                {cocktail.instructions.map((instruction: string, index: number) => (
                  <li key={index} className="flex gap-4 font-paragraph text-foreground">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-subtext text-white flex items-center justify-center text-base font-semibold">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-base md:text-lg pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

