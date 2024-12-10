import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mdiAccount from "../../../public/mdiAccountAlert.svg";
import search from "../../../public/search.svg";
import heart from "../../../public/heartIcon.svg";
import cart from "../../../public/shoppingCart.svg";
import { CircleX, Menu } from "lucide-react";
import sofaChair from "../../../public/sofaChair.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/components/shopPage", label: "Shop" },
  { href: "#", label: "About" },
  { href: "/components/contactPage", label: "Contact" },
];

const Navbar = () => {
  return (
    <div
      className={`${poppins.className} w-full bg-Mybackgroundcolor flex flex-wrap p-4 justify-between items-center`}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold w-auto">Logo</h1>

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
      <div className="hidden md:flex gap-4 items-center">
        <Link href={"/components/myAccountPage"}>
          <Button variant={"link"}>
            <Image width={24} height={24} src={mdiAccount} alt="Account" />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant={"link"}>
            <Image width={24} height={24} src={search} alt="Search" />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant={"link"}>
            <Image width={24} height={24} src={heart} alt="Favorites" />
          </Button>
        </Link>

        {/* Add to Cart Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"link"}>
              <Image width={24} height={24} src={cart} alt="Cart" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-full bg-gray-50">
            <SheetHeader className="mt-5">
              <SheetTitle className="text-xl font-semibold">
                Shopping Cart
                <hr className="mt-6" />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 shadow-lg rounded-xl p-3">
                  <Image
                    src={sofaChair}
                    height={105}
                    width={108}
                    alt="Picture"
                    className="w-[80px] h-[80px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[16px] font-normal">Asgaard sofa</h1>
                    <div className="flex gap-2 items-center text-[12px] text-gray-600">
                      <p>1</p>
                      <p>X</p>
                      <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                  </div>
                  <CircleX className="text-gray-600 cursor-pointer" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <h1>Subtotal</h1>
                  <h1>Rs. 250,000.00</h1>
                </div>
                <hr />
                <div className="flex justify-between gap-4">
                  <Button
                    variant={"outline"}
                    className="text-[12px] rounded-full w-[120px] h-[31px]"
                  >
                    View Cart
                  </Button>
                  <Button
                    variant={"outline"}
                    className="text-[12px] rounded-full w-[120px] h-[31px]"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Responsive Menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white w-full">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-4">
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
