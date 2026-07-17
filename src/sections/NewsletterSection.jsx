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
      className="relative h-auto min-h-[440px] overflow-hidden bg-mint sm:min-h-[460px] md:h-[445px] lg:h-[468px] lg:min-h-0"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 z-[1] h-[110px] lg:-top-2 lg:h-[120px]"
        aria-hidden="true"
      >
        <img
          className="absolute left-[calc(50%_-_105px)] w-[110px] sm:left-[calc(50%_-_160px)] sm:w-[140px] lg:left-[calc(50%_-_225px)] lg:w-[156px]"
          src="/lines/pink-arrow-line.png"
          alt=""
        />
        <img
          className="absolute left-[calc(50%_-_52px)] w-[110px] sm:left-[calc(50%_-_90px)] sm:w-[140px] lg:left-[calc(50%_-_150px)] lg:w-[156px]"
          src="/lines/pink-arrow-line.png"
          alt=""
        />
      </div>
      <img
        className="absolute top-[170px] -right-16 w-20 rotate-180 sm:top-[180px] sm:-right-12 sm:w-[100px] md:right-6 lg:right-[6.5%] lg:w-[124px]"
        src="/styled-container/purple-half-circle.png"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-[2] px-5 pt-24 pb-16 text-center sm:pt-26 sm:pb-20 lg:px-0 lg:pt-[110px] lg:pb-0">
        <h2 className="font-gerbil leading-[1.26] font-normal tracking-[-0.045em] tracking-wide text-[30px]  sm:text-[45px] md:text-[54px] lg:text-[65px] xl:text-[70px] lg:leading-[90px]">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="mt-3 text-[11px] sm:text-[13px] lg:mt-[5px] lg:text-[16px]">
          To make your stay special and even more memorable
        </p>

        <form
          className="sm:mt-6 flex min-h-[52px] flex-col items-center justify-center gap-2.5 sm:flex-row lg:mt-[27px]"
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
                ? "w-[min(280px,calc(100vw_-_48px))] px-[21px] opacity-100 sm:w-[250px]"
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
