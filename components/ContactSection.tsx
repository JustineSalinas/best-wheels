'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, MapPin, ExternalLink, MessageCircle, CheckCircle } from 'lucide-react'
import { cars } from '@/lib/cars'

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: '',
    message: '',
  })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    section.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const carLabel = form.interest || 'a unit'
    const msg = encodeURIComponent(
      `Hi Best Wheels! My name is ${form.name} (${form.phone}). I'm interested in ${carLabel}.\n\n${form.message}`
    )
    window.open('https://m.me/bestwheelscardisplay', '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      Icon: Phone,
      label: 'Phone',
      value: '0949 805 1576',
      href: 'tel:09498051576',
    },
    {
      Icon: MapPin,
      label: 'Address',
      value: 'Guzman-Jesena St., Iloilo City, Philippines 5000',
      href: 'https://maps.google.com/?q=Guzman-Jesena+St+Iloilo+City+Philippines',
    },
    {
      Icon: ExternalLink,
      label: 'Facebook Page',
      value: 'Best Wheels Car Display Iloilo',
      href: 'https://www.facebook.com/bestwheelscardisplay',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 bg-surface"
      ref={sectionRef}
      aria-label="Contact and inquiry"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <div>
            <div className="reveal">
              <p className="text-brand-red font-body font-600 text-sm mb-2">Get in Touch</p>
              <h2
                className="font-display font-800 text-ink mb-4"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Ready to Drive
                <br />
                Your Next Car?
              </h2>
              <p className="text-ink-muted font-body text-base leading-relaxed mb-8">
                Send us a message and we&apos;ll get back to you right away on Facebook Messenger.
                Or you can call or visit us directly in Iloilo City.
              </p>
            </div>

            <div className="reveal reveal-delay-1 space-y-5">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                    <Icon size={18} className="text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-ink-muted font-body text-xs uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="font-body font-600 text-ink text-sm group-hover:text-brand-red transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Embedded map */}
            <div className="reveal reveal-delay-2 mt-8 rounded-2xl overflow-hidden border border-border h-56">
              <iframe
                src="https://maps.google.com/maps?q=Guzman-Jesena+St+Iloilo+City+Philippines&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Best Wheels Car Display - Guzman-Jesena St., Iloilo City"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-border">
              <h3 className="font-display font-700 text-ink text-xl mb-6">
                Send an Inquiry
              </h3>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-green-600" aria-hidden="true" />
                  </div>
                  <p className="font-display font-700 text-ink text-lg mb-2">Message Sent!</p>
                  <p className="text-ink-muted font-body text-sm">
                    Messenger opened. We&apos;ll reply as soon as we can.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-600 text-ink mb-1.5">
                      Full Name <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm font-body text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-600 text-ink mb-1.5">
                      Phone Number <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="09XX XXX XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm font-body text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block font-body text-sm font-600 text-ink mb-1.5">
                      Unit of Interest
                    </label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm font-body text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all bg-white"
                    >
                      <option value="">Select a unit (optional)</option>
                      {cars.map((car) => (
                        <option key={car.id} value={`${car.year} ${car.brand} ${car.model} ${car.variant} (${car.color})`}>
                          {car.year} {car.brand} {car.model} {car.variant} – {car.color}
                        </option>
                      ))}
                      <option value="General inquiry">General inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-600 text-ink mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Ask about pricing, down payment, trade-in value, or availability…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm font-body text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-display font-700 text-sm uppercase tracking-wider py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Send via Messenger
                  </button>

                  <p className="text-center text-ink-muted font-body text-xs">
                    Opens Facebook Messenger. Fast reply guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
