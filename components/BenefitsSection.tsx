'use client'

import { useState } from 'react'
import { ChevronDown, Car, Landmark, Star, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    id: 'vehicle',
    Icon: Car,
    label: 'Vehicle Benefits',
    subtitle: 'Every unit is prepared to impress',
    color: 'text-brand-red',
    bg: 'bg-brand-red/8',
    border: 'border-brand-red/20',
    activeBg: 'bg-brand-red',
    items: [
      'Fully inspected units — cool as new condition before release',
      'Updated OR/CR registration included',
      'Reliable and practical units only',
      'Open for trade-in',
    ],
  },
  {
    id: 'financing',
    Icon: Landmark,
    label: 'Financing Benefits',
    subtitle: 'Flexible packages to fit your budget',
    color: 'text-blue-500',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
    activeBg: 'bg-blue-500',
    items: [
      'All-in financing packages available',
      'Free 1-year comprehensive insurance',
      'Free transfer processing',
      'Free chattel mortgage processing',
    ],
  },
  {
    id: 'experience',
    Icon: Star,
    label: 'Customer Experience Benefits',
    subtitle: 'We go the extra mile for every buyer',
    color: 'text-amber-500',
    bg: 'bg-amber-500/8',
    border: 'border-amber-500/20',
    activeBg: 'bg-amber-500',
    items: [
      'Complimentary 17 liters of fuel on release',
      '3-month service warranty (labor only)',
      'Lifetime free check-up',
      'More freebies upon release',
    ],
  },
]

export default function BenefitsSection() {
  const [open, setOpen] = useState<string | null>('vehicle')

  return (
    <section className="py-20 bg-surface" aria-label="Purchase benefits">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Included with Every Purchase
          </p>
          <h2
            className="font-display font-extrabold text-ink leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            What You Get with
            <br />
            <span className="text-brand-red">Best Wheels</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {categories.map(({ id, Icon, label, subtitle, color, bg, border, activeBg, items }) => {
            const isOpen = open === id
            return (
              <div
                key={id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-transparent shadow-lg shadow-black/8' : `${border} bg-white`
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => setOpen(isOpen ? null : id)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 ${
                    isOpen ? `${activeBg} text-white` : 'bg-white hover:bg-surface-2'
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-white/20' : `${bg}`
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isOpen ? 'text-white' : color}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-left">
                      <p className={`font-display font-extrabold text-base leading-tight ${isOpen ? 'text-white' : 'text-ink'}`}>
                        {label}
                      </p>
                      <p className={`font-body text-xs mt-0.5 ${isOpen ? 'text-white/70' : 'text-ink-muted'}`}>
                        {subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : 'text-ink-muted'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <ul className="bg-white px-6 py-5 flex flex-col gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm text-ink leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-ink-muted font-body text-xs mt-8">
          Benefits apply to all units. Ask us for full details on each package.
        </p>
      </div>
    </section>
  )
}
