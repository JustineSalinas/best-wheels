import Image from 'next/image'
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

        {/* RIGHT: Car Photo */}
        <div className="hero-illustration flex-1 flex items-end justify-center relative w-full max-w-xl lg:max-w-none min-h-[320px] lg:min-h-[420px]">
          {/* Background scene photo */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="/backgroundhero.jpg"
              alt="Best Wheels showroom background"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark gradient overlay so car pops */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }}
              aria-hidden="true"
            />
          </div>

          {/* Car photo on top */}
          <div className="relative z-10 w-full px-4 pb-2 drop-shadow-2xl">
            <Image
              src="/backgroundwheel.jpg"
              alt="Best Wheels featured car"
              width={640}
              height={360}
              className="w-full h-auto object-contain"
              priority
            />
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
