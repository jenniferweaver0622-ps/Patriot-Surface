export const SITE = {
  name: "Patriot Surface",
  phoneDisplay: "(469) 207-1138",
  phoneHref: "tel:+14692071138",
  cityLine: "Pottsboro, TX 75076",
  logoUrl:
    "https://lirp.cdn-website.com/51f467ae/dms3rep/multi/opt/patriotsurface_logo-261w.png",
};

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/decks-patios",
    children: [
      { label: "Decks & Patios", href: "/services/decks-patios" },
      { label: "Tree Services", href: "/services/tree-services" },
      { label: "Landscape Design", href: "/services/landscape-design" },
      { label: "Interior Remodeling", href: "/services/interior-remodeling" },
      { label: "Storm Damage Repair", href: "/services/storm-damage-repair" },
      {
        label: "Haul Offs & Dump Trailer Rental",
        href: "/services/haul-offs-dump-trailer-rental",
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export type ServicePage = {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
};

export const SERVICES: Record<string, ServicePage> = {
  "decks-patios": {
    title: "Heighten Your Outdoor Space with Custom Decks",
    subtitle:
      "Revitalize decks in Pottsboro and Grayson County including Sherman, TX.",
    bullets: [
      "Creating inviting railings, stairs, and benches",
      "Designing covered decks for year-round enjoyment",
      "Installing cable railings for a modern touch",
      "Building retaining walls and pergolas for added structure",
      "Adding gazebos and pavers for a complete outdoor experience",
    ],
    ctaText: "Talk With Us Now",
    ctaHref: "/contact",
  },
};
