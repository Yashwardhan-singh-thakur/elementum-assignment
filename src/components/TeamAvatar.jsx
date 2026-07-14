function TeamAvatar({ member }) {
  return (
    <div className={`absolute z-10 ${member.className}`}>
      {/* Only the image circle should use overflow-hidden */}
      <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200">
        <span className="absolute inset-0 grid place-items-center text-xl text-neutral-500">
          {member.initials}
        </span>

        <img
          src={member.src}
          alt={member.alt}
          className="relative z-10 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      {member.featured && (
        <span className="absolute left-[58%] top-[38%] z-30 whitespace-nowrap bg-[#f000b8] px-[7px] py-[3px] text-[11px] leading-none text-white md:text-[12px]">
          {member.label}
        </span>
      )}
    </div>
  );
}
