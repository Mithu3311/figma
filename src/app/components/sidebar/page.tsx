import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/components/shopPage", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/components/contactPage", label: "Contact" },
  ];

  return (
    <div>
      {/* Sidebar Trigger */}
      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer text-gray-800 w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] bg-gray-50 text-black">
          {/* Sidebar Header */}
          <SheetHeader>
            <div className="flex justify-between items-center">
              <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
              <SheetTrigger>
                <X className="cursor-pointer w-6 h-6 text-gray-800" />
              </SheetTrigger>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <ul className="mt-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-lg text-gray-700 hover:text-gray-900 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Additional Content */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">Other content goes here...</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
