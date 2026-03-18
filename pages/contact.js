import Head from 'next/head'
import Layout from '../components/Layout'
import siteData from '../data/site.json'

export default function Contact() {
  return (
    <Layout site={siteData}>
      <Head>
        <title>Contact — {siteData.name}</title>
        <meta name="description" content={`Get in touch with ${siteData.name} for performance marketing, SEO, web development, and marketing technology projects.`} />
      </Head>

      {/* ─── HEADER ──────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="reveal">
          <p className="section-label mb-6">/ Contact &nbsp; <span className="text-accent">(Let's Talk)</span></p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ink max-w-4xl">
            Got a project in mind?
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="divider" />
      </div>

      {/* ─── CONTACT GRID ────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

          {/* Left: info */}
          <div className="reveal">
            <p className="text-lg text-muted leading-relaxed mb-12">
              Whether you need to scale your paid media, fix your SEO, build a high-converting landing page, or sort out your tracking — I'd love to hear about your challenge.
            </p>

            <div className="flex flex-col gap-0 divide-y divide-border">
              <a href={`mailto:${siteData.email}`}
                className="group flex items-center justify-between py-5 hover:text-accent transition-colors">
                <div>
                  <p className="section-label mb-1">Email</p>
                  <p className="text-ink group-hover:text-accent transition-colors">{siteData.email}</p>
                </div>
                <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
              </a>

              {siteData.phone && (
                <a href={`tel:${siteData.phone}`}
                  className="group flex items-center justify-between py-5 hover:text-accent transition-colors">
                  <div>
                    <p className="section-label mb-1">Phone / WhatsApp</p>
                    <p className="text-ink group-hover:text-accent transition-colors">{siteData.phone}</p>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
                </a>
              )}

              {siteData.linkedin && (
                <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 hover:text-accent transition-colors">
                  <div>
                    <p className="section-label mb-1">LinkedIn</p>
                    <p className="text-ink group-hover:text-accent transition-colors">Connect with me</p>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform text-xl">↗</span>
                </a>
              )}

              <div className="py-5">
                <p className="section-label mb-1">Location</p>
                <p className="text-ink">{siteData.location}</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <p className="section-label mb-6">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

function ContactForm() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="section-label block mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors"
          />
        </div>
        <div>
          <label className="section-label block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="section-label block mb-2">What do you need help with?</label>
        <select
          name="service"
          className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a service...</option>
          <option value="performance">Performance Marketing</option>
          <option value="seo">SEO</option>
          <option value="webdev">Web Development</option>
          <option value="martech">Marketing Technology</option>
          <option value="other">Other / Multiple</option>
        </select>
      </div>

      <div>
        <label className="section-label block mb-2">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project, challenge, or goal..."
          className="w-full bg-warm border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors resize-none"
        />
      </div>

      {/*
        FORM SUBMISSION OPTIONS:
        Option 1 (Recommended - Netlify Forms): Add `data-netlify="true"` to your <form> tag and name="contact"
        Option 2: Use Formspree - change action to your Formspree endpoint
        Option 3: Use EmailJS for client-side email sending
        See HOW_TO_UPDATE.md for full setup instructions
      */}
      <p className="text-xs text-muted">
        💡 To activate this form, see the <span className="text-ink font-medium">HOW_TO_UPDATE.md</span> file for easy Netlify Forms setup.
      </p>

      <button
        type="button"
        className="w-full py-4 bg-ink text-paper text-sm tracking-wide hover:bg-accent transition-colors duration-200"
        onClick={() => {
          // Form activation handled via Netlify Forms - see HOW_TO_UPDATE.md
          alert('Set up Netlify Forms to activate this form — see HOW_TO_UPDATE.md for instructions!')
        }}
      >
        Send Message →
      </button>
    </div>
  )
}
