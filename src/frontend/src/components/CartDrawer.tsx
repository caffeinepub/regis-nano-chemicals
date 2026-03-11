import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "917483540921";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="WhatsApp"
      viewBox="0 0 32 32"
      className={className}
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WhatsApp</title>
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.489-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.842l-.484-.287-5.037 1.188 1.224-4.91-.316-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.875c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.199-.266.398-1.031 1.295-1.264 1.561-.232.266-.465.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.163-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.363-1.395 3.326s1.428 3.858 1.627 4.124c.199.266 2.811 4.292 6.813 6.02.952.411 1.695.657 2.274.841.955.304 1.825.261 2.512.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.266-.763-.465z" />
    </svg>
  );
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();
  const [customerName, setCustomerName] = useState("");

  const subtotal = items.reduce(
    (sum, i) => sum + i.product.priceValue * i.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    const nameLine = customerName.trim()
      ? `Customer Name: ${customerName.trim()}\n`
      : "";
    const itemLines = items
      .map(
        (i) =>
          `\u2022 ${i.product.name} (Qty: ${i.quantity}) \u2013 ${i.product.price} each`,
      )
      .join("\n");
    const totalLine = `\nTotal: \u20b9${subtotal.toLocaleString("en-IN")}`;
    const message = `Hello Pearl Shine! I would like to place an order:\n\n${nameLine}${itemLines}${totalLine}\n\nPlease confirm availability.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
        role="presentation"
      />
      {/* Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"
        data-ocid="cart.sheet"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-gray-mid bg-brand-blue">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-brand-yellow" />
            <h2 className="font-poppins font-700 text-white text-lg">
              Your Cart
            </h2>
            {items.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-brand-yellow text-brand-black text-xs font-poppins font-700">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            type="button"
            data-ocid="cart.close_button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-full gap-4 text-center"
              data-ocid="cart.empty_state"
            >
              <ShoppingCart className="w-16 h-16 text-brand-gray-mid" />
              <p className="font-poppins font-600 text-brand-gray-text">
                Your cart is empty
              </p>
              <p className="text-brand-gray-text text-sm font-inter">
                Add products to get started
              </p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.product.id}
                data-ocid={`cart.item.${idx + 1}`}
                className="flex items-center gap-3 bg-brand-gray rounded-xl p-3 border border-brand-gray-mid"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-white"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-poppins font-600 text-brand-blue text-sm leading-snug truncate">
                    {item.product.name}
                  </p>
                  <p className="font-inter font-700 text-brand-black text-sm mt-0.5">
                    {"\u20b9"}
                    {item.product.priceValue.toLocaleString("en-IN")}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-lg bg-white border border-brand-gray-mid flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-all"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-poppins font-700 text-brand-black text-sm w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-7 h-7 rounded-lg bg-white border border-brand-gray-mid flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Remove item"
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 rounded-lg text-brand-gray-text hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-gray-mid p-4 space-y-3 bg-white">
            <input
              data-ocid="cart.input"
              type="text"
              placeholder="Your name (optional)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-brand-gray-mid text-sm font-inter focus:outline-none focus:border-brand-blue"
            />
            <div className="flex items-center justify-between">
              <span className="font-inter text-brand-gray-text text-sm">
                Total Amount
              </span>
              <span className="font-poppins font-700 text-brand-black text-lg">
                {"\u20b9"}
                {subtotal.toLocaleString("en-IN")}
              </span>
            </div>
            <button
              type="button"
              data-ocid="cart.primary_button"
              onClick={handlePlaceOrder}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-poppins font-700 text-sm transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Place Order via WhatsApp
            </button>
            <button
              type="button"
              data-ocid="cart.delete_button"
              onClick={clearCart}
              className="w-full text-xs text-brand-gray-text hover:text-red-500 transition-colors font-inter py-1"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
