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

  "tree-services": {
    title: "Tree Services You Can Count On",
    subtitle: "Trimming, removals, cleanup, and storm response in Pottsboro & Sherman, TX.",
    bullets: [
      "Tree trimming and limb removal",
      "Full tree removal and haul-off",
      "Storm cleanup and safety checks",
      "Brush and debris removal",
      "Property cleanup and disposal",
    ],
    ctaText: "Request a Quote",
    ctaHref: "/contact",
  },

  "landscape-design": {
    title: "Landscape Design & Outdoor Upgrades",
    subtitle: "Make your yard functional, beautiful, and easy to maintain.",
    bullets: [
      "Landscape refresh and planning",
      "Hardscape accents and edging",
      "Grading and cleanup",
      "Paver areas and walkways",
      "Seasonal improvements and maintenance support",
    ],
    ctaText: "Get an Estimate",
    ctaHref: "/contact",
  },

  "interior-remodeling": {
    title: "Interior Remodeling",
    subtitle: "Practical upgrades with clean finishes and durable results.",
    bullets: [
      "Small renovation projects",
      "Repairs and updates",
      "Drywall/trim/touch-ups as needed",
      "Flooring and interior improvements",
      "Punch-list and property refresh work",
    ],
    ctaText: "Talk With Us",
    ctaHref: "/contact",
  },

  "storm-damage-repair": {
    title: "Storm Damage Repair",
    subtitle: "Fast, reliable repairs to get your property back in shape.",
    bullets: [
      "Emergency repairs and assessment",
      "Fence/deck repairs",
      "Exterior repairs and cleanup",
      "Debris haul-off",
      "Coordinating next steps quickly",
    ],
    ctaText: "Contact Us Now",
    ctaHref: "/contact",
  },

  "haul-offs-dump-trailer-rental": {
    title: "Haul Offs & Dump Trailer Rental",
    subtitle: "Easy cleanup support when you need it most.",
    bullets: [
      "Dump trailer rental",
      "Haul-off service for debris",
      "Jobsite cleanup support",
      "Flexible scheduling",
      "Residential and light commercial support",
    ],
    ctaText: "Book Service",
    ctaHref: "/contact",
  },
};
