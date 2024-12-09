import Image from "next/image";
import React from "react";
import Sofa from "../../../../public/images/pic4.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { poppins } from "../../ui/fonts";

const ProductsCard1 = () => {
  return (
    <>
      <div className="bg-sofabg flex flex-col md:flex-row justify-evenly w-full h-auto items-center p-4 gap-8">
        {/* Sofa Image Section */}
        <div className="w-full md:w-[50%] flex justify-center">
          <Image
            src={Sofa}
            width={783}
            height={599}
            alt="Sofa"
            className="w-full md:w-auto h-auto"
          />
        </div>

        {/* Text and Button Section */}
        <div
          className={`${poppins.className} text-center md:text-left text-[20px] font-normal flex flex-col items-center md:items-center justify-center`}
        >
          <h3 className="text-[18px] md:text-[24px]">New Arrivals</h3>
          <h1 className="text-[36px] md:text-[48px] font-bold mt-2">Asgaard Sofa</h1>
          <Link href="#" className="mt-4">
            <Button variant={"outline"} className="w-[180px] md:w-[255px]">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductsCard1;
