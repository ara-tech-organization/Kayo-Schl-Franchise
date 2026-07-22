import Reveal from './Reveal'
import Icon from './Icon'
import GutterArt from './GutterArt'
import { WHY_KAYO, PHASES, QUALIFY, ROADMAP, CENTRE_PHOTO, VIDEOS } from '../data/content'

export function CaseStudy({ onPlayVideo }) {
  return (
    <section id="proof">
      <GutterArt side="left" motifs={['cloud', 'dot', 'star']} />
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Franchisee proof
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          Proof from an owner, not a brochure
        </Reveal>
        <Reveal as="p" className="sec-sub" delay={110}>
          One detailed case study from a partner who made the same decision you're weighing now. Where exact
          financials are confidential, indexed ranges are used with the owner's consent.
        </Reveal>

        <Reveal className="case" dir="scale" delay={80}>
          <div className="case-photo">
            <div className="case-shot">
              <img
                src={CENTRE_PHOTO}
                alt="A Kayo International class with their teachers"
                loading="lazy"
                decoding="async"
              />
              {VIDEOS.caseStudy && (
                <button
                  className="play"
                  type="button"
                  aria-label="Play the case study video"
                  onClick={() => onPlayVideo(VIDEOS.caseStudy, 'Case study — completed projects')}
                >
                  <Icon name="play" size={24} />
                </button>
              )}
            </div>
            <div className="case-caption">
              <strong>Case study — completed projects</strong>
              <span>Veena Sundaramurthy, M.A. · KAYO International, Chennai · Since 2013</span>
            </div>
          </div>
          <div className="case-body">
            <blockquote>
              "A child's first learning experiences shape a lifetime. That's why every moment at Kayo is
              designed with care, curiosity, and joy."
            </blockquote>
            <p style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 18 }}>
              — Veena Sundaramurthy, Director
            </p>
            <a className="btn btn-lime" href="#apply" data-cta="case">
              Speak to Us
              <Icon name="arrow-right" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhyKayo() {
  return (
    <section style={{ background: 'var(--lav)' }}>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Why the Kayo model
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          What you keep, and what you never have to build
        </Reveal>
        <div className="grid-3" style={{ marginTop: 30 }}>
          {WHY_KAYO.map((c, i) => (
            <Reveal key={c.title} className="card card-hover" dir="scale" delay={(i % 3) * 110}>
              <div className="icon-badge">
                <Icon name={c.icon} size={24} />
              </div>
              <h3 style={{ fontSize: 17 }}>{c.title}</h3>
              <p style={{ fontSize: 14 }}>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SupportMatrix() {
  return (
    <section id="support">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Execution support
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          Seven phases. Clear owners. No grey zones.
        </Reveal>
        <Reveal as="p" className="sec-sub" delay={110}>
          Every phase names what Kayo provides, what you fund or do, and the output that gates the next step.
        </Reveal>

        <Reveal className="matrix" delay={80}>
          <div className="matrix-head">
            <div>Phase</div>
            <div>Kayo provides</div>
            <div>You do / fund</div>
            <div>Output</div>
          </div>
          {PHASES.map((p) => (
            <div className="phase-row" key={p.n}>
              <div className="ph">
                <i>{p.n}</i>
                {p.phase}
              </div>
              <div data-l="Kayo provides">{p.kayo}</div>
              <div data-l="You do / fund">{p.you}</div>
              <div data-l="Output">{p.output}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Qualification() {
  return (
    <section style={{ background: 'var(--lav)' }}>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Self-qualification
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          Is Your Location Eligible?
        </Reveal>
        <div className="grid-2" style={{ marginTop: 30 }}>
          <Reveal className="card card-hover" dir="left" delay={80}>
            <div className="icon-badge">
              <Icon name="map-pin" size={24} />
            </div>
            <h3 style={{ marginBottom: 12 }}>Territory</h3>
            <ul className="list-check">
              {QUALIFY.territory.map((t) => (
                <li key={t}>
                  <Icon name="check" size={16} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card card-hover" dir="right" delay={160}>
            <div className="icon-badge">
              <Icon name="building" size={24} />
            </div>
            <h3 style={{ marginBottom: 12 }}>Site</h3>
            <ul className="list-check">
              {QUALIFY.site.map((t) => (
                <li key={t}>
                  <Icon name="check" size={16} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Roadmap() {
  return (
    <section>
      <GutterArt side="right" motifs={['crayon', 'dot', 'block']} />
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          From enquiry to opening day
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          A predictable path, gate by gate
        </Reveal>
        <div className="roadmap" style={{ marginTop: 30 }}>
          {ROADMAP.map((s, i) => (
            <Reveal
              key={s.title}
              className="step-card"
              delay={(i % 4) * 90}
              style={s.highlight ? { background: 'var(--lav)' } : undefined}
            >
              <span
                className="wk"
                style={s.highlight ? { background: 'var(--lime)', color: 'var(--purple-deep)' } : undefined}
              >
                {s.wk}
              </span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <div className="gate">
                <b>{s.gate.startsWith('KPI') ? '' : 'Gate: '}</b>
                {s.gate}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="microcopy" style={{ marginTop: 16 }}>
          Week ranges are indicative and confirmed per-site during discovery.
        </p>
      </div>
    </section>
  )
}
