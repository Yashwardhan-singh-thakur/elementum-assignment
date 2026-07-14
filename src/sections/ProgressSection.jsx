function ProgressSection() {
  return (
    <section
      id="progress"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Decorative curved line */}
      <svg
        aria-hidden="true"
        viewBox="0 0 900 250"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -top-[35px] right-[-80px] hidden h-[220px] w-[70%] md:block lg:right-[-40px] lg:w-[68%]"
      >
        {/* Soft shadow */}
        <path
          d="M15 35C155 24 220 52 285 104C351 157 397 192 474 167C552 142 561 58 652 51C741 44 776 129 882 115"
          stroke="#d8d8d8"
          strokeWidth="11"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* Coral line */}
        <path
          d="M15 24C155 13 220 41 285 93C351 146 397 181 474 156C552 131 561 47 652 40C741 33 776 118 882 104"
          stroke="#ff6268"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:px-16">
        {/* Left image composition */}
        <div className="relative mx-auto h-[340px] w-full max-w-[480px] sm:h-[410px] md:h-[470px] lg:h-[500px]">
          {/* Top-left coral triangle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[2%] top-[2%] z-20 h-0 w-0 border-b-[78px] border-l-[42px] border-r-[42px] border-b-[#ff6268] border-l-transparent border-r-transparent sm:border-b-[95px] sm:border-l-[52px] sm:border-r-[52px] lg:left-[-1%]"
          />

          {/* Circular image */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-neutral-200 sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px]">
            <img
              src="/tom-sec-img2.png"
              alt="Elementum team members collaborating during a working session"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Bottom-right coral triangle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[1%] right-[4%] z-20 h-0 w-0 border-b-[82px] border-l-[48px] border-r-[48px] border-b-[#ff6268] border-l-transparent border-r-transparent sm:border-b-[105px] sm:border-l-[60px] sm:border-r-[60px] lg:bottom-[-1%] lg:right-[1%]"
          />
        </div>

        {/* Right content */}
        <div className="mx-auto w-full max-w-[520px] lg:mx-0">
          <h2 className="m-0 text-[42px] font-normal leading-[0.94] tracking-[-0.04em] text-black sm:text-[50px] md:text-[58px] lg:text-[62px]">
            <span className="relative isolate inline-block whitespace-nowrap">
              <img
                src="/styled-container/status-background-pill-con.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[0.56em] w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2"
              />

              <span className="relative z-10">See</span>
            </span>{" "}
            how we can
            <br />
            help your{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">progress</span>

              <img
                src="/lines/yellow-line.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.08em] left-1/2 z-0 h-auto w-[105%] max-w-none -translate-x-1/2"
              />
            </span>
          </h2>

          <p className="mt-7 max-w-[470px] text-[12px] leading-[1.55] tracking-[-0.01em] text-[#242424] sm:text-[13px] md:text-[14px]">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, communications and social research.
          </p>

          <a
            href="#services"
            className="group mt-7 inline-flex items-center gap-2 text-[12px] text-black"
          >
            <span className="relative">
              Read more
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-black transition-transform duration-200 group-hover:origin-left group-hover:scale-x-100" />
            </span>

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProgressSection;
