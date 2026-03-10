export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  badge?: string;
  benefits?: string[];
  usageSteps?: string[];
  safetyInfo?: string;
  // Bundle-specific fields
  isBundle?: boolean;
  includedProducts?: string[];
  originalPrice?: string;
  originalPriceValue?: number;
}

export const products: Product[] = [
  {
    id: "dbs-car-shine",
    name: "DBS Car Shine Solution",
    description:
      "Advanced nano-formula spray that delivers a deep, mirror-like shine. Repels water, dust, and UV rays for long-lasting protection.",
    price: "₹899",
    priceValue: 899,
    image: "/assets/generated/dbs-car-shine.dim_600x600.png",
    badge: "Best Seller",
    benefits: [
      "Deep mirror-like shine",
      "UV ray protection",
      "Hydrophobic water repellent",
      "Long-lasting up to 6 months",
    ],
    usageSteps: [
      "Wash and dry the car thoroughly",
      "Apply small amount on microfiber cloth",
      "Spread in circular motions on one panel at a time",
      "Allow to haze for 2–3 minutes",
      "Buff off with a clean microfiber cloth",
    ],
    safetyInfo: "Keep away from eyes. Store in a cool dry place.",
  },
  {
    id: "scratch-remover-pro",
    name: "Scratch Remover Pro",
    description:
      "Professional-grade compound that eliminates light scratches, swirl marks, and oxidation, restoring your car's original finish.",
    price: "₹1,199",
    priceValue: 1199,
    image: "/assets/generated/scratch-remover-pro.dim_600x600.png",
    badge: "New",
    benefits: [
      "Removes light scratches and swirl marks",
      "Restores original paint finish",
      "Removes oxidation",
      "Professional-grade formula",
    ],
    usageSteps: [
      "Clean the scratched area",
      "Apply a small amount on applicator pad",
      "Work in circular motions with light pressure",
      "Wipe off residue with microfiber cloth",
      "Apply car shine for protection",
    ],
    safetyInfo: "Avoid contact with eyes. Wear gloves when handling.",
  },
  {
    id: "nano-gloss-polish",
    name: "Nano Gloss Polish",
    description:
      "Nano-particle infused polish that fills micro-scratches and creates an ultra-glossy, showroom-quality finish that lasts months.",
    price: "₹1,049",
    priceValue: 1049,
    image: "/assets/generated/nano-gloss-polish.dim_600x600.png",
    benefits: [
      "Ultra-glossy showroom finish",
      "Fills micro-scratches",
      "Nano-particle bonding",
      "Lasts months",
    ],
    usageSteps: [
      "Wash and clay bar if needed",
      "Apply polish on foam applicator",
      "Work in overlapping circular motions",
      "Allow to cure for 5 minutes",
      "Buff with clean microfiber",
    ],
    safetyInfo: "Use in a shaded area. Not for use on matte paint.",
  },
  {
    id: "interior-shield",
    name: "Interior Shield Protectant",
    description:
      "Premium interior protectant that shields dashboards, seats, and trim from UV damage, cracking, and fading with a satin finish.",
    price: "₹749",
    priceValue: 749,
    image: "/assets/generated/interior-shield-protectant.dim_600x600.png",
    benefits: [
      "UV protection for interiors",
      "Prevents cracking and fading",
      "Satin matte finish",
      "Safe for all surfaces",
    ],
    usageSteps: [
      "Clean the interior surface",
      "Spray onto microfiber cloth",
      "Wipe surfaces evenly",
      "Allow to dry for 5 minutes",
      "Buff lightly for even finish",
    ],
  },
  {
    id: "car-care-kit-box",
    name: "Car Care Kit Box",
    description:
      "The ultimate all-in-one car care bundle — everything you need for a showroom finish at home. Save big with our exclusive combo deal.",
    price: "₹2,699",
    priceValue: 2699,
    originalPrice: "₹3,147",
    originalPriceValue: 3147,
    image: "/assets/generated/car-care-kit-box.dim_600x600.png",
    badge: "Bundle Deal",
    isBundle: true,
    includedProducts: [
      "DBS Car Shine Solution",
      "Scratch Remover Pro",
      "Nano Gloss Polish",
    ],
    benefits: [
      "Complete car care solution",
      "Save ₹448 vs buying individually",
      "3 professional products",
      "Perfect as a gift",
    ],
    usageSteps: [
      "Start with DBS Car Shine for overall protection",
      "Use Scratch Remover Pro on problem areas",
      "Finish with Nano Gloss Polish for showroom shine",
    ],
  },
];
