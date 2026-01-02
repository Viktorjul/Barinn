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
      {/* Categories List */}
      <div className="space-y-0">
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/cocktails/${category.slug}`}
            className="group flex items-center justify-between border-b py-6 md:py-8 transition-all duration-300 hover:pl-4"
            style={{ 
              borderColor: 'rgba(26, 88, 80, 0.15)',
              borderBottomWidth: index === categories.length - 1 ? '0' : '1px'
            }}
          >
            <h3 
              className="text-3xl md:text-5xl lg:text-6xl transition-all duration-300 group-hover:translate-x-2"
              style={{ 
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-bold)'
              }}
            >
              {category.name}
            </h3>
            
            {/* Arrow icon */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: 'var(--hero-gradient-start)' }}
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}

