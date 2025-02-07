import { notFound } from "next/navigation";
import { productById } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import ProductDetails from "../../ProductDetails";
import RelatedProducts from "../relatedProducts";

// Define the product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stockLevel: number;
}

// Ensure correct type for dynamic route parameters
interface Props {
  params: {
    productId: string; // Matches the [productId] dynamic segment
  };
}

// Explicitly define async rendering for the page
export default async function SingleProductPage({ params }: Props) {
  const { productId } = params;

  // Fetch the product data from Sanity
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id: productId },
  });

  // Handle product not found
  if (!product) {
    notFound();
  }

  // Render the product details and related products
  return (
    <div className="px-4 sm:px-8">
      <ProductDetails product={product} />
      <RelatedProducts />
    </div>
  );
}