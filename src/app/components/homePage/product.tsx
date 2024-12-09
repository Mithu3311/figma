import Image from "next/image";
import React from "react";
import Table from "../../../../public/table.png";
import Table2 from "../../../../public/sofa.png";
import { poppins } from "../../ui/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Product = () => {
  return (
    <div
      className={`${poppins.className} bg-[#FAF4F4] flex flex-col md:flex-row w-full h-auto justify-between items-center p-4 gap-8`}
    >
      {/* First Product Section */}
      <div className="h-auto md:h-[562px] w-full md:w-[48%] flex flex-col md:justify-start justify-center items-center">
        <Image
          src={Table}
          height={562}
          width={605}
          alt="Side table"
          className="w-full h-auto rounded-md"
        />
        <h1 className="text-[20px] md:text-[36px] text-black mt-4">Side Table</h1>
        <Link href="#">
          <Button variant={"ghost"} className="underline mt-2 text-[16px]">
            View More
          </Button>
        </Link>
      </div>

      {/* Second Product Section */}
      <div className="h-auto md:h-[562px] w-full md:w-[48%] flex flex-col justify-start items-center">
        <Image
          src={Table2}
          height={562}
          width={605}
          alt="Sofa"
          className="w-full h-auto rounded-md"
        />
        <h1 className="text-[20px] md:text-[36px] text-black mt-4">Sofa</h1>
        <Link href="#">
          <Button variant={"ghost"} className="underline mt-2 text-[16px]">
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
