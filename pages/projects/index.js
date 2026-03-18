import { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import siteData from '../../data/site.json'
import projects from '../../data/projects.json'

const ALL = 'All'

export default function Projects() {
  const categories = [ALL, ...Array.from(new Set(projects.map(p => p.category)))]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? projects : projects.filter(p => p.category === active)

  return (
    <Layout site={siteData}>
      <Head>
        <title>Projects — {siteData.name}</title>
        <meta name="description" content="Case studies across Performance Marketing, SEO, Web Development, and Marketing Technology." />
      </Head>

      {/* ─── HEADER ──────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="reveal">
          <p className="section-label mb-6">/ Work &nbsp; <span className="text-accent">(All Projects)</span></p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ink mb-6 max-w-3xl">
            Projects & Case Studies.
          </h1>
          <p className="text-muted text-lg max-w-xl">
            A collection of real work — campaigns, SEO projects, landing pages, and martech builds that delivered measurable results.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── FILTERS ─────────────────────────────── */}
      <section className="py-8 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200 border ${
                active === cat
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-muted border-border hover:border-ink hover:text-ink'
              }`}
            >
              {cat}
              {cat !== ALL && (
                <span className="ml-2 opacity-50">
                  ({projects.filter(p => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── GRID ────────────────────────────────── */}
      <section className="pb-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <ProjectCard project={project} index={projects.indexOf(project)} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-muted">No projects in this category yet.</p>
          </div>
        )}
      </section>
    </Layout>
  )
}
