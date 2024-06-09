"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

const links = [
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Kids", href: "/Kids" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mb-10 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl transition-all duration-300">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-bold transition-all duration-300">
            Sneaker
            <span className="text-primary">Vault</span>
          </h1>
        </Link>

        <div className="flex items-center gap-10">
          {/* nav links */}
          <nav className="hidden gap-4 lg:flex 2xl:ml-">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-primary"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* cart */}
          <Button className="flex items-center justify-center gap-2 ">
            <ShoppingBag className="w-5" />
            <span className="hidden text-lg font-semibold sm:block ">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
