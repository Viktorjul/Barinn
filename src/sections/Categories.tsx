import Link from "next/link";

const categories = [
  { name: "GIN", slug: "gin" },
  { name: "ROMM", slug: "romm" },
  { name: "TEQUILA", slug: "tequila" },
  { name: "VISKÍ", slug: "viski" },
  { name: "VODKA", slug: "vodka" },
  { name: "SPRITZ", slug: "spritz" },
];

export default function Categories() {
  return (
    <section 
      className="py-16 md:py-24 px-8 md:px-10" 
      style={{ 
        backgroundColor: '#ffffff'
      }}
    >
      <div className="space-y-0">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/cocktails/${category.slug}`}
            className="group block border-b py-8 transition-all duration-300 hover:px-4"
            style={{ borderColor: 'var(--hero-gradient-start)' }}
          >
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl transition-colors duration-300"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

