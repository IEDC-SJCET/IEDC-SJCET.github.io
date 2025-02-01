"use client"

import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault()
  const target = document.getElementById(targetId)
  if (target) {
    target.scrollIntoView({ behavior: "smooth" })
  }
}


export default function Footer() {
  return (
    <footer className="bg-black w-full text-white min-h-screen flex flex-col justify-between p-6 lg:p-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-6">FOLLOW US</h3>
          <div className="flex gap-8">
            <Link href="https://linkedin.com" className="hover:opacity-70 transition-opacity">
              <Linkedin size={32} className="opacity-75" />
            </Link>
            <Link href="https://instagram.com" className="hover:opacity-70 transition-opacity">
            <Instagram size={32} className="opacity-75" />
              
            </Link>
            <Link href="https://twitter.com" className="hover:opacity-70 transition-opacity">
            <X size={32} className="opacity-75" />

            </Link>
            <Link href="https://facebook.com" className="hover:opacity-70 transition-opacity">
            <Facebook size={32} className="opacity-75" />

            </Link>
            {/* <Link href="https://discord.com" className="hover:opacity-70 transition-opacity">
            <disco size={32} className="opacity-75" />

            </Link> */}
            <Link href="https://youtube.com" className="hover:opacity-70 transition-opacity">
            <Youtube size={32} className="opacity-75" />

            </Link>
          </div>
        </div>

        {/* <div className="mt-8 lg:mt-0">
          <Link href="https://instagram.com/ISRADESIGN" className="text-gray-300 hover:text-white">
            <Logo/>
          </Link>
        </div> */}
      </div>

      {/* Logo Section */}
      <div className="my-20">
        <Logo size={800}/>
      </div>

      {/* Map Section */}
      <div className="w-full h-[300px] mb-20 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.46399988506!2d76.72366847502758!3d9.7267055903652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai!5e0!3m2!1sen!2sin!4v1738417195806!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
        <nav className="flex gap-8">
          <Link href="#home" className="hover:text-gray-300 transition-colors" onClick={(e) => handleScroll(e, "home")}>
            Home
          </Link>
          <Link href="#events" className="hover:text-gray-300 transition-colors" onClick={(e) => handleScroll(e, "events")}>
            Events
          </Link>
          <Link href="#execom" className="hover:text-gray-300 transition-colors" onClick={(e) => handleScroll(e, "execom")}>
            Execom
          </Link>
          <Link href="#history" className="hover:text-gray-300 transition-colors" onClick={(e) => handleScroll(e, "history")}>
            History
          </Link>
        </nav>

        
      </div>

      
    </footer>
  )
}

