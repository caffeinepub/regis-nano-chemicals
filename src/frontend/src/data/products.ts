export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  badge?: string;
  // Bundle-specific fields
  isBundle?: boolean;
  includedProducts?: string[];
  originalPrice?: string;
  originalPriceValue?: number;
}

export const products: Product[] = [
  {
    id: "dashboard-shiner",
    name: "Dashboard Shiner",
    description:
      "Premium dashboard shiner that restores shine, protects surfaces, and leaves a fresh fragrance inside the car.",
    price: "\u20b9599",
    priceValue: 599,
    image: "/assets/uploads/98F04110-73EB-46F8-B3F6-688E519164EF-2-1.PNG",
    badge: "Most Bought",
  },
  {
    id: "stain-remover",
    name: "Stain Remover",
    description:
      "Powerful stain remover designed to clean tough stains from car interiors, fabrics, and surfaces.",
    price: "\u20b9399",
    priceValue: 399,
    image: "/assets/uploads/61BB4BA7-DB70-4543-8EDF-94229CC01B97-4-1.PNG",
    badge: "Best Seller",
  },
  {
    id: "waterless-spray-cleaner",
    name: "Waterless Spray Cleaner",
    description:
      "Advanced waterless car cleaning solution that removes dirt while providing body coating and glass lamination protection. Trigger included.",
    price: "\u20b9499",
    priceValue: 499,
    image: "/assets/uploads/4E3EAE52-386F-49CA-88ED-1DB1713C5F71-4-2.PNG",
  },
  {
    id: "car-care-kit",
    name: "Car Care Kit",
    description:
      "Complete Pearl Shine Car Care Kit \u2014 the perfect all-in-one solution for complete car cleaning and protection.",
    price: "\u20b91,399",
    priceValue: 1399,
    originalPrice: "\u20b91,499",
    originalPriceValue: 1499,
    image: "/assets/uploads/638A504A-6A42-49E8-A6C5-4DE117896FDE-4-3.PNG",
    badge: "Bundle Deal",
    isBundle: true,
    includedProducts: [
      "Dashboard Shiner",
      "Stain Remover",
      "Waterless Spray Cleaner",
    ],
  },
];
