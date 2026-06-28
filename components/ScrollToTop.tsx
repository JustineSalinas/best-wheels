'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      style={{
        background: 'rgba(0,0,0,0.7)',
        border: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(6px)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      <ChevronUp size={18} className="text-white" />
    </button>
  )
}
