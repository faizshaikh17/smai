import Navbar from "./ui/components/Navbar";
export default function Home() {
  return (
    <>
      <main
        className="bg-[var(--background)] text-[var(--neutral-light)] min-h-[400rem] relative flex flex-col px-4 sm:px-6 lg:px-8 font-[var(--typography-body-font)] text-sm leading-5 antialiased"
        role="main"
      >
        <Navbar />
      </main>
    </>
  );
}
