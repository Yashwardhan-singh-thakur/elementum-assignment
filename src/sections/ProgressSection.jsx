import HighlightText from "../components/HighlightText";
import UnderlinedText from "../components/UnderlinedText";

function ProgressSection() {
  return (
    <section
      id="progress"
      className="relative h-auto overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:h-[605px] lg:overflow-visible lg:py-0"
    >
      <div className="relative mx-auto grid h-auto w-[min(calc(100%_-_40px),700px)] gap-12 sm:w-[min(calc(100%_-_64px),700px)] sm:gap-14 md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1fr)] md:items-center md:gap-8 lg:block lg:h-full lg:w-[min(calc(100%_-_64px),1200px)]">
        <div className="relative mx-auto aspect-square w-[min(76vw,380px)] md:w-full md:max-w-[330px] lg:absolute lg:top-[46px] lg:left-0 lg:size-[450px] lg:max-w-none lg:aspect-auto lg:max-[1200px]:size-[410px]">
          <img
            className="pointer-events-none absolute top-[5px] -left-[15px] z-[1] w-28 w-[162px] max-lg:top-[2%] max-lg:-left-[4%] max-lg:w-[36%] max-lg:max-w-[130px]"
            src="/styled-container/pink-triangle.png"
            alt="pink-triangle"
            aria-hidden="true"
          />
          <img
            className="relative z-[3] size-full rounded-full object-cover lg:size-[400px] xl:size-[420px]"
            src="/tom-sec-img2.png"
            alt="Elementum team members collaborating during a working session"
          />
          <img
            className="pointer-events-none absolute right-0 bottom-3 -bottom-6 z-[3] w-[170px] max-lg:-right-[2%] max-lg:-bottom-[5%]   max-xl:-right-[2%] max-xl:-bottom-[5%]  max-lg:w-[38%] max-lg:max-w-[140px]"
            src="/styled-container/pink-triangle.png"
            alt="pink-triangle"
            aria-hidden="true"
          />
        </div>

        <div className="static z-[2] w-full max-w-[620px] md:max-w-none lg:absolute lg:top-[145px] lg:left-[678px] lg:w-[600px] lg:max-[1200px]:left-[56%] lg:max-[1200px]:w-[44%]">
          <h2 className="m-0 origin-left font-gerbil  font-normal tracking-[-0.042em] tracking-wide text-[28px]  sm:text-[34px] md:text-[25px] lg:scale-x-90 lg:text-[34px] leading-[40px]  sm:leading-[50px] md:leading-[35px] lg:leading-[50px] ">
            <HighlightText
              color="mint"
              className="before:-left-[0.25em] before:h-[1.40em] before:bottom-[0.15em] "
            >
              See
            </HighlightText>{" "}
            how we can <br className="hidden lg:block" /> help your{" "}
            <UnderlinedText className="after:left-1/2 after:-bottom-[0.05em] after:h-[0.59em] after:w-[125%] after:-translate-x-1/2  lg:after:w-[250px] ">
              progress
            </UnderlinedText>
          </h2>

          <p className="mt-5 max-w-[500px] text-sm leading-[1.52] tracking-[-0.01em] sm:text-[15px] md:text-sm lg:text-base">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <a
            className="group mt-[31px] inline-flex items-center gap-4 text-[13px] sm:text-sm"
            href="#services"
          >
            <span className="font-medium">Read more</span>
            <i
              className="relative block h-px w-28 bg-ink transition-[width] duration-[180ms] after:absolute after:-top-0.5 after:right-0 after:size-[5px] after:rotate-45 after:border-t after:border-r after:border-ink after:content-[''] group-hover:w-[126px] group-focus-visible:w-[126px]"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProgressSection;
