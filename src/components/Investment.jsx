import Reveal from "./Reveal";
import Icon from "./Icon";
import GutterArt from "./GutterArt";
import { OPPORTUNITY, SNAPSHOT, INCLUSIONS, SCENARIOS } from "../data/content";

export function Opportunity() {
  return (
    <section style={{ background: "var(--lav)" }}>
      <GutterArt
        spots={[
          ["balloon", "right", "top"],
          ["crayon", "left", "bottom"],
          ["star", "left", "top"],
        ]}
      />
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          The opportunity
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          A recurring-revenue education business,
          <br />
          not a one-time bet
        </Reveal>
        <Reveal as="p" className="sec-sub" delay={110}>
          Preschool fees renew every academic year. A well-run Kayo centre
          builds a compounding local base: enrolled families stay for 2–4 years,
          refer siblings and neighbours, and fill the next batch before it
          opens.
        </Reveal>
        <div className="grid-3">
          {OPPORTUNITY.map((c, i) => (
            <Reveal
              key={c.title}
              className="card card-hover"
              dir="scale"
              delay={i * 110}
            >
              <div className="icon-badge">
                <Icon name={c.icon} size={24} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Investment() {
  return (
    <section id="economics">
      <GutterArt
        spots={[
          ["pencil", "left", "top"],
          ["cloud", "right", "bottom"],
          ["star", "right", "top"],
        ]}
      />
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Investment transparency
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          Can I afford this — and what exactly do I get?
        </Reveal>
        <Reveal as="p" className="sec-sub" delay={110}>
          The full picture, including what is <b>not</b> covered by the
          franchise fee. No partial ranges, no surprises at agreement stage.
        </Reveal>

        <div className="grid-2">
          <Reveal className="t-scroll" dir="left" delay={80}>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">All-in project snapshot</th>
                </tr>
                <tr>
                  <th>Item</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {SNAPSHOT.map((r) => (
                  <tr key={r.item}>
                    <td>{r.item}</td>
                    <td className={`num${r.inc ? " inc" : ""}`}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="t-scroll" dir="right" delay={160}>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Included vs funded separately</th>
                </tr>
                <tr>
                  <th>✓ Included in franchise package</th>
                  <th>✗ Franchisee funds separately</th>
                </tr>
              </thead>
              <tbody>
                {INCLUSIONS.map(([inc, exc], i) => (
                  <tr key={i}>
                    <td className="inc">{inc ? `✓ ${inc}` : ""}</td>
                    <td className="exc">{exc ? `✗ ${exc}` : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Scenarios({ onGetBrochure }) {
  return (
    <section
      className="scen"
      style={{ background: "var(--lav)", paddingTop: 56 }}
    >
      <GutterArt
        spots={[
          ["arrow", "right", "top"],
          ["block", "left", "bottom"],
          ["dot", "left", "center"],
        ]}
      />
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Unit economics
        </Reveal>
        <Reveal as="h2" className="sec-title" delay={60}>
          Three scenarios. Stated assumptions. No magic.
        </Reveal>
        <Reveal as="p" className="sec-sub" delay={110}>
          Illustrative models — final figures to be approved by Kayo leadership
          before publishing. Break-even is expressed in enrolled students so you
          can pressure-test it against your own city.
        </Reveal>

        <div className="grid-3">
          {SCENARIOS.map((s, i) => (
            <Reveal
              key={s.title}
              className={`card card-hover${s.mid ? " mid" : ""}`}
              dir="scale"
              delay={i * 120}
            >
              <span className="lab">{s.lab}</span>
              <h4>{s.title}</h4>
              <ul>
                {s.rows.map(([k, v]) => (
                  <li key={k}>
                    <span>{k}</span>
                    <b>{v}</b>
                  </li>
                ))}
              </ul>
              <div className="payback">
                Indicative payback <b>{s.payback}</b>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="microcopy" style={{ marginTop: 20, textAlign: "center" }}>
          Disclaimer: scenario models are illustrative examples based on stated
          assumptions, not a guarantee or promise of returns. Actual results
          vary by city, premises, fees and operator involvement.
        </p>

        <Reveal className="cta-row" delay={80}>
          <a className="btn btn-primary" href="#apply" data-cta="economics">
            Check Franchise Availability
            <Icon name="arrow-right" size={18} />
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            data-cta="brochure"
            onClick={onGetBrochure}
          >
            <Icon name="file-text" size={18} />
            Get Brochure
          </button>
        </Reveal>
      </div>
    </section>
  );
}
