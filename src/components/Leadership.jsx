import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import { LEADERS, AWARDS, FAQS } from '../data/content'

export function Leadership() {
  return (
    <section style={{ background: 'var(--lav)' }}>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Who runs the system
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          The people behind 12 years of Kayo
        </Reveal>

        <div className="grid-2" style={{ marginTop: 30 }}>
          {LEADERS.map((p, i) => (
            <Reveal key={p.name} className="card card-hover leader-card" dir="scale" delay={i * 110}>
              {p.photo ? (
                <img className="leader-avatar" src={p.photo} alt={p.name} loading="lazy" />
              ) : (
                <div className="leader-avatar">
                  {p.initials ? p.initials : <Icon name={p.icon} size={30} />}
                </div>
              )}
              <h3 style={{ fontSize: 17 }}>{p.name}</h3>
              <span className="leader-role">{p.role}</span>
              <p style={{ fontSize: 13.5, textAlign: 'left' }}>{p.body}</p>
            </Reveal>
          ))}
        </div>

        <AwardCarousel />
      </div>
    </section>
  )
}

const readPerView = () => (typeof window !== 'undefined' && window.innerWidth <= 860 ? 1 : 3)

function AwardCarousel() {
  const [perView, setPerView] = useState(readPerView)
  const [rawIndex, setIndex] = useState(0)
  const pages = Math.max(1, AWARDS.length - perView + 1)
  // Clamp during render so a resize that shrinks `pages` can't strand the track off-screen.
  const index = Math.min(rawIndex, pages - 1)

  useEffect(() => {
    const set = () => setPerView(readPerView())
    window.addEventListener('resize', set)
    return () => window.removeEventListener('resize', set)
  }, [])

  const go = useCallback((dir) => setIndex((i) => (Math.min(i, pages - 1) + dir + pages) % pages), [pages])

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [go])

  return (
    <Reveal style={{ marginTop: 34 }} delay={80}>
      <h3 className="icon-inline" style={{ fontSize: 18, marginBottom: 16 }}>
        <Icon name="award" size={20} style={{ color: 'var(--purple)' }} />
        Recognition
      </h3>
      <div className="carousel">
        {/* The track is 100% wide and slides overflow it, so one step == one slide == 100/perView %. */}
        <div className="carousel-track" style={{ transform: `translateX(-${index * (100 / perView)}%)` }}>
          {AWARDS.map((a, i) => (
            <div className="carousel-slide" key={i}>
              <div className="award-card">
                <h4 className="icon-inline">
                  <Icon name="award" size={18} style={{ color: 'var(--purple)' }} />
                  {a.name}
                </h4>
                <p>{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-ctrl">
        <button type="button" onClick={() => go(-1)} aria-label="Previous awards">
          <Icon name="chevron-left" size={18} />
        </button>
        <div className="carousel-dots">
          {Array.from({ length: pages }, (_, i) => (
            <button
              type="button"
              key={i}
              className={i === index ? 'on' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Go to award slide ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next awards">
          <Icon name="chevron-right" size={18} />
        </button>
      </div>
    </Reveal>
  )
}

export function Faq() {
  const half = Math.ceil(FAQS.length / 2)
  const cols = [FAQS.slice(0, half), FAQS.slice(half)]

  return (
    <section id="faq">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Before you enquire
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          The questions serious investors ask
        </Reveal>
        <div className="faq-cols" style={{ marginTop: 30 }}>
          {cols.map((col, ci) => (
            <div key={ci}>
              {col.map((f, i) => (
                <Reveal as="details" key={f.q} delay={i * 60}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
