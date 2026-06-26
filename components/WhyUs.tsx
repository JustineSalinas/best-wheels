'use client'

import { useEffect, useRef } from 'react'
import { FileCheck2, Landmark, Repeat2, HeartPulse, Droplets, CircleDollarSign, Phone } from 'lucide-react'

const features = [
  {
    Icon: FileCheck2,
    title: 'Verified Units & Updated Docs',
    desc: 'Every unit comes with complete, legally updated documents. No surprises at the LTO — we handle that so you don\'t have to.',
  },
  {
    Icon: Landmark,
    title: 'Financing Ready',
    desc: 'We assist with bank financing and in-house loan applications. Fast approval, low down, flexible terms — we find what fits your budget.',
  },
  {
    Icon: Repeat2,
    title: 'Trade-In Accepted',
    desc: 'Drive in your current car, drive out in your next one. We give fair trade-in valuations so you get the best deal on your upgrade.',
  },
  {
    Icon: HeartPulse,
    title: 'Lifetime Free Check-Up',
    desc: 'Every purchase includes lifetime free periodic check-ups at our service partner. Your car stays healthy long after the sale.',
  },
  {
    Icon: Droplets,
    title: 'Free 3 Car Washes',
    desc: 'We throw in 3 complimentary car washes with every purchase. Because your new car deserves to look its best from day one.',
  },
  {
    Icon: CircleDollarSign,
    title: 'Big Discount for Cash Buyers',
    desc: 'Paying cash? Expect a significant discount off the listed price. We reward buyers who close fast with the best deals in Iloilo.',
  },
]

export default function WhyUs() {
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

  return (
    <section
      id="why-us"
      className="py-24 bg-dark-gradient text-white"
      ref={sectionRef}
      aria-label="Why choose Best Wheels"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <h2
            className="font-display font-800 text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Why Choose
            <br />
            <span className="text-brand-red">Best Wheels?</span>
          </h2>
          <p className="text-white/60 font-body text-base leading-relaxed">
            We&apos;re not just selling cars — we&apos;re building trust with every transaction.
            Here&apos;s what sets us apart from every other dealer in Iloilo City.
          </p>
        </div>

        {/* Features grid */}
        <div
          className="stagger-children grid gap-6 sm:gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}
        >
          {features.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl border border-white/8 hover:border-brand-red/40 bg-white/4 hover:bg-white/6 transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(191,26,32,0.08) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-red" aria-hidden="true" />
                </div>
                <h3 className="font-display font-700 text-white text-lg mb-2 leading-tight">{title}</h3>
                <p className="text-white/55 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-14 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-display font-700 text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors duration-200"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:09498051576"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            0949 805 1576
          </a>
        </div>
      </div>
    </section>
  )
}
