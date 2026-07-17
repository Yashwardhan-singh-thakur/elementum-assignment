import ProgressSection from "../sections/ProgressSection";
import TomorrowSection from "../sections/TomorrowSection";

export default function PinkLine() {
  return (
    <div className=" relative isolate overflow-x-clip bg-white">
      {/* Common pink line */}
      <img
        className="pointer-events-none absolute lg:top-[475px] xl:top-[485px] lg:left-[125px] xl:left-[290px] z-[1] hidden lg:w-[1000px]  xl:w-[1070px] max-w-none lg:block"
        src="/lines/tom-sec-pink-line.png"
        alt="pink-line"
        aria-hidden="true"
      />

      <TomorrowSection />
      <ProgressSection />
    </div>
  );
}
