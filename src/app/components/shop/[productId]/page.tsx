import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { productById } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type Props = {
  params: { productId: string };
};

export default async function SingleProductPage({ params }: Props) {
  // Fetch product data using params
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id: params.productId }, // Passing params here
  });

  // Handle 404
  if (!product) {
    notFound(); // Show 404 page if product not found
  }

  // Render product details
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700 mt-4">{product.description}</p>
          <p className="text-2xl font-semibold mt-6">${product.price}</p>

          <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
