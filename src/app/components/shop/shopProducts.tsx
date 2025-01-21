// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allProduct } from "@/sanity/lib/queries";

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default async function ShopProducts() {
//   const products: Product[] = await sanityFetch({ query: allProduct });

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
//       {products.map((product) => (
//         <Link key={product._id} href={`/${product._id}`}>
//           <div className="flex flex-col items-center cursor-pointer">
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               width={287}
//               height={287}
//               className="rounded-lg"
//             />
//             <h2 className="text-xl font-bold text-center mt-2">{product.name}</h2>
//             <p className="text-[14px] md:text-[16px] text-black mt-4">{product.description}</p>
//             <p className="text-[18px] md:text-[24px] text-black">${product.price}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
