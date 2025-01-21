import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";
import HomePage from "./components/homePage/page";
import { allProduct } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allProduct });
  return (
    <div>
      <HomePage />
      <h1 className="justify-center items-center text-center font-bold text-5xl">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id} // Unique key added here
            className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
          >
            <Image
              src={product.imageUrl}
              alt={product.name} // Use product name for alt text
              width={500}
              height={500}
              className="rounded-md"
            />
            <h2 className="text-xl font-bold text-center mt-2">
              {product.name}
            </h2>
            <p className="text-center text-gray-600">{product.description}</p>
            <p className="text-center text-lg font-semibold text-green-600">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}