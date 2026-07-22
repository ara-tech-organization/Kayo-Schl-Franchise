import Reveal from "./Reveal";
import Icon from "./Icon";
import GutterArt from "./GutterArt";
import { HERO_BULLETS, PROOF_STATS, FOUNDERS, VIDEOS } from "../data/content";

export function Hero({ onGetBrochure, onPlayVideo }) {
  return (
    <section className="hero" id="top">
      <GutterArt
        spots={[
          ["block", "left", "top"],
          ["crayon", "left", "bottom"],
          ["star", "right", "center"],
        ]}
      />
      <div className="wrap hero-grid">
        <div>
          <Reveal as="span" className="tag-lime" delay={60}>
            Franchise territories now open across South India
          </Reveal>
          <Reveal as="h1" delay={140}>
            Build a <em>Kayo International</em> Preschool in Your City
          </Reveal>
          <Reveal as="ul" className="hero-bullets" delay={220}>
            {HERO_BULLETS.map((b, i) => (
              <li key={i}>
                {b.strong && <b>{b.strong}</b>}
                {b.rest}
              </li>
            ))}
          </Reveal>
          <Reveal className="hero-cta-row" delay={300}>
            <a className="btn btn-primary" href="#apply" data-cta="hero">
              Check Franchise Availability
              <Icon name="arrow-right" size={18} />
            </a>
            <button
              type="button"
              className="btn btn-ghost"
              data-cta="hero-brochure"
              onClick={onGetBrochure}
            >
              <Icon name="file-text" size={18} />
              Get a Brochure
            </button>
          </Reveal>
          <Reveal as="p" className="microcopy" delay={360}>
            ✓ No obligation — a city-fit check, not a sales commitment. Response
            within 1 working day.
          </Reveal>
        </div>

        <Reveal className="hero-visual" dir="scale" delay={240}>
          <div className="founder-panel">
            {FOUNDERS.map((f) => (
              <div className="founder" key={f.name}>
                {f.photo ? (
                  <img
                    className="founder-photo"
                    src={f.photo}
                    alt={f.name}
                    width="66"
                    height="66"
                  />
                ) : (
                  <div className="founder-photo" aria-hidden="true">
                    {f.initials}
                  </div>
                )}
                <div>
                  <div className="founder-name">{f.name}</div>
                  <div className="founder-title">{f.title}</div>
                  <p className="founder-note">{f.note}</p>
                </div>
              </div>
            ))}
            {VIDEOS.founder && (
              <button
                type="button"
                className="founder-video"
                onClick={() =>
                  onPlayVideo(VIDEOS.founder, "Intro Video of Founders")
                }
              >
                <Icon name="play" size={15} />
                Intro Video of Founders
              </button>
            )}
          </div>

          <div className="hero-badge">
            <b>12+</b>
            <span>
              years operating
              <br />
              preschools in Tamil Nadu
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProofBar() {
  return (
    <section className="proofbar" id="trust">
      <GutterArt
        tone="light"
        spots={[
          ["star", "left", "center"],
          ["balloon", "right", "center"],
        ]}
      />
      <div className="wrap">
        <div className="proof-grid">
          {PROOF_STATS.map((s, i) => (
            <Reveal
              key={s.label}
              className={s.wide ? "wide" : ""}
              delay={i * 90}
            >
              <b>{s.value}</b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
        <p className="proof-note">
          *Centre and city counts to be inserted from verified operating data
          before launch.
        </p>
      </div>
    </section>
  );
}
