import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartProducts = () => {
  return (
    <>
      <div
        className={`${poppins.className} flex justify-center items-center p-4 sm:p-6`}
      >
        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {/* Header Row */}
            <div className="w-full flex justify-between items-center mb-6 px-4">
              <h1 className="text-[16px] font-medium">Product</h1>
              <h1 className="text-[16px] font-medium">Price</h1>
              <h1 className="text-[16px] font-medium">Quantity</h1>
              <h1 className="text-[16px] font-medium">Subtotal</h1>
            </div>

            {/* Product Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4">
              <div className="sm:mr-4">
                <Image
                  src={"/sofaChair.png"}
                  width={106}
                  height={106}
                  alt="Picture"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                <h1 className="text-[16px] font-medium text-slate-400">
                  Asgaard sofa
                </h1>
                <h1 className="text-[16px] font-medium text-slate-400">
                  Rs. 250,000.00
                </h1>
                <Button
                  variant={"outline"}
                  className="rounded text-slate-400 px-4 py-1"
                >
                  1
                </Button>
                <h1 className="text-[16px] font-medium text-slate-900">
                  Rs. 250,000.00
                </h1>
              </div>
              <Trash className="text-[#FBEBB5] sm:ml-4" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 bg-[#FFF9E5] flex flex-col justify-center items-center py-6 px-4 rounded-lg shadow-md">
            <h1 className="text-[24px] md:text-[32px] font-semibold mb-8">
              Cart Totals
            </h1>
            <div className="flex justify-between items-center w-full px-4 mb-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] font-medium">Subtotal</h1>
                <h1 className="text-[16px] font-medium">Total</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] font-medium">Rs. 250,000.00</h1>
                <h1 className="text-[16px] font-semibold text-[#B88E2F]">
                  Rs. 250,000.00
                </h1>
              </div>
            </div>
            <Link href={"/components/checkOutPage"}>
              <Button
                variant={"outline"}
                className="text-[16px] md:text-[20px] w-full max-w-[222px] h-[58.95px] rounded-xl"
              >
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
