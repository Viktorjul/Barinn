import Link from "next/link";
import Image from "next/image";

interface CocktailCardProps {
  title: string;
  image: string;
  tags: string[];
  slug: string;
}

export default function CocktailCard({ title, image, tags, slug }: CocktailCardProps) {
  return (
    <Link
      href={`/cocktails/${slug}`}
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border"
      style={{ 
        backgroundColor: '#ffffff',
        borderColor: 'rgba(26, 88, 80, 0.15)'
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content at bottom */}
      <div className="p-5">
        <h3 
          className="text-2xl md:text-3xl mb-3 transition-colors"
          style={{ 
            color: 'var(--hero-gradient-start)',
            fontFamily: 'var(--font-clash-bold)'
          }}
        >
          {title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 rounded-full text-sm"
              style={{ 
                backgroundColor: 'rgba(26, 88, 80, 0.1)',
                color: 'var(--hero-gradient-start)',
                fontFamily: 'var(--font-clash-regular)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

