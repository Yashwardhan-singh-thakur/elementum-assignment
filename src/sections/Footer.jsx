const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Service", href: "#services" },
  { label: "Blog", href: "#testimonials" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Explore", href: "#home" },
  { label: "Accessibility", href: "#accessibility" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Youtube", href: "https://youtube.com", external: true },
  { label: "Twitter", href: "https://twitter.com", external: true },
];

const animatedLinkClasses =
  "relative w-fit after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-[180ms] after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100";

function FooterList({ title, links }) {
  return (
    <div>
      <h3 className="font-gerbil text-lg font-normal max-[600px]:text-base">
        {title}
      </h3>
      <nav className="mt-8 flex flex-col gap-[25px] text-[13px] leading-[1.45] max-[600px]:mt-6 max-[600px]:gap-5 max-[600px]:text-xs">
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

function Footer() {
  return (
    <footer
      id="contact"
      className="h-[502px] bg-mint max-[900px]:h-auto max-[900px]:min-h-[500px] max-[900px]:pb-[38px]"
    >
      <div className="relative mx-auto h-full w-[min(calc(100%_-_64px),1200px)] border-t border-[#4a524d] max-[900px]:w-[min(calc(100%_-_40px),700px)] max-[900px]:pb-[90px]">
        <div className="grid grid-cols-4 gap-[72px] pt-[72px] max-[900px]:grid-cols-2 max-[600px]:gap-x-[30px] max-[600px]:gap-y-12">
          <FooterList title="Company" links={companyLinks} />
          <FooterList title="Terms & Policies" links={policyLinks} />
          <FooterList title="Follow Us" links={socialLinks} />

          <div>
            <h3 className="font-gerbil text-lg font-normal max-[600px]:text-base">
              Terms &amp; Policies
            </h3>
            <address className="mt-8 flex flex-col gap-[25px] text-[13px] leading-[1.45] not-italic max-[600px]:mt-6 max-[600px]:gap-5 max-[600px]:text-xs">
              <p>
                1498w Fulton ste, STE
                <br />
                2D Chicgo, IL 63867.
              </p>
              <a className={animatedLinkClasses} href="tel:+123456789000">
                (123) 456789000
              </a>
              <a
                className={animatedLinkClasses}
                href="mailto:info@elementum.com"
              >
                info@elementum.com
              </a>
            </address>
          </div>
        </div>

        <p className="absolute right-0 bottom-[31px] left-0 text-center text-[11px]">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
