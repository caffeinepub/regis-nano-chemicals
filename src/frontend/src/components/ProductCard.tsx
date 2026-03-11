import { CheckCircle2, Package, ShoppingCart, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleWhatsAppBuyNow = () => {
    const msg = `Hello Pearl Shine! I want to buy:\n\u2022 ${product.name} \u2013 ${product.price}\n\nPlease confirm availability.`;
    const url = `https://wa.me/917483540921?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border flex flex-col ${
        product.isBundle
          ? "border-brand-yellow ring-2 ring-brand-yellow/30"
          : "border-brand-gray-mid"
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
        {product.isBundle && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-poppins font-700 bg-brand-yellow text-brand-black shadow-yellow">
              <Package className="w-3 h-3" />
              BUNDLE DEAL
            </span>
          </div>
        )}
        {!product.isBundle && product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-poppins font-600 bg-brand-yellow text-brand-black shadow-yellow">
              {product.badge}
            </span>
          </div>
        )}
        {product.isBundle && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-poppins font-700 bg-brand-blue text-white shadow-blue">
              Save More
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-poppins font-700 text-brand-blue text-base leading-snug mb-1">
          {product.name}
        </h3>
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
        {product.isBundle &&
          product.includedProducts &&
          product.includedProducts.length > 0 && (
            <div className="mb-3 bg-brand-gray rounded-xl p-3 border border-brand-gray-mid">
              <p className="text-xs font-poppins font-700 text-brand-blue uppercase tracking-wide mb-2">
                What's Included:
              </p>
              <ul className="space-y-1">
                {product.includedProducts.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-inter text-brand-black"
                  >
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
        <div className="flex gap-2">
          <button
            type="button"
            data-ocid="products.primary_button"
            onClick={() => addToCart(product)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-poppins font-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button
            type="button"
            data-ocid="products.secondary_button"
            onClick={handleWhatsAppBuyNow}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl yellow-btn text-sm font-poppins font-600 shadow-yellow"
          >
            <Zap className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
