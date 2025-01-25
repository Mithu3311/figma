"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Rating from "@/app/components/rating";
import { poppins } from "@/app/ui/fonts";
import { ChevronRight } from "lucide-react";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stockLevel: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type Props = {
  product: Product;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false); // Ensure client-side rendering

  // Ensure the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    if (mounted) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, [mounted]);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const handleRatingChange = (rating: number) => {
    console.log("User selected rating:", rating);
  };

  const addToCart = () => {
    const existingItem = cart.find((item) => item.product._id === product._id);

    if (existingItem) {
      // Update quantity if product already exists in the cart
      const updatedCart = cart.map((item) =>
        item.product._id === product._id
          ? { ...item, quantity: item.quantity + count }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add new product to the cart
      setCart([...cart, { product, quantity: count }]);
    }

    alert(`${product.name} has been added to the cart!`);
  };

  if (!mounted) {
    // Avoid rendering until hydration completes
    return null;
  }

  return (
    <>
      <div>
        <div className={`${poppins.className} w-full bg-componentbg p-4`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter Section */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4">
              <Link href="/">
                <Button className="text-[10px] md:text-sm">Home</Button>
              </Link>
              <Button
                className="h-[20px] md:h-[24px] w-[20px] md:w-[24px] p-0"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Link href="/components/shop">
                <Button className="text-[10px] md:text-sm">Shop</Button>
              </Link>
              <Button
                className="h-[20px] md:h-[24px] w-[20px] md:w-[24px] p-0"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <h1 className="text-[10px] md:text-[16px] text-gray-600 truncate max-w-[150px] md:max-w-none">
                {product.category}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[500px] aspect-square relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">{product.name}</h1>
          <h1 className="text-lg md:text-xl lg:text-2xl mt-2">${product.price}</h1>
          <div className="flex items-center mt-4">
            <Rating maxRating={5} initialRating={3} onRate={handleRatingChange} />
            <h5 className="text-gray-700 pl-4 text-sm md:text-base">
              5 Customer Reviews
            </h5>
          </div>
          <p className="text-sm md:text-base lg:text-lg mt-4 lg:w-[75%]">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-2 text-lg font-medium"
              >
                -
              </button>
              <span className="px-4">{count}</span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="px-3 py-2 text-lg font-medium"
              >
                +
              </button>
            </div>
            <Button
              variant="outline"
              className="ml-4 px-6 py-3 text-lg rounded-lg"
              onClick={addToCart}
            >
              Add To Cart
            </Button>
          </div>

          {/* Details */}
          <div className="mt-6 flex flex-col gap-2 text-sm md:text-base">
            <div className="flex">
              <span className="w-24">IN STOCK:</span>
              <span>{product.stockLevel}</span>
            </div>
            <div className="flex">
              <span className="w-24">CATEGORY:</span>
              <span>{product.category}</span>
            </div>
            <div className="flex">
              <span className="w-24">SHARE:</span>
              <div className="flex gap-4">
                <Link target="_blank" href={"https://www.facebook.com/"}>
                  <FacebookIcon className="w-6 h-6 text-blue-600" />
                </Link>
                <Link target="_blank" href={"https://www.linkedin.com/"}>
                  <LinkedinIcon className="w-6 h-6 text-blue-700" />
                </Link>
                <Link target="_blank" href={"https://x.com/?lang=en"}>
                  <TwitterIcon className="w-6 h-6 text-blue-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
