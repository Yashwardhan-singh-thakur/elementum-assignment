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
      className="relative h-auto overflow-hidden bg-white px-0 py-16 sm:py-20 md:py-24 lg:h-[726px] lg:px-20 lg:py-0"
    >
      <div className="relative mx-auto flex h-auto w-[min(calc(100%_-_40px),700px)] flex-col items-center sm:w-[min(calc(100%_-_64px),700px)] lg:block lg:h-full lg:w-[min(calc(100%_-_64px),1200px)]">
        <h2 className="static z-[3] m-0 w-full text-center font-gerbil text-[38px] leading-[1.08] font-normal tracking-[-0.04em] tracking-wide sm:text-[44px] md:text-[50px] lg:absolute lg:top-[106px] lg:left-1/2 lg:w-[690px] lg:-translate-x-1/2 lg:text-[40px] lg:leading-[50px]">
          <HighlightText
            color="mint"
            className="before:-left-[0.35em] before:h-[1.30em] before:bottom-[0.05em] "
          >
            What
          </HighlightText>{" "}
          our customer
          <br />
          says{" "}
          <UnderlinedText className="after:left-1/2 after:-bottom-[0.18em] after:h-[0.59em] after:w-[105%] after:-translate-x-1/2 lg:after:w-[290px]">
            About Us
          </UnderlinedText>
        </h2>

        <article className="relative z-[2] mt-10 flex min-h-0 w-full max-w-[660px] items-center rounded-[30px] bg-quote px-[30px] py-10 text-center sm:mt-12 sm:rounded-[36px] sm:px-12 sm:py-11 md:px-14 lg:absolute lg:top-[245px] lg:left-1/2 lg:mt-0 lg:min-h-[220px] lg:w-[630px] lg:-translate-x-1/2 lg:rounded-[42px] lg:px-[70px] lg:py-[42px]">
          <span
            className="absolute top-2 left-6 font-serif text-[80px] leading-none font-extrabold text-[#c6d1c9] sm:top-3 sm:left-10 sm:text-[100px] lg:top-[15px] lg:left-[45px] lg:text-[116px]"
            aria-hidden="true"
          >
            “
          </span>
          <p className="relative z-[2] indent-8 text-sm leading-[1.5] sm:text-base md:text-lg lg:text-xl lg:leading-[1.46]">
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn&apos;t used, which have also
            proved to be easy to use and reliable.
          </p>
          <span
            className="absolute right-6 -bottom-7 font-serif text-[80px] leading-none font-extrabold text-[#c6d1c9] sm:right-16 sm:-bottom-8 sm:text-[100px] lg:right-[125px] lg:bottom-[-38px] lg:text-[116px]"
            aria-hidden="true"
          >
            ”
          </span>
        </article>

        <div
          className="relative z-[1] mt-10 grid w-full max-w-[620px] grid-cols-4 gap-3 sm:mt-12 sm:gap-5 md:gap-[22px] lg:absolute lg:inset-0 lg:mt-0 lg:block lg:max-w-none"
          aria-label="Elementum customers"
        >
          {customers.map((customer) => (
            <figure
              className={`absolute m-0 overflow-hidden rounded-full bg-[#ededed] max-lg:static max-lg:aspect-square max-lg:size-auto ${customerPositionClasses[customer.id]}`}
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
