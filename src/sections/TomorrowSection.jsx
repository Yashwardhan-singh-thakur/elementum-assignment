import HighlightText from "../components/HighlightText";
import UnderlinedText from "../components/UnderlinedText";

function TomorrowSection() {
  return (
    <section
      id="studio"
      className="relative  h-[628px] overflow-visible bg-white max-[900px]:h-auto max-[900px]:overflow-hidden max-[900px]:py-[90px] max-[600px]:py-[70px]"
    >
      <div
        className="absolute top-[90px] z-2 left-1/2 size-[250px] -translate-x-1/2 rounded-full bg-[rgb(255_32_32_/_30%)] opacity-80 blur-[80px] "
        aria-hidden="true"
      />

      <div className="relative mx-auto h-full w-[min(calc(100%_-_64px),1158px)] max-[900px]:grid max-[900px]:h-auto max-[900px]:w-[min(calc(100%_-_40px),700px)] max-[900px]:gap-[60px]">
        <div className="absolute top-[250px] left-0 z-[1] w-[680px] max-[1200px]:w-[53%] max-[900px]:static max-[900px]:w-full max-[900px]:max-w-[620px]">
          <h2 className="m-0 font-gerbil text-[40px] leading-[55px] font-normal tracking-[-0.042em] max-[1200px]:text-5xl max-[900px]:text-[clamp(42px,7.5vw,58px)] tracking-wide">
            <UnderlinedText className="after:w-[280px]  after:-translate-x-1/2 after:left-1/2 after:-bottom-[0.14em] after:h-[0.59em]">
              Tomorrow
            </UnderlinedText>{" "}
            should
            <br />
            be better than{" "}
            <HighlightText
              color="mint"
              className="before:-left-[0.25em] before:h-[1.35em] before:bottom-[0.15em] "
            >
              today
            </HighlightText>
          </h2>

          <p className="mt-5 max-w-[500px] text-base leading-[1.52] tracking-[-0.01em] max-[600px]:text-sm">
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <a
            className="group mt-[31px] inline-flex items-center gap-4 text-sm max-[600px]:text-[13px]"
            href="#progress"
          >
            <span className="font-medium">Read more</span>
            <i
              className="relative block h-px w-28 bg-ink transition-[width] duration-[180ms] after:absolute after:-top-0.5 after:right-0 after:size-[5px] after:rotate-45 after:border-t after:border-r after:border-ink after:content-[''] group-hover:w-[126px] group-focus-visible:w-[126px]"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="absolute top-[140px] right-0 z-[1] size-[450px] max-[1200px]:size-[410px] max-[900px]:relative max-[900px]:top-auto max-[900px]:right-auto max-[900px]:row-start-2 max-[900px]:mx-auto max-[900px]:size-auto max-[900px]:w-[min(76vw,460px)] max-[900px]:aspect-square">
          <img
            className="absolute top-[25px] -right-[35px] z-[1] w-[170px] max-[900px]:-right-[12%]"
            src="/styled-container/pink-square.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="relative z-[3] size-[420px] rounded-full object-cover"
            src="/tom-sec-img.png"
            alt="Elementum team members discussing ideas during a meeting"
          />
        </div>
      </div>
    </section>
  );
}

export default TomorrowSection;
