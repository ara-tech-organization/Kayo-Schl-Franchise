import logo from '../assets/kayo-logo.png'
import { NAV_LINKS, LADDER } from '../data/content'

export function Header() {
  return (
    <header>
      <div className="nav">
        <a href="#top" aria-label="Kayo International — home">
          <img src={logo} alt="Kayo International" width="400" height="180" />
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#apply" className="btn btn-primary" data-cta="nav">
            Check City Availability
          </a>
        </nav>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  )
}

export function Ladder() {
  return (
    <nav id="ladder" aria-label="Investor decision ladder">
      {LADDER.map((r) => (
        <a className="rung" href={`#${r.id}`} data-sec={r.id} key={r.id}>
          <span className="dot" />
          <span className="lbl">{r.label}</span>
        </a>
      ))}
    </nav>
  )
}
