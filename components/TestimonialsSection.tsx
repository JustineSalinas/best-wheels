const testimonials = [
  {
    name: 'Maria Santos',
    location: 'Iloilo City',
    car: '2024 Nissan Almera VE Turbo',
    rating: 5,
    text: 'Grabe ka helpful ang staff diri. Na-process ang financing ko in less than a week. Luto na ang sasakyan ko agad! Highly recommended to all Ilonggos looking for a reliable car.',
  },
  {
    name: 'Rodel Fernandez',
    location: 'Pavia, Iloilo',
    car: '2022 Ford Ranger Wildtrak',
    rating: 5,
    text: 'Nakita ko ang Ford Ranger sa Facebook nila, nagmessage agad. Di ako na-disappoint — legit ang unit, maayos ang docs, at swak ang presyo. Best Wheels talaga!',
  },
  {
    name: 'Ana Reyes',
    location: 'Mandurriao, Iloilo',
    car: '2023 Mitsubishi Mirage GLS',
    rating: 5,
    text: 'Ginahanap ko guid ang sasakyan nga affordable pero maayo ang condition. Nakita ko diri ang Mirage. Bago ko pa gani naabot ang isang buwan, nabahin na ako. Salamat Best Wheels!',
  },
  {
    name: 'Jun Magbanua',
    location: 'La Paz, Iloilo',
    car: '2023 Toyota Hilux Conquest',
    rating: 5,
    text: 'Ang Toyota Hilux ko is in perfect condition. Libre pa ang check-up lifetime! Wala na akong napuntahan pa na ibang dealer after this. Babalik-balik ako diri.',
  },
  {
    name: 'Carla Dizon',
    location: 'Molo, Iloilo',
    car: '2024 Toyota Innova E',
    rating: 5,
    text: 'Family car namin ang Innova. Smooth ang transaction, transparent ang seller, walang hidden charges. Ang down payment ay very reasonable. 10/10 recommend!',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-red font-body font-600 text-sm mb-2 uppercase tracking-widest">Happy Buyers</p>
          <h2
            className="font-display font-800 text-ink"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            What Our Buyers Say
          </h2>
          <p className="text-ink-muted font-body text-base mt-3 max-w-xl mx-auto">
            Real stories from real buyers across Iloilo City and nearby areas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-brand-red font-display font-800 text-5xl leading-none mb-2 select-none" aria-hidden="true">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-ink font-body text-sm leading-relaxed italic flex-1 mb-5">
                {t.text}
              </p>

              {/* Buyer info */}
              <div className="border-t border-border pt-4">
                <p className="font-body font-700 text-ink text-sm">{t.name}</p>
                <p className="text-ink-muted font-body text-xs mt-0.5">{t.location}</p>
                <p className="text-brand-red font-body font-600 text-xs mt-1">Bought: {t.car}</p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-brand-red rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="font-display font-800 text-white text-xl mb-3 leading-tight">
                Ready to Join Our Happy Buyers?
              </p>
              <p className="text-white/80 font-body text-sm leading-relaxed">
                Browse our available units and find your next car today. Financing assistance included.
              </p>
            </div>
            <a
              href="#inventory"
              className="mt-6 inline-block text-center bg-white text-brand-red hover:bg-white/90 font-display font-700 text-sm uppercase tracking-wider py-3 px-6 rounded-xl transition-colors duration-200"
            >
              Browse Units
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
