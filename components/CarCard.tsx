import { Car, colorConfig } from '@/lib/cars'

interface CarCardProps {
  car: Car
}

function CarTopView({ bodyType, colorHex }: { bodyType: 'Sedan' | 'Hatchback'; colorHex: string }) {
  if (bodyType === 'Hatchback') {
    return (
      <svg
        viewBox="0 0 260 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Hatchback body — slightly shorter rear */}
        <rect x="35" y="18" width="190" height="144" rx="32" fill={colorHex} opacity="0.88" />
        {/* Glass area */}
        <rect x="82" y="58" width="110" height="64" rx="5" fill="rgba(180,220,245,0.3)" />
        <rect x="82" y="58" width="110" height="64" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        {/* Front windshield */}
        <path d="M82 58 Q130 46 178 58" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        {/* Rear windshield */}
        <path d="M82 122 Q130 134 178 122" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        {/* B-pillar */}
        <line x1="130" y1="58" x2="130" y2="122" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
        {/* Door lines */}
        <line x1="106" y1="18" x2="106" y2="162" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
        <line x1="154" y1="18" x2="154" y2="162" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
        {/* Wheels */}
        <rect x="10" y="32" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="222" y="32" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="10" y="106" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        <rect x="222" y="106" width="28" height="42" rx="6" fill="rgba(20,20,20,0.82)" />
        {/* Headlights */}
        <rect x="44" y="20" width="40" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
        <rect x="176" y="20" width="40" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
        {/* Taillights */}
        <rect x="44" y="151" width="40" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
        <rect x="176" y="151" width="40" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      </svg>
    )
  }

  // Sedan (longer body)
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Sedan body — elongated */}
      <rect x="30" y="15" width="220" height="150" rx="35" fill={colorHex} opacity="0.88" />
      {/* Glass area */}
      <rect x="88" y="56" width="104" height="68" rx="5" fill="rgba(180,220,245,0.3)" />
      <rect x="88" y="56" width="104" height="68" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* Front windshield */}
      <path d="M88 56 Q140 43 192 56" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      {/* Rear windshield */}
      <path d="M88 124 Q140 137 192 124" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
      {/* B-pillar */}
      <line x1="140" y1="56" x2="140" y2="124" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
      {/* Door lines */}
      <line x1="110" y1="15" x2="110" y2="165" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <line x1="170" y1="15" x2="170" y2="165" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      {/* Wheels */}
      <rect x="8" y="30" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="246" y="30" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="8" y="106" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      <rect x="246" y="106" width="26" height="44" rx="6" fill="rgba(20,20,20,0.82)" />
      {/* Headlights */}
      <rect x="40" y="17" width="46" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
      <rect x="194" y="17" width="46" height="9" rx="3" fill="rgba(255,240,180,0.85)" />
      {/* Taillights */}
      <rect x="40" y="154" width="46" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      <rect x="194" y="154" width="46" height="9" rx="3" fill="rgba(220,40,40,0.8)" />
      {/* Trunk line (sedan distinction) */}
      <line x1="192" y1="15" x2="192" y2="165" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    </svg>
  )
}

export default function CarCard({ car }: CarCardProps) {
  const color = colorConfig[car.color]

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the ${car.year} ${car.brand} ${car.model} ${car.variant} (${car.color}). Can you give me more details and pricing?`
  )
  const whatsappUrl = `https://wa.me/639498051576?text=${whatsappMsg}`

  return (
    <article
      className="car-card bg-white rounded-2xl overflow-hidden border border-border shadow-md flex flex-col"
      aria-label={`${car.year} ${car.brand} ${car.model} ${car.variant}`}
    >
      {/* Car illustration header */}
      <div
        className="relative px-6 pt-6 pb-4 flex items-center justify-center"
        style={{ background: `${color.bg}` }}
      >
        {/* Body type pill */}
        <span
          className="absolute top-3 left-3 text-[10px] font-body font-700 uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.7)',
            color: '#333',
          }}
        >
          {car.bodyType}
        </span>

        {/* Year badge */}
        <span className="absolute top-3 right-3 font-display font-700 text-sm" style={{ color: color.text }}>
          {car.year}
        </span>

        {/* Car top-view illustration */}
        <div className="w-full max-w-[180px] h-[96px] flex items-center justify-center">
          <CarTopView bodyType={car.bodyType} colorHex={color.hex} />
        </div>
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
        <div className="flex items-center gap-2 mb-4">
          <span
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm flex-shrink-0"
            style={{ background: color.hex }}
            aria-hidden="true"
          />
          <span className="text-ink-muted font-body text-sm">{color.label}</span>
        </div>

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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-brand-red hover:bg-brand-red-dark text-white font-display font-700 text-sm uppercase tracking-wider py-3 rounded-xl transition-colors duration-200"
            aria-label={`Inquire about the ${car.year} ${car.brand} ${car.model} ${car.variant}`}
          >
            Inquire Now
          </a>
          <a
            href="tel:09498051576"
            className="block w-full text-center text-ink-muted hover:text-brand-red font-body text-xs mt-2 transition-colors duration-200"
          >
            or call 0949 805 1576
          </a>
        </div>
      </div>
    </article>
  )
}
