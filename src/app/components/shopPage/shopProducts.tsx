import React from "react";
import Image from "next/image";
import pic from "../../../../public/images/pic.png";
import pic1 from "../../../../public/images/pic1.png";
import pic2 from "../../../../public/images/pic2.png";
import pic3 from "../../../../public/images/pic3.png";
import coffee from "../../../../public/shopImages/coffee.png";
import Kent from "../../../../public/shopImages/Kent.png";
import round from "../../../../public/shopImages/round.png";
import teak from "../../../../public/shopImages/teak.png";

import img1 from '../../../../public/shopImages/1.png';
import img2 from '../../../../public/shopImages/2.png';
import img3 from '../../../../public/shopImages/3.png';
import img4 from '../../../../public/shopImages/4.png';
import img5 from '../../../../public/shopImages/5.png';
import img6 from '../../../../public/shopImages/6.png';
import img7 from '../../../../public/shopImages/7.png';
import img8 from '../../../../public/shopImages/8.png';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ShopProducts = () => (
  <>
    <div className="p-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Dynamic Product Rendering */}
        {[ 
          { img: pic, name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
          { img: pic1, name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
          { img: pic2, name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
          { img: pic3, name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
          { img: coffee, name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
          { img: Kent, name: "Kent coffee table", price: "Rs. 225,000.00" },
          { img: round, name: "Round coffee table_color 2", price: "Rs. 251,000.00" },
          { img: teak, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00" },
          { img: img1, name: "Plain console_", price: "Rs. 258,200.00" },
          { img: img2, name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00" },
          { img: img3, name: "SJP_0825", price: "Rs. 200,000.00" },
          { img: img4, name: "Bella chair and table", price: "Rs. 100,000.00" },
          { img: img5, name: "Granite square side table", price: "Rs. 258,800.00" },
          { img: img6, name: "Asgaard sofa", price: "Rs. 250,000.00" },
          { img: img7, name: "Maya sofa three seater", price: "Rs. 115,000.00" },
          { img: img8, name: "Outdoor sofa set", price: "Rs. 244,000.00" },
        ].map((product, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow rounded-lg p-4">
            <Image
              src={product.img}
              height={287}
              width={287}
              alt={product.name}
              className="rounded-lg"
            />
            <h5 className="text-[14px] md:text-[16px] text-gray-700 mt-4 text-center">
              {product.name}
            </h5>
            <h1 className="text-[18px] md:text-[24px] text-black">
              {product.price}
            </h1>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Link href={"#"}>
          <Button variant="ghost" className="text-gray-700 hover:text-black bg-Mybackgroundcolor">1</Button>
        </Link>
        <Link href={"#"}>
          <Button variant="ghost" className="text-gray-700 hover:text-black">2</Button>
        </Link>
        <Link href={"#"}>
          <Button variant="ghost" className="text-gray-700 hover:text-black">3</Button>
        </Link>
        <Link href={"#"}>
          <Button variant="ghost" className="text-gray-700 hover:text-black">Next</Button>
        </Link>
      </div>
    </div>
  </>
);

export default ShopProducts;
