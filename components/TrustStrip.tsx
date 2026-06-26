import { Car, Users, BadgeCheck, HeartPulse } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Units Available', Icon: Car },
  { value: '7.3K', label: 'Facebook Followers', Icon: Users },
  { value: '100%', label: 'Verified Units', Icon: BadgeCheck },
  { value: 'Lifetime', label: 'Free Check-Up', Icon: HeartPulse },
]

export default function TrustStrip() {
  return (
    <section className="bg-brand-black py-5 border-b border-white/10" aria-label="Trust highlights">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 md:px-8 first:pl-0 last:pr-0"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-red/15 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-brand-red" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-700 text-white text-xl leading-none">{value}</p>
                <p className="text-white/50 text-xs font-body mt-0.5 leading-none">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
