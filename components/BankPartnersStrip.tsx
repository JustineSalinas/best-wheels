const banks = [
  {
    name: 'BDO',
    file: '/banks/bdo.svg',
    bg: '#003087',
    pad: '10px 14px',
    height: 36,
    invert: false,
  },
  {
    name: 'BPI',
    file: '/banks/bpi.svg',
    bg: '#C41E3A',
    pad: '10px 14px',
    height: 36,
    invert: false,
  },
  {
    name: 'Metrobank',
    file: '/banks/metrobank.png',
    bg: '#1a3869',
    pad: '8px 12px',
    height: 36,
    invert: false,
  },
  {
    name: 'RCBC',
    file: '/banks/rcbc.png',
    bg: '#004A9F',
    pad: '10px',
    height: 38,
    invert: false,
  },
  {
    name: 'EastWest',
    file: '/banks/eastwest.png',
    bg: '#1B5FAA',
    pad: '10px 12px',
    height: 32,
    invert: false,
  },
  {
    name: 'PSBank',
    file: '/banks/psbank.png',
    bg: '#003F87',
    pad: '8px 12px',
    height: 38,
    invert: false,
  },
  {
    name: 'Security Bank',
    file: null,
    bg: '#1B3A6B',
    initials: 'SB',
    textColor: '#ffffff',
  },
  {
    name: 'UnionBank',
    file: null,
    bg: '#F47920',
    initials: 'UB',
    textColor: '#ffffff',
  },
]

export default function BankPartnersStrip() {
  return (
    <section className="py-12 bg-surface border-t border-b border-border" aria-label="Financing bank partners">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-center text-ink-muted font-body text-xs uppercase tracking-widest mb-8">
          Financing Available Through
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className="flex flex-col items-center gap-2 group"
              title={bank.name}
            >
              <div
                className="rounded-2xl flex items-center justify-center shadow-sm border border-black/5 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md"
                style={{
                  background: bank.bg,
                  width: '80px',
                  height: '52px',
                  padding: bank.file ? (bank.pad ?? '8px') : '0',
                }}
              >
                {bank.file ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={bank.file}
                    alt={bank.name}
                    style={{ maxWidth: '100%', maxHeight: bank.height ? `${bank.height}px` : '36px', objectFit: 'contain' }}
                  />
                ) : (
                  <span
                    className="font-display font-800 text-lg leading-none"
                    style={{ color: bank.textColor }}
                  >
                    {bank.initials}
                  </span>
                )}
              </div>
              <span className="text-ink-muted font-body text-xs text-center leading-tight" style={{ maxWidth: '80px' }}>
                {bank.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-ink-muted font-body text-xs mt-8">
          * Subject to bank approval. We assist with all loan applications and paperwork.
        </p>
      </div>
    </section>
  )
}
