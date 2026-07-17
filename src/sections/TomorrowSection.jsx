import HighlightText from "../components/HighlightText";
import UnderlinedText from "../components/UnderlinedText";

function TomorrowSection() {
  return (
    <section
      id="studio"
      className="relative h-auto overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:h-[628px] lg:overflow-visible lg:py-0"
    >
      <div
        className="absolute top-10 left-1/2 z-2 size-[200px] -translate-x-1/2 rounded-full bg-[rgb(255_32_32_/_30%)] opacity-80 blur-[60px] md:top-12 md:size-[180px] lg:size-[250px] md:blur-[80px] lg:top-[90px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid h-auto w-[min(calc(100%_-_40px),700px)] gap-12 sm:w-[min(calc(100%_-_64px),700px)] sm:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] md:items-center md:gap-8 lg:block lg:h-full lg:w-[min(calc(100%_-_64px),1158px)]">
        <div className="static z-[1] w-full max-w-[620px] md:max-w-none lg:absolute lg:top-[250px] lg:left-0 lg:w-[680px] lg:max-[1200px]:w-[53%]">
          <h2 className="m-0 font-gerbil  font-normal tracking-[-0.042em] tracking-wide text-[28px] sm:text-[34px] md:text-[25px] lg:text-[34px]  leading-[38px] sm:leading-[50px] md:leading-[35px] lg:leading-[50px] ">
            <UnderlinedText className="after:left-1/2  after:-bottom-[0.10em]  after:h-[0.59em] after:w-[105%] after:-translate-x-1/2">
              Tomorrow
            </UnderlinedText>{" "}
            should <br className="hidden lg:block" />
            be better than{" "}
            <HighlightText
              color="mint"
              className="before:-left-[0.25em] before:h-[1.35em] before:bottom-[0.15em] "
            >
              today
            </HighlightText>
          </h2>

          <p className="mt-5 max-w-[500px] text-sm leading-[1.52] tracking-[-0.01em] sm:text-[15px] md:text-sm lg:text-base">
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <a
            className="group mt-[31px] inline-flex items-center gap-4 text-[13px] sm:text-sm"
            href="#progress"
          >
            <span className="font-medium">Read more</span>
            <i
              className="relative block h-px w-28 bg-ink transition-[width] duration-[180ms] after:absolute after:-top-0.5 after:right-0 after:size-[5px] after:rotate-45 after:border-t after:border-r after:border-ink after:content-[''] group-hover:w-[126px] group-focus-visible:w-[126px]"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="relative row-start-2 mx-auto aspect-square w-[min(76vw,380px)] md:row-auto md:w-full md:max-w-[330px] lg:absolute lg:top-[140px] lg:right-0 lg:size-[450px] lg:max-w-none lg:aspect-auto lg:max-[1200px]:size-[410px]">
          <img
            className="absolute top-[6%] -right-[4%] z-[1] w-[38%] max-w-[140px] sm:top-[25px] lg:top-[25px] sm:-right-[35px] lg:-right-[35px] sm:w-[170px] lg:w-[170px] lg:max-w-none"
            src="/styled-container/pink-square.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="relative z-[3] size-full rounded-full object-cover lg:size-[400px] xl:size-[420px]"
            src="/tom-sec-img.png"
            alt="Elementum team members discussing ideas during a meeting"
          />
        </div>
      </div>
    </section>
  );
}

export default TomorrowSection;
