import { useEffect, useRef, useState } from "react";

function NewsletterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isOpen) {
      setIsOpen(true);
      return;
    }

    event.currentTarget.reset();
  };

  return (
    <section
      id="newsletter"
      className="relative h-[468px] overflow-hidden bg-mint max-[900px]:h-auto max-[900px]:min-h-[460px]"
    >
      <div
        className="pointer-events-none absolute -top-2 right-0 left-0 z-[1] h-[120px] max-[600px]:left-[44%] max-[600px]:w-[130px]"
        aria-hidden="true"
      >
        <img
          className="absolute left-[calc(50%_-_225px)] w-[156px]"
          src="/lines/pink-arrow-line.png"
          alt=""
        />
        <img
          className="absolute left-[calc(50%_-_150px)] w-[156px]"
          src="/lines/pink-arrow-line.png"
          alt=""
        />
      </div>
      <img
        className="absolute top-[180px] right-[6.5%] w-[124px] max-[900px]:-right-[30px] max-[900px]:w-[100px]  rotate-180 "
        src="/styled-container/purple-half-circle.png"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-[2] pt-[110px] text-center max-[900px]:px-5 max-[900px]:pt-[110px] max-[900px]:pb-20 max-[600px]:pt-[105px]">
        <h2 className="font-gerbil text-[70px] leading-[90px] font-normal tracking-[-0.045em] max-[900px]:text-[clamp(60px,11vw,86px)] tracking-wide ">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="mt-[5px] text-[16px] max-[600px]:text-[11px]">
          To make your stay special and even more memorable
        </p>

        <form
          className="mt-[27px] flex min-h-[52px] items-center justify-center gap-2.5 max-[600px]:flex-col"
          onSubmit={handleSubmit}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            ref={inputRef}
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Email address"
            required={isOpen}
            tabIndex={isOpen ? 0 : -1}
            className={`h-[52px] rounded-full border border-ink bg-transparent text-sm opacity-0 outline-none transition-[width,padding,opacity] duration-[220ms] focus-visible:shadow-[0_0_0_3px_rgb(8_8_8_/_15%)] ${
              isOpen
                ? "w-[250px] px-[21px] opacity-100 max-[600px]:w-[min(280px,calc(100vw_-_48px))]"
                : "w-0 p-0"
            }`}
          />
          <button
            className="h-[52px] w-[175px] cursor-pointer rounded-full font-medium bg-black text-[15px] text-white transition-[transform,background] duration-[180ms] hover:-translate-y-0.5 hover:bg-[#282828] focus-visible:-translate-y-0.5 focus-visible:bg-[#282828]"
            type="submit"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
