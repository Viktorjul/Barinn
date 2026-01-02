import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import FeaturedCocktails from "@/sections/FeaturedCocktails";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedCocktails />
    </main>
  );
}

