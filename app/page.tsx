import Navbar from "./ui/components/Navbar";
import Hero from "./ui/components/Hero";
import Context from "./ui/components/Context";
import Solutions from "./ui/components/Solutions";
import Features from "./ui/components/Features";
import SDK from './ui/components/SDK'
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
        <Hero />
        <Context />
        <Solutions />
      </main>
      <Features />
      <SDK />
      <PreFooter />
      <Footer />

    </>
  );
}
