// import HighlightText from "../components/HighlightText";

// const teamMembers = [
//   {
//     src: "/images/people/person-1.webp",
//     alt: "Elementum team member",
//     initials: "A",
//     className: "left-[2%] top-[105px] h-[96px] w-[96px]",
//   },
//   {
//     src: "/images/people/person-2.webp",
//     alt: "Elementum team member",
//     initials: "B",
//     className: "left-[13%] top-[70px] h-[105px] w-[105px]",
//   },
//   {
//     src: "/images/people/person-3.webp",
//     alt: "Elementum team member",
//     initials: "C",
//     className: "left-[30%] top-[5px] h-[125px] w-[125px]",
//   },
//   {
//     src: "/images/people/person-4.webp",
//     alt: "Elementum team member",
//     initials: "D",
//     className: "left-[38%] top-[110px] h-[110px] w-[110px]",
//   },
//   {
//     src: "/images/people/person-5.webp",
//     alt: "Elementum team member",
//     initials: "E",
//     className: "left-[55%] top-[35px] h-[120px] w-[120px]",
//   },
//   {
//     src: "/images/people/person-6.webp",
//     alt: "Elementum team member",
//     initials: "F",
//     className: "left-[67%] top-[80px] h-[110px] w-[110px]",
//   },
//   {
//     src: "/images/people/person-7.webp",
//     alt: "Elementum team member",
//     initials: "G",
//     className: "right-[5%] top-[20px] h-[135px] w-[135px]",
//     featured: true,
//   },
// ];

// function TeamAvatar({ member }) {
//   return (
//     <div
//       className={`absolute overflow-hidden rounded-full bg-neutral-200 ${member.className}`}
//     >
//       <span className="absolute inset-0 grid place-items-center text-xl text-neutral-500">
//         {member.initials}
//       </span>

//       <img
//         src={member.src}
//         alt={member.alt}
//         className="relative z-10 h-full w-full object-cover"
//         onError={(event) => {
//           event.currentTarget.style.display = "none";
//         }}
//       />

//       {member.featured && (
//         <span className="absolute bottom-5 right-[-38px] z-20 whitespace-nowrap bg-[#f000b8] px-3 py-1 text-[12px] text-white">
//           Gudiputi Sangeetha
//         </span>
//       )}
//     </div>
//   );
// }

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[760px] overflow-hidden bg-white pt-10 md:pt-14 lg:pt-16"
//     >
//       {/* Left decorative curved lines */}
//       <svg
//         aria-hidden="true"
//         className="absolute -left-12 top-[160px] hidden h-[220px] w-[130px] md:block"
//         viewBox="0 0 130 220"
//         fill="none"
//       >
//         <path
//           d="M24 8C85 32 91 66 33 93C-13 115 -3 146 48 168C91 187 83 207 47 218"
//           stroke="#ff6268"
//           strokeWidth="3"
//         />

//         <path
//           d="M50 20C111 42 110 74 59 98C14 119 22 146 67 165C109 183 103 202 76 216"
//           stroke="#111111"
//           strokeWidth="3"
//         />
//       </svg>

//       {/* Purple decorative shape */}
//       <div
//         aria-hidden="true"
//         className="absolute right-[5%] top-[155px] hidden h-[75px] w-[48px] rotate-[24deg] rounded-[80%_20%_70%_30%] bg-[#a500f5] md:block lg:right-[8%]"
//       />

//       <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14">
//         <div className="mx-auto max-w-[1100px] text-center">
//           <h1 className="mx-auto max-w-[900px] text-[38px] leading-[0.98] tracking-[-0.035em] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[74px]">
//             The{" "}
//             <span className="relative inline-block">
//               thinkers
//               <img
//                 className="pointer-events-none absolute -bottom-2 left-0 h-auto w-full"
//                 src="/lines/yellow-line.png"
//                 alt=""
//                 aria-hidden="true"
//               />
//             </span>{" "}
//             and
//             <br className="hidden sm:block" />
//             doers were <HighlightText color="#f3a4de">changing</HighlightText>
//             <br className="hidden sm:block" />
//             the <HighlightText color="#c9efd5">status</HighlightText> quo with
//           </h1>

//           <p className="mx-auto mt-8 max-w-[560px] text-[12px] leading-[1.55] text-neutral-700 sm:text-[13px] md:text-[14px]">
//             We are a team of strategists, designers, communicators and
//             researchers. Together, we believe that progress only happens when
//             you refuse to play things safe.
//           </p>
//         </div>

//         {/* Desktop floating avatars */}
//         <div className="relative mx-auto mt-10 hidden h-[245px] max-w-[1250px] md:block">
//           {teamMembers.map((member) => (
//             <TeamAvatar key={member.src} member={member} />
//           ))}
//         </div>

//         {/* Mobile avatars */}
//         <div className="mx-auto mt-10 flex max-w-[360px] flex-wrap items-center justify-center gap-4 md:hidden">
//           {teamMembers.slice(0, 6).map((member) => (
//             <div
//               key={member.src}
//               className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-neutral-200"
//             >
//               <span className="absolute inset-0 grid place-items-center text-neutral-500">
//                 {member.initials}
//               </span>

//               <img
//                 src={member.src}
//                 alt={member.alt}
//                 className="relative z-10 h-full w-full object-cover"
//                 onError={(event) => {
//                   event.currentTarget.style.display = "none";
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
