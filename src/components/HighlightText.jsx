function HighlightText({ children, color = "#ccefd8", className = "" }) {
  return (
    <span
      className={`relative isolate inline-block whitespace-nowrap ${className}`}
    >
      <span className="relative z-10">{children}</span>

      <span
        aria-hidden="true"
        className="absolute -left-[0.08em] -right-[0.08em] bottom-[0.06em] z-0 h-[0.38em] rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

export default HighlightText;
