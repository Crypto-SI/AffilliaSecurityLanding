export const homeNavItems = [
  { href: "/#home", label: "Home", sectionId: "home" },
  { href: "/#about-us", label: "About Us", sectionId: "about-us" },
  { href: "/#services", label: "Services", sectionId: "services" },
  { href: "/#why-choose-us", label: "Why Choose Us", sectionId: "why-choose-us" },
] as const;

export const legalNavItems = [
  ...homeNavItems,
  { href: "/contact", label: "Contact" },
] as const;

