export type SiteConfig = {
  name: string;
  phoneDisplay: string;
  phoneHref: string;
  cityLine: string;
  logoUrl: string;
  email: string;
  facebookMessengerUrl: string;
};
export const SITE: SiteConfig = {
  name: "Patriot Surface",
  phoneDisplay: "(469) 207-1138",
  phoneHref: "tel:+14692071138",
  cityLine: "Pottsboro, TX 75076",
  logoUrl: "https://lirp.cdn-website.com/51f467ae/dms3rep/multi/opt/patriotsurface_logo-261w.png",

  email: "patriotsurface@gmail.com",
  facebookMessengerUrl: "https://m.me/109709308624841",
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

export type Review = {
  name: string;
  location?: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Zach Westbrook",
    rating: 5,
    text: "I had a fantastic experience with Patriot Surface. They built both my deck and replaced my roof, and I couldn’t be happier with the results. The crew was professional, punctual, and paid great attention to detail. Everything was completed on time and with excellent craftsmanship. Kevin’s communication was clear and consistent from start to finish. I highly recommend Patriot Surface to anyone looking for reliable and high-quality work."
  },
  {
    name: "Matthew Scott",
    rating: 5,
    text: "Awesome customer service. Patriot Surface came through. My roof definitely needed help and they gave me a great bid. The crew did excellent work and cleaned everything up quickly. I will be recommending them to everyone I know."
  },
  {
    name: "Dustin Earley",
    rating: 5,
    text: "Patriot Surface did an amazing job. Kevin came out right after the storm passed and put a tarp on my roof where a tree had fallen and damaged it. Just two days later he came back and repaired it. He will be the only roofer I call from now on."
  },
  {
    name: "Lillian River",
    rating: 5,
    text: "10 out of 10. Kevin has a great work ethic and a great attitude. I wouldn’t trust anyone else to get the job done. I'm really happy with the results. This company truly knows what they're doing."
  },
  {
    name: "Stephanie Holloway",
    rating: 5,
    text: "Absolutely recommend. And I don’t recommend many. Great communication, helps you sort out exactly what you want, and then makes it happen. Good people and good work."
  },
  {
    name: "Jeremy Washer",
    rating: 5,
    text: "Great guys that came out and got me out of a bad situation. 100% recommend these guys."
  },
  {
    name: "Brendan Regan",
    rating: 5,
    text: "After the storms in March I delayed the whole roof process, but even almost a year later Kevin from Patriot Surface continued to follow up. Last week we finally got our new roof installed. Kevin is excellent at explaining everything and helping with the insurance process. He really took the headache away."
  }
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
