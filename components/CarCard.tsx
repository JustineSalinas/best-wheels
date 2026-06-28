import Image from 'next/image'
import { Car, BodyType, colorConfig } from '@/lib/cars'

interface CarCardProps {
  car: Car
  onClick: () => void
}

function CarTopView({ bodyType, colorHex }: { bodyType: BodyType; colorHex: string }) {
  if (bodyType === 'Hatchback') {
    return (
      <svg
        viewBox="0 0 260 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect x="35" y="18" width="190" height="144" rx="32" fill={colorHex} />
        <rect x="82" y="58" width="110" height="64" rx="5" fill="rgba(180,220,245,0.3)" />
        <rect x="82" y="58" width="110" height="64" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <path d="M82 58 Q130 46 178 58" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <path d="M82 122 Q130 134 178 122" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        <line x1="130" y1="58" x2="130" y2="122" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
        <line x1="106" y1="18" x2="106" y2="162" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
        <line x1="154" y1="18" x2="154" y2="162" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
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
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect x="30" y="15" width="220" height="150" rx="35" fill={colorHex} />
      <rect x="88" y="56" width="104" height="68" rx="5" fill="rgba(180,220,245,0.3)" />
      <rect x="88" y="56" width="104" height="68" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <path d="M88 56 Q140 43 192 56" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      <path d="M88 124 Q140 137 192 124" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      <line x1="140" y1="56" x2="140" y2="124" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
      <line x1="110" y1="15" x2="110" y2="165" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="170" y1="15" x2="170" y2="165" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <rect x="8" y="30" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="246" y="30" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="8" y="106" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="246" y="106" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="40" y="17" width="46" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
      <rect x="194" y="17" width="46" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
      <rect x="40" y="154" width="46" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      <rect x="194" y="154" width="46" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      <line x1="192" y1="15" x2="192" y2="165" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    </svg>
  )
}

export default function CarCard({ car, onClick }: CarCardProps) {
  const color = colorConfig[car.color]

  return (
    <article
      className="car-card bg-white rounded-2xl overflow-hidden border border-border shadow-md flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
      aria-label={`${car.year} ${car.brand} ${car.model} ${car.variant}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
    >
      {/* Car image / illustration header */}
      <div className="relative overflow-hidden" style={{ height: car.image ? '200px' : undefined }}>
        {car.image ? (
          <Image
            src={car.image}
            alt={`${car.year} ${car.brand} ${car.model} ${car.variant}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
          />
        ) : (
          <div
            className="px-6 pt-6 pb-4 flex items-center justify-center"
            style={{ background: color.bg }}
          >
            <div className="w-full max-w-[180px] h-[96px] flex items-center justify-center">
              <CarTopView bodyType={car.bodyType} colorHex={color.hex} />
            </div>
          </div>
        )}

        {/* Body type pill */}
        <span
          className="absolute top-3 left-3 text-[10px] font-body font-700 uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.85)',
            color: '#333',
          }}
        >
          {car.bodyType}
        </span>

        {/* Year badge */}
        <span
          className="absolute top-3 right-3 font-display font-700 text-sm px-2 py-0.5 rounded-full"
          style={{
            background: car.image ? 'rgba(0,0,0,0.55)' : 'transparent',
            color: car.image ? '#fff' : color.text,
          }}
        >
          {car.year}
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Model info */}
        <div className="mb-3">
          <h3 className="font-display font-700 text-ink text-xl leading-tight">
            {car.brand} {car.model}
          </h3>
          <p className="text-ink-muted font-body text-sm mt-0.5">{car.variant}</p>
        </div>

        {/* Color indicator */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm flex-shrink-0"
            style={{ background: color.hex }}
            aria-hidden="true"
          />
          <span className="text-ink-muted font-body text-sm">{color.label}</span>
        </div>

        {/* Price if available */}
        {car.price != null && (
          <div className="mb-3">
            <span className="font-display font-700 text-ink text-lg">
              ₱{new Intl.NumberFormat('en-PH').format(car.price)}
            </span>
            {car.negotiable && (
              <span className="ml-2 text-green-600 font-body text-xs font-700 uppercase tracking-wide">Negotiable</span>
            )}
          </div>
        )}

        {/* Feature badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {[
            { label: 'Financing', icon: '💳' },
            { label: 'Trade-In', icon: '🔄' },
            { label: 'Free Check-Up', icon: '🔧' },
            { label: '3 Car Washes', icon: '✨' },
          ].map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1 bg-surface text-ink-muted text-[10px] font-body font-600 px-2 py-1 rounded-md"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>

        {/* CTA — pushed to bottom */}
        <div className="mt-auto">
          <button
            className="block w-full text-center bg-brand-red hover:bg-brand-red-dark text-white font-display font-700 text-sm uppercase tracking-wider py-3 rounded-xl transition-colors duration-200"
            aria-label={`View details for the ${car.year} ${car.brand} ${car.model} ${car.variant}`}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}
