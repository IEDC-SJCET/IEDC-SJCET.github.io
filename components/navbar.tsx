"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const headerElements = [
        ["WHY IEDC", "#why-iedc"],
        ["EVENTS", "#events"],
        ["SUMMIT", "#summit"],
        ["EXECOM", "#execom"],
        ["ABOUT US", "#about"],
        ["LOGIN", "/login"],
    ]

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="relative w-40 h-12">
                    <Image src="/IEDC-SJCET.github.io/logo.png" alt="Boot Camp Logo" fill className="object-contain" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {headerElements.map(([title, url]) => (
                        <Link key={title} href={url} className="relative overflow-hidden">
                            <motion.span
                                className="relative text-white block px-2 py-2 transition-colors font-bold"
                                whileHover={{ backgroundColor: "#4CAF50" }}
                            >
                                {title}
                            </motion.span>
                        </Link>
                    ))}
                </div>

                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ type: "tween" }}
                        className="fixed inset-y-0 left-0 bg-black bg-opacity-50 z-50 md:hidden"
                    >
                        <div className="bg-white h-full w-64 p-4">
                            <div className="flex justify-end">
                                <button className="text-black" onClick={() => setIsOpen(false)}>
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 mt-8">
                                {headerElements.map(([title, url]) => (
                                    <Link key={title} href={url} className="text-black font-bold py-2" onClick={() => setIsOpen(false)}>
                                        {title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}