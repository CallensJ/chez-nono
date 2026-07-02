import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  initHeroEntrance(prefersReducedMotion)
  initHeroSlider(prefersReducedMotion)
  initScrollHint(prefersReducedMotion)
  initScrollReveals(prefersReducedMotion)
}

/* ── Hero entrance ─────────────────────────────────────────── */
function initHeroEntrance(reduced) {
  const label    = document.querySelector('.hero-label')
  const title    = document.querySelector('.hero-title')
  const subtitle = document.querySelector('.hero-subtitle')
  const ctas     = document.querySelectorAll('.hero-cta')
  const hint     = document.querySelector('.hero-scroll-hint')

  // All elements start at opacity: 0 via inline style in HTML.
  // Make them visible instantly if reduced motion is preferred.
  if (reduced) {
    ;[label, title, subtitle, hint].forEach(el => el && gsap.set(el, { opacity: 1, y: 0 }))
    ctas.forEach(el => gsap.set(el, { opacity: 1, y: 0 }))
    return
  }

  const tl = gsap.timeline({ delay: 0.2 })

  if (label) {
    tl.fromTo(label,
      { y: 14, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.8, ease: 'power2.out' },
    )
  }
  if (title) {
    tl.fromTo(title,
      { y: 36, opacity: 0 },
      { y: 0,  opacity: 1, duration: 1.05, ease: 'power3.out' },
      label ? '-=0.55' : 0,
    )
  }
  if (subtitle) {
    tl.fromTo(subtitle,
      { y: 18, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.85, ease: 'power2.out' },
      '-=0.65',
    )
  }
  if (ctas.length) {
    tl.fromTo(ctas,
      { y: 14, opacity: 0 },
      { y: 0,  opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power2.out' },
      '-=0.6',
    )
  }
  if (hint) {
    tl.fromTo(hint,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power1.out' },
      '-=0.3',
    )
  }
}

/* ── Hero slider ───────────────────────────────────────────── */
function initHeroSlider(reduced) {
  const slides = document.querySelectorAll('.hero-slide')
  const dots   = document.querySelectorAll('.slide-dot')
  if (!slides.length) return

  let current = 0
  const SLIDE_MS  = 5000  // ms — each slide is fully visible for this long
  const FADE_S    = 1.3   // s  — crossfade duration
  const KB_S      = (SLIDE_MS / 1000) + FADE_S + 1  // Ken Burns total span

  // Init: only first slide visible
  gsap.set(slides, { opacity: 0 })
  gsap.set(slides[0], { opacity: 1 })

  if (!reduced) {
    gsap.set(slides, { scale: 1 })
    gsap.to(slides[0], { scale: 1.07, duration: KB_S, ease: 'none', overwrite: true })
  }

  function goToSlide(next) {
    const prev = current
    current    = next

    gsap.set(slides[current], { scale: 1 })

    if (!reduced) {
      gsap.to(slides[current], { scale: 1.07, duration: KB_S, ease: 'none', overwrite: true })
    }

    gsap.to(slides[current], { opacity: 1, duration: FADE_S, ease: 'power2.inOut', overwrite: true })
    gsap.to(slides[prev],    { opacity: 0, duration: FADE_S, ease: 'power2.inOut', overwrite: true })

    updateDots(current, dots)
  }

  let timer = setInterval(() => goToSlide((current + 1) % slides.length), SLIDE_MS)

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i === current) return
      clearInterval(timer)
      goToSlide(i)
      timer = setInterval(() => goToSlide((current + 1) % slides.length), SLIDE_MS)
    })
  })
}

function updateDots(active, dots) {
  dots.forEach((dot, i) => {
    gsap.to(dot, {
      width:   i === active ? 24 : 8,
      opacity: i === active ? 0.9 : 0.4,
      duration: 0.35,
      ease: 'power2.out',
    })
  })
}

/* ── Scroll hint pulse ─────────────────────────────────────── */
function initScrollHint(reduced) {
  const line = document.querySelector('.hero-scroll-hint .w-px')
  if (!line || reduced) return

  gsap.to(line, {
    scaleY: 0.45,
    transformOrigin: 'top center',
    duration: 1.1,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
    delay: 2.5,
  })
}

/* ── Scroll reveals — chaptered homepage choreography ──────── */
function initScrollReveals(reduced) {
  const reveals    = document.querySelectorAll('[data-reveal]:not([data-reveal="mask"]):not([data-reveal="scene"])')
  const scenes     = document.querySelectorAll('[data-reveal="scene"]')
  const masks      = document.querySelectorAll('[data-reveal="mask"]')
  const lineWraps  = document.querySelectorAll('.reveal-line-wrap')
  const parallaxes = document.querySelectorAll('[data-parallax]')
  const ctaBg      = document.querySelector('.cta-bg')

  // Reduced motion: show everything in place, skip all scroll motion.
  if (reduced) {
    gsap.set([...reveals, ...scenes, ...masks], { opacity: 1, y: 0, filter: 'none', clearProps: 'transform' })
    document.querySelectorAll('.reveal-line').forEach(l => gsap.set(l, { yPercent: 0 }))
    return
  }

  // Generic fade-up reveals (staggered when siblings share a parent row).
  reveals.forEach(el => {
    gsap.fromTo(el,
      { y: 28, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.85, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    )
  })

  // Narrative scroll — each "scene" (paragraph) emerges on its own as the
  // reader descends, discouraging skimming ahead.
  scenes.forEach(el => {
    gsap.fromTo(el,
      { y: 40, opacity: 0, filter: 'blur(6px)' },
      {
        y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 78%', once: true },
      },
    )
  })

  // Image mask reveals — clip up + gentle scale settle.
  masks.forEach(mask => {
    const inner = mask.querySelector('.img-mask-inner')
    const tl = gsap.timeline({
      scrollTrigger: { trigger: mask, start: 'top 85%', once: true },
    })
    tl.fromTo(mask,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.out' },
    )
    if (inner) {
      tl.fromTo(inner,
        { scale: 1.18 },
        { scale: 1, duration: 1.3, ease: 'power3.out' },
        0,
      )
    }
  })

  // Manifesto line-by-line reveal.
  lineWraps.forEach((wrap, i) => {
    const line = wrap.querySelector('.reveal-line')
    if (!line) return
    gsap.fromTo(line,
      { yPercent: 110 },
      {
        yPercent: 0, duration: 0.9, ease: 'power3.out', delay: i * 0.08,
        scrollTrigger: { trigger: wrap.closest('h2') || wrap, start: 'top 80%', once: true },
      },
    )
  })

  // Subtle parallax drift on framed images.
  parallaxes.forEach(el => {
    const amount = parseFloat(el.dataset.parallax) || 0.1
    gsap.fromTo(el,
      { yPercent: -amount * 50 },
      {
        yPercent: amount * 50, ease: 'none',
        scrollTrigger: {
          trigger: el.closest('.img-mask') || el,
          start: 'top bottom', end: 'bottom top', scrub: true,
        },
      },
    )
  })

  // Final CTA background — slow Ken Burns drift while in view.
  if (ctaBg) {
    gsap.fromTo(ctaBg,
      { scale: 1.12, yPercent: -4 },
      {
        scale: 1, yPercent: 4, ease: 'none',
        scrollTrigger: {
          trigger: '#cta-final',
          start: 'top bottom', end: 'bottom top', scrub: true,
        },
      },
    )
  }
}
