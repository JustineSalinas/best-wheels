export default function Tagline() {
  return (
    <section className="bg-brand-red py-14 px-5 sm:px-8 overflow-hidden relative" aria-label="Brand tagline">
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 24px)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p
          className="font-display font-extrabold text-white uppercase leading-tight mb-4"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}
        >
          Why settle for good when you can get the{' '}
          <span className="relative inline-block">
            <span className="relative z-10">BEST</span>
            <span
              className="absolute inset-x-0 bottom-0 h-[6px] bg-white/30 -rotate-1"
              aria-hidden="true"
            />
          </span>{' '}
          deals?
        </p>

        <p className="text-white/85 font-body text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          Drive home quality, value, and confidence with Best Wheels.
        </p>

        <p className="font-display font-extrabold text-white/90 italic text-xl sm:text-2xl tracking-wide">
          Mapa hambal ka guid —{' '}
          <span className="text-white">&ldquo;Da Best!&rdquo;</span>
        </p>
      </div>
    </section>
  )
}
