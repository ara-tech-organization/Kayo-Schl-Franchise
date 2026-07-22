import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import QualForm from './QualForm'
import logo from '../assets/kayo-logo.png'
import { CONTACT } from '../data/content'

export function Apply() {
  return (
    <section className="form-sec" id="apply">
      <div className="wrap form-grid">
        <Reveal className="form-side" dir="left">
          <span className="eyebrow" style={{ color: 'var(--yellow)' }}>
            Take the first step
          </span>
          <h2 className="sec-title">Check franchise availability in your city</h2>
          <p className="sec-sub">
            Two quick steps. Step one takes 30 seconds. Step two helps us prepare a serious, city-specific
            answer — not a generic sales call.
          </p>
          <div className="promise">
            <Icon name="clock" size={20} style={{ color: 'var(--yellow)', flex: '0 0 auto' }} />
            <span>
              <b>Response within 1 working day.</b> A city-fit answer and the investment brief — no
              obligation, no spam.
            </span>
          </div>
          <div className="promise">
            <Icon name="whatsapp" size={20} style={{ color: 'var(--yellow)', flex: '0 0 auto' }} />
            <span>
              <b>Prefer WhatsApp?</b>{' '}
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
                Message the franchise desk
              </a>{' '}
              directly and skip the form.
            </span>
          </div>
          <div className="promise">
            <Icon name="lock" size={20} style={{ color: 'var(--yellow)', flex: '0 0 auto' }} />
            <span>
              <b>Franchise enquiries only.</b> Parent admission enquiries are routed separately — your details
              go straight to the franchise team.
            </span>
          </div>
        </Reveal>

        <Reveal className="form-card" dir="right" delay={120}>
          <QualForm idPrefix="f" />
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <>
      <div className="disclaimer-strip">
        <div className="wrap">
          All investment figures, scenario models and franchisee results shown in [brackets] are placeholders
          pending verification and approval by Kayo International leadership. Scenario outputs are illustrative
          and not a guarantee of returns.
        </div>
      </div>
      <footer>
        <div className="wrap foot-grid">
          <img src={logo} alt="Kayo International" width="400" height="180" />
          <div>
            Kayo International · Perungudi, Chennai · Saravanampatti, Coimbatore
            <br />
            Franchise desk: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> ·{' '}
            <a href={`https://${CONTACT.site}`} target="_blank" rel="noreferrer">
              {CONTACT.site}
            </a>
          </div>
          <div style={{ textAlign: 'right' }}>
            CRO rebuild concept by <b style={{ color: '#fff' }}>ARA Discover Marketing</b>
            <br />
            Discover • Strategize • Dominate
          </div>
        </div>
      </footer>
    </>
  )
}

export function StickyBar() {
  return (
    <div id="stickybar">
      <a className="btn btn-primary" href="#apply" data-cta="sticky-city">
        Check City Availability
      </a>
      <a className="btn btn-wa" href={CONTACT.whatsapp} target="_blank" rel="noreferrer" data-cta="sticky-wa">
        <Icon name="whatsapp" size={18} />
        WhatsApp
      </a>
    </div>
  )
}

/* Sticky right-edge rail: collapse arrow, vertical "Contact Us" tab, WhatsApp square. */
export function ContactRail({ onContact }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div id="contact-rail" className={collapsed ? 'collapsed' : ''}>
      <button
        type="button"
        className="rail-toggle"
        onClick={() => setCollapsed((c) => !c)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? 'Show contact options' : 'Hide contact options'}
      >
        <Icon name={collapsed ? 'chevron-left' : 'arrow-right'} size={15} />
      </button>

      <div className="rail-body">
        <button type="button" className="rail-contact" onClick={() => onContact()} data-cta="rail-contact">
          <Icon name="mail" size={15} />
          <span>Contact Us</span>
        </button>
        <a
          className="rail-wa"
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with the Kayo franchise desk on WhatsApp"
          data-cta="rail-wa"
        >
          <Icon name="whatsapp" size={26} />
        </a>
      </div>
    </div>
  )
}

/* Fires 10 seconds after the visitor first interacts with the page. */
export function PopupForm({ variant, onOpen, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem('kayoPopupSeen')) return

    const events = ['scroll', 'mousemove', 'keydown', 'touchstart', 'click']
    let timer

    // The 10s countdown starts on the visitor's first interaction, not on load.
    const start = () => {
      if (timer) return
      timer = setTimeout(() => {
        sessionStorage.setItem('kayoPopupSeen', '1')
        onOpen('auto')
      }, 10000)
      events.forEach((e) => window.removeEventListener(e, start))
    }

    events.forEach((e) => window.addEventListener(e, start, { passive: true }))

    return () => {
      clearTimeout(timer)
      events.forEach((e) => window.removeEventListener(e, start))
    }
  }, [onOpen])

  useEffect(() => {
    if (!variant) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [variant, onClose])

  if (!variant) return null

  const brochure = variant === 'brochure'

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close" ref={closeRef}>
          <Icon name="x" size={16} />
        </button>
        <span className="eyebrow">{brochure ? 'Franchise investment brief' : 'One operator per territory'}</span>
        <h3 id="popup-title">{brochure ? 'Where should we send the brochure?' : 'Is your city still available?'}</h3>
        <p className="modal-sub">
          {brochure
            ? "Tell us your city and we'll send the detailed investment brief plus a city-fit answer within 1 working day."
            : "30 seconds. We'll confirm availability and send the investment brief within 1 working day — no obligation."}
        </p>
        <QualForm idPrefix="p" />
      </div>
    </div>
  )
}
