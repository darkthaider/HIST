"use-client";

import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/hero";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="hist-outer-container">
      <Hero />
      <Experience />
      <Services />
      <Testimonials />
    </main>
  );
}
