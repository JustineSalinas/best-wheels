import { ArrowRight, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react'

export default function Hero() {
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
      className="relative min-h-screen bg-hero-gradient flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 28px)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[55%] h-full pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(225deg, rgba(0,0,0,0.35) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 flex-1">
        {/* LEFT: Content */}
        <div className="flex-1 lg:pr-8 xl:pr-16">
          <div className="hero-headline inline-flex items-center gap-2 mb-6">
            <span className="available-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            <span className="text-white/70 text-sm font-body font-semibold tracking-widest uppercase">
              10 Units Available Now
            </span>
          </div>

          <h1
            className="hero-headline font-display font-800 text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Bank Repos.
            <br />
            <span className="text-white/90">Real Deals.</span>
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
              className="inline-flex items-center gap-2 bg-white text-brand-red font-display font-700 text-base uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-brand-red-light transition-colors duration-200"
            >
              Browse Units
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://m.me/bestwheelscardisplay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-display font-700 text-base uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Inquire Now
            </a>
          </div>

          <div className="hero-badges flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-xs font-body font-semibold px-3 py-1.5 rounded-full"
              >
                <CheckCircle2 size={10} className="text-green-400" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Car Illustration */}
        <div className="hero-illustration flex-1 flex items-center justify-center relative w-full max-w-xl lg:max-w-none">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 55% 60%, rgba(255,255,255,0.08) 0%, transparent 70%)',
            }}
          />

          <div className="relative w-full max-w-lg">
            {/* Floating info card */}
            <div className="absolute -top-4 -left-4 sm:top-0 sm:left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl z-10 min-w-[140px]">
              <p className="text-[10px] text-ink-muted font-body uppercase tracking-widest mb-1">Latest Unit</p>
              <p className="font-display font-700 text-ink text-base leading-tight">2025 Honda City S</p>
              <p className="text-xs text-ink-muted font-body mt-0.5">Gray · Sedan</p>
            </div>

            {/* Top-down car SVG */}
            <svg
              viewBox="0 0 360 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full drop-shadow-2xl"
              aria-label="Top-down view of a sedan"
              role="img"
            >
              <ellipse cx="180" cy="190" rx="150" ry="8" fill="rgba(0,0,0,0.3)" />
              <rect x="45" y="15" width="270" height="160" rx="38" fill="white" opacity="0.92" />
              <rect x="100" y="58" width="160" height="84" rx="6" fill="rgba(180,220,245,0.25)" />
              <rect x="100" y="58" width="160" height="84" rx="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M100 58 Q180 44 260 58" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
              <path d="M100 142 Q180 156 260 142" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
              <line x1="180" y1="58" x2="180" y2="142" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
              <line x1="140" y1="15" x2="140" y2="175" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
              <line x1="220" y1="15" x2="220" y2="175" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
              <rect x="18" y="32" width="32" height="48" rx="8" fill="rgba(20,20,20,0.85)" />
              <rect x="22" y="38" width="24" height="36" rx="5" fill="rgba(80,80,80,0.6)" />
              <rect x="310" y="32" width="32" height="48" rx="8" fill="rgba(20,20,20,0.85)" />
              <rect x="314" y="38" width="24" height="36" rx="5" fill="rgba(80,80,80,0.6)" />
              <rect x="18" y="110" width="32" height="48" rx="8" fill="rgba(20,20,20,0.85)" />
              <rect x="22" y="116" width="24" height="36" rx="5" fill="rgba(80,80,80,0.6)" />
              <rect x="310" y="110" width="32" height="48" rx="8" fill="rgba(20,20,20,0.85)" />
              <rect x="314" y="116" width="24" height="36" rx="5" fill="rgba(80,80,80,0.6)" />
              <rect x="58" y="18" width="52" height="10" rx="4" fill="rgba(255,240,180,0.9)" />
              <rect x="250" y="18" width="52" height="10" rx="4" fill="rgba(255,240,180,0.9)" />
              <rect x="58" y="162" width="52" height="10" rx="4" fill="rgba(220,40,40,0.85)" />
              <rect x="250" y="162" width="52" height="10" rx="4" fill="rgba(220,40,40,0.85)" />
              <rect x="100" y="18" width="160" height="5" rx="2" fill="rgba(180,180,180,0.4)" />
              <rect x="100" y="167" width="160" height="4" rx="2" fill="rgba(180,180,180,0.3)" />
              <circle cx="180" cy="35" r="5" fill="rgba(255,255,255,0.3)" />
            </svg>
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
