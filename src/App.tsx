import { motion } from 'framer-motion'
import { Flame, MapPin } from 'lucide-react'

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#FDFBF7] text-[#29180E] flex flex-col justify-between items-center selection:bg-[#B89047]/20 selection:text-[#381B09] overflow-x-hidden">
      {/* =========================================================================
          AMBIENT BACKGROUND EFFECTS & PUJA WATERMARKS
      ========================================================================= */}

      {/* Subtle Sacred Geometry / Yantra Watermark (Top Left) */}
      <div className="fixed -top-24 -left-24 w-96 h-96 pointer-events-none opacity-[0.045] rotate-12 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#4A2511] fill-none" strokeWidth="0.75">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <polygon points="100,15 175,145 25,145" />
          <polygon points="100,185 175,55 25,55" />
          <circle cx="100" cy="100" r="45" />
          <polygon points="100,35 155,130 45,130" />
          <polygon points="100,165 155,70 45,70" />
          <circle cx="100" cy="100" r="20" />
          <circle cx="100" cy="100" r="4" fill="#4A2511" />
        </svg>
      </div>

      {/* Subtle Sacred Mandala Watermark (Bottom Right) */}
      <div className="fixed -bottom-36 -right-36 w-[480px] h-[480px] pointer-events-none opacity-[0.035] -rotate-45 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#B89047] fill-none" strokeWidth="0.6">
          <circle cx="100" cy="100" r="95" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="80" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <path
              key={deg}
              d="M100 100 Q130 60 100 20 Q70 60 100 100"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="30" />
        </svg>
      </div>

      {/* Warm Golden Hour & Sandalwood Ambient Radial Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-gradient-radial from-[#F5E8CE]/60 via-[#FAF2E3]/30 to-transparent blur-[90px] rounded-full" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-radial from-[#EEDBBB]/40 to-transparent blur-[110px] rounded-full" />
      </div>

      {/* =========================================================================
          CONTINUOUS DRIFTING DHOOP SMOKE KEYFRAME LAYER
      ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* Smoke Plume 1: Drifting upwards from center-left */}
        <div
          className="absolute bottom-24 left-[35%] w-72 h-96 rounded-full bg-gradient-to-t from-[#B89047]/10 via-[#FAF0DA]/25 to-transparent filter blur-3xl animate-smoke-1"
          style={{ willChange: 'transform, opacity' }}
        />
        {/* Smoke Plume 2: Gentle winding vapor drifting right */}
        <div
          className="absolute bottom-16 right-[32%] w-80 h-[420px] rounded-full bg-gradient-to-t from-[#8C5D30]/10 via-[#FAF3E2]/30 to-transparent filter blur-[40px] animate-smoke-2"
          style={{ willChange: 'transform, opacity' }}
        />
        {/* Smoke Plume 3: Broad ethereal haze ascending */}
        <div
          className="absolute bottom-32 left-[48%] -translate-x-1/2 w-96 h-[500px] rounded-full bg-gradient-to-t from-[#D4AF37]/5 via-[#FDF8EE]/40 to-transparent filter blur-[52px] animate-smoke-3"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      {/* Floating Marigold Petals Accents */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        <div className="absolute top-[18%] right-[12%] animate-gentle-float opacity-75">
          <div className="w-3.5 h-2.5 rounded-full bg-gradient-to-r from-[#E06D14] to-[#F59E0B] rotate-45 shadow-sm shadow-amber-900/10" />
        </div>
        <div className="absolute bottom-[22%] left-[10%] animate-gentle-float opacity-70" style={{ animationDelay: '3s' }}>
          <div className="w-3 h-2 rounded-full bg-gradient-to-r from-[#D95D0F] to-[#EAB308] -rotate-12 shadow-sm shadow-amber-900/10" />
        </div>
        <div className="absolute top-[62%] right-[8%] animate-gentle-float opacity-65" style={{ animationDelay: '5s' }}>
          <div className="w-2.5 h-2 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#C2410C] rotate-[30deg]" />
        </div>
      </div>

      {/* =========================================================================
          PAGE CONTENT CONTAINER (CENTERED WITH DIVINE FADE-IN)
      ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 py-10 sm:py-14 flex flex-col justify-between items-center min-h-screen text-center"
      >
        {/* ---------------------------------------------------------------------
            HEADER: MINIMALIST LOGO AT TOP CENTER
        --------------------------------------------------------------------- */}
        <header className="w-full flex flex-col items-center pt-2 sm:pt-4">
          <div className="group flex flex-col items-center cursor-default">
            {/* Handcrafted Diya Silhouette */}
            <div className="relative mb-2 flex items-center justify-center">
              <svg
                width="38"
                height="38"
                viewBox="0 0 48 48"
                fill="none"
                className="text-[#B89047] transition-transform duration-700 group-hover:scale-105"
              >
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2" opacity="0.6" />
                <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                <path
                  d="M24 10 C21 16, 18 20, 18 25 C18 28.3 20.7 31 24 31 C27.3 31, 30 28.3, 30 25 C30 20, 27 16, 24 10 Z"
                  fill="#8C3B14"
                  opacity="0.85"
                />
                <path
                  d="M24 13 C22.5 17, 20.5 19.5, 20.5 23 C20.5 25 22 27, 24 27 C26 27, 27.5 25, 27.5 23 C27.5 19.5, 25.5 17, 24 13 Z"
                  fill="#C5A059"
                />
                <circle cx="24" cy="23" r="1.5" fill="#FFF5D6" />
                <path
                  d="M14 34 Q24 37 34 34 L32 37 Q24 39 16 37 Z"
                  fill="#78350F"
                  opacity="0.8"
                />
              </svg>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#3D1E0B] uppercase font-normal">
              VARCHAM
            </h2>
            <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.45em] text-[#A0783D] uppercase mt-0.5 font-medium">
              SACRED CHANDAN BOTANICA
            </p>
          </div>
        </header>

        {/* ---------------------------------------------------------------------
            MAIN HERO SECTION (PERFECTLY CENTERED)
        --------------------------------------------------------------------- */}
        <main className="my-auto py-8 sm:py-12 flex flex-col items-center max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B89047]/50" />
            <span className="text-[#B89047] text-xs">✦</span>
            <span className="font-cinzel text-[11px] tracking-[0.25em] text-[#8C6D38] uppercase font-semibold">
              PRIVATE SANCTUM
            </span>
            <span className="text-[#B89047] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B89047]/50" />
          </div>

          {/* EXACT HEADLINE REQUIRED */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#331808] font-normal leading-[1.18] tracking-tight mb-5 max-w-xl">
            The Purest Devotion.{' '}
            <span className="italic block mt-1 font-serif text-[#4A2511]">
              The Rarest Chandan.
            </span>
          </h1>

          {/* EXACT SUBTEXT REQUIRED */}
          <p className="text-[#5C4033] font-sans text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-lg mb-8 sm:mb-10 text-center text-opacity-95">
            Sustainably harvested, museum-grade sandalwood for your most sacred rituals.
            The divine essence is unveiling soon.
          </p>

          {/* -----------------------------------------------------------------
              HIGH-END PUJA STILL-LIFE SHOWCASE (BRASS DHOOP DANI + CHANDAN LOG)
          ----------------------------------------------------------------- */}
          <div className="relative w-full max-w-md sm:max-w-lg group">
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#F2E5D0] to-[#EADBBE] shadow-xl shadow-[#4A2511]/[0.06] border border-[#B89047]/30">
              <div className="relative overflow-hidden rounded-xl border border-[#B89047]/20 aspect-[16/10] bg-[#F7F2E7]">
                <img
                  src="/chandan-altar.jpg"
                  alt="Carved Mysore sandalwood log on antique copper plate with brass dhoop dani emitting fragrant smoke and marigold petals"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.03]"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#26160B]/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] sm:text-[11px] font-cinzel tracking-wider text-[#FFF8EC] drop-shadow-sm px-2">
                  <span className="flex items-center gap-1.5 opacity-90">
                    <Flame className="w-3 h-3 text-[#EAB308]" />
                    Carved Heartwood • Aged 40+ Years
                  </span>
                  <span className="opacity-80">Batch 01/300</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#B89047]/40 shadow-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse" />
              <span className="text-[10px] font-cinzel tracking-[0.2em] text-[#7A5826] uppercase font-semibold">
                Santalum Album • Mysore
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              CORPORATE SANCTUM & ATELIER LOCATION
          ----------------------------------------------------------------- */}
          <div className="mt-8 pt-6 border-t border-[#B89047]/25 w-full max-w-md text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#B89047]/35 shadow-xs mb-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#B89047]" />
              <span className="font-cinzel text-[10px] tracking-[0.22em] uppercase text-[#7A5826] font-semibold">
                Corporate Sanctum & Atelier
              </span>
            </div>

            <h3 className="font-serif text-base sm:text-lg tracking-wide text-[#3D1E0B] font-medium mb-1">
              Varcham India Pvt. Ltd.
            </h3>

            <p className="font-sans text-xs sm:text-[13px] text-[#5C4033] leading-relaxed max-w-sm">
              BL-B, P 1/2, Bangur Avenue, LP-89/8, Kolkata – 700055, West Bengal.
            </p>

            <p className="font-cinzel text-[11px] text-[#8C6D38] tracking-wider mt-1 font-medium">
              Near JK Masala, Bangur
            </p>
          </div>
        </main>

        {/* ---------------------------------------------------------------------
            FOOTER: MINIMALIST COPYRIGHT & ELEGANT SOCIAL ICONS
        --------------------------------------------------------------------- */}
        <footer className="w-full pt-8 pb-2 border-t border-[#B89047]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#78593E]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-cinzel text-[11px] tracking-widest text-[#5C3C24]">
              © {new Date().getFullYear()} VARCHAM INDIA PVT. LTD.
            </span>
            <span className="hidden sm:inline text-[#B89047]/40">•</span>
            <span className="text-[11px] text-[#8A6C50]">All Sacred Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-cinzel tracking-wider text-[#735133]">
            <span className="hover:text-[#3D1E0B] transition-colors cursor-default">
              GOVT. FOREST LICENSED
            </span>
            <span className="text-[#B89047]/40">•</span>
            <span className="hover:text-[#3D1E0B] transition-colors cursor-default">
              100% PURE HEARTWOOD
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full border border-[#B89047]/40 text-[#5C3C24] hover:text-[#2E1508] hover:border-[#3D1E0B] hover:bg-[#F2E6D2] flex items-center justify-center transition-all duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#heritage"
              aria-label="Heritage Provenance"
              className="w-7 h-7 rounded-full border border-[#B89047]/40 text-[#5C3C24] hover:text-[#2E1508] hover:border-[#3D1E0B] hover:bg-[#F2E6D2] flex items-center justify-center transition-all duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </a>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}
