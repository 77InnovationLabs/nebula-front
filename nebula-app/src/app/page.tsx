import CTA from "@/components/CTA";
import Empower from "@/components/Empower";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import Trusted from "@/components/Trusted";
import Validation from "@/components/Validation";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HeroImage/>
      <Empower/>
      <Validation/>
      <CTA/>
      <Trusted/>
    </div>
  );
}
