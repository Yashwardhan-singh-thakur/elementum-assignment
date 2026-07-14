function NewsletterSection() {
  const handleSubscribe = () => {
    const newsletterSection = document.querySelector("#newsletter-email");

    if (newsletterSection) {
      newsletterSection.focus();
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-[#d8f5e2] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:px-12 md:pb-28 md:pt-32 lg:px-16 lg:pb-32 lg:pt-36"
    >
      {/* Pink arrow lines above heading */}
      <img
        src="/lines/pink-arrow-line.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[28px] w-[95px] -translate-x-[115%] object-contain sm:top-[34px] sm:w-[115px] md:top-[38px] md:w-[135px] lg:top-[40px] lg:w-[150px]"
      />

      {/* Purple decorative shape */}
      <img
        src="/styled-container/purple-half-circle.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-18px] top-[46%] w-[72px] -translate-y-1/2 object-contain sm:right-[4%] sm:w-[88px] md:right-[7%] md:w-[105px] lg:right-[8%] lg:w-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="m-0 text-[50px] font-normal leading-[0.88] tracking-[-0.045em] text-black sm:text-[64px] md:text-[78px] lg:text-[88px]">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p className="mx-auto mt-5 max-w-[400px] text-[10px] leading-[1.5] text-[#222222] sm:text-[11px] md:text-[12px]">
            To make your stay special and even more memorable
          </p>

          <form
            className="mx-auto mt-7 flex max-w-[440px] flex-col items-center gap-3 sm:flex-row sm:justify-center"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            {/* Visually hidden initially, opens cleanly for accessibility */}
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="hidden h-[46px] w-full rounded-full border border-black bg-transparent px-5 text-[13px] outline-none placeholder:text-black/60 focus:ring-2 focus:ring-black/20 sm:max-w-[270px]"
            />

            <button
              type="button"
              onClick={handleSubscribe}
              className="group inline-flex min-h-[42px] items-center justify-center rounded-full bg-black px-8 py-3 text-[11px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#d8f5e2] sm:text-[12px]"
            >
              <span>Subscribe Now</span>

              <span
                aria-hidden="true"
                className="ml-0 max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-5 group-hover:opacity-100"
              >
                →
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
