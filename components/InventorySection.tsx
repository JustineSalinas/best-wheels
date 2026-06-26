'use client'

import { useState, useEffect, useRef } from 'react'
import { cars, ALL_BRANDS, ALL_BODY_TYPES } from '@/lib/cars'
import CarCard from './CarCard'

export default function InventorySection() {
  const [activeBrand, setActiveBrand] = useState<string>('All')
  const [activeBody, setActiveBody] = useState<string>('All')
  const [search, setSearch] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    const reveals = section.querySelectorAll('.reveal, .stagger-children')
    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const filtered = cars.filter((car) => {
    const matchBrand = activeBrand === 'All' || car.brand === activeBrand
    const matchBody = activeBody === 'All' || car.bodyType === activeBody
    const matchSearch =
      !search ||
      `${car.year} ${car.brand} ${car.model} ${car.variant} ${car.color}`
        .toLowerCase()
        .includes(search.toLowerCase())
    return matchBrand && matchBody && matchSearch
  })

  return (
    <section id="inventory" className="py-20 bg-white" ref={sectionRef} aria-label="Available car inventory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="reveal mb-10">
          <p className="text-brand-red font-body font-600 text-sm mb-2">Sedan &amp; Hatchback</p>
          <h2
            className="font-display font-800 text-ink"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Available Units
          </h2>
          <p className="text-ink-muted font-body mt-2 text-base">
            All units verified with updated documents. Ready for financing or cash.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search by brand, model, color…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-border rounded-xl text-sm font-body text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
              aria-label="Search inventory"
            />
          </div>

          {/* Body type filter */}
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filter by body type">
            {ALL_BODY_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveBody(type)}
                className={`filter-tab font-body font-600 text-sm px-4 py-2 rounded-xl border transition-all ${
                  activeBody === type
                    ? 'active border-brand-red text-white'
                    : 'border-border text-ink-muted hover:border-brand-red hover:text-brand-red bg-white'
                }`}
                aria-pressed={activeBody === type}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Brand tabs */}
        <div
          className="reveal reveal-delay-2 flex gap-2 flex-wrap mb-10"
          role="group"
          aria-label="Filter by brand"
        >
          {ALL_BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`font-body font-600 text-sm px-3.5 py-1.5 rounded-full border transition-all ${
                activeBrand === brand
                  ? 'bg-ink text-white border-ink'
                  : 'border-border text-ink-muted hover:border-ink hover:text-ink bg-white'
              }`}
              aria-pressed={activeBrand === brand}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="reveal reveal-delay-2 text-ink-muted font-body text-sm mb-6" aria-live="polite">
          {filtered.length} unit{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div
            className="stagger-children grid gap-5"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            }}
          >
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-ink-muted font-body text-lg mb-3">No units match your search.</p>
            <button
              onClick={() => {
                setActiveBrand('All')
                setActiveBody('All')
                setSearch('')
              }}
              className="text-brand-red font-body font-600 hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <p className="text-ink-muted font-body text-sm mb-4">
            Don&apos;t see what you need? We update inventory regularly.
          </p>
          <a
            href="https://www.facebook.com/bestwheelscardisplay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-display font-700 text-sm uppercase tracking-wide px-6 py-3 rounded-full transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M12 2H10C8.34 2 7 3.34 7 5V7H5V10H7V14H10V10H12L12.5 7H10V5C10 4.72 10.22 4.5 10.5 4.5H12V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            Follow Us on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
