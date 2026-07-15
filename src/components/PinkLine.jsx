import React from "react";
import ProgressSection from "../sections/ProgressSection";
import TomorrowSection from "../sections/TomorrowSection";

export default function PinkLine() {
  return (
    <div className=" relative isolate overflow-x-clip bg-white">
      {/* Common pink line */}
      <img
        className="pointer-events-none absolute top-[485px] left-[290px] z-[1] w-[1070px] max-w-none max-[900px]:hidden"
        src="/lines/tom-sec-pink-line.png"
        alt="pink-line"
        aria-hidden="true"
      />

      <TomorrowSection />
      <ProgressSection />
    </div>
  );
}
