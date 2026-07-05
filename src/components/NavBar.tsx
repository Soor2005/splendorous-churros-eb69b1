import { useEffect, useState } from 'react'
import { WAITLIST_URL, SITE_NAME } from '../config'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#0B0B12]/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg shadow-[0_0_20px_rgba(124,108,242,0.5)]">
            <img src="/logo.png" alt={`${SITE_NAME} logo`} className="h-full w-full object-cover" />
          </span>
          <span className="text-[15px]">{SITE_NAME}</span>
          <span className="ml-1 hidden rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#B4A9FF] sm:inline-block">
            BETA
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-white">
            How It Works
          </a>
          <a href="#roadmap" className="transition-colors hover:text-white">
            Roadmap
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </div>

        <a
          href={WAITLIST_URL}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B0B12] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Join the Waitlist
        </a>
      </nav>
    </header>
  )
}
