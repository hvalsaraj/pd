import Link from "next/link";
import LogoSVG from "./LogoSVG";
import { NavListItem, Paragraph } from "./typography";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Pricing", href: "/pricing" },
  ];

  const resourcesLinks = [
    { label: "Articles", href: "/resources/article" },
    { label: "Case Studies", href: "/resources/case-study" },
    { label: "Demo Videos", href: "/resources/demo-videos" },
  ];

  const featureLinks = [
    { label: "Phones", href: "/features/phones" },
    { label: "Appointment Reminders", href: "/features/reminders" },
    { label: "Scheduling", href: "/features/scheduling" },
    { label: "Texting", href: "/features/texting" },
    { label: "Reviews", href: "/features/reviews" },
    { label: "Call Intelligence", href: "/features/call-intelligence" },
    { label: "Text to Pay", href: "/features/text-to-pay" },
    { label: "Digital Forms", href: "/features/digital-forms" },
    { label: "Campaigns and Promotions", href: "/features/email-marketing" },
    { label: "Mobile App", href: "/features/mobile-app" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-conditions" },
    // { label: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-background border-t border-border" aria-label="Footer">
      <div className="max-w-[1280px] mx-auto border-x">
        <div className="">
          {/* Main Footer Content */}
          <div className="flex flex-col">
            {/* Top Section: Logo and Social Media */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 border-b border-border">
              {/* Left: Logo */}
              <div className="flex-1">
                <Link href="/" className="flex items-center w-fit" aria-label="Home">
                  <LogoSVG />
                </Link>
              </div>

              {/* Right: Social Media Links in 2 columns */}
              {/* <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col">
                  {socialLinks.slice(0, 2).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2.5 border-b border-border-subtle text-foreground hover:text-primary transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span className="font-sans font-normal text-sm">{social.label}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col">
                  {socialLinks.slice(2, 4).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2.5 border-b border-border-subtle text-foreground hover:text-primary transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span className="font-sans font-normal text-sm">{social.label}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>

            {/* Middle Section: Navigation Links Grid with Boxy Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-b">
              {/* Product Column */}
              <div className="flex flex-col border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Product
                </h3>
                <ul className="flex flex-col list-none">
                  {navigationLinks.map((link, index) => (
                    <NavListItem
                      key={link.label}
                      href={link.href}
                      borderBottom={index < navigationLinks.length - 1}
                      className="block py-4 px-6"
                    >
                      {link.label}
                    </NavListItem>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="flex flex-col border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Company
                </h3>
                <ul className="flex flex-col list-none">
                  <NavListItem href="/about" borderBottom className="block py-4 px-6">
                    About
                  </NavListItem>
                  <NavListItem href="/testimonials" borderBottom className="block py-4 px-6">
                    Reviews
                  </NavListItem>
                  <NavListItem href="/contact" className="block py-4 px-6">
                    Contact
                  </NavListItem>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="flex flex-col border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Resources
                </h3>
                <ul className="flex flex-col list-none">
                  {resourcesLinks.map((link, index) => (
                    <NavListItem
                      key={link.label}
                      href={link.href}
                      borderBottom={index < resourcesLinks.length - 1}
                      className="block py-4 px-6"
                    >
                      {link.label}
                    </NavListItem>
                  ))}
                </ul>
              </div>

              {/* Features Column 1 */}
              <div className="flex flex-col border-r lg:border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Features
                </h3>
                <ul className="flex flex-col list-none">
                  {featureLinks.slice(0, 5).map((link, index) => (
                    <li key={link.label} className={index < 4 ? "border-b" : ""}>
                      <Link
                        href={link.href}
                        className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Column 2 */}
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  &nbsp;
                </h3>
                <ul className="flex flex-col list-none">
                  {featureLinks.slice(5, 10).map((link, index) => (
                    <NavListItem
                      key={link.label}
                      href={link.href}
                      borderBottom={index < 4}
                      className="block py-4 px-6"
                    >
                      {link.label}
                    </NavListItem>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section: Copyright, Status, and Legal Links */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 md:pt-8 px-4 md:px-6 lg:px-8">
              {/* Left: Copyright and Status */}
              <div className="flex flex-col gap-2">
                <Paragraph variant="sm" color="muted">
                  © {currentYear} PracticeDilly. All rights reserved.
                </Paragraph>
              </div>

              {/* Right: Legal Links */}
              <div className="flex items-center gap-0">
                {legalLinks.map((link, index) => (
                  <div key={link.label} className="flex items-center">
                    <Link
                      href={link.href}
                      className="px-4 py-2 font-sans font-normal text-sm text-muted hover:text-primary transition-colors border-r border-border-subtle last:border-r-0"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
