'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  from: 'bot' | 'user'
  text: string
  link?: { label: string; href: string }
}

interface QuickReply {
  label: string
  key: string
}

const INITIAL_QUICK_REPLIES: QuickReply[] = [
  { label: '🚗 View Available Units', key: 'units' },
  { label: '💳 Financing Options', key: 'financing' },
  { label: '📍 Location & Contact', key: 'location' },
  { label: '🛒 How to Buy', key: 'howto' },
  { label: '💬 Talk to an Agent', key: 'agent' },
]

type BotResponse = {
  text: string
  link?: { label: string; href: string }
  quickReplies: QuickReply[]
  action?: () => void
}

function getBotResponse(key: string): BotResponse {
  switch (key) {
    case 'units':
      return {
        text: "We currently have 21 units available — Sedans, Hatchbacks, Pickup Trucks, SUVs, and MPVs. All units are verified with complete documents! 👆 Scroll up to browse and click any car for full details.",
        quickReplies: [
          { label: 'Sedan & Hatchback', key: 'sedan' },
          { label: 'Pickup Trucks', key: 'trucks' },
          { label: 'SUV & MPV', key: 'suv' },
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'sedan':
      return {
        text: "Our Sedan & Hatchback units include Toyota Vios, Honda City, Nissan Almera, Mitsubishi Mirage, Toyota Wigo, MG GT, and GAC Empow. Prices start from ₱420,000. Want to know more about any specific model?",
        quickReplies: [
          { label: '💳 Financing Options', key: 'financing' },
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'trucks':
      return {
        text: "We have Ford Ranger Wildtrak, Toyota Hilux Conquest, Mitsubishi Triton GLS, Nissan Navara (3 units!), and Isuzu D-Max. Prices from ₱720,000 to ₱1,280,000. All with complete documents!",
        quickReplies: [
          { label: '💳 Financing Options', key: 'financing' },
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'suv':
      return {
        text: "For SUVs we have Mitsubishi Montero Sport GLS and Nissan Terra VE. For MPV, we have the Toyota Innova E. Great family vehicles with competitive pricing!",
        quickReplies: [
          { label: '💳 Financing Options', key: 'financing' },
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'financing':
      return {
        text: "We offer flexible bank financing through BDO, BPI, Metrobank, RCBC, EastWest Bank, Security Bank, and more!\n\n✅ Minimum 20% down payment\n✅ Terms: 12 to 60 months\n✅ All units are loanable\n✅ We assist with all paperwork!",
        quickReplies: [
          { label: '🧮 Calculate Monthly', key: 'calculator' },
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'calculator':
      return {
        text: "Head to our Financing Calculator section below! Just enter the vehicle price and down payment to estimate your monthly amortization. 👇",
        quickReplies: [
          { label: '💬 Talk to an Agent', key: 'agent' },
          { label: '🚗 View Available Units', key: 'units' },
        ],
      }
    case 'location':
      return {
        text: "📍 We're at Guzman-Jesena St., Iloilo City, Philippines 5000\n📞 Call: 0949 805 1576\n💬 Message us on Facebook Messenger!\n🕐 Open daily — call ahead to confirm unit availability!",
        quickReplies: [
          { label: '💬 Talk to an Agent', key: 'agent' },
          { label: '🗺️ Get Directions', key: 'directions' },
        ],
      }
    case 'directions':
      return {
        text: "Click the link below to open Google Maps to our location!",
        link: { label: '📍 Open Google Maps', href: 'https://maps.google.com/?q=Guzman-Jesena+St+Iloilo+City+Philippines' },
        quickReplies: [
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'howto':
      return {
        text: "It's super easy! 😊\n\n1️⃣ Browse our inventory & pick a unit\n2️⃣ Click the car and message us on Facebook Messenger\n3️⃣ We process the documents & financing\n4️⃣ Drive home! 🚗\n\nWe guide you every step of the way.",
        quickReplies: [
          { label: '🚗 View Available Units', key: 'units' },
          { label: '💬 Talk to an Agent', key: 'agent' },
        ],
      }
    case 'agent':
      return {
        text: "Great! You'll be redirected to Facebook Messenger to chat with our team directly. We typically reply within a few minutes during business hours! 😊",
        quickReplies: [],
        action: () => {
          window.open('https://m.me/bestwheelscardisplay', '_blank')
        },
      }
    default:
      return {
        text: "I'm not sure about that. Let me connect you with our team!",
        quickReplies: INITIAL_QUICK_REPLIES,
      }
  }
}

let msgId = 0
function nextId() { return ++msgId }

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(INITIAL_QUICK_REPLIES)
  const [typing, setTyping] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, typing])

  const openChat = () => {
    setOpen(true)
    if (!initialized) {
      setInitialized(true)
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
        setMessages([{
          id: nextId(),
          from: 'bot',
          text: "Hi! 👋 I'm the Best Wheels assistant. I'm here to help you find your next car! What can I help you with?",
        }])
        setQuickReplies(INITIAL_QUICK_REPLIES)
      }, 900)
    }
  }

  const handleQuickReply = (reply: QuickReply) => {
    const userMsg: Message = { id: nextId(), from: 'user', text: reply.label }
    setMessages((prev) => [...prev, userMsg])
    setQuickReplies([])
    setTyping(true)

    const response = getBotResponse(reply.key)

    setTimeout(() => {
      if (response.action) response.action()
      setTyping(false)
      const botMsg: Message = {
        id: nextId(),
        from: 'bot',
        text: response.text,
        link: response.link,
      }
      setMessages((prev) => [...prev, botMsg])
      setQuickReplies(response.quickReplies)
    }, 800)
  }

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {!open && (
          <div className="bg-white text-ink font-body text-sm px-3 py-1.5 rounded-full shadow-md border border-border whitespace-nowrap">
            Chat with us
          </div>
        )}
        <button
          onClick={open ? () => setOpen(false) : openChat}
          className="w-14 h-14 rounded-full bg-brand-red text-white shadow-lg flex items-center justify-center hover:bg-brand-red-dark transition-colors duration-200 relative"
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-30" aria-hidden="true" />
          )}
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-border"
          style={{ width: '380px', height: '480px', maxWidth: 'calc(100vw - 24px)' }}
          role="dialog"
          aria-label="Best Wheels chat assistant"
        >
          {/* Header */}
          <div className="bg-brand-red px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-display font-700 text-white text-sm leading-tight">Best Wheels Assistant</p>
              <p className="text-white/70 font-body text-xs">Typically replies in minutes</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-surface p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-body leading-relaxed whitespace-pre-line ${
                    msg.from === 'user'
                      ? 'bg-brand-red text-white rounded-br-sm'
                      : 'bg-white text-ink shadow-sm border border-border rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-brand-red font-700 underline text-xs"
                    >
                      {msg.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-ink-muted"
                        style={{ animation: `bounce 1s ease-in-out ${i * 0.15}s infinite` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {quickReplies.length > 0 && (
            <div className="bg-white border-t border-border p-3 flex flex-wrap gap-2 flex-shrink-0">
              {quickReplies.map((qr) => (
                <button
                  key={qr.key}
                  onClick={() => handleQuickReply(qr)}
                  className="text-xs font-body font-600 text-brand-red border border-brand-red px-3 py-1.5 rounded-full hover:bg-brand-red hover:text-white transition-colors duration-150"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}
