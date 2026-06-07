// Landing page — assembles all sections in order.
// To reorder or remove a section, just move/delete its line below.
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemComparison from "@/components/ProblemComparison";
import WhatsIncluded from "@/components/WhatsIncluded";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import WhoItsFor from "@/components/WhoItsFor";
import Addons from "@/components/Addons";
import FAQ from "@/components/FAQ";
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
        <SocialProof />
        <Pricing />
        <WhoItsFor />
        <Addons />
        <FAQ />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
