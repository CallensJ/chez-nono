import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initMenuTabs() {
  const tabs   = document.querySelectorAll('.menu-tab')
  const panels = document.querySelectorAll('.menu-panel')
  if (!tabs.length || !panels.length) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const tabList = Array.from(tabs)

  function activate(id) {
    tabs.forEach(tab => {
      const isActive = tab.dataset.tab === id
      tab.classList.toggle('is-active', isActive)
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false')
      tab.tabIndex = isActive ? 0 : -1
    })
    panels.forEach(panel => {
      panel.hidden = panel.dataset.panel !== id
    })
    revealPanel(id)
  }

  function revealPanel(id) {
    const panel = document.querySelector(`.menu-panel[data-panel="${id}"]`)
    if (!panel) return
    const items = panel.querySelectorAll('.menu-card, .drink-row')
    if (!items.length) return

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    gsap.fromTo(items,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' },
    )
  }

  tabList.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      if (!tab.classList.contains('is-active')) activate(tab.dataset.tab)
    })
    tab.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const next = tabList[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabList.length) % tabList.length]
      next.focus()
      activate(next.dataset.tab)
    })
  })

  // Reveal the default panel once the tabbed section scrolls into view.
  const section = document.getElementById('carte-tabs')
  if (section && !reduced) {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      once: true,
      onEnter: () => revealPanel(tabList[0]?.dataset.tab),
    })
  } else {
    revealPanel(tabList[0]?.dataset.tab)
  }
}
