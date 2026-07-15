import HighlightText, { UnderlinedText } from "../components/HighlightText";

const services = [
  {
    id: 1,
    category: "Office of multiple\ninterest content",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    category: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    category: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
    decorated: true,
  },
];

function ServiceRow({ service }) {
  return (
    <a
      className="group grid h-[132px] grid-cols-[300px_minmax(0,1fr)_62px] items-center border-b border-[#c7c7c7] max-[1200px]:grid-cols-[240px_minmax(0,1fr)_50px] max-[900px]:h-auto max-[900px]:min-h-[150px] max-[900px]:grid-cols-[170px_minmax(0,1fr)_40px] max-[900px]:gap-[18px] max-[900px]:py-[22px] max-[600px]:min-h-[155px] max-[600px]:grid-cols-[1fr_36px]"
      href="#contact"
    >
      <p className="whitespace-pre-line text-base leading-[1.4] max-[900px]:text-[13px] max-[600px]:col-start-1">
        {service.category}
      </p>
      <h3 className="relative font-gerbil text-[46px] leading-none font-normal tracking-[-0.035em] transition-transform duration-[180ms] group-hover:translate-x-2 group-focus-visible:translate-x-2 max-[1200px]:text-[42px] max-[900px]:text-[clamp(30px,5vw,42px)] max-[600px]:col-span-full max-[600px]:text-[31px] tracking-wide">
        {service.title}
        {service.decorated && (
          <img
            className="absolute top-1/2 left-[55%] z-[2] size-[104px] -translate-y-1/2 max-[600px]:size-[68px]"
            src="/progres-img.png"
            alt=""
          />
        )}
      </h3>
      <span
        className="relative block h-px w-[60px] justify-self-end bg-ink transition-transform duration-[180ms] after:absolute after:-top-1 after:right-0 after:size-2 after:rotate-45 after:border-t after:border-r after:border-ink after:content-[''] group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 max-[900px]:w-[38px] max-[600px]:col-start-2 max-[600px]:row-start-1"
        aria-hidden="true"
      />
    </a>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-0 h-[930px] overflow-hidden bg-white max-[900px]:h-auto max-[900px]:py-[110px] max-[600px]:py-[82px]"
    >
      <svg
        className="pointer-events-none absolute top-2.5 -right-[22px] h-[250px] w-[650px] max-[900px]:top-1 max-[900px]:-right-[180px] max-[900px]:opacity-70"
        aria-hidden="true"
        viewBox="0 0 620 240"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M20 150C112 149 103 42 206 42C308 42 342 105 433 105C519 105 537 43 604 25"
          stroke="#d8d8d8"
          strokeWidth="12"
          strokeLinecap="round"
          opacity=".5"
        />
        <path
          d="M20 138C112 137 103 30 206 30C308 30 342 93 433 93C519 93 537 31 604 13"
          stroke="#ff6c70"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-[1] mx-auto w-[min(calc(100%_-_64px),1200px)] pt-[135px] max-[900px]:w-[min(calc(100%_-_40px),700px)] max-[900px]:pt-0">
        <h2 className="m-0 w-[850px] origin-top-left translate-y-[22px] scale-y-110 font-gerbil text-[80px] leading-[0.87] font-normal tracking-[-0.045em] max-[900px]:w-full max-[900px]:translate-y-0 max-[900px]:scale-y-100 max-[900px]:text-[clamp(62px,12vw,86px)] tracking-wide">
          What we <HighlightText>can</HighlightText>
          <br />
          <UnderlinedText>offer</UnderlinedText> you!
        </h2>

        <div className="mt-[110px] border-t border-[#b8b8b8] max-[600px]:mt-[55px]">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
