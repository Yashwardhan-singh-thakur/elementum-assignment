import FooterList from "../components/FooterList";

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

function Footer() {
  return (
    <footer
      id="contact"
      className="h-auto min-h-[600px] bg-mint pb-8 sm:min-h-[520px] md:min-h-[500px] lg:h-[502px] lg:min-h-0 lg:pb-0"
    >
      <div className="relative mx-auto min-h-[600px] w-[min(calc(100%_-_40px),900px)] border-t border-[#4a524d] pb-20 sm:min-h-[520px] sm:w-[min(calc(100%_-_64px),900px)] md:min-h-[500px] lg:h-full lg:min-h-0 lg:w-[min(calc(100%_-_64px),1200px)] lg:pb-0">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 sm:gap-x-12 md:grid-cols-4 md:gap-x-8 md:gap-y-0 md:pt-16 lg:gap-[72px] lg:pt-[72px]">
          <FooterList
            title="Company"
            links={companyLinks}
            animatedLinkClasses={animatedLinkClasses}
          />
          <FooterList
            title="Terms & Policies"
            links={policyLinks}
            animatedLinkClasses={animatedLinkClasses}
          />
          <FooterList
            title="Follow Us"
            links={socialLinks}
            animatedLinkClasses={animatedLinkClasses}
          />

          <div>
            <h3 className="font-gerbil text-xs md:text-sm lg:text-base  xl:text-lg  font-normal ">
              Terms &amp; Policies
            </h3>
            <address className="mt-6 flex flex-col gap-5 text-xs leading-[1.45] not-italic sm:mt-8 sm:gap-[25px] sm:text-[13px]">
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

        <p className="absolute right-0 bottom-5 left-0 text-center text-[10px] sm:bottom-8 sm:text-[11px] lg:bottom-[31px]">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
