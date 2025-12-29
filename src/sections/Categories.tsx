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
      className="py-12 md:py-16 px-2 md:px-6" 
      style={{ 
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="mx-auto">
        <div className="space-y-0">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/cocktails/${category.slug}`}
              className="group block border-b py-8 transition-all duration-300 hover:px-4"
              style={{ borderColor: 'var(--foreground)' }}
            >
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-orange-squash transition-colors duration-300 group-hover:text-subtext"
                style={{ color: 'var(--foreground)' }}
              >
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

