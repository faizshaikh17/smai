import Navbar from "./ui/components/Navbar";
import HomeHero from "./ui/components/HomeHero";
import ContextHero from "./ui/components/ContextHero";
import SolutionsSection from "./ui/components/SolutionsSection";
import HomeFeatures from "./ui/components/HomeFeatures";
import ContextFooter from './ui/components/ContextFooter'
import PreFooter from "./ui/components/PreFooter";
import Footer from "./ui/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="bg-[var(--background)] text-[var(--neutral-light)] relative flex flex-col px-4 sm:px-6 lg:px-8 font-[var(--typography-body-font)] text-base  leading-5 antialiased"
        role="main"
      >
        <HomeHero />
        <ContextHero />
        <SolutionsSection />
      </main>
      <HomeFeatures />
      <ContextFooter />
      <PreFooter />
      <Footer />

    </>
  );
}
