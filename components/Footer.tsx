import Image from 'next/image'
import { Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black pt-14 pb-8" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/bestwheels.png"
                alt="Best Wheels Car Display"
                width={120}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed">
              Iloilo City&apos;s trusted local dealer for bank repos, 2nd hand, and slightly
              used cars. Friendly service, transparent deals, proud to serve Iloilo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-700 text-white text-base mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Available Units', href: '#inventory' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Send an Inquiry', href: '#contact' },
                { label: 'Facebook Page', href: 'https://www.facebook.com/bestwheelscardisplay' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-700 text-white text-base mb-4 uppercase tracking-wide">
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <a href="tel:09498051576" className="text-white/60 hover:text-white font-body text-sm transition-colors">
                  0949 805 1576
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <span className="text-white/60 font-body text-sm">
                  Guzman-Jesena St.,<br />
                  Iloilo City, Philippines 5000
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink size={14} className="mt-0.5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <a
                  href="https://www.facebook.com/bestwheelscardisplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white font-body text-sm transition-colors"
                >
                  Best Wheels Car Display Iloilo
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 font-body text-xs">
            © {currentYear} Best Wheels Car Display. All rights reserved. · Iloilo City, Philippines
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/30 font-body text-xs">Bank Repo</span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 font-body text-xs">2nd Hand Cars</span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 font-body text-xs">Slightly Used</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
