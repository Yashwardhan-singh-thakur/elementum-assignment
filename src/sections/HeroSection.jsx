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
      className="relative h-auto overflow-hidden bg-white pb-16 sm:pb-20 md:pb-24 lg:h-[922px] lg:pb-0"
    >
      <div
        className="pointer-events-none absolute top-[366px] -left-2.5 z-[2] hidden h-[290px] w-[126px] lg:block"
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
        className="pointer-events-none absolute top-[244px] right-[7.1%] lg:right-[3%] xl:right-[6.2%] z-[2] hidden w-[84px] lg:block"
        src="/styled-container/purple-half-circle.png"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-[3] mx-auto w-[min(calc(100%_-_40px),760px)] pt-10 text-center sm:w-[min(calc(100%_-_64px),760px)] sm:pt-14 md:w-[min(calc(100%_-_64px),900px)] md:pt-16 lg:w-[min(calc(100%_-_64px),1120px)] lg:pt-[119px]">
        <h1 className="m-0 font-gerbil  font-normal tracking-wide text-[30px]  sm:text-[40px] md:text-[clamp(50px,6vw,58px)] lg:text-[64px] xl:text-[70px] leading-[38px] sm:leading-[54px] md:leading-[65px] min-[900px]:max-[1023px]:!leading-[75px]  lg:leading-[80px] xl:leading-[90px] lg:max-[1200px]:text-[clamp(58px,5.8vw,70px)]">
          The{" "}
          <UnderlinedText className="after:left-1/2  after:-bottom-[0.14em]  after:h-[0.58em] after:w-[105%] after:-translate-x-1/2 after:w-[180px] sm:after:w-[230px]  md:after:w-[300px] lg:after:w-[350px] xl:after:w-[420px]">
            thinkers
          </UnderlinedText>{" "}
          and <br className="hidden lg:block" />
          doers were{" "}
          <HighlightText
            color="pink"
            className="before:bottom-[-0.08em] before:-left-[0.25em] before:h-[1.35em] before:left-[1.75em]"
          >
            changing
          </HighlightText>{" "}
          <br className="hidden lg:block" />
          the{" "}
          <HighlightText
            color="mint"
            className="before:-left-[0.25em] before:h-[1.1em] before:bottom-[0.15em] "
          >
            status
          </HighlightText>{" "}
          Quo with
        </h1>

        <p className="mx-auto mt-6 max-w-[620px] text-[13px] leading-[1.6] tracking-[-0.01em] sm:text-[15px] md:text-base lg:mt-5 lg:max-w-none lg:text-[17px] lg:leading-[1.55]">
          We are a team of strategists, designers communicators, researchers.
          Together,
          <br className="hidden md:block" /> we believe that progress only
          happens when you refuse to play things safe.
        </p>
      </div>

      <div
        className="relative mx-auto mt-10 grid w-[min(calc(100%_-_40px),650px)] grid-cols-4 gap-3 sm:mt-14 sm:w-[min(calc(100%_-_64px),650px)] sm:gap-5 md:mt-16 md:gap-[26px] lg:absolute lg:top-[520px] lg:left-1/2 lg:mt-0 lg:block lg:h-[365px] lg:w-[min(100%,1440px)] lg:-translate-x-1/2"
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
