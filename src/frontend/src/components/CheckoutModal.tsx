import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Building2,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const paymentMethods = [
  {
    id: "upi",
    label: "UPI",
    desc: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    id: "card",
    label: "Debit / Credit Card",
    desc: "Visa, Mastercard, RuPay",
    icon: CreditCard,
  },
  {
    id: "netbanking",
    label: "Net Banking",
    desc: "All major banks",
    icon: Building2,
  },
  {
    id: "wallet",
    label: "Digital Wallet",
    desc: "Paytm, Amazon Pay, Mobikwik",
    icon: Wallet,
  },
];

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [contact, setContact] = useState({ name: "", phone: "", address: "" });
  const [payment, setPayment] = useState("upi");
  const [errors, setErrors] = useState<Partial<typeof contact>>({});

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<typeof contact> = {};
    if (!contact.name.trim()) errs.name = "Name is required";
    if (!contact.phone.trim()) errs.phone = "Phone is required";
    if (!contact.address.trim()) errs.address = "Address is required";
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    clearCart();
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setContact({ name: "", phone: "", address: "" });
      setPayment("upi");
      setErrors({});
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="max-w-md w-full rounded-2xl"
        data-ocid="checkout.modal"
      >
        <DialogHeader>
          <DialogTitle className="font-poppins font-800 text-brand-blue">
            {step === 1 && "Delivery Details"}
            {step === 2 && "Payment Method"}
            {step === 3 && "Order Confirmed!"}
          </DialogTitle>
        </DialogHeader>

        {/* Step Indicators */}
        {step < 3 && (
          <div className="flex items-center gap-2 mb-2">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-poppins font-700 transition-colors ${
                    step >= s
                      ? "bg-brand-blue text-white"
                      : "bg-brand-gray text-brand-gray-text"
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`text-xs font-inter ${
                    step >= s
                      ? "text-brand-blue font-600"
                      : "text-brand-gray-text"
                  }`}
                >
                  {s === 1 ? "Details" : "Payment"}
                </span>
                {s < 2 && <div className="w-8 h-0.5 bg-brand-gray-mid" />}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Contact */}
        {step === 1 && (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="checkout-name"
                className="font-poppins font-600 text-sm text-brand-black"
              >
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="checkout-name"
                value={contact.name}
                onChange={(e) => {
                  setContact((p) => ({ ...p, name: e.target.value }));
                  setErrors((p) => ({ ...p, name: undefined }));
                }}
                placeholder="Your full name"
                className={`rounded-xl font-inter ${errors.name ? "border-red-400" : ""}`}
                data-ocid="checkout.input"
              />
              {errors.name && (
                <p className="text-red-500 text-xs font-inter">{errors.name}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="checkout-phone"
                className="font-poppins font-600 text-sm text-brand-black"
              >
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="checkout-phone"
                value={contact.phone}
                onChange={(e) => {
                  setContact((p) => ({ ...p, phone: e.target.value }));
                  setErrors((p) => ({ ...p, phone: undefined }));
                }}
                placeholder="+91 XXXXX XXXXX"
                type="tel"
                className={`rounded-xl font-inter ${errors.phone ? "border-red-400" : ""}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs font-inter">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="checkout-address"
                className="font-poppins font-600 text-sm text-brand-black"
              >
                Delivery Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="checkout-address"
                value={contact.address}
                onChange={(e) => {
                  setContact((p) => ({ ...p, address: e.target.value }));
                  setErrors((p) => ({ ...p, address: undefined }));
                }}
                placeholder="House/Flat, Street, City, State, PIN"
                className={`rounded-xl font-inter ${errors.address ? "border-red-400" : ""}`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs font-inter">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Order summary */}
            <div className="bg-brand-gray rounded-xl p-4 border border-brand-gray-mid">
              <p className="font-poppins font-700 text-brand-blue text-sm mb-3">
                Order Summary
              </p>
              <div className="space-y-1.5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-xs font-inter text-brand-gray-text"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-600 text-brand-black">
                      ₹
                      {(item.priceValue * item.quantity).toLocaleString(
                        "en-IN",
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-brand-gray-mid flex justify-between">
                <span className="font-poppins font-700 text-brand-black text-sm">
                  Total
                </span>
                <span className="font-poppins font-800 text-brand-blue text-base">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full yellow-btn py-3 rounded-xl font-poppins font-700 border-0"
              data-ocid="checkout.submit_button"
            >
              Continue to Payment →
            </Button>
          </form>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <RadioGroup
              value={payment}
              onValueChange={setPayment}
              className="space-y-2"
            >
              {paymentMethods.map(({ id, label, desc, icon: Icon }) => (
                <div
                  key={id}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    payment === id
                      ? "border-brand-blue bg-brand-blue/5"
                      : "border-brand-gray-mid bg-brand-gray hover:border-brand-blue/50"
                  }`}
                >
                  <RadioGroupItem value={id} id={id} className="shrink-0" />
                  <Label
                    htmlFor={id}
                    className="flex items-center gap-3 flex-1 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-poppins font-700 text-brand-black text-sm">
                        {label}
                      </p>
                      <p className="text-brand-gray-text text-xs font-inter">
                        {desc}
                      </p>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-xl font-poppins font-600"
                onClick={() => setStep(1)}
              >
                ← Back
              </Button>
              <Button
                type="submit"
                className="flex-1 yellow-btn rounded-xl font-poppins font-700 border-0"
                data-ocid="checkout.submit_button"
              >
                Place Order
              </Button>
            </div>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div
            className="flex flex-col items-center justify-center py-6 text-center"
            data-ocid="checkout.success_state"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="font-poppins font-800 text-brand-blue text-xl mb-2">
              Order Placed!
            </h3>
            <p className="text-brand-gray-text font-inter text-sm mb-1">
              Thank you, <strong>{contact.name}</strong>!
            </p>
            <p className="text-brand-gray-text font-inter text-sm mb-6">
              We'll confirm your order on <strong>{contact.phone}</strong>{" "}
              shortly.
            </p>
            <div className="w-full bg-brand-gray rounded-xl p-4 border border-brand-gray-mid mb-6 text-left">
              <p className="text-xs font-poppins font-700 text-brand-blue uppercase tracking-wide mb-2">
                Delivery to
              </p>
              <p className="text-sm font-inter text-brand-black">
                {contact.address}
              </p>
            </div>
            <Button
              type="button"
              className="yellow-btn px-8 py-3 rounded-xl font-poppins font-700 border-0"
              onClick={handleClose}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
