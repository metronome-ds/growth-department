// Landing page — assembles all sections in order.
// To reorder or remove a section, just move/delete its line below.
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemComparison from "@/components/ProblemComparison";
import WhatsIncluded from "@/components/WhatsIncluded";
import Pricing from "@/components/Pricing";
import Addons from "@/components/Addons";
import WhoItsFor from "@/components/WhoItsFor";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemComparison />
        <WhatsIncluded />
        <Pricing />
        <Addons />
        <WhoItsFor />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
