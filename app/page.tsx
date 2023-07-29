"use-client";

import TestimonaialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import Experience from "@/components/ui/experience/Experience";
import Services from "@/components/ui/services/Services";

export default function Home() {
  return (
    <main className="hist-outer-container">
      <h1 className="hist-inner-container text-hist_title_lg text-hist_white-900">
        HIST
      </h1>
      <Experience />
      <Services />
      <TestimonaialSlider />
    </main>
  );
}
