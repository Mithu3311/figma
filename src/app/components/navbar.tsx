import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mdiAccount from "../../../public/mdiAccountAlert.svg";
import search from "../../../public/search.svg";
import heart from "../../../public/heartIcon.svg";
import cart from "../../../public/shoppingCart.svg";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const navLinks = [
  { href: "/", label: "Home" },
  { href: "./components/shopPage", label: "Shop" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className={`${poppins.className} w-full bg-Mybackgroundcolor flex p-4 justify-evenly items-center m-0`}>
      {/* Logo */}
      <h1 className="text-xl font-bold w-[247px]"></h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-black font-medium text-[16px] hover:text-gray-700"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Icons */}
      <div className="hidden md:flex gap-4">
        <Button variant={"link"}>
          <Image width={24} height={24} src={mdiAccount} alt="Account" />
        </Button>
        <Button variant={"link"}>
          <Image width={24} height={24} src={search} alt="Search" />
        </Button>
        <Button variant={"link"}>
          <Image width={24} height={24} src={heart} alt="Favorites" />
        </Button>
        <Button variant={"link"}>
          <Image width={24} height={24} src={cart} alt="Cart" />
        </Button>
      </div>

      {/* Responsive */}
      <Sheet>
        <SheetTrigger className="flex md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col md:hidden gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black font-medium text-[16px] hover:text-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex md:hidden gap-4 mt-3">
            <Button variant={"link"}>
              <Image width={24} height={24} src={mdiAccount} alt="Account" />
            </Button>
            <Button variant={"link"}>
              <Image width={24} height={24} src={search} alt="Search" />
            </Button>
            <Button variant={"link"}>
              <Image width={24} height={24} src={heart} alt="Favorites" />
            </Button>
            <Button variant={"link"}>
              <Image width={24} height={24} src={cart} alt="Cart" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
