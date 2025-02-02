"use client"

import { useEffect, useState } from "react"
import Logo from "../Logo"
import { gsap } from "gsap"

type NavLink = {
  href: string
  label: string
  isExternal?: boolean
}

const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#execom", label: "Execom" },
  { href: "#history", label: "History" },
  { href: "https://iedc-admin.vercel.app/", label: "Login", isExternal: true }
]

const NavLink = ({ 
  href, 
  label, 
  isExternal, 
  onClick,
  className = ""
}: NavLink & { 
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string 
}) => (
  <a
    href={href}
    className={`p-4 hover:text-gray-300 transition-colors ${className}`}
    onClick={!isExternal ? (e) => onClick?.(e) : undefined}
  >
    {label}
  </a>
)

const MobileMenuButton = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
  <button 
    onClick={onClick} 
    className="p-4 mr-2 md:hidden"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
  </button>
)

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const menu = document.querySelector(".mobile-menu")
    if (!menu) return

    if (isOpen) {
      // Reset transform before animation to prevent flicker
      gsap.set(menu, { x: "100%" })
      gsap.to(menu, {
        x: 0,
        duration: 0.5,
        ease: "power4.in",
        display: "flex"
      })
    } else {
      gsap.to(menu, {
        x: "100%",
        duration: 0.5,
        ease: "power4.out",
        onComplete: () => { gsap.set(menu, { display: "none" }); return void 0; }
      })
    }
  }, [isOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('http')) {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
        onClose()
      }
    }
  }

  return (
    <div className="mobile-menu fixed top-0 right-0 w-full h-full bg-black text-white 
                    flex-col justify-center items-center z-50 overflow-hidden hidden">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose}
          className="p-4 text-2xl"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        {NAV_LINKS.map(({ href, label, isExternal }) => (
          <NavLink
            key={href}
            href={href}
            label={label}
            isExternal={isExternal}
            onClick={(e) => handleClick(e, href)}
            className="text-2xl"
          />
        ))}
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('http')) {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const target = document.getElementById(targetId)
      target?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-black text-white shadow-sm font-mono z-40">
      <div className="flex items-center">
        <a 
          href="#home" 
          className="p-4"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <Logo size={150} />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        {NAV_LINKS.map(({ href, label, isExternal }) => (
          <NavLink
            key={href}
            href={href}
            label={label}
            isExternal={isExternal}
            onClick={(e) => handleNavClick(e, href)}
            className="text-lg"
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <MobileMenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isOpen={isMenuOpen}
      />
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </nav>
  )
}

export default Navbar