import Experience from "@/components/ui/experience/Experience";
import Services from "@/components/ui/services/Services";

export default function Home() {
  return (
    <main className="hist-outer-container bg-hist_re">
      <h1 className="hist-inner-container lg:text-hist_title_lg text-hist_white-900 bg-hist_white-800">
        HIST
      </h1>
      <Experience />
      <Services />
    </main>
  );
}
