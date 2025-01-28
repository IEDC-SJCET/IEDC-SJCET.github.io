'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = () => {
  const words = ["Creative", "Innovative", "Technical"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-w-[250px] h-[1.3em] inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-5 text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative">
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/college.jpg"
            alt="SJCET Campus"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="space-y-2 max-w-xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white -mb-6">
                Discovering
              </h1>
              <div className="space-y-0">
                <div className="text-5xl md:text-6xl font-bold -mt-6">
                  <AnimatedText />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white -mt-6">
                  among us.
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-white mt-6 mb-8">
                Let Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Dreams</span> Incubated
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/join"
                  className="inline-block bg-transparent text-white px-8 py-2.5 rounded-full text-base font-semibold border-2 border-white hover:border-[#bf953f] hover:bg-gradient-to-r hover:from-[#bf953f] hover:via-[#fcf6ba] hover:to-[#b38728] hover:text-black transition-all duration-700"
                >
                  Join us
                </Link>
                {/* 10 Years of Innovation Badge */}
                <div className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full px-4 py-2 text-black font-bold text-sm shadow-lg hover:scale-105 transition-transform duration-300">
                  10 Years of Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why IEDC Section */}
    </div>
  );
};

export default Home;
