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
      className="group relative rounded-3xl overflow-hidden border-4 border-foreground transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="relative aspect-[4/5]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-orange-squash text-white mb-3">
            {title}
          </h3>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full border border-white/60 text-white text-sm font-paragraph"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Orange button */}
        <button 
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: 'var(--subtext)' }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    </Link>
  );
}

