import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'

export default function Layout({ children, site }) {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar name={site?.name} site={site} />
      <main className="flex-1">
        {children}
      </main>
      <Footer site={site} />
    </div>
  )
}
