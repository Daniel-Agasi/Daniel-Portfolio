import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/',         label: 'Home',     num: '01', hint: 'Back to start' },
  { href: '/about',    label: 'About',    num: '02', hint: 'Bio · Skills · Experience' },
  { href: '/projects', label: 'Projects', num: '03', hint: 'Case studies · Results' },
  { href: '/contact',  label: 'Contact',  num: '04', hint: "Let's work together" },
]

export default function Navbar({ name, site }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [closing,  setClosing]  = useState(false)
  const [hovered,  setHovered]  = useState(null)
  const router   = useRouter()
  const timerRef = useRef(null)

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* close on route change */
  useEffect(() => { handleClose() }, [router.pathname]) // eslint-disable-line

  /* body scroll lock */
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
      setHovered(null)
    }, 500)
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
        className={`
          fixed top-0 left-0 right-0 z-[100]
          transition-all duration-300
          ${open
            ? 'bg-paper border-b border-border'
            : scrolled
              ? 'bg-paper/95 backdrop-blur-md border-b border-border shadow-sm'
              : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[62px]">

            {/* Logo */}
            <Link
              href="/"
              onClick={open ? handleClose : undefined}
              className="font-display text-[19px] tracking-wide text-ink hover:text-accent transition-colors duration-200 relative z-10"
            >
              {name || 'YourName'}
            </Link>

            {/* Right cluster */}
            <div className="flex items-center gap-2 md:gap-3">

              {/* Desktop nav links — fade out when panel opens */}
              <div
                className="hidden md:flex items-center gap-6 mr-2"
                style={{
                  opacity:    animIn ? 0 : 1,
                  transform:  animIn ? 'translateX(8px)' : 'translateX(0)',
                  pointerEvents: animIn ? 'none' : 'auto',
                  transition: 'opacity 250ms ease, transform 250ms ease',
                }}
              >
                {links.slice(1).map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      text-[13px] tracking-wide relative transition-colors duration-200
                      after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-ink
                      after:transition-[width] after:duration-300
                      ${isActive(link.href)
                        ? 'text-ink after:w-full'
                        : 'text-muted hover:text-ink after:w-0 hover:after:w-full'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Hire Me pill — always visible */}
              <Link
                href="/contact"
                className="hidden md:flex items-center px-[18px] py-[8px] rounded-full text-[13px] tracking-wide bg-ink text-paper border border-ink hover:bg-accent hover:border-accent transition-all duration-200"
              >
                Hire Me
              </Link>

              {/* ── + / × Toggle Button ────────── */}
              <button
                onClick={toggle}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className={`
                  w-[34px] h-[34px] rounded-full flex items-center justify-center
                  border transition-all duration-300
                  ${open
                    ? 'border-ink/20 bg-warm hover:bg-border'
                    : 'border-border bg-transparent hover:border-ink'
                  }
                `}
              >
                <svg
                  width="12" height="12" viewBox="0 0 12 12"
                  className="overflow-visible"
                  style={{
                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 400ms cubic-bezier(0.76,0,0.24,1)',
                  }}
                >
                  <line x1="6" y1="0.5" x2="6" y2="11.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  <line x1="0.5" y1="6" x2="11.5" y2="6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════
          DROPDOWN OVERLAY PANEL
      ══════════════════════════════ */}
      <div
        aria-hidden={!open}
        className="fixed left-0 right-0 z-[90] overflow-hidden bg-paper border-b border-border shadow-2xl"
        style={{
          top: '62px',
          maxHeight: animIn ? '520px' : '0px',
          opacity:   animIn ? 1 : animOut ? 0 : 0,
          transition: animIn
            ? 'max-height 520ms cubic-bezier(0.76,0,0.24,1), opacity 200ms ease'
            : 'max-height 480ms cubic-bezier(0.76,0,0.24,1) 50ms, opacity 300ms ease 100ms',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">

            {/* ── LEFT: Nav Links ─────────────── */}
            <div className="py-8 md:py-12 md:pr-16">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`
                    group flex items-baseline justify-between
                    py-3 md:py-4 border-b border-border last:border-b-0
                    transition-colors duration-200
                    ${isActive(link.href) ? 'text-accent' : 'text-ink hover:text-accent'}
                  `}
                  style={{
                    opacity:   animIn ? 1 : 0,
                    transform: animIn ? 'translateY(0)' : 'translateY(10px)',
                    transition: `opacity 380ms ease ${i * 55 + 80}ms, transform 380ms ease ${i * 55 + 80}ms, color 200ms ease`,
                  }}
                >
                  <span className="font-display text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1] tracking-tight">
                    {link.label}
                  </span>
                  <span className="text-[11px] tracking-[0.16em] text-muted ml-4 group-hover:text-accent transition-colors duration-200 shrink-0">
                    ({link.num})
                  </span>
                </Link>
              ))}
            </div>

            {/* ── RIGHT: Preview Card ─────────── */}
            <div
              className="hidden md:flex flex-col justify-center pl-12 lg:pl-16 border-l border-border py-12 w-[300px] lg:w-[340px]"
              style={{
                opacity:   animIn ? 1 : 0,
                transform: animIn ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 450ms ease 200ms, transform 450ms ease 200ms`,
              }}
            >
              {/* Preview box */}
              <div className="relative overflow-hidden bg-warm border border-border rounded-sm aspect-[4/3] w-full mb-5">

                {/* Default / no-hover state */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6"
                  style={{
                    opacity:    hovered === null ? 1 : 0,
                    transform:  hovered === null ? 'scale(1)' : 'scale(0.97)',
                    transition: 'opacity 250ms ease, transform 250ms ease',
                  }}
                >
                  <span className="font-display text-[5rem] leading-none text-ink/10 select-none mb-2">
                    {(name || 'Y').charAt(0)}
                  </span>
                  <p className="font-display text-xl text-ink/50 text-center leading-snug">{name || 'YourName'}</p>
                  <p className="text-[10px] text-muted/70 mt-2 tracking-widest uppercase text-center leading-relaxed">
                    Performance Marketing<br />SEO · Web Dev · MarTech
                  </p>
                </div>

                {/* Per-link hover previews */}
                {links.map((link, i) => (
                  <div
                    key={link.href}
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    style={{
                      background: 'linear-gradient(135deg, #EDE9E0 0%, #D8D4CC 100%)',
                      opacity:    hovered === i ? 1 : 0,
                      transform:  hovered === i ? 'scale(1)' : 'scale(1.03)',
                      transition: 'opacity 220ms ease, transform 220ms ease',
                    }}
                  >
                    <div className="inline-block bg-paper/80 backdrop-blur-sm px-3 py-2.5 self-start">
                      <p className="font-display text-xl text-ink leading-none">{link.label}</p>
                      <p className="text-[11px] text-muted tracking-wide mt-1">{link.hint}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email hint */}
              <div
                style={{
                  opacity:    animIn ? 1 : 0,
                  transition: 'opacity 400ms ease 350ms',
                }}
              >
                <p className="text-[10px] text-muted tracking-widest uppercase mb-1.5">
                  Available for projects
                </p>
                <a
                  href={`mailto:${site?.email || 'hello@yourdomain.com'}`}
                  className="text-[13px] text-ink hover:text-accent transition-colors duration-200"
                >
                  {site?.email || 'hello@yourdomain.com'}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Click-outside to close */}
      {open && (
        <div
          className="fixed inset-0 z-[85]"
          style={{ top: '62px' }}
          onClick={handleClose}
        />
      )}
    </>
  )
}
