import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

const animatedLinkClasses =
  "relative w-fit after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-[180ms] after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed top-0 w-[100%] z-[100] h-[72px] bg-white  ">
      <div className="mx-auto flex h-[72px] w-[min(calc(100%_-_64px),1200px)] items-center justify-between max-[900px]:w-[min(calc(100%_-_40px),700px)]">
        <a
          className="font-gerbil text-[20px] leading-none tracking-[-0.035em] max-[600px]:text-xl tracking-wide"
          href="#home"
          onClick={() => setIsMenuOpen(false)}
        >
          Elementum
        </a>

        <nav
          className="absolute left-1/2 flex -translate-x-1/2 gap-[47px] text-[13px] max-[900px]:hidden"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a
              className={animatedLinkClasses}
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="flex size-9 cursor-pointer flex-col items-end justify-center gap-[7px] border-0 bg-transparent p-0"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span
            className={`block h-[1.5px] bg-ink transition-[transform,width] duration-[180ms] ${
              isMenuOpen
                ? "w-[30px] translate-y-[4.25px] rotate-45"
                : "w-[34px]"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-ink transition-[transform,width] duration-[180ms] ${
              isMenuOpen ? "w-[30px] -translate-y-[4.25px] -rotate-45" : "w-6"
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`absolute top-16 right-6 grid w-[min(320px,calc(100%_-_48px))] border border-[#dedede] bg-white px-5 py-2.5 shadow-[0_18px_45px_rgb(0_0_0_/_10%)] transition-[opacity,transform] duration-[180ms] ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2.5 opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item) => (
          <a
            className="border-b border-[#ececec] px-1 py-[15px] last:border-b-0"
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
