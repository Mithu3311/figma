import React from "react";
import { poppins } from "../../ui/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { fourPro } from "@/sanity/lib/queries";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};



const ProductsCard = async () => {
  const products: Product[] = await sanityFetch({ query: fourPro });
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center px-4">
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

      {/* Button */}
      <Link href="/components/shop">
        <Button variant="ghost" className="underline text-[16px] md:text-[20px] mt-8">
          View More
        </Button>
      </Link>
    </div>
  );
};

export default ProductsCard;
