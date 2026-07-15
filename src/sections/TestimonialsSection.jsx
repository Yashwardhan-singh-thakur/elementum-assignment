import HighlightText from "../components/HighlightText";
import UnderlinedText from "../components/UnderlinedText";

const customerPositionClasses = {
  1: "top-[110px] left-0 size-[86px]",
  2: "top-[260px] -left-[68px] size-14",
  3: "top-[290px] left-[30px] size-38",
  4: "top-[438px] -left-[82px] size-[86px]",
  5: "top-27 right-[-15px] size-[106px]",
  6: "top-[170px] right-[136px] size-[64px]",
  7: "top-[275px] right-[96px] size-20",
  8: "top-[360px] -right-[90px] size-[210px]",
};

const customers = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  image: `/customers/customer${index + 1}.png`,
  alt: "Elementum customer",
}));

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative h-[726px] px-20 overflow-hidden bg-white max-[900px]:h-auto max-[900px]:py-[100px] max-[900px]:pb-[110px] max-[600px]:py-20"
    >
      <div className="relative mx-auto h-full w-[min(calc(100%_-_64px),1200px)] max-[900px]:flex max-[900px]:h-auto max-[900px]:w-[min(calc(100%_-_40px),700px)] max-[900px]:flex-col max-[900px]:items-center">
        <h2 className="absolute top-[106px] left-1/2 z-[3] m-0 w-[690px] -translate-x-1/2 text-center font-gerbil text-[40px] leading-[50px] font-normal tracking-[-0.04em] max-[900px]:static max-[900px]:w-full max-[900px]:translate-x-0 max-[900px]:text-[clamp(40px,7vw,54px)] tracking-wide ">
          <HighlightText
            color="mint"
            className="before:-left-[0.35em] before:h-[1.30em] before:bottom-[0.05em] "
          >
            What
          </HighlightText>{" "}
          our customer
          <br />
          says{" "}
          <UnderlinedText className="after:w-[290px]  after:-translate-x-1/2 after:left-1/2 after:-bottom-[0.18em] after:h-[0.59em]">
            About Us
          </UnderlinedText>
        </h2>

        <article className=" absolute top-[245px] left-1/2 z-[2] flex min-h-[220px] w-[630px] -translate-x-1/2 items-center rounded-[42px] bg-quote px-[70px] py-[42px] text-center max-[900px]:static max-[900px]:mt-[55px] max-[900px]:w-[min(100%,660px)] max-[900px]:translate-x-0 max-[600px]:min-h-0 max-[600px]:rounded-[30px] max-[600px]:px-[30px] max-[600px]:py-12">
          <span
            className="absolute top-[15px] left-[45px] font-serif text-[116px] leading-none font-extrabold text-[#c6d1c9]"
            aria-hidden="true"
          >
            “
          </span>
          <p className="relative z-[2] text-xl leading-[1.46] max-[600px]:text-sm indent-8">
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn&apos;t used, which have also
            proved to be easy to use and reliable.
          </p>
          <span
            className="absolute right-[125px] bottom-[-38px] font-serif text-[116px] leading-none font-extrabold text-[#c6d1c9]"
            aria-hidden="true"
          >
            ”
          </span>
        </article>

        <div
          className="absolute inset-0 z-[1] max-[900px]:relative max-[900px]:mt-[50px] max-[900px]:grid max-[900px]:w-[min(100%,620px)] max-[900px]:grid-cols-4 max-[900px]:gap-[22px] max-[600px]:gap-3"
          aria-label="Elementum customers"
        >
          {customers.map((customer) => (
            <figure
              className={`absolute m-0 overflow-hidden rounded-full bg-[#ededed] max-[900px]:static max-[900px]:size-auto max-[900px]:aspect-square ${customerPositionClasses[customer.id]}`}
              key={customer.id}
            >
              <img
                className="size-full object-cover"
                src={customer.image}
                alt={customer.alt}
                loading="eager"
                decoding="sync"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
