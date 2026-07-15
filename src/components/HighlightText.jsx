const colorClasses = {
  mint: "before:bg-mint",
  pink: "before:bg-pink",
};

function HighlightText({ children, color = "mint", className = "" }) {
  return (
    <span
      className={`relative isolate  inline-block  whitespace-nowrap  before:absolute  before:-right-[0.25em] before:-z-10  before:rounded-full before:content-[''] ${colorClasses[color]} ${className}  `}
    >
      {children}
    </span>
  );
}

export default HighlightText;
