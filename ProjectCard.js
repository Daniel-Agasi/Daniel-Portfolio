import Link from 'next/link'
import Image from 'next/image'

const categoryColors = {
  'Performance Marketing': 'bg-amber-100 text-amber-800',
  'SEO':                   'bg-emerald-100 text-emerald-800',
  'Web Development':       'bg-blue-100 text-blue-800',
  'Marketing Technology':  'bg-purple-100 text-purple-800',
}

// Maps imagePosition value → CSS object-position
const positionMap = {
  'top':          'object-top',
  'top-left':     'object-left-top',
  'top-right':    'object-right-top',
  'center':       'object-center',
  'center-left':  'object-left',
  'center-right': 'object-right',
  'bottom':       'object-bottom',
  'bottom-left':  'object-left-bottom',
  'bottom-right': 'object-right-bottom',
}

export default function ProjectCard({ project, index }) {
  const hasImage    = project.thumbnail && project.thumbnail.trim() !== ''
  const posClass    = positionMap[project.imagePosition] || 'object-center'
  const num         = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <article className="relative overflow-hidden bg-warm border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 rounded-sm">

        {/* ── Thumbnail ─────────────────────────── */}
        <div className="aspect-[4/3] bg-gradient-to-br from-warm to-border overflow-hidden relative">
          {hasImage ? (
            <>
              {/* Real image — fills box, crops to aspect ratio */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover ${posClass} transition-transform duration-500 group-hover:scale-[1.03]`}
              />
              {/* Subtle dark overlay on hover */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
            </>
          ) : (
            <>
              {/* Placeholder when no image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black text-7xl text-ink/[0.07] select-none">
                  {num}
                </span>
              </div>
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300" />
            </>
          )}
        </div>

        {/* ── Content ───────────────────────────── */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className={`text-[11px] px-2.5 py-1 font-semibold rounded-sm ${categoryColors[project.category] || 'bg-gray-100 text-gray-700'}`}>
              {project.category}
            </span>
            <span className="text-xs text-muted shrink-0">{project.year}</span>
          </div>

          <h3 className="font-display font-bold text-xl md:text-2xl text-ink mb-2 group-hover:text-accent transition-colors leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {project.title}
          </h3>

          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-ink group-hover:text-accent transition-colors duration-200">
            <span className="text-[11px] tracking-widest uppercase font-semibold">View Case Study</span>
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>
        </div>

      </article>
    </Link>
  )
}
