"use-client";

import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/hero";
import Testimonials from "@/components/testimonials/testimonials";
import AboutUs from "@/components/aboutUs/aboutUs";
import Industries from "@/components/industries/industries";
import Locations from "@/components/locations/locations";
import Process from "@/components/process/process";
import Footer from "@/components/ui/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Services />
      <Testimonials />
      <Industries />
      <Locations />
      <Process />
      <AboutUs />
      <Footer />
    </main>
  );
}
