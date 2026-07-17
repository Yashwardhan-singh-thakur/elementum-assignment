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
      className="relative z-0 h-auto overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:h-[930px] lg:py-0"
    >
      <img
        className="pointer-events-none absolute top-[-150px] lg:top-[-35px] xl:top-[-150px] right-0 z-[1] hidden w-[620px] lg:w-[450px] xl:w-[620px] max-w-none lg:block"
        src="/lines/pink-line-service-sec.png"
        alt="pink-line"
        aria-hidden="true"
      />

      <div className="relative z-[1] mx-auto w-[min(calc(100%_-_40px),700px)] sm:w-[min(calc(100%_-_64px),700px)] lg:w-[min(calc(100%_-_64px),1158px)] lg:pt-[135px]">
        <h2
          className="m-0 w-full origin-top-left font-gerbil 
       font-normal tracking-[-0.045em] tracking-wide
        lg:w-[850px] lg:translate-y-[22px]  text-[35px]
        sm:text-[40px] lg:text-[60px]  leading-[40px]   sm:leading-[48px] lg:leading-[70px]"
        >
          What we{" "}
          <HighlightText
            color="mint"
            className="before:-left-[0.25em] before:h-[0.9em] before:bottom-[0.18em]"
          >
            can
          </HighlightText>{" "}
          <br className="hidden sm:block" />
          <UnderlinedText className="z-[-1] after:left-1/2 after:-bottom-[-0.02em]   lg:after:-bottom-[-0.05em] after:h-[0.3em] after:w-[105%] after:-translate-x-1/2 sm:after:w-[150px]   lg:after:w-[220px]">
            offer
          </UnderlinedText>{" "}
          you!
        </h2>
        <div className="mt-12 border-t border-[#b8b8b8] sm:mt-14 md:mt-16 lg:mt-[110px]">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
