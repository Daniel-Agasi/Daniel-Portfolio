import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/',         label: 'Home',     num: '01' },
  { href: '/about',    label: 'About',    num: '02' },
  { href: '/projects', label: 'Projects', num: '03' },
  { href: '/contact',  label: 'Contact',  num: '04' },
]

export default function Navbar({ name, site }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [closing,  setClosing]  = useState(false)
  const router   = useRouter()
  const timerRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { handleClose() }, [router.pathname]) // eslint-disable-line

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleOpen = () => {
    clearTimeout(timerRef.current)
    setClosing(false)
    setOpen(true)
  }

  const handleClose = () => {
    if (!open) return
    setClosing(true)
    timerRef.current = setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 450)
  }

  const toggle = () => (open ? handleClose() : handleOpen())
  const isActive = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)

  const animIn  = open && !closing
  const animOut = closing

  return (
    <>
      {/* ══════════════════════════════
          NAVBAR STRIP
      ══════════════════════════════ */}
      <nav
        style={{ zIndex: 200 }}
        className={`
          fixed top-0 left-0 right-0
          transition-all duration-300
          ${open
            ? 'bg-white/95 backdrop-blur-md border-b border-black/10'
            : scrolled
              ? 'bg-white/90 backdrop-blur-md border-b border-black/10 shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
              : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-[56px] md:h-[62px]">

            {/* Logo */}
            <Link
              href="/"
              onClick={open ? handleClose : undefined}
              className="font-display text-[17px] font-semibold tracking-tight text-ink hover:opacity-60 transition-opacity duration-200 relative z-10"
            >
              {name || 'YourName'}<sup className="text-[10px] ml-[1px] align-super">®</sup>
            </Link>

            {/* Right cluster */}
            <div className="flex items-center gap-2 md:gap-3">

              {/* Desktop nav links */}
              <div
                className="hidden md:flex items-center gap-6 mr-1"
                style={{
                  opacity:       animIn ? 0 : 1,
                  transform:     animIn ? 'translateX(6px)' : 'translateX(0)',
                  pointerEvents: animIn ? 'none' : 'auto',
                  transition:    'opacity 220ms ease, transform 220ms ease',
                }}
              >
                {links.slice(1).map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] tracking-wide transition-opacity duration-200 ${
                      isActive(link.href) ? 'text-ink' : 'text-ink/50 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Start a project pill */}
              <Link
                href="/contact"
                className="hidden md:flex items-center px-[18px] py-[9px] rounded-full text-[13px] font-medium bg-ink text-paper hover:bg-ink/80 transition-all duration-200"
                style={{ letterSpacing: '0.01em' }}
              >
                Hire Me
              </Link>

              {/* + / × Toggle */}
              <button
                onClick={toggle}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className={`
                  w-[34px] h-[34px] rounded-full flex items-center justify-center
                  border transition-all duration-300 cursor-pointer
                  ${open
                    ? 'border-black/20 bg-black/5 hover:bg-black/10'
                    : 'border-black/20 bg-transparent hover:border-black/50'
                  }
                `}
              >
                <svg
                  width="11" height="11" viewBox="0 0 11 11"
                  style={{
                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 380ms cubic-bezier(0.76,0,0.24,1)',
                  }}
                >
                  <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="0"   y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════
          FULL OVERLAY — dim bg
      ══════════════════════════════ */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
        style={{
          zIndex: 190,
          opacity:       animIn ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition:    animIn
            ? 'opacity 350ms ease'
            : 'opacity 350ms ease 80ms',
        }}
        onClick={handleClose}
      />

      {/* ══════════════════════════════
          MENU PANEL
      ══════════════════════════════ */}
      <div
        className="fixed left-0 right-0 bg-[#EBEBEB] overflow-hidden"
        style={{
          zIndex: 195,
          top: '62px',
          maxHeight: animIn ? '600px' : '0px',
          opacity:   animIn ? 1 : animOut ? 0.4 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: animIn
            ? 'max-height 500ms cubic-bezier(0.76,0,0.24,1), opacity 200ms ease'
            : 'max-height 430ms cubic-bezier(0.76,0,0.24,1) 30ms, opacity 280ms ease 60ms',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* LEFT — Nav links */}
            <div className="py-6 md:py-10 md:pr-10 border-b md:border-b-0 md:border-r border-black/10">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className={`
                    flex items-baseline justify-between
                    py-3 md:py-[14px] border-b border-black/10 last:border-b-0
                    group transition-opacity duration-200
                    ${isActive(link.href) ? 'opacity-100' : 'opacity-100 hover:opacity-50'}
                  `}
                  style={{
                    opacity:   animIn ? 1 : 0,
                    transform: animIn ? 'translateY(0)' : 'translateY(8px)',
                    transition: `opacity 350ms ease ${i * 50 + 60}ms, transform 350ms ease ${i * 50 + 60}ms`,
                  }}
                >
                  <span
                    className="font-display font-extrabold text-ink leading-none"
                    style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em' }}
                  >
                    {link.label}
                  </span>
                  <span className="text-[12px] text-ink/35 tracking-[0.15em] ml-4 shrink-0">
                    ({link.num})
                  </span>
                </Link>
              ))}

              {/* Contact info below links */}
              <div
                className="pt-6 flex flex-col gap-1"
                style={{
                  opacity:   animIn ? 1 : 0,
                  transition: `opacity 350ms ease 280ms`,
                }}
              >
                {site?.email && (
                  <a href={`mailto:${site.email}`} className="text-[13px] text-ink/60 hover:text-ink transition-colors duration-200">
                    {site.email}
                  </a>
                )}
                {site?.phone && (
                  <a href={`tel:${site.phone}`} className="text-[13px] text-ink/60 hover:text-ink transition-colors duration-200">
                    {site.phone}
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT — Image + social */}
            <div
              className="hidden md:flex flex-col pl-10 py-10"
              style={{
                opacity:   animIn ? 1 : 0,
                transform: animIn ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 420ms ease 180ms, transform 420ms ease 180ms`,
              }}
            >
              {/* Big image box */}
              <div className="flex-1 relative overflow-hidden rounded-lg bg-black/10 min-h-[200px] max-h-[320px]">
                {/* Placeholder visual — replace with real image later */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-500 flex flex-col items-center justify-center">
                  <span
                    className="font-display font-black text-white/20 select-none leading-none"
                    style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', letterSpacing: '-0.05em' }}
                  >
                    {(name || 'YN').toUpperCase()}
                  </span>
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="text-[12px] text-white/70 tracking-widest uppercase">
                    {name || 'YourName'} Studio
                  </span>
                </div>
                <div className="absolute bottom-3 right-4">
                  <span className="text-[11px] text-white/40">© {new Date().getFullYear()} All rights reserved</span>
                </div>
              </div>

              {/* Social links */}
              <div
                className="flex items-center justify-end gap-6 pt-5"
                style={{
                  opacity:   animIn ? 1 : 0,
                  transition: `opacity 380ms ease 300ms`,
                }}
              >
                {site?.twitter && (
                  <a href={site.twitter} target="_blank" rel="noopener noreferrer"
                    className="text-[12px] text-ink/50 hover:text-ink transition-colors duration-200 tracking-wide">
                    Twitter/X
                  </a>
                )}
                {site?.instagram && (
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer"
                    className="text-[12px] text-ink/50 hover:text-ink transition-colors duration-200 tracking-wide">
                    Instagram
                  </a>
                )}
                {site?.linkedin && (
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-[12px] text-ink/50 hover:text-ink transition-colors duration-200 tracking-wide">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
