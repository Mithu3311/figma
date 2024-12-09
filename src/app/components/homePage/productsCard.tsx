import React from "react";
import { poppins } from "../../ui/fonts";
import Image from "next/image";
import pic from "../../../../public/images/pic.png";
import pic1 from "../../../../public/images/pic1.png";
import pic2 from "../../../../public/images/pic2.png";
import pic3 from "../../../../public/images/pic3.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductsCard = () => {
  return (
    <div
      className={`${poppins.className} w-full bg-white flex flex-col items-center px-4 py-8`}
    >
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-[24px] md:text-[36px] font-normal mb-2 mt-20">
          Top Picks For You
        </h1>
        <p className="text-[14px] md:text-[16px] text-gray-600">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <Image
            src={pic}
            height={287}
            width={287}
            alt="modular sofa"
            className="rounded-lg"
          />
          <h5 className="text-[14px] md:text-[16px] text-black mt-4">
            Trenton modular sofa_3
          </h5>
          <h1 className="text-[18px] md:text-[24px] text-black">Rs. 25,000.00</h1>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <Image
            src={pic1}
            height={287}
            width={287}
            alt="Dining Chair"
            className="rounded-lg"
          />
          <h5 className="text-[14px] md:text-[16px] text-black mt-4">
            Granite dining table with dining chair
          </h5>
          <h1 className="text-[18px] md:text-[24px] text-black">Rs. 25,000.00</h1>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <Image
            src={pic2}
            height={287}
            width={287}
            alt="Stool"
            className="rounded-lg"
          />
          <h5 className="text-[14px] md:text-[16px] text-black mt-4">
            Outdoor bar table and stool
          </h5>
          <h1 className="text-[18px] md:text-[24px] text-black">Rs. 25,000.00</h1>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <Image
            src={pic3}
            height={287}
            width={287}
            alt="Teak Mirror"
            className="rounded-lg"
          />
          <h5 className="text-[14px] md:text-[16px] text-black mt-4">
            Plain console with teak mirror
          </h5>
          <h1 className="text-[18px] md:text-[24px] text-black">Rs. 25,000.00</h1>
        </div>
      </div>

      {/* Button */}
      <Link href="#">
        <Button variant="ghost" className="underline text-[16px] md:text-[20px] mt-8">
          View More
        </Button>
      </Link>
    </div>
  );
};

export default ProductsCard;
