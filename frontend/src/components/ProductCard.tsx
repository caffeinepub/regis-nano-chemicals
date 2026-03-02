import { Link } from '@tanstack/react-router';
import { ShoppingBag, Package, CheckCircle2 } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const savings =
    product.isBundle && product.originalPriceValue && product.priceValue
      ? product.originalPriceValue - product.priceValue
      : 0;

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border flex flex-col ${
        product.isBundle
          ? 'border-brand-yellow ring-2 ring-brand-yellow/30'
          : 'border-brand-gray-mid'
      } ${className}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-brand-gray aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Bundle Deal badge — top-left */}
        {product.isBundle && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-poppins font-700 bg-brand-yellow text-brand-black shadow-yellow">
              <Package className="w-3 h-3" />
              BUNDLE DEAL
            </span>
          </div>
        )}

        {/* Regular badge (non-bundle) */}
        {!product.isBundle && product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-poppins font-600 bg-brand-yellow text-brand-black shadow-yellow">
              {product.badge}
            </span>
          </div>
        )}

        {/* Savings ribbon — top-right, only for bundles */}
        {product.isBundle && savings > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-poppins font-700 bg-brand-blue text-white shadow-blue">
              Save ₹{savings.toLocaleString('en-IN')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-poppins font-700 text-brand-blue text-base leading-snug mb-1">
          {product.name}
        </h3>

        {/* Price row */}
        <div className="flex items-baseline gap-2 mb-3">
          <p className="font-poppins font-700 text-brand-black text-xl">
            {product.price}
          </p>
          {product.isBundle && product.originalPrice && (
            <p className="font-inter text-sm text-brand-gray-text line-through">
              {product.originalPrice}
            </p>
          )}
        </div>

        {/* Included products list — only for bundles */}
        {product.isBundle && product.includedProducts && product.includedProducts.length > 0 && (
          <div className="mb-3 bg-brand-gray rounded-xl p-3 border border-brand-gray-mid">
            <p className="text-xs font-poppins font-700 text-brand-blue uppercase tracking-wide mb-2">
              What's Included:
            </p>
            <ul className="space-y-1">
              {product.includedProducts.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-inter text-brand-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-brand-gray-text text-sm font-inter leading-relaxed flex-1 mb-4">
          {product.description}
        </p>

        <Link
          to="/products"
          className="yellow-btn w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-poppins font-600 shadow-yellow"
        >
          <ShoppingBag className="w-4 h-4" />
          Shop Now
        </Link>
      </div>
    </div>
  );
}
