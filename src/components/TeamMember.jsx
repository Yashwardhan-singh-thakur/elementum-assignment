function TeamMember({ member, memberPositionClasses }) {
  return (
    <figure
      className={`absolute m-0 overflow-hidden rounded-full bg-[#ededed] max-lg:static max-lg:aspect-square max-lg:size-auto ${memberPositionClasses[member.id]}`}
    >
      <img
        className="size-full object-cover"
        src={member.image}
        alt={member.alt}
      />
    </figure>
  );
}

export default TeamMember;
