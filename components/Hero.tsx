'use client'

import { ArrowRight, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

const rotatingLines = [
  { line1: 'Bank Repos.', line2: 'Real Deals.' },
  { line1: '2nd Hand Cars.', line2: 'Real Value.' },
  { line1: 'Slightly Used.', line2: 'Fair Prices.' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingLines.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(cycle)
  }, [])

  const badges = [
    'Updated Documents',
    'Financing Ready',
    'Trade-In Accepted',
    'Lifetime Free Check-Up',
    'Free 3 Car Washes',
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero section"
      style={{
        backgroundImage: 'url(/backgroundhero.jpg)',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundColor: '#181818',
      }}
    >
      {/* Dark veil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'rgba(0,0,0,0.50)' }}
      />
      {/* Red tint left half */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '55%',
          background: 'linear-gradient(to right, rgba(143,18,23,0.78) 0%, rgba(143,18,23,0.50) 60%, transparent 100%)',
        }}
      />
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 28px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 flex-1">
        <div className="flex-1 lg:pr-8 xl:pr-16 z-10">
          <div className="hero-headline inline-flex items-center gap-2 mb-6">
            <span className="available-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            <span className="text-white/70 text-sm font-body font-semibold tracking-widest uppercase">
              21 Units Available Now
            </span>
          </div>

          <h1
            className="hero-headline font-display font-extrabold text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            <span
              style={{
                display: 'inline-block',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-8px)',
              }}
            >
              {rotatingLines[index].line1}
            </span>
            <br />
            <span
              className="text-white/90"
              style={{
                display: 'inline-block',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              {rotatingLines[index].line2}
            </span>
            <br />
            <span
              className="relative inline-block"
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: 'rgba(255,255,255,0.4)',
                color: 'transparent',
              }}
            >
              Iloilo.
            </span>
          </h1>

          <p className="hero-sub text-white/75 font-body text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Trusted local dealer for bank repos, 2nd hand, and slightly used cars.
            Financing ready, trade-in accepted, and lifetime check-up included.
          </p>

          <div className="hero-ctas flex flex-wrap gap-3 mb-10">
            <a
              href="#inventory"
              className="inline-flex items-center gap-2 bg-white text-brand-red font-display font-extrabold text-base uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-brand-red-light transition-colors duration-200"
            >
              Browse Units
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/639498051576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display font-extrabold text-base uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #c0191f 0%, #8f1217 100%)',
                color: '#fff',
                boxShadow: '0 0 0 2px rgba(255,255,255,0.25), 0 4px 16px rgba(192,25,31,0.45)',
              }}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Inquire Now
            </a>
          </div>

          <div className="hero-badges flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(0,0,0,0.55)',
                  border: '1px solid rgba(255,255,255,0.30)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <CheckCircle2 size={10} className="text-green-400 flex-shrink-0" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#inventory"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll to inventory"
        >
          <span className="text-xs font-body tracking-widest uppercase">See Available Units</span>
          <ChevronDown size={20} className="animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
