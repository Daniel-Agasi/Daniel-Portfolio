import Link from 'next/link'

const categoryColors = {
  'Performance Marketing': 'bg-amber-100 text-amber-800',
  'SEO': 'bg-emerald-100 text-emerald-800',
  'Web Development': 'bg-blue-100 text-blue-800',
  'Marketing Technology': 'bg-purple-100 text-purple-800',
}

export default function ProjectCard({ project, index }) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <article className="relative overflow-hidden bg-warm border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-gradient-to-br from-warm to-border overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Category icon placeholder when no image */}
            <span className="font-display text-7xl text-ink/10">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className={`text-xs px-2.5 py-1 font-medium ${categoryColors[project.category] || 'bg-gray-100 text-gray-700'}`}>
              {project.category}
            </span>
            <span className="text-xs text-muted">{project.year}</span>
          </div>

          <h3 className="font-display text-2xl text-ink mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-muted border border-border px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-5 flex items-center gap-2 text-sm text-ink group-hover:text-accent transition-colors">
            <span className="text-xs tracking-widest uppercase font-medium">View Case Study</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
