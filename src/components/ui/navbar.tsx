"use client"
import type React from "react"
import { useEffect, useState } from "react"
import Logo from "../Logo"
import { gsap } from "gsap"

function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault()
  const target = document.getElementById(targetId)
  if (target) {
    target.scrollIntoView({ behavior: "smooth" })
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%" },
        { x: 0, duration: 0.5, ease: "power4.out" }
      )
    } else {
      gsap.fromTo(
        ".mobile-menu",
        { x: 0 },
        { x: "100%", duration: 0.5, ease: "power4.out" }
      )
    }
  }, [isMenuOpen])

  return (
    <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm font-mono">
      <div className="pl-8">
        <a href="#home" className="text-2xl font-bold" onClick={(e) => handleScroll(e, "home")}>
          <Logo size={200} />
        </a>
      </div>
      
      <div className="pr-8 text-xl hidden md:flex">
        <a href="#home" className="p-4" onClick={(e) => handleScroll(e, "home")}>
          Home
        </a>
        <a href="#events" className="p-4" onClick={(e) => handleScroll(e, "events")}>
          Events
        </a>
        <a href="#execom" className="p-4" onClick={(e) => handleScroll(e, "execom")}>
          Execom
        </a>
        <a href="#history" className="p-4" onClick={(e) => handleScroll(e, "history")}>
          History
        </a>
        <a href="https://iedc-admin.vercel.app/" className="p-4">
          Login
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden pr-8">
        <button onClick={toggleMenu} className="text-2xl">
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 w-full h-full bg-black text-white flex flex-col justify-center items-center z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-8 right-8 text-3xl text-white"
        >
          &times;
        </button>
        <a
          href="#home"
          className="p-6 text-2xl"
          onClick={(e) => {
            handleScroll(e, "home")
            closeMenu()
          }}
        >
          Home
        </a>
        <a
          href="#events"
          className="p-6 text-2xl"
          onClick={(e) => {
            handleScroll(e, "events")
            closeMenu()
          }}
        >
          Events
        </a>
        <a
          href="#execom"
          className="p-6 text-2xl"
          onClick={(e) => {
            handleScroll(e, "execom")
            closeMenu()
          }}
        >
          Execom
        </a>
        <a
          href="#history"
          className="p-6 text-2xl"
          onClick={(e) => {
            handleScroll(e, "history")
            closeMenu()
          }}
        >
          History
        </a>
        <a
          href="https://iedc-admin.vercel.app/"
          className="p-6 text-2xl"
          onClick={closeMenu}
        >
          Login
        </a>
      </div>
    </nav>
  )
}

export default Navbar
