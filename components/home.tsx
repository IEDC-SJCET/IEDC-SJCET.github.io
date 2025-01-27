"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MoveRight } from "lucide-react";

export function HomePage() {
    const animateWords = ["Creative", "Technical", "Innovative"];
    const [currentWord, setCurrentWord] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % animateWords.length);
                setIsVisible(true);
            }, 500);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative min-h-screen flex items-center"
            style={{
                backgroundImage: "url(/background.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black/95" />
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="flex flex-col-reverse md:flex-row h-full">
                    <div className="flex-grow-1 flex flex-col justify-center mb-5 mb-md-0">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                            Discovering
                            <br />
                            <AnimatePresence mode="popLayout">
                                {isVisible && (
                                    <motion.span
                                        key={animateWords[currentWord]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-[#4CAF50] inline-block"
                                    >
                                        {animateWords[currentWord]}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                            <br />
                            Students among us
                            <span className="text-[#4CAF50]">.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-8">
                            Let Get Your <span className="text-[#4CAF50]">Dreams</span> Incubated
                        </p>
                        <motion.a
                            href="https://innovate.startupmission.in/#/register"
                            className="relative overflow-hidden group inline-flex items-center px-8 py-3 rounded-full w-fit border-2"
                            whileHover="hover"
                        >
                            <motion.span className="relative z-10 text-white group-hover:text-black transition-colors duration-200">
                                Join us
                                <motion.span
                                    className="ml-2 inline-block align-middle"
                                    variants={{
                                        hover: { x: 10 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <MoveRight />
                                </motion.span>
                            </motion.span>
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: "-100%" }}
                                variants={{
                                    hover: { x: 0 },
                                }}
                                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                            />
                        </motion.a>
                    </div>
                    <div className="flex-grow-1" />
                </div>
            </div>
        </div>
    )
}

