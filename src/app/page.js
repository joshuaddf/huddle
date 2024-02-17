import Build from "@/components/Build";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Social from "@/components/Social";

export default function Home() {
  return (
   <main>
    <div className="lg:w-[90vw] 2xl:max-w-[75rem] mx-auto w-[87vw]">
    <Hero />
    <Social />
    </div>
    <Grid />
    <Build />
    <Footer />
   </main>
  );
}
