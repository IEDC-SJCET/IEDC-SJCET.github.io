"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GridPattern } from "@/components/ui/grid-pattern";
import { WordRotate } from "@/components/ui/word-rotate";
import FeaturesSection from "@/components/features-section";
import CommunityPartners from "@/components/communityPartners";
import EventGrid from "@/components/eventGrid";
import ExecomGallery from "@/components/Execom";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Animate sections on scroll
      gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Text reveal animation
      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, mainRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <main
      ref={mainRef}
      className="flex min-h-screen flex-col items-center justify-center "
    >
      <GridPattern />
      <section
        id="hero"
        className="container mx-auto flex h-screen w-full flex-col items-center justify-center px-4"
      >

        <h1 className="lg:leading-tighter xl:leading-tighter mb-4 text-balance text-center font-trap text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl xl:text-8xl">
          <span className="hero-text mb-2 block">Discovering</span>
          <WordRotate
            className="hero-text mb-2 block font-bold text-purple-500 dark:text-white"
            words={["Creative", "Technical", "Innovative"]}
          />
          <span className="hero-text block">Students Among Us</span>
        </h1>
        <p className="hero-text mb-6 text-center text-lg sm:text-xl md:text-2xl">
          Let&apos;s Get Your Dreams Incubated
        </p>
        <button
          onClick={() => {
            window.location.href =
              "https://innovate.startupmission.in/#/register";
          }}
          type="button"
          className="hero-button flex items-center justify-center rounded-full border-2 border-black px-6 py-3 text-base transition-colors duration-200 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:border-white dark:hover:bg-white dark:hover:text-black sm:text-lg md:text-xl"
        >
          Join Us
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-auto w-full bg-[#4d17f5]">
          <VelocityScroll>
            🎉 Celebrating 10 Years of IEDC Bootcamp SJCET! 🎓🎉 Join the
            celebration this year! 🎉
          </VelocityScroll>
        </div>
      </section>
      <section
        id="whyus"
        className="animate-section relative -mt-16 flex min-h-screen w-full flex-col items-center justify-center bg-[#faa0cf]"
      >
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `linear-gradient(#D896BB 1px, transparent 1px),
                           linear-gradient(90deg, #D896BB 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <FeaturesSection />
      </section>
      <section className="animate-section relative flex min-h-screen w-full flex-col items-center justify-center bg-[#4d17f5] p-4 md:p-6 lg:p-8">
        {/* Background Grid */}
        <div
          className="absolute inset-0 h-full w-full opacity-25"
          style={{
            backgroundImage: `linear-gradient(#D896BB 1px, transparent 1px),
                       linear-gradient(90deg, #D896BB 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main Content Container */}
        <div className="relative w-full max-w-7xl">
          {/* Flex Container */}
          <div className="flex h-full w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Left Column - Main Content */}
            <div className="w-full border-b border-white p-4 text-white lg:h-screen lg:w-1/2 lg:border-b-0 lg:border-r lg:p-8">
              <div className="space-y-6">
                <h2 className="text-reveal mb-4 text-2xl font-bold md:text-3xl lg:mb-6">
                  SJCET Startup Bootcamp - IEDC
                </h2>
                <p className="text-reveal text-balance text-base md:text-lg">
                  Innovation and Entrepreneurship Development Centre was set up
                  on 9th March 2015 as a part of the Kerala Startup Mission
                  (KSUM) initiative to develop a startup culture amongst
                  students. The IEDCs are platforms set up in Engineering,
                  Management, Arts & Science Colleges and Polytechnics with an
                  aim to provide students an opportunity to experiment and
                  innovate.
                </p>
                <p className="text-reveal text-balance text-base md:text-lg">
                  KSUM has set up IEDCs in 226 institutions across the State
                  which provide avenues for creative students to learn,
                  collaborate and transform their innovative ideas into
                  prototypes of viable products and services. IEDCs works as the
                  first launch pad for a student&apos;s entrepreneurial journey and
                  provide them with access to cutting edge technology, world
                  class infrastructure, high quality mentorship, early risk
                  capital and global exposure.
                </p>
              </div>
            </div>

            {/* Right Column - Vision & Mission */}
            <div className="w-full lg:w-1/2">
              {/* Vision Section */}
              <div className="border-b border-white p-4 text-white md:p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <h2 className="text-reveal text-xl font-bold text-yellow-300 md:text-2xl">
                      VISION
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-purple-500 px-3 py-1 text-sm">
                        BRANDING
                      </span>
                      <span className="rounded-full bg-purple-500 px-3 py-1 text-sm">
                        INNOVATION
                      </span>
                      <span className="rounded-full bg-purple-500 px-3 py-1 text-sm">
                        TECHNOLOGY
                      </span>
                    </div>
                  </div>
                  <p className="text-reveal text-base md:text-lg">
                    To create an innovation culture among Innovators by
                    introducing them the State-of-the-art technologies and
                    positioning the Institution as a Learning and Innovation
                    Platform by delivering technically competent and skilled
                    Entrepreneurs.
                  </p>
                </div>
              </div>

              {/* Mission Section */}
              <div className="border-b border-white p-4 text-white md:p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <h2 className="text-reveal text-xl font-bold text-yellow-300 md:text-2xl">
                      MISSION
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-purple-500 px-3 py-1 text-sm">
                        STRATEGY
                      </span>
                      <span className="rounded-full bg-purple-500 px-3 py-1 text-sm">
                        DEVELOPMENT
                      </span>
                      <span className="rounded-full bg-purple-500 px-3 py-1 text-sm">
                        GROWTH
                      </span>
                    </div>
                  </div>
                  <p className="text-reveal text-base md:text-lg">
                    To create IEDC as an Innovation Platform and to create
                    future founders by promoting Innovation, Technology and
                    Business Learning among student community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="animate-section">
        <CommunityPartners />
      </div>
      <div className="animate-section w-full" id="events">
        <EventGrid />
      </div>
      <div className="animate-section" id="execom">
        <ExecomGallery />
      </div>
      <div className="animate-section" id="history">
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}
