import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import WhyIedc from "./components/whyiedc";
import About from "./components/about";
import Partners from "./components/partners";
import Summit from "./components/summit";
import Execom from "./components/execom";
import { Timeline } from "../components/Timeline";
import TimelinePage from "./components/timeline";
import Footer from "./components/footer";
import EventsHome from "./components/events";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">

      <Navbar />
      <Hero />
      <section className="w-full bg-black text-white font-regular">
        <VelocityScroll defaultVelocity={2} numRows={1}>CREATIVE &middot; INNOVATIVE &middot; TECHNICAL &middot;</VelocityScroll>
      </section>
      <WhyIedc />
      <About />
      <Partners />
      <EventsHome />
      <Summit />
      <Execom />
      <TimelinePage />
      <Footer />
    </main>
  );
}
