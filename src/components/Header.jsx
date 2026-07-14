import { useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex h-[74px] w-full max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a
          href="#home"
          className="text-[20px] tracking-[-0.04em] text-black"
          onClick={closeMenu}
        >
          Elementum
        </a>

        <nav className="hidden items-center gap-10 text-[13px] lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-2 after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-end justify-center gap-[6px]"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span
            className={`block h-px bg-black transition-all duration-200 ${
              isMenuOpen ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
            }`}
          />

          <span
            className={`block h-px bg-black transition-all duration-200 ${
              isMenuOpen ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute left-4 right-4 top-[70px] border border-neutral-200 bg-white p-3 shadow-lg transition-all duration-200 lg:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-b border-neutral-100 px-4 py-4 text-lg last:border-none"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
