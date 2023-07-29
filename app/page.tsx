"use-client";

import TestimonaialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import Experience from "@/components/ui/experience/Experience";
import Services from "@/components/ui/services/Services";

import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="hist-outer-container">
      <Hero />
      <Experience />
      <Services />
      <TestimonaialSlider />
    </main>
  );
}
