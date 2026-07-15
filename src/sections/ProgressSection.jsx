import HighlightText, { UnderlinedText } from "../components/HighlightText";

function ProgressSection() {
  return (
    <section
      id="progress"
      className="relative z-[1] h-[650px] overflow-visible bg-white max-[900px]:h-auto max-[900px]:overflow-hidden max-[900px]:py-[90px] max-[600px]:py-[70px]"
    >
      <div className="relative mx-auto h-full w-[min(calc(100%_-_64px),1200px)] max-[900px]:grid max-[900px]:h-auto max-[900px]:w-[min(calc(100%_-_40px),700px)] max-[900px]:gap-[60px]">
        <div className="absolute top-[46px] left-0 z-[2] size-[450px] max-[1200px]:size-[410px] max-[900px]:relative max-[900px]:top-auto max-[900px]:left-auto max-[900px]:mx-auto max-[900px]:size-auto max-[900px]:w-[min(76vw,460px)] max-[900px]:aspect-square">
          <img
            className="pointer-events-none absolute top-3 -left-[37px] z-[3] w-28"
            src="/styled-container/pink-triangle.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="relative z-[2] size-full rounded-full object-cover"
            src="/tom-sec-img2.png"
            alt="Elementum team members collaborating during a working session"
          />
          <img
            className="pointer-events-none absolute -right-7 -bottom-6 z-[3] w-[182px]"
            src="/styled-container/pink-triangle.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="absolute top-[145px] left-[678px] z-[2] w-[600px] max-[1200px]:left-[56%] max-[1200px]:w-[44%] max-[900px]:static max-[900px]:ml-auto max-[900px]:w-full max-[900px]:max-w-[620px]">
          <h2 className="m-0 origin-left scale-x-90 font-gerbil text-[46px] leading-[1.01] font-normal tracking-[-0.042em] max-[1200px]:text-5xl max-[900px]:scale-x-100 max-[900px]:text-[clamp(42px,7.5vw,58px)] tracking-wide">
            <HighlightText>See</HighlightText> how we can
            <br />
            help your <UnderlinedText>progress</UnderlinedText>
          </h2>

          <p className="mt-7 max-w-[500px] text-base leading-[1.52] tracking-[-0.01em] max-[600px]:text-sm">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <a
            className="group mt-[31px] inline-flex items-center gap-4 text-sm max-[600px]:text-[13px]"
            href="#services"
          >
            <span>Read more</span>
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
