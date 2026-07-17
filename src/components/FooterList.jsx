function FooterList({ title, links, animatedLinkClasses }) {
  return (
    <div>
      <h3 className="font-gerbil text-lg md:text-sm  lg:text-base xl:text-lg font-normal sm:text-lg">
        {title}
      </h3>
      <nav className="mt-6 flex flex-col gap-5 text-xs leading-[1.45] sm:mt-8 sm:gap-[25px] md:text-[13px] lg:text-[14px]">
        {links.map((link) => (
          <a
            className={animatedLinkClasses}
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
export default FooterList;
