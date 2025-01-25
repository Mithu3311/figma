import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { productById } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import ProductDetails from "../../ProductDetails";
import RelatedProducts from "../relatedProducts";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stockLevel: number;
};

type Props = {
  params: { productId: string };
};

export default async function SingleProductPage({ params }: Props) {
  // Fetch product data
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id: params.productId },
  });

  // If product is not found, show 404
  if (!product) {
    notFound();
  }

  return (
    <div className="px-4 sm:px-8">
      <ProductDetails product={product} />
      <RelatedProducts/>
    </div>
  );
}
