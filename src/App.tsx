import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Copy, Check } from 'lucide-react'

export default function App() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <div className="relative min-h-screen h-screen w-full bg-[#FAF7F2] text-[#24140A] flex flex-col justify-between items-center selection:bg-[#B89047]/20 selection:text-[#24140A] overflow-hidden p-6 sm:p-12">
      
      {/* Delicate Architectural Frame */}
      <div className="fixed inset-3 sm:inset-5 pointer-events-none border border-[#B89047]/25 z-10" />
      <div className="fixed inset-4 sm:inset-6 pointer-events-none border border-[#B89047]/15 z-10" />

      {/* =========================================================================
          BACKGROUND: SOFT WATERMARK OF THE OFFICIAL LOGO
      ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        <div className="absolute w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-gradient-radial from-[#F5E8D3]/35 via-[#FAF4E8]/15 to-transparent blur-[100px] rounded-full" />
        
        {/* Subtle, soft watermark so foreground stays completely legible and uncluttered */}
        <div
          className="relative w-[360px] sm:w-[540px] md:w-[680px] aspect-square flex items-center justify-center opacity-[0.045] mix-blend-multiply select-none"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)'
          }}
        >
          <img
            src="/varcham-logo.png"
            alt="Varcham Logo Watermark"
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </div>

      {/* =========================================================================
          TOP: UNDERSTATED COMING SOON
      ========================================================================= */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-20 pt-2 flex flex-col items-center"
      >
        <span className="font-cinzel text-[11px] sm:text-[12px] tracking-[0.42em] text-[#8C6D38] uppercase font-semibold">
          COMING SOON
        </span>
      </motion.header>

      {/* =========================================================================
          CENTER: BRAND & COMPANY INFORMATION
      ========================================================================= */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative z-20 flex flex-col items-center text-center max-w-xl px-4 my-auto"
      >
        {/* Crisp Central Logo Medallion */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 p-2 rounded-2xl bg-[#FAF5EB] border border-[#B89047]/35 shadow-sm shadow-[#4A2511]/[0.05] flex items-center justify-center">
          <img
            src="/varcham-logo.png"
            alt="Varcham Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Company Legal Name */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] text-[#29180E] font-normal tracking-tight mb-2">
          Varcham India Pvt. Ltd.
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-base sm:text-lg text-[#1C4328] font-normal tracking-wide">
          Rooted in faith, inspired by divine
        </p>

        {/* Subtle Gold Divider */}
        <div className="w-14 h-[1px] bg-[#B89047]/40 my-6 sm:my-7" />

        {/* Clean Minimalist Company Information */}
        <div className="flex flex-col gap-3 text-center text-xs sm:text-[13.5px] text-[#422919]">
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 group">
            <MapPin className="w-3.5 h-3.5 text-[#8C6D38] shrink-0" />
            <a
              href="https://maps.google.com/?q=P-79+Swami+Swarupananda+Sarani,+Kolkata-700054"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C4328] hover:underline transition-colors"
            >
              P-79 Swami Swarupananda Sarani, Kolkata-700054
            </a>
            <button
              onClick={() => handleCopy('location', 'P-79 Swami Swarupananda Sarani, Kolkata-700054')}
              className="text-[#8C6D38] hover:text-[#1C4328] opacity-50 hover:opacity-100 transition-opacity p-0.5 cursor-pointer"
              title="Copy location"
            >
              {copiedKey === 'location' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          {/* Phone & Email on clean responsive row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-0.5">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#8C6D38] shrink-0" />
              <a
                href="tel:+919007996100"
                className="hover:text-[#1C4328] font-medium hover:underline transition-colors"
              >
                +91 9007996100
              </a>
              <button
                onClick={() => handleCopy('phone', '+919007996100')}
                className="text-[#8C6D38] hover:text-[#1C4328] opacity-50 hover:opacity-100 transition-opacity p-0.5 cursor-pointer"
                title="Copy phone"
              >
                {copiedKey === 'phone' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            <span className="hidden sm:inline text-[#B89047]/30">•</span>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#8C6D38] shrink-0" />
              <a
                href="mailto:varchamindia@gmail.com"
                className="hover:text-[#1C4328] font-medium hover:underline transition-colors"
              >
                varchamindia@gmail.com
              </a>
              <button
                onClick={() => handleCopy('email', 'varchamindia@gmail.com')}
                className="text-[#8C6D38] hover:text-[#1C4328] opacity-50 hover:opacity-100 transition-opacity p-0.5 cursor-pointer"
                title="Copy email"
              >
                {copiedKey === 'email' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
          </div>

        </div>

        {/* Discreet feedback toast */}
        <AnimatePresence>
          {copiedKey && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="mt-5 px-3 py-1 rounded-full bg-[#1C4328] text-[#FAF6EE] text-[10px] font-cinzel tracking-wider flex items-center gap-1.5 shadow-sm"
            >
              <Check className="w-2.5 h-2.5 text-[#EAB308]" />
              <span>Copied to clipboard</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>

      {/* =========================================================================
          BOTTOM: DISCREET COPYRIGHT
      ========================================================================= */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-20 pb-2 text-center"
      >
        <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#8C6D38]/75 uppercase">
          © {new Date().getFullYear()} VARCHAM INDIA PVT. LTD. ALL RIGHTS RESERVED.
        </p>
      </motion.footer>

    </div>
  )
}
