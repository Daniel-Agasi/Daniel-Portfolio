import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import siteData from '../data/site.json'

export default function NotFound() {
  return (
    <Layout site={siteData}>
      <Head>
        <title>404 — Page Not Found — {siteData.name}</title>
      </Head>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-display text-[12rem] md:text-[20rem] leading-none text-ink/5 select-none">
            404
          </div>
          <div className="-mt-8 md:-mt-16 relative z-10">
            <h1 className="font-display text-3xl md:text-5xl text-ink mb-4">
              Page not found.
            </h1>
            <p className="text-muted mb-10">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-6 py-3 bg-ink text-paper text-sm tracking-wide hover:bg-accent transition-colors">
                Back to Home
              </Link>
              <Link href="/projects" className="px-6 py-3 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-paper transition-all">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
