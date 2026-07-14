function TomorrowSection() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-32 lg:py-40"
    >
      {/* Soft pink background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[52%] top-[20%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#ffd7d9]/50 blur-[100px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-16 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
        {/* Left content */}
        <div className="max-w-[500px] lg:pl-2">
          <h2 className="m-0 text-[42px] font-normal leading-[0.94] tracking-[-0.04em] text-black sm:text-[50px] md:text-[58px] lg:text-[62px]">
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Tomorrow</span>

              <img
                src="/lines/yellow-line.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.07em] left-1/2 z-0 h-auto w-[103%] max-w-none -translate-x-1/2"
              />
            </span>{" "}
            should
            <br />
            be better than{" "}
            <span className="relative isolate inline-block whitespace-nowrap">
              <img
                src="/styled-container/status-background-pill-con.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[0.55em] w-[115%] max-w-none -translate-x-1/2 -translate-y-1/2"
              />

              <span className="relative z-10">today</span>
            </span>
          </h2>

          <p className="mt-7 max-w-[420px] text-[12px] leading-[1.55] tracking-[-0.01em] text-[#242424] sm:text-[13px] md:text-[14px]">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <a
            href="#progress"
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

        {/* Right image composition */}
        <div className="relative mx-auto h-[340px] w-full max-w-[500px] sm:h-[430px] md:h-[500px] lg:h-[530px] lg:max-w-[560px]">
          {/* Red tilted square */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[3%] top-[3%] z-0 h-[92px] w-[92px] rotate-[14deg] bg-[#ff6268] sm:right-[5%] sm:h-[115px] sm:w-[115px] md:h-[135px] md:w-[135px] lg:right-[1%] lg:top-[4%]"
          />

          {/* Circular meeting image */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-neutral-200 sm:h-[365px] sm:w-[365px] md:h-[425px] md:w-[425px] lg:h-[455px] lg:w-[455px]">
            <img
              src="/tom-sec-img.png"
              alt="Elementum team members discussing ideas during a meeting"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Decorative curved line */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 310"
            fill="none"
            className="pointer-events-none absolute -bottom-[125px] right-[-175px] z-0 hidden h-[310px] w-[600px] md:block"
          >
            {/* Subtle shadow */}
            <path
              d="M15 40C155 36 194 67 229 138C267 215 301 280 408 259C487 243 516 166 590 170"
              stroke="#d9d9d9"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.45"
            />

            {/* Main coral line */}
            <path
              d="M15 28C155 24 194 55 229 126C267 203 301 268 408 247C487 231 516 154 590 158"
              stroke="#ff6268"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default TomorrowSection;
