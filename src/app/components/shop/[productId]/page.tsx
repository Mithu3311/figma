import { notFound } from "next/navigation";
import { productById } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import ProductDetails from "../../ProductDetails";
import RelatedProducts from "../relatedProducts";

// Define the product type
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stockLevel: number;
};

// Define the Props type
interface Props {
  params: {
    productId: string; // Matches the dynamic route [productId]
  };
}

// Define the dynamic rendering mode (optional)
export const dynamic = "force-dynamic";

// Component for the Single Product Page
export default async function SingleProductPage({ params }: Props) {
  const { productId } = params; // Destructure productId from params

  // Fetch product data from Sanity
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id: productId },
  });

  // If product is not found, show 404 page
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
