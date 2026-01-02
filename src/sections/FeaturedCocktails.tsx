import CocktailCard from "@/components/CocktailCard";
import Link from "next/link";

const featuredCocktails = [
  {
    title: "APEROL SPRITZ",
    image: "/images/aperoll.jpg",
    tags: ["Beiskt", "Ferskt", "Beiskt"],
    slug: "aperol-spritz"
  },
  {
    title: "BASIL GIMLET",
    image: "/images/basil.jpg",
    tags: ["Beiskt", "Ferskt", "Beiskt"],
    slug: "basil-gimlet"
  },
  {
    title: "AMARETTO SOUR",
    image: "/images/amaretto.webp",
    tags: ["Beiskt", "Ferskt", "Beiskt"],
    slug: "amaretto-sour"
  },
  {
    title: "ESPRESSO MARTINI",
    image: "/images/espresso.webp",
    tags: ["Beiskt", "Ferskt", "Beiskt"],
    slug: "espresso-martini"
  },
];

export default function FeaturedCocktails() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Background curved line */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M -200 950 Q 200 700 400 550 T 800 350 Q 1000 250 1200 150 T 1600 -50" 
          stroke="var(--hero-gradient-start)" 
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="relative z-10 px-8 md:px-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <p 
            className="text-xl md:text-2xl mb-2" 
            style={{ 
              color: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-regular)'
            }}
          >
            VINSÆLIR
          </p>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl" 
            style={{ 
              color: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-bold)'
            }}
          >
            KOKTEILAR
          </h2>
        </div>

        {/* Grid of cocktail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredCocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.slug}
              title={cocktail.title}
              image={cocktail.image}
              tags={cocktail.tags}
              slug={cocktail.slug}
            />
          ))}
        </div>

        {/* See all button */}
        <div className="flex justify-center">
          <Link
            href="/cocktails"
            className="text-white px-8 py-4 rounded-xl text-lg transition-colors"
            style={{ 
              backgroundColor: 'var(--hero-gradient-start)',
              fontFamily: 'var(--font-clash-regular)'
            }}
          >
            Sjá alla kokteila
          </Link>
        </div>
      </div>
    </section>
  );
}

