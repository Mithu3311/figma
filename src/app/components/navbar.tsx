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
      className={`${poppins.className} w-full bg-Mybackgroundcolor flex p-4 justify-evenly items-center m-0`}
    >
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
          <SheetContent
            side="right"
            className="w-[300px] sm:w-full bg-gray-50 flex flex-col"
          >
            <SheetHeader className="mt-5 px-4">
              <SheetTitle className="text-xl font-semibold">
                Shopping Cart
                <hr className="mt-6" />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 px-4">
              {/* Cart Items */}
              <div className="min-h-full">
                <div className="flex flex-wrap items-center gap-3 shadow-lg rounded-xl p-4 mb-6">
                  <Image
                    src={sofaChair}
                    height={105}
                    width={108}
                    alt="Picture"
                    className="w-[80px] h-[80px] object-cover sm:w-[60px] sm:h-[60px]"
                  />
                  <div className="flex flex-col gap-1 w-full sm:w-auto">
                    <h1 className="text-[16px] font-normal">Asgaard sofa</h1>
                    <div className="flex gap-2 text-[12px] text-gray-600">
                      <p>1</p>
                      <p>X</p>
                      <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                  </div>
                  <CircleX className="fill-slate-700 text-white cursor-pointer sm:ml-auto" />
                </div>
              </div>

              {/* Subtotal Section */}
              <div className="flex justify-between items-center w-full mb-3 px-2 sm:px-0">
                <h1 className="text-[14px] sm:text-[16px]">Subtotal</h1>
                <h1 className="text-[14px] sm:text-[16px] font-semibold">
                  Rs. 250,000.00
                </h1>
              </div>
              <hr />

              {/* Buttons */}
              <div className="flex justify-between items-center gap-3 mt-4">
                <Link href={"/components/cartPage"}>
                  <Button
                    variant={"outline"}
                    className="text-[12px] sm:text-[14px] rounded-full w-[120px] sm:w-[150px] h-[31px] sm:h-[40px]"
                  >
                    View Cart
                  </Button>
                </Link>
                <Link href={"/components/checkOutPage"}>
                  <Button
                    variant={"outline"}
                    className="text-[12px] sm:text-[14px] rounded-full w-[120px] sm:w-[150px] h-[31px] sm:h-[40px]"
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
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
          <div className="flex md:hidden gap-6 mt-3">
            {/* Account Icon */}
            <Link href={"/components/myAccountPage"}>
              <Button variant={"link"} className="p-0">
                <Image
                  width={24}
                  height={24}
                  src={mdiAccount}
                  alt="Account"
                  className="w-6 h-6"
                />
              </Button>
            </Link>

            {/* Search Icon */}
            <Link href={"#"}>
              <Button variant={"link"} className="p-0">
                <Image
                  width={24}
                  height={24}
                  src={search}
                  alt="Search"
                  className="w-6 h-6"
                />
              </Button>
            </Link>

            {/* Favorites Icon */}
            <Link href={"#"}>
              <Button variant={"link"} className="p-0">
                <Image
                  width={24}
                  height={24}
                  src={heart}
                  alt="Favorites"
                  className="w-6 h-6"
                />
              </Button>
            </Link>

            {/* Cart Icon */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"link"} className="p-0">
                  <Image
                    width={24}
                    height={24}
                    src={cart}
                    alt="Cart"
                    className="w-6 h-6"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-full bg-gray-50 flex flex-col"
              >
                {/* Shopping Cart Content */}
                <SheetHeader className="mt-5 px-4">
                  <SheetTitle className="text-xl font-semibold">
                    Shopping Cart
                    <hr className="mt-6" />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 px-4">
                  <div className="min-h-full">
                    <div className="flex flex-wrap items-center gap-3 shadow-lg rounded-xl p-4 mb-6">
                      <Image
                        src={sofaChair}
                        height={105}
                        width={108}
                        alt="Picture"
                        className="w-[80px] h-[80px] object-cover sm:w-[60px] sm:h-[60px]"
                      />
                      <div className="flex flex-col gap-1 w-full sm:w-auto">
                        <h1 className="text-[16px] font-normal">
                          Asgaard sofa
                        </h1>
                        <div className="flex gap-2 text-[12px] text-gray-600">
                          <p>1</p>
                          <p>X</p>
                          <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                        </div>
                      </div>
                      <CircleX className="fill-slate-700 text-white cursor-pointer sm:ml-auto" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-full mb-3 px-2 sm:px-0">
                    <h1 className="text-[14px] sm:text-[16px]">Subtotal</h1>
                    <h1 className="text-[14px] sm:text-[16px] font-semibold">
                      Rs. 250,000.00
                    </h1>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center gap-3 mt-4">
                    <Link href={"/components/cartPage"}>
                      <Button
                        variant={"outline"}
                        className="text-[12px] sm:text-[14px] rounded-full w-[120px] sm:w-[150px] h-[31px] sm:h-[40px]"
                      >
                        View Cart
                      </Button>
                    </Link>
                    <Link href={"/components/checkOutPage"}>
                      <Button
                        variant={"outline"}
                        className="text-[12px] sm:text-[14px] rounded-full w-[120px] sm:w-[150px] h-[31px] sm:h-[40px]"
                      >
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
