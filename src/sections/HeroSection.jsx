const teamMembers = [
  {
    id: 1,
    image: "/team-members/member-1.png",
    alt: "Elementum team member",
    position:
      "left-[1%] top-[105px] h-[100px] w-[100px] lg:left-[0%] lg:top-[110px]",
  },
  {
    id: 2,
    image: "/team-members/member-2.png",
    alt: "Elementum team member",
    position: "left-[12%] top-[78px] h-[100px] w-[100px] lg:left-[11%]",
  },
  {
    id: 3,
    image: "/team-members/member-3.png",
    alt: "Elementum team member",
    position: "left-[30%] top-[4px] h-[118px] w-[118px] lg:left-[29%]",
  },
  {
    id: 4,
    image: "/team-members/member-4.png",
    alt: "Elementum team member",
    position: "left-[39%] top-[112px] h-[108px] w-[108px] lg:left-[38%]",
  },
  {
    id: 5,
    image: "/team-members/member-5.png",
    alt: "Elementum team member",
    position: "left-[55%] top-[38px] h-[115px] w-[115px] lg:left-[54%]",
  },
  {
    id: 6,
    image: "/team-members/member-6.png",
    alt: "Gudiputi Sangeetha",
    position: "left-[66%] top-[84px] h-[108px] w-[108px] lg:left-[65%]",
    featured: true,
    label: "Gudiputi Sangeetha",
  },
  {
    id: 7,
    image: "/team-members/member-7.png",
    alt: "Elementum team member",
    position: "left-[77%] top-[7px] h-[130px] w-[130px] lg:left-[76%]",
  },
  {
    id: 8,
    image: "/team-members/member-8.png",
    alt: "Elementum team member",
    position: "right-[0%] top-[80px] h-[112px] w-[112px] lg:right-[1%]",
  },
];

function HighlightedWord({
  children,
  image,
  imageClassName = "",
  className = "",
}) {
  return (
    <span
      className={`relative isolate inline-block whitespace-nowrap ${className}`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 max-w-none -translate-x-1/2 -translate-y-1/2 ${imageClassName}`}
      />

      <span className="relative z-10">{children}</span>
    </span>
  );
}

function TeamMember({ member }) {
  return (
    <div className={`absolute z-10 ${member.position}`}>
      <div className="relative h-full w-full overflow-hidden rounded-full bg-[#eeeeee]">
        <img
          src={member.image}
          alt={member.alt}
          className="h-full w-full object-cover"
        />
      </div>

      {member.featured && (
        <span className="absolute left-[56%] top-[42%] z-30 whitespace-nowrap bg-[#f000b8] px-[8px] py-[4px] text-[11px] leading-none text-white lg:text-[12px]">
          {member.label}
        </span>
      )}
    </div>
  );
}

function MobileTeamMember({ member }) {
  return (
    <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full bg-[#eeeeee] sm:h-[82px] sm:w-[82px]">
      <img
        src={member.image}
        alt={member.alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] overflow-hidden bg-white pb-16 pt-8 sm:pt-12 md:min-h-[760px] md:pb-8 lg:min-h-[790px] lg:pt-14"
    >
      {/* Left decorative lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[46px] top-[174px] hidden h-[230px] w-[105px] md:block lg:-left-[38px]"
      >
        <img
          src="/lines/left-curly-pink-line.png"
          alt=""
          className="absolute left-0 top-0 h-full w-full object-contain"
        />

        <img
          src="/lines/left-curly-black-line.png"
          alt=""
          className="absolute left-[24px] top-[10px] h-full w-full object-contain"
        />
      </div>

      {/* Purple shape */}
      <img
        src="/styled-container/purple-half-circle.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[145px] hidden h-auto w-[58px] object-contain md:block lg:right-[7%] lg:top-[160px] lg:w-[68px]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Main heading */}
        <div className="relative z-10 mx-auto max-w-[1050px] text-center">
          <h1 className="m-0 text-[12px] font-normal leading-[0.94] tracking-[-0.042em] text-black sm:text-[24px] md:text-[38px] lg:text-[54px] xl:text-[60px]">
            The{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">thinkers</span>

              <img
                src="/lines/yellow-line.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[0.06em] left-1/2 -z-0 h-auto w-[105%] max-w-none -translate-x-1/2"
              />
            </span>{" "}
            and
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            doers were{" "}
            <HighlightedWord
              image="/styled-container/pink-pill-con.png"
              imageClassName="h-[0.58em] w-[106%]"
            >
              changing
            </HighlightedWord>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            the{" "}
            <HighlightedWord
              image="/styled-container/status-background-pill-con.png"
              imageClassName="h-[0.58em] w-[112%]"
            >
              status
            </HighlightedWord>{" "}
            quo with
          </h1>

          <p className="mx-auto mt-7 max-w-[510px] px-4 text-[11px] leading-[1.5] tracking-[-0.01em] text-[#202020] sm:text-[12px] md:mt-8 md:px-0 md:text-[13px] lg:text-[10px]">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
        </div>

        {/* Desktop and tablet team-member layout */}
        <div className="relative mx-auto mt-9 hidden h-[250px] w-full max-w-[1240px] md:block lg:mt-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>

        {/* Mobile team-member layout */}
        <div className="mx-auto mt-10 grid max-w-[390px] grid-cols-4 place-items-center gap-x-2 gap-y-5 md:hidden">
          {teamMembers.map((member) => (
            <MobileTeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
