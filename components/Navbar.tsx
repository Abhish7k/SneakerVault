"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <div className="top-0 sticky z-10 bg-white mb-10 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl transition-all duration-300">
        <div className="flex gap-8 items-end">
          {/* logo */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-semibold uppercase transition-all duration-300">
              SneakerVault
            </h1>
          </Link>

          <div className="flex items-center gap-10">
            {/* nav links */}
            <nav className="hidden gap-4 lg:flex">
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathname === link.href ? (
                    <Link href={link.href} className="font-medium text-black">
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-medium text-gray-600 hover:text-black transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* cart */}
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2"
          onClick={() => handleCartClick()}
        >
          <ShoppingBag className="w-4" />
          <span className="hidden text-lg font-semibold sm:block">Cart</span>
          <span className="-ml-1 mt-0.5">
            {cartCount && cartCount > 0 ? <span>({cartCount})</span> : ""}
          </span>
        </Button>
      </div>
    </div>
  );
}
