const services = [
  {
    id: 1,
    category: (
      <>
        Office of multiple
        <br />
        interest content
      </>
    ),
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    category: (
      <>
        The hanger US Air force
        <br />
        digital experimental
      </>
    ),
    title: "We talk about our weight",
  },
  {
    id: 3,
    category: (
      <>
        Delta faucet content,
        <br />
        social, digital
      </>
    ),
    title: "Piloting digital confidence",
    decoration: true,
  },
];

function ServiceRow({ service }) {
  return (
    <a
      href="#contact"
      className="group relative grid min-h-[116px] grid-cols-[1fr_auto] items-center gap-6 border-b border-black/25 py-5 md:grid-cols-[230px_1fr_auto] md:gap-10 lg:min-h-[125px]"
    >
      {/* Small category */}
      <p className="col-span-1 m-0 text-[11px] leading-[1.35] text-[#242424] sm:text-[12px] md:col-span-1 md:text-[13px]">
        {service.category}
      </p>

      {/* Main service title */}
      <div className="relative col-span-2 md:col-span-1">
        <h3 className="m-0 max-w-[720px] text-[28px] font-normal leading-[1] tracking-[-0.035em] text-black transition-transform duration-300 group-hover:translate-x-2 sm:text-[34px] md:text-[39px] lg:text-[45px]">
          {service.title}
        </h3>

        {service.decoration && (
          <img
            src="/icons.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[45%] top-1/2 z-10 h-[72px] w-[72px] -translate-y-1/2 object-contain sm:left-[48%] sm:h-[84px] sm:w-[84px] md:left-[52%]"
          />
        )}
      </div>

      {/* Arrow */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center text-[25px] font-light transition-transform duration-300 group-hover:translate-x-2 md:static md:translate-y-0"
      >
        <span className="block h-px w-8 bg-black sm:w-10" />
        <span className="-ml-[5px] block rotate-[-45deg] text-[17px]">›</span>
      </span>
    </a>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white pb-24 pt-24 sm:pb-28 sm:pt-28 md:pb-36 md:pt-36 lg:pb-44 lg:pt-44"
    >
      {/* Red decorative wave */}
      <svg
        aria-hidden="true"
        viewBox="0 0 620 240"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-[-90px] top-[30px] hidden h-[220px] w-[58%] md:block lg:right-[-35px] lg:top-[42px] lg:w-[53%]"
      >
        <path
          d="M20 150C112 149 103 42 206 42C308 42 342 105 433 105C519 105 537 43 604 25"
          stroke="#d8d8d8"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.45"
        />

        <path
          d="M20 138C112 137 103 30 206 30C308 30 342 93 433 93C519 93 537 31 604 13"
          stroke="#ff6268"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="max-w-[610px]">
          <h2 className="m-0 text-[52px] font-normal leading-[0.87] tracking-[-0.045em] text-black sm:text-[64px] md:text-[78px] lg:text-[88px]">
            What we{" "}
            <span className="relative isolate inline-block whitespace-nowrap">
              <img
                src="/styled-container/status-background-pill-con.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[0.47em] w-[125%] max-w-none -translate-x-1/2 -translate-y-1/2"
              />

              <span className="relative z-10">can</span>
            </span>
            <br />
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">offer</span>

              <img
                src="/lines/yellow-line.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.08em] left-1/2 z-0 h-auto w-[110%] max-w-none -translate-x-1/2"
              />
            </span>{" "}
            you!
          </h2>
        </div>

        {/* Service list */}
        <div className="mt-14 border-t border-black/25 sm:mt-16 md:mt-20 lg:mt-24">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
