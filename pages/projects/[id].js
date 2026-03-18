import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import siteData from '../../data/site.json'
import projects from '../../data/projects.json'

export async function getStaticPaths() {
  return {
    paths: projects.map(p => ({ params: { id: p.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.id === params.id) || null
  const currentIndex = projects.findIndex(p => p.id === params.id)
  const next = projects[currentIndex + 1] || projects[0]

  return { props: { project, next } }
}

const categoryColors = {
  'Performance Marketing': 'text-amber-700 bg-amber-50 border-amber-200',
  'SEO': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Web Development': 'text-blue-700 bg-blue-50 border-blue-200',
  'Marketing Technology': 'text-purple-700 bg-purple-50 border-purple-200',
}

export default function ProjectDetail({ project, next }) {
  if (!project) return null

  return (
    <Layout site={siteData}>
      <Head>
        <title>{project.title} — {siteData.name}</title>
        <meta name="description" content={project.summary} />
      </Head>

      {/* ─── HEADER ──────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
        <Link href="/projects" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors mb-10">
          ← Back to Projects
        </Link>

        <div className="reveal">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs px-3 py-1.5 border font-medium ${categoryColors[project.category] || 'text-gray-700 bg-gray-50 border-gray-200'}`}>
              {project.category}
            </span>
            <span className="text-xs text-muted tracking-wider">{project.year}</span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-ink mb-8 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── RESULTS HERO ────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border reveal">
          {project.results.map((result) => (
            <div key={result.label} className="bg-paper p-8 md:p-10 text-center">
              <div className="font-display text-5xl md:text-6xl text-ink mb-3">{result.metric}</div>
              <div className="text-xs text-muted tracking-widest uppercase">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── DESCRIPTION ─────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 reveal">
            <h2 className="font-display text-3xl text-ink mb-6">Project Overview</h2>
            <div>
              <p className="section-label mb-3">Tools & Platforms</p>
              <div className="flex flex-col gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="text-sm text-muted border-b border-border pb-2 flex items-center justify-between">
                    {tool}
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <p className="section-label mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 border border-border text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 reveal">
            <p className="text-lg text-muted leading-relaxed mb-8">{project.description}</p>

            {/* Visual placeholder for project imagery */}
            <div className="aspect-video bg-warm border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-6xl text-ink/10 mb-3">{project.category.charAt(0)}</div>
                <p className="text-xs text-muted tracking-widest uppercase">Project Visual / Screenshot</p>
                <p className="text-xs text-muted/50 mt-1">Replace with actual project image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── NEXT PROJECT ────────────────────────── */}
      {next && (
        <section className="py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto">
          <p className="section-label mb-6">Next Project</p>
          <Link href={`/projects/${next.id}`} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-t border-b border-border hover:border-accent transition-colors">
            <div>
              <p className="text-xs text-muted mb-2 tracking-wider">{next.category} · {next.year}</p>
              <h3 className="font-display text-4xl md:text-5xl text-ink group-hover:text-accent transition-colors">
                {next.title}
              </h3>
            </div>
            <span className="text-3xl group-hover:translate-x-3 transition-transform shrink-0">→</span>
          </Link>
        </section>
      )}
    </Layout>
  )
}
