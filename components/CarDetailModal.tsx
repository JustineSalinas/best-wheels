'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Car, colorConfig, BodyType } from '@/lib/cars'

interface CarDetailModalProps {
  car: Car | null
  onClose: () => void
}

function fmt(n: number) {
  return '₱' + new Intl.NumberFormat('en-PH').format(n)
}

function calcMonthly(principal: number, months: number) {
  const r = 0.015
  const n = months
  return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
}

function CarTopView({ bodyType, colorHex }: { bodyType: BodyType; colorHex: string }) {
  if (bodyType === 'Hatchback') {
    return (
      <svg viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <rect x="35" y="18" width="190" height="144" rx="32" fill={colorHex} />
        <rect x="82" y="58" width="110" height="64" rx="5" fill="rgba(180,220,245,0.3)" />
        <rect x="82" y="58" width="110" height="64" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M82 58 Q130 46 178 58" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <path d="M82 122 Q130 134 178 122" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <line x1="130" y1="58" x2="130" y2="122" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
        <rect x="10" y="32" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="222" y="32" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="10" y="106" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="222" y="106" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="44" y="20" width="40" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
        <rect x="176" y="20" width="40" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
        <rect x="44" y="151" width="40" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
        <rect x="176" y="151" width="40" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect x="30" y="15" width="220" height="150" rx="35" fill={colorHex} />
      <rect x="88" y="56" width="104" height="68" rx="5" fill="rgba(180,220,245,0.3)" />
      <rect x="88" y="56" width="104" height="68" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <path d="M88 56 Q140 43 192 56" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      <path d="M88 124 Q140 137 192 124" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      <line x1="140" y1="56" x2="140" y2="124" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
      <rect x="8" y="30" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="246" y="30" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="8" y="106" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="246" y="106" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="40" y="17" width="46" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
      <rect x="194" y="17" width="46" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
      <rect x="40" y="154" width="46" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      <rect x="194" y="154" width="46" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
    </svg>
  )
}

export default function CarDetailModal({ car, onClose }: CarDetailModalProps) {
  useEffect(() => {
    if (!car) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [car, onClose])

  if (!car) return null

  const color = colorConfig[car.color]
  const principal = car.price && car.downpayment ? car.price - car.downpayment : 0
  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the ${car.year} ${car.brand} ${car.model} ${car.variant} (${car.color}). Is it still available?`
  )
  const whatsappUrl = `https://wa.me/639498051576?text=${whatsappMsg}`

  const specs = [
    {
      label: 'Transmission',
      value: car.transmission ?? '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      label: 'Engine',
      value: car.engine ?? '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="10" rx="2" /><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 17v2M18 17v2" />
        </svg>
      ),
    },
    {
      label: 'Mileage',
      value: car.mileage != null ? `${new Intl.NumberFormat('en-PH').format(car.mileage)} km` : '—',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      label: 'Body Type',
      value: car.bodyType,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-3" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      ),
    },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.72)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${car.year} ${car.brand} ${car.model}`}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl overflow-y-auto max-h-[90vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image / illustration */}
        <div className="relative" style={{ height: car.image ? '240px' : '160px' }}>
          {car.image ? (
            <Image
              src={car.image}
              alt={`${car.year} ${car.brand} ${car.model} ${car.variant}`}
              fill
              className="object-cover object-center rounded-t-2xl"
              sizes="(max-width: 768px) 100vw, 672px"
              quality={90}
            />
          ) : (
            <div className="w-full h-full rounded-t-2xl flex items-center justify-center" style={{ background: color.bg }}>
              <div className="w-64 h-40">
                <CarTopView bodyType={car.bodyType} colorHex={color.hex} />
              </div>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Body type pill */}
          <span className="absolute top-3 left-3 text-[10px] font-body font-700 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/85 text-ink">
            {car.bodyType}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title + color */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="font-display font-800 text-ink text-2xl sm:text-3xl leading-tight">
                {car.year} {car.brand} {car.model}
              </h2>
              <p className="text-ink-muted font-body text-sm mt-1">{car.variant}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 mt-1">
              <span
                className="w-5 h-5 rounded-full border-2 border-border shadow-sm"
                style={{ background: color.hex }}
                aria-hidden="true"
              />
              <span className="text-ink-muted font-body text-sm">{color.label}</span>
            </div>
          </div>

          {/* Spec grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-3 bg-surface rounded-xl p-3">
                <span className="text-brand-red flex-shrink-0">{spec.icon}</span>
                <div>
                  <p className="text-ink-muted font-body text-xs uppercase tracking-widest">{spec.label}</p>
                  <p className="font-body font-600 text-ink text-sm">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price section */}
          {car.price != null && (
            <div className="bg-surface rounded-2xl p-5 mb-5">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-display font-800 text-ink text-3xl">{fmt(car.price)}</span>
                {car.negotiable && (
                  <span className="bg-green-100 text-green-700 font-body font-700 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                    Negotiable
                  </span>
                )}
              </div>
              {car.downpayment != null && (
                <p className="text-ink-muted font-body text-sm">
                  Down Payment: <span className="font-700 text-ink">{fmt(car.downpayment)}</span>
                </p>
              )}
            </div>
          )}

          {/* Estimated monthly */}
          {principal > 0 && (
            <div className="mb-6">
              <p className="font-body font-600 text-ink text-sm mb-3">Estimated Monthly Amortization</p>
              <div className="grid grid-cols-3 gap-3">
                {[24, 36, 48].map((months) => (
                  <div key={months} className="border border-border rounded-xl p-3 text-center">
                    <p className="text-ink-muted font-body text-xs mb-1">{months} months</p>
                    <p className="font-display font-700 text-brand-red text-base">
                      {fmt(calcMonthly(principal, months))}<span className="text-xs font-body font-400 text-ink-muted">/mo</span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-ink-muted font-body text-xs mt-2">* At 1.5% monthly interest. Subject to bank approval.</p>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-display font-700 text-sm uppercase tracking-wider py-3.5 rounded-xl transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.114 1.528 5.837L.057 23.993l6.305-1.454A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.373l-.36-.214-3.718.857.873-3.623-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              Inquire on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="flex-1 border-2 border-border text-ink-muted hover:border-ink hover:text-ink font-display font-700 text-sm uppercase tracking-wider py-3.5 rounded-xl transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
