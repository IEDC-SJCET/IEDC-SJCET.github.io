"use client";

import { useEffect, useState } from "react";
import AOS from 'aos';
import Hero from "@/components/sections/Hero";
import WhyIEDC from "@/components/sections/WhyIEDC";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div id="loading" className="vh-100 vw-100 bg-white">
        <div id="loader" className="lds-ring shadow-lg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
      <Hero />
      <WhyIEDC />
    </div>
  );
}
