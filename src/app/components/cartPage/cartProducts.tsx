"use client";

import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const CartProducts = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Function to add products to the cart
  const handleAddToCart = (newProduct: Product, quantity: number = 1) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.product._id === newProduct._id
      );

      let updatedCart;
      if (existingItemIndex > -1) {
        // If the product already exists, update its quantity
        updatedCart = [...prevCartItems];
        updatedCart[existingItemIndex].quantity += quantity;
      } else {
        // If the product doesn't exist, add it to the cart
        updatedCart = [...prevCartItems, { product: newProduct, quantity }];
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter(
      (item) => item.product._id !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate subtotal of the cart
  const calculateSubtotal = () =>
    cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

  if (!isClient) return null;

  return (
    <div
      className={`${poppins.className} flex justify-center items-center p-4 sm:p-6`}
    >
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-8">
        {/* Left Section: List of Products in Cart */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="w-full flex justify-between items-center mb-6 px-4">
            <h1 className="text-[16px] font-medium">Product</h1>
            <h1 className="text-[16px] font-medium">Price</h1>
            <h1 className="text-[16px] font-medium">Quantity</h1>
            <h1 className="text-[16px] font-medium">Subtotal</h1>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.product._id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4 mb-4"
              >
                {/* Product Image */}
                <div className="sm:mr-4 flex-shrink-0">
                  <Image
                    src={item.product.imageUrl}
                    width={100}
                    height={100}
                    alt={item.product.name}
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                  <h1 className="text-[16px] font-medium text-slate-400">
                    {item.product.name}
                  </h1>
                  <h1 className="text-[16px] font-medium text-slate-400">
                    $ {item.product.price.toLocaleString()}
                  </h1>
                  <Button
                    variant={"outline"}
                    className="rounded text-slate-400 px-4 py-1"
                  >
                    {item.quantity}
                  </Button>
                  <h1 className="text-[16px] font-medium text-slate-900">
                    $ {(item.product.price * item.quantity).toLocaleString()}
                  </h1>
                </div>

                {/* Delete Button */}
                <div className="flex items-center justify-center sm:ml-4">
                  <Trash
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    size={24}
                    onClick={() => handleRemoveItem(item.product._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Right Section: Cart Totals */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 bg-[#FFF9E5] flex flex-col justify-center items-center py-6 px-4 rounded-lg shadow-md">
            <h1 className="text-[24px] md:text-[32px] font-semibold mb-8">
              Cart Totals
            </h1>
            <div className="flex justify-between items-center w-full px-4 mb-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] font-medium">Subtotal</h1>
                <h1 className="text-[16px] font-medium">Total</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] font-medium">
                  $ {calculateSubtotal().toLocaleString()}
                </h1>
                <h1 className="text-[16px] font-semibold text-[#B88E2F]">
                  $ {calculateSubtotal().toLocaleString()}
                </h1>
              </div>
            </div>
            <Link href={"/components/checkOutPage"}>
              <Button
                variant={"outline"}
                className="text-[16px] md:text-[20px] w-full max-w-[222px] h-[58.95px] rounded-xl"
              >
                Check Out
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
