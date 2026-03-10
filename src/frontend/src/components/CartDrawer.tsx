import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQty, totalPrice } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const ocidItems = ["cart.item.1", "cart.item.2", "cart.item.3"];

  return (
    <>
      <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md flex flex-col p-0"
          data-ocid="cart.drawer"
        >
          <SheetHeader className="px-6 py-5 border-b border-border">
            <SheetTitle className="font-poppins font-700 text-brand-blue flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Your Cart
              {items.length > 0 && (
                <span className="ml-auto text-xs font-600 bg-brand-yellow text-brand-black px-2 py-0.5 rounded-full">
                  {items.reduce((s, i) => s + i.quantity, 0)} items
                </span>
              )}
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center h-full py-16 text-center"
                data-ocid="cart.empty_state"
              >
                <div className="w-20 h-20 rounded-full bg-brand-gray flex items-center justify-center mb-4">
                  <ShoppingCart className="w-9 h-9 text-brand-gray-text" />
                </div>
                <p className="font-poppins font-700 text-brand-blue text-lg mb-2">
                  Your cart is empty
                </p>
                <p className="text-brand-gray-text font-inter text-sm">
                  Add some Pearl Shine products to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-brand-gray rounded-xl p-3 border border-brand-gray-mid"
                    data-ocid={ocidItems[idx] ?? "cart.item.1"}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-poppins font-700 text-brand-black text-sm leading-snug mb-1 truncate">
                        {item.name}
                      </p>
                      <p className="font-poppins font-700 text-brand-blue text-base mb-2">
                        {item.price}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-white border border-brand-gray-mid flex items-center justify-center hover:border-brand-blue transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-poppins font-700 text-brand-black text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-white border border-brand-gray-mid flex items-center justify-center hover:border-brand-blue transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center hover:bg-red-100 transition-colors text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-border space-y-3">
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-inter font-500 text-brand-gray-text text-sm">
                  Subtotal
                </span>
                <span className="font-poppins font-800 text-brand-blue text-xl">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-xs text-brand-gray-text font-inter">
                Shipping calculated at checkout
              </p>
              <Button
                className="w-full yellow-btn py-4 rounded-xl font-poppins font-700 text-base shadow-yellow border-0"
                onClick={() => {
                  onClose();
                  setCheckoutOpen(true);
                }}
                data-ocid="cart.checkout_button"
              >
                Proceed to Checkout →
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}
