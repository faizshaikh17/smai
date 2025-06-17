import Navbar from "./ui/components/Navbar";
import HomeHero from "./ui/components/HomeHero";
import ContextHero from "./ui/components/ContextHero";
import SolutionsSection from "./ui/components/SolutionsSection";
export default function Home() {
  return (
    <>
      <main
        className="bg-[var(--background)] text-[var(--neutral-light)] relative flex flex-col px-4 sm:px-6 lg:px-8 font-[var(--typography-body-font)] text-base  leading-5 antialiased"
        role="main"
      >
        <Navbar />
        <HomeHero />
        <ContextHero />
        <SolutionsSection />
      </main>
    </>
  );
}
