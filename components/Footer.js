import Link from 'next/link'

export default function Footer({ site }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-paper mb-4">{site.name}</h3>
            <p className="text-sm text-paper/50 leading-relaxed max-w-xs">{site.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label text-paper/40 mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label text-paper/40 mb-5">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${site.email}`} className="text-sm text-paper/60 hover:text-accent transition-colors">
                {site.email}
              </a>
              {site.phone && (
                <a href={`tel:${site.phone}`} className="text-sm text-paper/60 hover:text-accent transition-colors">
                  {site.phone}
                </a>
              )}
              <div className="flex gap-4 mt-3">
                {site.linkedin && (
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors text-xs tracking-widest uppercase">
                    LinkedIn
                  </a>
                )}
                {site.instagram && (
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors text-xs tracking-widest uppercase">
                    IG
                  </a>
                )}
                {site.twitter && (
                  <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="text-paper/40 hover:text-paper transition-colors text-xs tracking-widest uppercase">
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-paper/30">© {year} {site.name}. All rights reserved.</p>
          <p className="text-xs text-paper/20">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
