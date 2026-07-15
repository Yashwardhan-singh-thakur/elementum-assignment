function TeamMember({ member, memberPositionClasses }) {
  return (
    <figure
      className={`absolute m-0 overflow-hidden rounded-full bg-[#ededed] max-[900px]:static max-[900px]:size-auto max-[900px]:aspect-square ${memberPositionClasses[member.id]}`}
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
