const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Service", href: "#services" },
  { label: "Blog", href: "#blog" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Explore", href: "#explore" },
  { label: "Accessibility", href: "#accessibility" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

function FooterLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="relative w-fit text-[10px] leading-none text-black/80 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:text-black hover:after:origin-left hover:after:scale-x-100 sm:text-[11px]"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#d8f5e2] px-5 pb-10 sm:px-8 sm:pb-12 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Top divider */}
        <div className="h-px w-full bg-black/70" />

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-12 md:grid-cols-4 md:gap-10 md:py-14 lg:gap-20">
          {/* Company */}
          <div>
            <h3 className="m-0 text-[14px] font-normal text-black sm:text-[15px]">
              Company
            </h3>

            <nav className="mt-7 flex flex-col gap-5">
              {companyLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Terms and policies */}
          <div>
            <h3 className="m-0 text-[14px] font-normal text-black sm:text-[15px]">
              Terms &amp; Policies
            </h3>

            <nav className="mt-7 flex flex-col gap-5">
              {policyLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Social media */}
          <div>
            <h3 className="m-0 text-[14px] font-normal text-black sm:text-[15px]">
              Follow Us
            </h3>

            <nav className="mt-7 flex flex-col gap-5">
              {socialLinks.map((link) => (
                <FooterLink key={link.label} href={link.href} external>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="m-0 text-[14px] font-normal text-black sm:text-[15px]">
              Terms &amp; Policies
            </h3>

            <address className="mt-7 flex flex-col gap-5 text-[10px] not-italic leading-[1.5] text-black/80 sm:text-[11px]">
              <p className="m-0">
                149th Fulton ste, STE
                <br />
                20 Chicago, IL 60607.
              </p>

              <a
                href="tel:+123456789000"
                className="w-fit transition-opacity duration-200 hover:opacity-60"
              >
                (123) 456789000
              </a>

              <a
                href="mailto:info@elementum.com"
                className="w-fit transition-opacity duration-200 hover:opacity-60"
              >
                info@elementum.com
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <p className="m-0 pt-8 text-center text-[9px] text-black/70 sm:pt-12 sm:text-[10px]">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
