import { useState } from "react";
import Icon from "./Icon";
import { CONTACT, STEP2_FIELDS } from "../data/content";

const EMPTY = {
  name: "",
  phone: "",
  city: "",
  capital: "",
  timeline: "",
  premises: "",
  occupation: "",
  involvement: "",
};

function track(event, detail) {
  // GA4 / Meta pixel hooks land here.
  if (typeof window !== "undefined" && window.dataLayer)
    window.dataLayer.push({ event, ...detail });
  console.log("[track]", event, detail || "");
}

export default function QualForm({ idPrefix = "q" }) {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: false }));
  };
  const fid = (k) => `${idPrefix}-${k}`;

  const toStep2 = () => {
    const next = {};
    ["name", "phone", "city"].forEach((k) => {
      if (!values[k].trim()) next[k] = true;
    });
    if (!/^[\d\s+()-]{8,}$/.test(values.phone.trim())) next.phone = true;
    setErrors(next);
    if (Object.keys(next).length) return;
    setStep(2);
    track("form_step1_complete", { city: values.city });
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    STEP2_FIELDS.forEach((f) => {
      if (f.required && !values[f.id]) next[f.id] = true;
    });
    setErrors(next);
    if (Object.keys(next).length) return;
    setDone(true);
    track("qualified_lead", {
      capital: values.capital,
      timeline: values.timeline,
    });
  };

  if (done) {
    return (
      <div className="thanks">
        <div className="tick">
          <Icon name="check" size={30} strokeWidth="3" />
        </div>
        <h3>Profile received — here's what happens next</h3>
        <p style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 8 }}>
          The franchise desk will confirm your city's availability and call you{" "}
          <b>within 1 working day</b>. Want to move faster?
        </p>
        <div className="next-acts">
          <a
            href={CONTACT.whatsappCall}
            target="_blank"
            rel="noreferrer"
            style={{ background: "var(--wa)", color: "#fff" }}
            data-cta="thanks-book-call"
          >
            <Icon name="whatsapp" size={18} />
            Book a Call Slot Now
          </a>
          <a
            href={CONTACT.phoneHref}
            style={{ background: "var(--purple)", color: "#fff" }}
            data-cta="thanks-call"
          >
            <Icon name="phone" size={18} />
            Call the Franchise Desk
          </a>
          <a
            href={CONTACT.brochureUrl ?? CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{ background: "var(--lav)", color: "var(--purple-deep)" }}
            data-cta="thanks-brochure"
          >
            <Icon name="file-text" size={18} />
            Get the Franchise Investment Brief (PDF)
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="steps-ind" aria-hidden="true">
        <span className="on" />
        <span className={step === 2 ? "on" : ""} />
      </div>

      <form onSubmit={submit} noValidate>
        {step === 1 ? (
          <div className="fstep">
            <h3>Step 1 of 2 — About you</h3>

            <label htmlFor={fid("name")}>Full name</label>
            <input
              id={fid("name")}
              type="text"
              autoComplete="name"
              className={errors.name ? "err" : ""}
              value={values.name}
              onChange={set("name")}
            />

            <label htmlFor={fid("phone")}>Phone (WhatsApp preferred)</label>
            <input
              id={fid("phone")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={errors.phone ? "err" : ""}
              value={values.phone}
              onChange={set("phone")}
            />

            <label htmlFor={fid("city")}>City you want to open in</label>
            <input
              id={fid("city")}
              type="text"
              className={errors.city ? "err" : ""}
              value={values.city}
              onChange={set("city")}
            />

            <button
              type="button"
              className="btn btn-primary"
              onClick={toStep2}
              data-cta="form-step1"
            >
              Continue — Check My City
              <Icon name="arrow-right" size={18} />
            </button>
            <p className="privacy">
              <Icon name="lock" size={13} />
              Your details go only to the Kayo franchise desk. No third-party
              sharing.
            </p>
          </div>
        ) : (
          <div className="fstep">
            <h3>Step 2 of 2 — Your readiness</h3>

            {STEP2_FIELDS.map((f) => (
              <div key={f.id}>
                <label htmlFor={fid(f.id)}>{f.label}</label>
                <select
                  id={fid(f.id)}
                  className={errors[f.id] ? "err" : ""}
                  value={values[f.id]}
                  onChange={set(f.id)}
                >
                  <option value="">Select an option</option>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            ))}

            <label htmlFor={fid("occupation")}>Current occupation</label>
            <input
              id={fid("occupation")}
              type="text"
              value={values.occupation}
              onChange={set("occupation")}
            />

            <button
              type="submit"
              className="btn btn-lime"
              data-cta="form-submit"
            >
              Submit My Franchise Profile
              <Icon name="arrow-right" size={18} />
            </button>
            <p className="privacy">
              By submitting you agree to be contacted by Kayo's franchise team
              about this enquiry.
            </p>
          </div>
        )}
      </form>
    </>
  );
}
