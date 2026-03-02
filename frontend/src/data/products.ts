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
    id: 'dbs-car-shine',
    name: 'DBS Car Shine Solution',
    description:
      'Advanced nano-formula spray that delivers a deep, mirror-like shine. Repels water, dust, and UV rays for long-lasting protection.',
    price: '₹899',
    priceValue: 899,
    image: '/assets/generated/dbs-car-shine.dim_600x600.png',
    badge: 'Best Seller',
  },
  {
    id: 'scratch-remover-pro',
    name: 'Scratch Remover Pro',
    description:
      'Professional-grade compound that eliminates light scratches, swirl marks, and oxidation, restoring your car\'s original finish.',
    price: '₹1,199',
    priceValue: 1199,
    image: '/assets/generated/scratch-remover-pro.dim_600x600.png',
    badge: 'New',
  },
  {
    id: 'nano-gloss-polish',
    name: 'Nano Gloss Polish',
    description:
      'Nano-particle infused polish that fills micro-scratches and creates an ultra-glossy, showroom-quality finish that lasts months.',
    price: '₹1,049',
    priceValue: 1049,
    image: '/assets/generated/nano-gloss-polish.dim_600x600.png',
  },
  {
    id: 'interior-shield',
    name: 'Interior Shield Protectant',
    description:
      'Premium interior protectant that shields dashboards, seats, and trim from UV damage, cracking, and fading with a satin finish.',
    price: '₹749',
    priceValue: 749,
    image: '/assets/generated/interior-shield-protectant.dim_600x600.png',
  },
  {
    id: 'car-care-kit-box',
    name: 'Car Care Kit Box',
    description:
      'The ultimate all-in-one car care bundle — everything you need for a showroom finish at home. Save big with our exclusive combo deal.',
    price: '₹2,699',
    priceValue: 2699,
    originalPrice: '₹3,147',
    originalPriceValue: 3147,
    image: '/assets/generated/car-care-kit-box.dim_600x600.png',
    badge: 'Bundle Deal',
    isBundle: true,
    includedProducts: ['DBS Car Shine Solution', 'Scratch Remover Pro', 'Nano Gloss Polish'],
  },
];
