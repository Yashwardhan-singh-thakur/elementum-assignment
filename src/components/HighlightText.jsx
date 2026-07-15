const colorClasses = {
  mint: "before:bg-mint",
  pink: "before:bg-pink",
};

function HighlightText({ children, color = "mint", className = "" }) {
  return (
    <span
      className={`relative isolate inline-block whitespace-nowrap before:absolute before:-left-[0.11em] before:-right-[0.11em] before:bottom-[0.04em] before:-z-10 before:h-[0.59em] before:rounded-full before:content-[''] ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}

export function UnderlinedText({ children, className = "" }) {
  return (
    <span
      className={`relative isolate inline-block whitespace-nowrap after:absolute after:-left-[0.08em] after:-right-[0.08em] after:-bottom-[0.04em] after:-z-10 after:h-[0.16em] after:bg-[url('/lines/yellow-line.png')] after:bg-[length:100%_100%] after:bg-center after:bg-no-repeat after:content-[''] ${className}`}
    >
      {children}
    </span>
  );
}

export default HighlightText;
