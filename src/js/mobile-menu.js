import gsap from 'gsap'

export function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle')
  const menu   = document.getElementById('mobile-menu')
  if (!toggle || !menu) return

  const lines = toggle.querySelectorAll('.hamburger-line')
  const links = menu.querySelectorAll('.mobile-link')
  let isOpen  = false

  function openMenu() {
    isOpen = true
    menu.classList.add('is-open')
    menu.setAttribute('aria-hidden', 'false')
    toggle.setAttribute('aria-expanded', 'true')
    document.body.style.overflow = 'hidden'

    // Hamburger → X
    gsap.to(lines[0], { y: 7,  rotation: 45,  duration: 0.35, ease: 'power2.inOut' })
    gsap.to(lines[1], { opacity: 0,            duration: 0.2 })
    gsap.to(lines[2], { y: -7, rotation: -45, width: 24, duration: 0.35, ease: 'power2.inOut' })

    // Menu reveal
    const tl = gsap.timeline()
    tl.to(menu, { opacity: 1, duration: 0.35, ease: 'power2.out' })
    tl.from(links, {
      y: 28,
      opacity: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power3.out',
    }, '-=0.15')

    // Focus first link for keyboard nav
    if (links[0]) links[0].focus()
  }

  function closeMenu() {
    isOpen = false

    // X → Hamburger
    gsap.to(lines[0], { y: 0, rotation: 0,  duration: 0.3, ease: 'power2.inOut' })
    gsap.to(lines[1], { opacity: 1,          duration: 0.3, delay: 0.05 })
    gsap.to(lines[2], { y: 0, rotation: 0,  width: 16, duration: 0.3, ease: 'power2.inOut' })

    gsap.to(menu, {
      opacity: 0,
      duration: 0.28,
      ease: 'power2.in',
      onComplete: () => {
        menu.classList.remove('is-open')
        menu.setAttribute('aria-hidden', 'true')
        toggle.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
        toggle.focus()
      },
    })
  }

  toggle.addEventListener('click', () => (isOpen ? closeMenu() : openMenu()))

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeMenu()
  })
}
