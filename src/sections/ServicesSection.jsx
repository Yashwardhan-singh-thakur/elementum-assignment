import HighlightText from "../components/HighlightText";
import UnderlinedText from "../components/UnderlinedText";
import ServiceRow from "../components/ServiceRow";

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

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-0 h-[930px] overflow-hidden bg-white max-[900px]:h-auto max-[900px]:py-[110px] max-[600px]:py-[82px]"
    >
      <img
        className="pointer-events-none absolute top-[-150px] right-[0px] z-[1] w-[620px] max-w-none max-[900px]:hidden"
        src="/lines/pink-line-service-sec.png"
        alt="pink-line"
        aria-hidden="true"
      />

      <div className="relative z-[1] mx-auto w-[min(calc(100%_-_64px),1158px)] pt-[135px] max-[900px]:w-[min(calc(100%_-_40px),700px)] max-[900px]:pt-0">
        <h2 className="m-0 w-[850px] text-[70px] origin-top-left translate-y-[22px] scale-y-110 font-gerbil  leading-[80px] font-normal tracking-[-0.045em] max-[900px]:w-full max-[900px]:translate-y-0 max-[900px]:scale-y-100 max-[900px]:text-[clamp(62px,12vw,86px)] tracking-wide ">
          What we{" "}
          <HighlightText
            color="mint"
            className="before:-left-[0.25em] before:h-[0.9em] before:bottom-[0.18em] "
          >
            can
          </HighlightText>
          <br />
          <UnderlinedText className="after:w-[275px]  after:-translate-x-1/2 after:left-1/2 after:-bottom-[-0.02em] after:h-[0.30em]">
            offer
          </UnderlinedText>{" "}
          you!
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
