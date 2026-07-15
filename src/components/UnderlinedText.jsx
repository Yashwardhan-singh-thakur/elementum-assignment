function UnderlinedText({ children, className = "" }) {
  return (
    <span
      className={`relative isolate inline-block whitespace-nowrap  after:absolute after:-left-[0.08em] after:-right-[0.08em]  after:-z-10  after:bg-[url('/lines/yellow-line-small.png')] after:bg-[length:100%_100%] after:bg-center after:bg-no-repeat after:content-[''] 
      
 ${className}`}
    >
      {children}
    </span>
  );
}

export default UnderlinedText;
