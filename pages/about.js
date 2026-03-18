import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import siteData from '../data/site.json'

export default function About() {
  return (
    <Layout site={siteData}>
      <Head>
        <title>About — {siteData.name}</title>
        <meta name="description" content={siteData.bio} />
      </Head>

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="reveal">
          <p className="section-label mb-6">/ About &nbsp; <span className="text-accent">(01)</span></p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ink mb-10 max-w-4xl">
            Performance meets precision.
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── BIO ──────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: visual placeholder */}
          <div className="md:col-span-4 reveal">
            <div className="aspect-[3/4] bg-warm border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-warm via-paper to-warm" />
              <div className="relative z-10 text-center p-8">
                <div className="font-display text-8xl text-ink/10 mb-4">
                  {siteData.name.charAt(0)}
                </div>
                <p className="text-xs text-muted tracking-widest uppercase">{siteData.location}</p>
              </div>
            </div>
            {/* Social links */}
            <div className="mt-6 flex flex-col gap-2">
              {siteData.linkedin && (
                <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-border text-sm text-muted hover:text-ink transition-colors group">
                  <span>LinkedIn</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              )}
              {siteData.instagram && (
                <a href={siteData.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 border-b border-border text-sm text-muted hover:text-ink transition-colors group">
                  <span>Instagram</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              )}
              <a href={`mailto:${siteData.email}`}
                className="flex items-center justify-between py-3 border-b border-border text-sm text-muted hover:text-ink transition-colors group">
                <span>Email</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>

          {/* Right: content */}
          <div className="md:col-span-8 reveal">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 leading-tight">
              {siteData.title}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              {siteData.bio}
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Based in {siteData.location}, I work with brands across Southeast Asia and beyond — helping them build marketing systems that don't just generate short-term wins, but compound over time. Whether it's setting up clean attribution, scaling paid media profitably, or improving search visibility, my work bridges strategic thinking with technical execution.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pt-8 border-t border-border">
              {siteData.stats.map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-ink">{stat.value}</div>
                  <div className="text-xs text-muted mt-1.5 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm tracking-wide hover:bg-accent transition-colors duration-200">
              Let's Work Together →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── SKILLS ───────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="section-label mb-4">/ Skills &nbsp; <span className="text-accent">(02)</span></p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Core competencies.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {siteData.skills.map((skillGroup, i) => (
            <div key={skillGroup.category} className="bg-paper p-8 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="font-display text-2xl text-ink mb-5">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span key={item} className="text-xs px-3 py-1.5 border border-border text-ink/70 hover:border-accent hover:text-accent transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── EXPERIENCE ──────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="section-label mb-4">/ Experience &nbsp; <span className="text-accent">(03)</span></p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Where I've been.</h2>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-border max-w-3xl">
          {siteData.experience.map((exp, i) => (
            <div key={i} className="py-8 reveal grid grid-cols-1 md:grid-cols-3 gap-4" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="md:col-span-1">
                <p className="text-xs text-accent tracking-wider">{exp.period}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl text-ink mb-1">{exp.role}</h3>
                <p className="text-sm text-muted mb-3 tracking-wide">{exp.company}</p>
                <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-warm">
        <div className="max-w-6xl mx-auto reveal text-center">
          <p className="section-label mb-6">Want to collaborate?</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink mb-8">Let's build together.</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-ink text-paper text-sm tracking-wide hover:bg-accent transition-colors duration-200">
            Get In Touch →
          </Link>
        </div>
      </section>
    </Layout>
  )
}
