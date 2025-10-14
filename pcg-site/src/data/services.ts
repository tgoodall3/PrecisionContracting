export type Service = {
  id: string;
  name: string;
  summary: string;
  blurb: string;
  highlights: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    id: 'flooring',
    name: 'Flooring',
    summary: 'Precision hardwood, luxury vinyl, and tile installations built to last.',
    blurb: 'Upgrade high-traffic spaces with resilient finishes and clean transitions engineered for daily life.',
    highlights: [
      'Hardwood & engineered plank installation and refinishing',
      'Luxury vinyl plank with moisture mitigation and trim',
      'Tile layouts, leveling, and specialty grout systems'
    ],
    timeline: 'Typically 5-10 business days'
  },
  {
    id: 'drywall-paint',
    name: 'Drywall & Paint',
    summary: 'Seamless drywall repair paired with finely tuned paint finishes.',
    blurb: 'From patching to whole-home refreshes, we deliver smooth surfaces and durable coatings.',
    highlights: [
      'Drywall repairs, finishing, and Level 5 skim coats',
      'Color consulting and low-VOC paint systems',
      'Trim, doors, and accent wall detailing'
    ],
    timeline: 'Typically 3-7 business days'
  },
  {
    id: 'kitchen-bath',
    name: 'Kitchen & Bath Remodels',
    summary: 'Thoughtful remodels that balance form, function, and budget.',
    blurb: 'Modernize the heart of your home with purposeful layouts and reliable trade partners.',
    highlights: [
      'Cabinet updates, countertops, and lighting upgrades',
      'Plumbing fixture replacements and tile surrounds',
      'Project scheduling, permitting, and trade coordination'
    ],
    timeline: 'Typically 4-8 weeks'
  },
  {
    id: 'basements',
    name: 'Basements',
    summary: 'Finish or rework basements into livable, code-compliant spaces.',
    blurb: 'Transform underused square footage into entertainment, office, or guest-ready zones.',
    highlights: [
      'Framing, insulation, and mechanical coordination',
      'Media walls, built-ins, and custom storage',
      'Moisture management and egress compliance'
    ],
    timeline: 'Typically 6-10 weeks'
  },
  {
    id: 'exterior',
    name: 'Exterior Upgrades',
    summary: 'Siding, gutters, doors, and outdoor enhancements with curb appeal.',
    blurb: 'Protect and refresh exteriors with durable materials and tidy finishes.',
    highlights: [
      'Fiber cement and composite siding replacements',
      'Seamless gutter installation with leaf protection',
      'Entry door, patio door, and trim upgrades'
    ],
    timeline: 'Typically 1-3 weeks'
  }
];
