import HighlightText from "../components/HighlightText";
import UnderlinedText from "../components/UnderlinedText";
import TeamMember from "../components/TeamMember";

const memberPositionClasses = {
  1: "top-[164px] left-[1.9%] size-[148px]",
  2: "top-[112px] left-[10.8%] size-40",
  3: "top-0 left-[28.8%] size-[170px]",
  4: "top-[170px] left-[35.3%] size-[170px]",
  5: "top-[41px] left-[50.8%] size-[170px]",
  6: "top-[111px] left-[59.8%] size-[158px]",
  7: "top-0 left-[73.7%] size-[170px]",
  8: "top-[119px] right-[1.8%] size-[170px]",
};

const teamMembers = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  image: `/team-members/member-${index + 1}.png`,
  alt: "Elementum team member",
}));

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative  h-[922px] overflow-hidden bg-white max-[900px]:h-auto max-[900px]:min-h-[930px] max-[900px]:pb-20 max-[600px]:min-h-0"
    >
      <div
        className="pointer-events-none absolute top-[366px] -left-2.5 z-[2] h-[290px] w-[126px] max-[900px]:hidden"
        aria-hidden="true"
      >
        <img
          className="absolute top-0 left-2 h-[250px] w-auto object-contain"
          src="/lines/left-curly-pink-line.png"
          alt=""
        />
        <img
          className="absolute top-0 left-10 h-[250px] w-auto object-contain"
          src="/lines/left-curly-black-line.png"
          alt=""
        />
      </div>

      <img
        className="pointer-events-none absolute top-[244px] right-[7.1%] z-[2] w-[84px] max-[900px]:hidden"
        src="/styled-container/purple-half-circle.png"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-[3] mx-auto w-[min(calc(100%_-_64px),1120px)] pt-[119px]  text-center max-[900px]:w-[min(calc(100%_-_40px),760px)] max-[900px]:pt-[70px] max-[600px]:pt-12">
        <h1 className="m-0 font-gerbil text-[70px] leading-[90px]  font-normal  max-[1200px]:text-[clamp(58px,5.8vw,70px)] max-[900px]:text-[clamp(46px,7vw,58px)] max-[600px]:text-[clamp(38px,10vw,48px)]    tracking-wide ">
          The{" "}
          <UnderlinedText className="after:w-[440px]  after:-translate-x-1/2 after:left-1/2 after:-bottom-[0.14em] after:h-[0.59em]">
            thinkers
          </UnderlinedText>{" "}
          and
          <br />
          doers were{" "}
          <HighlightText
            color="pink"
            className="before:-left-[-1.75em] before:h-[1.3em]  before:bottom-[0.05em]"
          >
            changing
          </HighlightText>
          <br />
          the{" "}
          <HighlightText
            color="mint"
            className="before:-left-[0.25em] before:h-[1.1em] before:bottom-[0.15em] "
          >
            status
          </HighlightText>{" "}
          Quo with
        </h1>

        <p className="mt-5 text-[17px] leading-[1.55] tracking-[-0.01em] max-[900px]:mx-auto max-[900px]:max-w-[570px] max-[600px]:mt-7 max-[600px]:text-xs">
          We are a team of strategists, designers communicators, researchers.
          Together,
          <br className="max-[600px]:hidden" /> we believe that progress only
          happens when you refuse to play things safe.
        </p>
      </div>

      <div
        className="absolute top-[520px] left-1/2 h-[365px] w-[min(100%,1440px)] -translate-x-1/2 max-[900px]:relative max-[900px]:top-auto max-[900px]:left-auto max-[900px]:mx-auto max-[900px]:mt-[70px] max-[900px]:grid max-[900px]:h-auto max-[900px]:w-[min(calc(100%_-_40px),650px)] max-[900px]:translate-x-0 max-[900px]:grid-cols-4 max-[900px]:gap-[26px] max-[600px]:mt-12 max-[600px]:gap-3"
        aria-label="Meet the Elementum team"
      >
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
            memberPositionClasses={memberPositionClasses}
          />
        ))}
      </div>
    </section>
  );
}
