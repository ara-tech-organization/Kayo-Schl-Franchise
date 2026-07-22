/* Wraps children in a scroll-reveal container.
   `dir` picks the entry direction, `delay` staggers siblings. */
export default function Reveal({
  as: Tag = "div",
  dir = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const dirClass =
    dir === "left"
      ? "reveal-left"
      : dir === "right"
        ? "reveal-right"
        : dir === "scale"
          ? "reveal-scale"
          : "";

  return (
    <Tag
      className={`reveal ${dirClass} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
