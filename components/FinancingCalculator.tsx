'use client'

import { useState, useEffect } from 'react'

function fmt(n: number) {
  return '₱' + new Intl.NumberFormat('en-PH').format(Math.round(n))
}

function calcMonthly(principal: number, months: number) {
  if (principal <= 0 || months <= 0) return 0
  const r = 0.015
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

const TERMS = [12, 24, 36, 48, 60]

export default function FinancingCalculator() {
  const [price, setPrice] = useState(800000)
  const [downPct, setDownPct] = useState(20)
  const [term, setTerm] = useState(36)
  const [displayMonthly, setDisplayMonthly] = useState(0)

  const down = Math.round(price * (downPct / 100))
  const principal = price - down
  const monthly = calcMonthly(principal, term)
  const totalAmount = monthly * term + down
  const totalInterest = totalAmount - price

  useEffect(() => {
    setDisplayMonthly(monthly)
  }, [monthly])

  const waMsg = encodeURIComponent(
    `Hi! I'm interested in applying for financing. Vehicle price: ₱${new Intl.NumberFormat('en-PH').format(price)}, Down Payment: ₱${new Intl.NumberFormat('en-PH').format(down)}, Term: ${term} months. Estimated monthly: ₱${new Intl.NumberFormat('en-PH').format(Math.round(monthly))}.`
  )

  return (
    <section id="financing" className="py-20 bg-brand-black" aria-label="Financing Calculator">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red font-body font-600 text-sm mb-2 uppercase tracking-widest">Bank Financing</p>
          <h2
            className="font-display font-800 text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Estimate Your Monthly Payment
          </h2>
          <p className="text-white/50 font-body text-base mt-3 max-w-xl mx-auto">
            Use the calculator below to get an estimate. We&apos;ll help you finalize the best financing plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Controls */}
          <div className="space-y-8">
            {/* Vehicle Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-body font-600 text-white text-sm">Vehicle Price</label>
                <span className="font-display font-700 text-brand-red text-lg">{fmt(price)}</span>
              </div>
              <input
                type="range"
                min={300000}
                max={1500000}
                step={10000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-red bg-white/10"
                aria-label="Vehicle price"
              />
              <div className="flex justify-between text-white/30 font-body text-xs mt-1">
                <span>₱300K</span><span>₱1.5M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-body font-600 text-white text-sm">Down Payment ({downPct}%)</label>
                <span className="font-display font-700 text-brand-red text-lg">{fmt(down)}</span>
              </div>
              <input
                type="range"
                min={10}
                max={40}
                step={1}
                value={downPct}
                onChange={(e) => setDownPct(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-red bg-white/10"
                aria-label="Down payment percentage"
              />
              <div className="flex justify-between text-white/30 font-body text-xs mt-1">
                <span>10%</span><span>40%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="font-body font-600 text-white text-sm block mb-3">Loan Term</label>
              <div className="flex gap-2 flex-wrap">
                {TERMS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`px-4 py-2 rounded-xl font-display font-700 text-sm transition-all border ${
                      term === t
                        ? 'bg-brand-red border-brand-red text-white'
                        : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    {t}mo
                  </button>
                ))}
              </div>
            </div>

            <p className="text-white/30 font-body text-xs">
              * Interest rate: 1.5% per month. Subject to bank approval. Actual rate may vary.
            </p>
          </div>

          {/* Output */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-white/50 font-body text-sm mb-2 text-center">Estimated Monthly Amortization</p>
            <div className="text-center mb-6">
              <span
                className="font-display font-800 text-white transition-all duration-300"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
              >
                {fmt(displayMonthly)}
              </span>
              <span className="text-white/40 font-body text-base ml-1">/mo</span>
            </div>

            <div className="space-y-3 mb-8">
              {[
                { label: 'Loan Principal', value: fmt(principal) },
                { label: 'Down Payment', value: fmt(down) },
                { label: 'Total Interest', value: fmt(totalInterest) },
                { label: 'Total Amount', value: fmt(totalAmount) },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/50 font-body text-sm">{label}</span>
                  <span className="font-display font-700 text-white text-sm">{value}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/639498051576?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-red hover:bg-brand-red-dark text-white font-display font-700 text-sm uppercase tracking-wider py-4 rounded-xl transition-colors duration-200"
            >
              Apply for Financing via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
