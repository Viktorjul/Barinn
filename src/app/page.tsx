import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import FeaturedCocktails from "@/sections/FeaturedCocktails";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <Categories />
      <FeaturedCocktails />
    </main>
  );
}

