const customers = [
  {
    id: 1,
    image: "/customers/customer1.png",
    alt: "Elementum customer",
    position:
      "left-[1%] top-[8px] h-[52px] w-[52px] lg:left-[2%] lg:h-[58px] lg:w-[58px]",
  },
  {
    id: 2,
    image: "/customers/customer2.png",
    alt: "Elementum customer",
    position: "left-[-1%] top-[145px] h-[34px] w-[34px] lg:left-[-2%]",
  },
  {
    id: 3,
    image: "/customers/customer3.png",
    alt: "Elementum customer",
    position:
      "left-[6%] bottom-[18px] h-[108px] w-[108px] lg:left-[7%] lg:h-[120px] lg:w-[120px]",
  },
  {
    id: 4,
    image: "/customers/customer4.png",
    alt: "Elementum customer",
    position:
      "left-[-2%] bottom-[2px] h-[44px] w-[44px] lg:left-[-1%] lg:h-[50px] lg:w-[50px]",
  },
  {
    id: 5,
    image: "/customers/customer5.png",
    alt: "Elementum customer",
    position:
      "right-[3%] top-[6px] h-[74px] w-[74px] lg:right-[4%] lg:h-[82px] lg:w-[82px]",
  },
  {
    id: 6,
    image: "/customers/customer6.png",
    alt: "Elementum customer",
    position:
      "right-[17%] top-[92px] h-[42px] w-[42px] lg:right-[18%] lg:h-[48px] lg:w-[48px]",
  },
  {
    id: 7,
    image: "/customers/customer7.png",
    alt: "Elementum customer",
    position:
      "right-[13%] top-[175px] h-[58px] w-[58px] lg:right-[14%] lg:h-[64px] lg:w-[64px]",
  },
  {
    id: 8,
    image: "/customers/customer8.png",
    alt: "Elementum customer",
    position:
      "right-[-1%] bottom-[0px] h-[128px] w-[128px] lg:right-[0%] lg:h-[148px] lg:w-[148px]",
  },
];

function CustomerAvatar({ customer }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-full bg-neutral-200 ${customer.position}`}
    >
      <img
        src={customer.image}
        alt={customer.alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function MobileCustomerAvatar({ customer }) {
  return (
    <div className="h-[66px] w-[66px] overflow-hidden rounded-full bg-neutral-200 sm:h-[76px] sm:w-[76px]">
      <img
        src={customer.image}
        alt={customer.alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 md:px-12 md:pb-36 md:pt-28 lg:px-16 lg:pb-40"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Section heading */}
        <div className="relative z-20 mx-auto max-w-[650px] text-center">
          <h2 className="m-0 text-[39px] font-normal leading-[0.9] tracking-[-0.04em] text-black sm:text-[48px] md:text-[55px] lg:text-[59px]">
            <span className="relative isolate inline-block whitespace-nowrap">
              <img
                src="/styled-container/status-background-pill-con.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[58%] -z-10 h-[0.47em] w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2"
              />

              <span className="relative z-10">What</span>
            </span>{" "}
            our customer
            <br />
            says{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">About Us</span>

              <img
                src="/lines/yellow-line.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.1em] left-1/2 z-0 h-auto w-[107%] max-w-none -translate-x-1/2"
              />
            </span>
          </h2>
        </div>

        {/* Desktop testimonial composition */}
        <div className="relative mx-auto mt-6 hidden h-[400px] w-full md:block lg:h-[440px]">
          {customers.map((customer) => (
            <CustomerAvatar key={customer.id} customer={customer} />
          ))}

          {/* Testimonial card */}
          <article className="absolute left-1/2 top-[52px] w-[56%] max-w-[620px] -translate-x-1/2 rounded-[38px] bg-[#eef9f1] px-14 py-10 text-center lg:top-[58px] lg:px-16 lg:py-11">
            <span
              aria-hidden="true"
              className="absolute left-7 top-1 text-[74px] leading-none text-[#cbd6ce] lg:left-9 lg:text-[82px]"
            >
              “
            </span>

            <p className="relative z-10 m-0 text-[13px] leading-[1.45] tracking-[-0.01em] text-[#202020] lg:text-[14px]">
              Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in traffic
              within 15 days since its launch. They also had an impressive
              ability to use technologies that the company hasn&apos;t used,
              which have also proved to be easy to use and reliable.
            </p>

            <span
              aria-hidden="true"
              className="absolute bottom-[-20px] right-8 text-[74px] leading-none text-[#cbd6ce] lg:right-10 lg:text-[82px]"
            >
              ”
            </span>
          </article>
        </div>

        {/* Mobile testimonial layout */}
        <div className="mt-10 md:hidden">
          <article className="relative mx-auto max-w-[520px] rounded-[30px] bg-[#eef9f1] px-9 py-10 text-center">
            <span
              aria-hidden="true"
              className="absolute left-4 top-1 text-[60px] leading-none text-[#cbd6ce]"
            >
              “
            </span>

            <p className="relative z-10 m-0 text-[12px] leading-[1.55] text-[#202020] sm:text-[13px]">
              Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in traffic
              within 15 days since its launch. They also had an impressive
              ability to use technologies that the company hasn&apos;t used,
              which have also proved to be easy to use and reliable.
            </p>

            <span
              aria-hidden="true"
              className="absolute bottom-[-16px] right-5 text-[60px] leading-none text-[#cbd6ce]"
            >
              ”
            </span>
          </article>

          <div className="mx-auto mt-12 grid max-w-[390px] grid-cols-4 place-items-center gap-4">
            {customers.map((customer) => (
              <MobileCustomerAvatar key={customer.id} customer={customer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
