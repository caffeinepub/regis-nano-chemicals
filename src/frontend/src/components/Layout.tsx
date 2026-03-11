import { Outlet } from "@tanstack/react-router";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
