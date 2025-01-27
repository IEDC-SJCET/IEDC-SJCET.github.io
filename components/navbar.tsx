"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export function Navbar() {
    const headerElements = [
        ["WHY IEDC", "/why-iedc"],
        ["EVENTS", "/events"],
        ["SUMMIT", "/summit"],
        ["EXECOM", "/execom"],
        ["ABOUT US", "/about"],
        ["LOGIN", "/login"],
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
            <div className="max-w-7xl mx-auto flex justify-between">
                <Link href="/" className="relative w-40 h-12">
                    <Image
                        src="/logo.png"
                        alt="Boot Camp Logo"
                        fill
                        className="object-contain "
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {headerElements.map(([title, url]) => (
                        <Link key={title} href={url} className="relative overflow-hidden">
                        <motion.span
                          className="relative text-white block px-2 py-2 transition-colors font-bold"
                          whileHover={{ backgroundColor: "#4CAF50" }}>
                                {title}
                            </motion.span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}