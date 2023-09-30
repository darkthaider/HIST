import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/hero";
import Testimonials from "@/components/testimonials/testimonials";
import AboutUs from "@/components/aboutUs/aboutUs";
import Industries from "@/components/industries/industries";
import Locations from "@/components/locations/locations";
import Process from "@/components/process/process";
import Footer from "@/components/ui/footer/footer";
import Particle from "@/components/particles/particles";
import GlobeComponent from "@/components/ui/globe/GlobeComponent";
import NoSSRWrapper from "@/components/NoSSRWrapper";
import TextAnimation from "@/components/ui/textAnimation/textAnimation";

export default function Home() {
  return (
    <main>
      <div className="fixed">
        <Particle />
      </div>
      <Hero />
      <Experience />
      <Services />
      <Testimonials />
      <Industries />
      <NoSSRWrapper>
        <GlobeComponent />
      </NoSSRWrapper>
      <Process />
      <AboutUs />
      <Footer />
    </main>
  );
}
