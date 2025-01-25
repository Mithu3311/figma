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

// Correct the type for props
interface SingleProductPageProps {
  params: { productId: string }; // Ensure `productId` is explicitly typed
}

export default async function SingleProductPage({
  params,
}: SingleProductPageProps) {
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
      <RelatedProducts />
    </div>
  );
}

// Required function to define dynamic routes
export async function generateStaticParams() {
  const products: Product[] = await sanityFetch({
    query: `*[_type == "product"]{ _id }`, // Fetch all product IDs
  });

  return products.map((product) => ({
    productId: product._id, // Ensure this matches the `[productId]` route
  }));
}
