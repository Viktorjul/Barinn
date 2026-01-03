import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import FeaturedCocktails from "@/sections/FeaturedCocktails";
import HowItWorks from "@/sections/HowItWorks";
import CallToAction from "@/sections/CallToAction";
import AnimatedPath from "@/components/AnimatedPath";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#ffffff' }}>
      <AnimatedPath />
      <Hero />
      <Categories />
      <FeaturedCocktails />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
}

