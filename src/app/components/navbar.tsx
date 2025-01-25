import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mdiAccount from "../../../public/mdiAccountAlert.svg";
import search from "../../../public/search.svg";
import heart from "../../../public/heartIcon.svg";
import cart from "../../../public/shoppingCart.svg";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/components/shop", label: "Shop" },
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
        <Link href={"/components/cartPage"}>
          <Button variant={"link"}>
            <Image width={24} height={24} src={cart} alt="Favorites" />
          </Button>
        </Link>
      </div>     
    </div>
  );
};

export default Navbar;
