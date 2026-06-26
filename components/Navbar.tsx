'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Inventory', href: '#inventory' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled shadow-xl' : 'bg-brand-black'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label="Best Wheels — Home">
          <Image
            src="/bestwheels.png"
            alt="Best Wheels Car Display"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="font-display font-700 text-white text-xl tracking-wide leading-none hidden sm:block">
            BEST<span className="text-brand-red"> WHEELS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-body text-sm font-semibold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="tel:09498051576"
            className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200 font-display tracking-wide uppercase"
            aria-label="Call Best Wheels: 0949 805 1576"
          >
            <Phone size={14} aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-black border-t border-white/10 px-5 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white font-body font-semibold text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:09498051576"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-red text-white font-bold py-3 rounded-full font-display tracking-wider uppercase text-sm"
            >
              <Phone size={14} aria-hidden="true" />
              Call Now · 0949 805 1576
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
