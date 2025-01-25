'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { allProduct } from '@/sanity/lib/queries';
import Header from './header';
import ShopBar from './shopBar';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ShopProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false); // To detect if the component has mounted

  // Fetch products on initial render
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({ query: allProduct });
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Initialize filtered list
    };

    fetchProducts();

    // Set the flag to indicate that the component has mounted
    setIsClient(true);
  }, []);

  // Filter Products
  const handleFilter = (type: string) => {
    if (type === 'high') {
      setFilteredProducts(products.filter((product) => product.price > 50)); // Example: Price > $50
    } else if (type === 'low') {
      setFilteredProducts(products.filter((product) => product.price <= 50)); // Example: Price <= $50
    } else {
      setFilteredProducts(products);
    }
  };

  // Sort Products
  const handleSort = (order: string) => {
    const sorted = [...filteredProducts].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  };

  if (!isClient) {
    // Optionally render loading state or nothing during SSR
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <ShopBar onFilter={handleFilter} onSort={handleSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center px-4">
        {filteredProducts.map((product) => (
          <Link key={product._id} href={`/components/shop/${product._id}`}>
            <div className="flex flex-col items-center cursor-pointer group bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={287}
                  height={287}
                  className="w-[287px] h-[287px] object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-center text-gray-800 mt-2 line-clamp-1">
                  {product.name}
                </h2>
                <p className="text-[14px] md:text-[16px] text-gray-600 mt-4 text-center line-clamp-1">
                  {product.description}
                </p>
                <p className="text-[18px] md:text-[24px] text-center text-blue-900 font-semibold mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
