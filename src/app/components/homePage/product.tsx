import Image from "next/image";
import React from "react";
import { poppins } from "../../ui/fonts";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { threePro } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const Product = async () => {
   const products: Product[] = await sanityFetch({ query: threePro });
  return (
    <div
      className={`${poppins.className} bg-[#FAF4F4] flex flex-col md:flex-row w-full h-auto justify-between items-center p-4 gap-8`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center px-4">
        {products.map((product) => (
          <Link key={product._id} href={`/components/shop/${product._id}`}>
            <div className="flex flex-col items-center cursor-pointer group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={287}
                  height={287}
                  className="w-[287px] h-[287px] object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-bold text-center mt-2">{product.name}</h2>
              <p className="text-[14px] md:text-[16px] text-black mt-4 text-center">
                {product.description}
              </p>
              <p className="text-[18px] md:text-[24px] text-black">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
