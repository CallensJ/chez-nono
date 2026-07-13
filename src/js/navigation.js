function scrollToHash(hash, navbar) {
  const target = document.querySelector(hash)
  if (!target) return
  const offset = (navbar ? navbar.offsetHeight : 0) + 16
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function initNavigation() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('is-scrolled')
    } else {
      navbar.classList.remove('is-scrolled')
    }
  }, { passive: true })

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      scrollToHash(link.getAttribute('href'), navbar)
    })
  })

  // Arriving from another page with a #hash: the browser's native jump
  // happens before layout/fonts/images settle and lands in the wrong spot,
  // so scroll to it ourselves once everything is ready.
  if (window.location.hash) {
    window.addEventListener('load', () => {
      requestAnimationFrame(() => scrollToHash(window.location.hash, navbar))
    })
  }
}
