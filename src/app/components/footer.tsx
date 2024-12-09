import React from "react";
import { poppins } from "../ui/fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <>
      <div className={`${poppins.className} bg-gray-100 w-full py-10`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Address Section */}
          <div className="w-full md:w-1/3">
            <h1 className="text-[16px] mb-4 text-gray-700">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </h1>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 flex flex-wrap gap-8 justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[16px] text-gray-500">Links</h1>
              <Link href={"#"}>
                <Button variant="ghost" className="text-gray-700">Home</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="ghost" className="text-gray-700">Shop</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="ghost" className="text-gray-700">About</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="link" className="text-gray-700">Contact</Button>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-[16px] text-gray-500">Info</h1>
              <Link href={"#"}>
                <Button variant="ghost" className="text-gray-700">Payment Options</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="ghost" className="text-gray-700">Returns</Button>
              </Link>
              <Link href={"#"}>
                <Button variant="ghost" className="text-gray-700">Privacy Policies</Button>
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <h1 className="text-[16px] font-semibold">Newsletter</h1>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Input
                className="h-[40px] w-full sm:w-auto flex-grow"
                placeholder="Enter Your Email Address"
              />
              <Button variant="default" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-[14px]">
          © 2022 Meubel House. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
