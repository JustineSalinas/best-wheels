const steps = [
  {
    number: '01',
    title: 'Browse Our Inventory',
    description:
      'Scroll through our available units and find the one that matches your budget and lifestyle. Filter by brand, body type, or search by model.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Send an Inquiry',
    description:
      'Click any unit and message us directly on WhatsApp. We respond fast — usually within minutes during business hours.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Process Documents',
    description:
      'We guide you through the paperwork. Bank financing, cash, or trade-in — we handle everything from OR/CR transfer to loan processing.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Drive Home Happy',
    description:
      'Pick up your unit, enjoy your 3 free car washes and lifetime free check-up. Welcome to the Best Wheels family!',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-3" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
]

export default function HowToBuySection() {
  return (
    <section id="how-it-works" className="py-20 bg-surface" aria-label="How to buy a car">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red font-body font-600 text-sm mb-2 uppercase tracking-widest">Simple Process</p>
          <h2
            className="font-display font-800 text-ink"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            How It Works
          </h2>
          <p className="text-ink-muted font-body text-base mt-3 max-w-xl mx-auto">
            Buying your next car is easier than you think
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              {/* Number + Icon */}
              <div className="relative mb-5 z-10">
                <div className="w-20 h-20 rounded-full bg-brand-red flex items-center justify-center shadow-lg">
                  <span className="text-white">{step.icon}</span>
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-brand-red flex items-center justify-center font-display font-800 text-brand-red text-xs">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-display font-700 text-ink text-lg mb-2">{step.title}</h3>
              <p className="text-ink-muted font-body text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#inventory"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-display font-700 text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-3" />
              <circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
            Start Browsing
          </a>
        </div>
      </div>
    </section>
  )
}
