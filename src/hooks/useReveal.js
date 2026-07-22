import { useEffect } from 'react'

/* One observer for the whole page — every `.reveal` element gets `.is-in`
   the first time it enters the viewport, then stops being watched. */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll('.reveal:not(.is-in)')

    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

/* Tracks which ladder section is currently in view + overall scroll progress. */
export function useScrollSpy(ids) {
  useEffect(() => {
    const rungs = document.querySelectorAll('#ladder .rung')
    const navLinks = document.querySelectorAll('.nav-links a:not(.btn)')
    const navIds = [...navLinks].map((a) => a.getAttribute('href').slice(1))
    const header = document.querySelector('header')
    const bar = document.querySelector('.scroll-progress')
    let ticking = false

    /* The nav and the ladder track different id sets — the nav links #faq, which is
       not a ladder rung — so each resolves its own current section. Picking the
       furthest-down section that has been passed (rather than the last one in the
       array) keeps this right when the array order differs from document order.
       `fallback` wins before anything is passed: the ladder always shows a rung,
       the nav stays unmarked until the reader reaches its first target. */
    const currentOf = (list, y, fallback) => {
      let current = fallback
      let best = -1
      list.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y && el.offsetTop > best) {
          best = el.offsetTop
          current = id
        }
      })
      return current
    }

    const spy = () => {
      ticking = false
      const y = window.scrollY + window.innerHeight * 0.4
      const current = currentOf(ids, y, ids[0])
      rungs.forEach((r) => r.classList.toggle('active', r.dataset.sec === current))

      const navCurrent = currentOf(navIds, y, null)
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${navCurrent}`))

      if (header) header.classList.toggle('scrolled', window.scrollY > 8)
      if (bar) {
        const max = document.body.scrollHeight - window.innerHeight
        bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(spy)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    spy()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])
}

/* Counts up to a numeric target once the element scrolls into view.
   Non-numeric values (e.g. "[X]") are returned untouched by the caller. */
export function useCountUp(ref, target, active) {
  useEffect(() => {
    if (!active || !ref.current || target == null) return
    const el = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.textContent = String(target)
      return
    }
    const duration = 1400
    let raf
    let start

    const tick = (ts) => {
      if (start === undefined) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = Math.round(target * eased).toLocaleString('en-IN')
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [ref, target, active])
}
