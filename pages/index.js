import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import siteData from '../data/site.json'
import projects from '../data/projects.json'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <Layout site={siteData}>
      <Head>
        <title>{siteData.name} — {siteData.title}</title>
        <meta name="description" content={siteData.tagline} />
        <meta property="og:title" content={`${siteData.name} — ${siteData.title}`} />
        <meta property="og:description" content={siteData.tagline} />
      </Head>

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 pt-32 md:pt-40 max-w-6xl mx-auto">
        <div className="reveal">
          <p className="section-label mb-6">
            <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
            Available for projects
          </p>

          <h1 className="font-display font-black text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-tight text-ink mb-10">
            {siteData.name}
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed font-light">
              {siteData.tagline}
            </p>
            <div className="flex gap-4 shrink-0">
              <Link href="/projects" className="px-6 py-3 bg-ink text-paper text-sm tracking-wide hover:bg-accent transition-colors duration-200">
                View Work
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-all duration-200">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-20 flex items-center gap-4 reveal">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-accent" />
            <div className="w-px h-4 bg-accent/40" />
          </div>
          <span className="section-label">Scroll to explore</span>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── SKILLS MARQUEE ─────────────────────────── */}
      <section className="py-10 overflow-hidden border-y border-border my-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...siteData.skills.flatMap(s => s.items), ...siteData.skills.flatMap(s => s.items)].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6 text-sm text-muted tracking-wider uppercase">
              {item}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ──────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
          <div className="reveal">
            <p className="section-label mb-6">
              / About me &nbsp; <span className="text-accent">(01)</span>
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-ink leading-tight mb-8">
              Data-driven marketer who speaks both business and technology.
            </h2>
          </div>
          <div className="reveal">
            <p className="text-muted text-lg leading-relaxed mb-8">
              {siteData.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {siteData.stats.map(stat => (
                <div key={stat.label} className="border-l-2 border-accent pl-4">
                  <div className="font-display font-extrabold text-4xl text-ink">{stat.value}</div>
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 mt-10 text-sm tracking-widest uppercase hover:text-accent transition-colors">
              Full Story →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── SELECTED WORK ──────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6">
          <div className="reveal">
            <p className="section-label mb-4">
              / Selected Work &nbsp; <span className="text-accent">(02)</span>
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">
              Case studies that<br />moved the needle.
            </h2>
          </div>
          <Link href="/projects" className="reveal self-start md:self-auto text-sm tracking-widest uppercase border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── SERVICES ───────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-12 reveal">
          <p className="section-label mb-4">
            / Services &nbsp; <span className="text-accent">(03)</span>
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">
            What I bring<br />to the table.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {siteData.services.map((service, i) => (
            <div key={service.title} className="bg-paper p-8 md:p-10 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex items-start justify-between mb-5">
                <span className="font-display font-extrabold text-5xl text-ink/10">{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{service.description}</p>
              <ul className="flex flex-col gap-1.5">
                {service.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── FAQ ────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="reveal">
            <p className="section-label mb-4">
              / FAQ &nbsp; <span className="text-accent">(04)</span>
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink">
              Frequently asked.
            </h2>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-border reveal">
            {siteData.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ───────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-ink">
        <div className="max-w-6xl mx-auto reveal">
          <p className="section-label text-paper/40 mb-6">Ready to work together?</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display font-extrabold text-5xl md:text-8xl text-paper leading-tight">
              Let's build<br />
              <em className="text-accent not-italic">something great.</em>
            </h2>
            <Link href="/contact" className="shrink-0 px-8 py-4 border border-paper text-paper text-sm tracking-wide hover:bg-paper hover:text-ink transition-all duration-200">
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function FAQItem({ faq }) {
  return (
    <details className="group py-5">
      <summary className="flex items-center justify-between cursor-pointer list-none text-ink hover:text-accent transition-colors">
        <span className="font-medium text-sm">{faq.question}</span>
        <span className="text-xl text-muted group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
      </summary>
      <p className="mt-4 text-sm text-muted leading-relaxed pr-8">{faq.answer}</p>
    </details>
  )
}
