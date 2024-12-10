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
        className={`${poppins.className} flex justify-center items-center p-6`}
      >
        <div className="w-[1240px] h-[390px] flex justify-start items-start">
          {/* Left Section */}
          <div className="w-[817px] h-[216px] flex justify-evenly flex-col">
            <div className="w-[817px] h-[55px] flex justify-evenly items-center pl-16">
              <h1 className="text-[16px] font-medium">Product</h1>
              <h1 className="text-[16px] font-medium">Price</h1>
              <h1 className="text-[16px] font-medium">Quantity</h1>
              <h1 className="text-[16px] font-medium">Subtotal</h1>
            </div>
            <div className="flex items-center justify-start">
              <div className="mr-14">
                <Image
                  src={"/sofaChair.png"}
                  width={106}
                  height={106}
                  alt="Picture"
                />
              </div>
              <div className="w-[573px] h-[25px] flex flex-row justify-between items-center">
                <h1 className="text-[16px] font-medium text-slate-400">
                  Asgaard sofa
                </h1>
                <h1 className="text-[16px] font-medium text-slate-400">
                  Rs. 250,000.00
                </h1>
                <Button variant={"outline"} className="rounded text-slate-400">
                  1
                </Button>
                <h1 className="text-[16px] font-medium text-slate-900">
                  Rs. 250,000.00
                </h1>
              </div>
              <Trash className="ml-8 fill-[#FBEBB5] text-[#FBEBB5]"/>
            </div>
          </div>

          {/* Right Section */}

          <div className="w-[393px] h-[390px] flex justify-start flex-col items-center bg-[#FFF9E5]">
            <h1 className="text-[32px] text-black font-semibold mb-20">Cart Totals</h1>
                <div className="flex justify-evenly items-start w-[393px]">
                    <div className="flex items-start justify-start flex-col gap-4">
                        <h1 className="text-[16px] font-medium">Subtotal</h1>
                        <h1 className="text-[16px] font-medium">Total</h1>
                    </div>

                    <div className="flex items-start justify-start flex-col gap-4">
                        <h1 className="text-[16px] font-medium">Rs. 250,000.00</h1>
                        <h1 className="text-[16px] font-semibold text-[#B88E2F]">Rs. 250,000.00</h1>
                    </div>
                </div>
                <Link href={'/components/checkOutPage'}>
                <Button variant={'outline'} className="text-[20px] h-[58.95px] w-[222px] rounded-xl mt-11">Check Out</Button>
                </Link>
                
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
