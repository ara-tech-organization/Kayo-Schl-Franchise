/* Minimal preschool line-art for the wide empty gutters beside the content
   column. Purely decorative: the CSS keeps it hidden until the gutter is wide
   enough to hold a motif without crowding the copy. Drop one into a section
   with `position: relative` (every <section> already has it). */

const MOTIFS = {
  block: (
    <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
      <rect
        x="3"
        y="3"
        width="38"
        height="38"
        rx="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="22"
        y="29"
        textAnchor="middle"
        fontSize="18"
        fontWeight="800"
        fill="currentColor"
      >
        A
      </text>
    </svg>
  ),
  crayon: (
    <svg width="26" height="46" viewBox="0 0 26 46" fill="none">
      <path
        d="M13 2l7 11H6l7-11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="6"
        y="13"
        width="14"
        height="30"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6 22h14" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  star: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.4l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9L12 3.4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  balloon: (
    <svg width="32" height="46" viewBox="0 0 32 46" fill="none">
      <ellipse
        cx="16"
        cy="15"
        rx="11"
        ry="13"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M16 28v3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 31c4 4-4 6 0 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  plane: (
    <svg width="40" height="38" viewBox="0 0 40 38" fill="none">
      <path
        d="M37 3L3 17l13 5 5 12L37 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 22L37 3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  cloud: (
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
      <path
        d="M12 26h21a7.5 7.5 0 0 0 .6-15A10 10 0 0 0 14.6 12 7 7 0 0 0 12 26z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pencil: (
    <svg width="22" height="48" viewBox="0 0 22 48" fill="none">
      <path
        d="M11 2l6 10H5l6-10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M5 12h12v25H5V12z" stroke="currentColor" strokeWidth="2" />
      <rect
        x="5"
        y="37"
        width="12"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  /* Hand-drawn style arrow curving down the page, nudging the eye onward. */
  arrow: (
    <svg width="36" height="52" viewBox="0 0 36 52" fill="none">
      <path
        d="M10 5c16 8 20 24 9 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 36l7 8 9-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* Each spot is placed on its own: [motif, side, pos] — so a section scatters
   single icons across different corners instead of stacking them in one column.
   `tone="light"` inverts the palette for the purple sections. */
export default function GutterArt({ tone, spots }) {
  return (
    <>
      {spots.map(([motif, side, pos], i) => {
        const cls = [
          "gutter-art",
          `gutter-art-${side}`,
          `gutter-art-${pos}`,
          `ga-t${i % 3}`,
          i % 2 ? "ga-accent" : "",
          motif === "dot" ? "ga-dot" : "",
          tone === "light" ? "gutter-art-light" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <span className={cls} aria-hidden="true" key={i}>
            {motif === "dot" ? null : MOTIFS[motif]}
          </span>
        );
      })}
    </>
  );
}
