"use client";
import Image from "next/image";
import pic1 from "../../../../public/singleProductPage/1.png";
import pic2 from "../../../../public/singleProductPage/2.png";
import pic3 from "../../../../public/singleProductPage/3.png";
import pic4 from "../../../../public/singleProductPage/4.png";
import pic5 from "../../../../public/singleProductPage/5.png";
import React from "react";
import Rating from "@/app/components/rating";
import { poppins } from "@/app/ui/fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const handleRatingChange = (rating: number) => {
    console.log("User selected rating:", rating);
  };
  return (
    <div className={`${poppins.className} px-4 sm:px-8`}>
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center lg:items-start lg:w-1/2">
          <div className="flex flex-row md:flex-col space-y-2 md:space-y-4 md:mr-4">
            <Image
              src={pic1}
              alt="Picture"
              className="h-20 w-20 md:h-32 md:w-32"
            />
            <Image
              src={pic2}
              alt="Picture"
              className="h-20 w-20 md:h-32 md:w-32"
            />
            <Image
              src={pic3}
              alt="Picture"
              className="h-20 w-20 md:h-32 md:w-32"
            />
            <Image
              src={pic4}
              alt="Picture"
              className="h-20 w-20 md:h-32 md:w-32"
            />
          </div>
          <div>
            <Image
              src={pic5}
              height={500}
              width={481}
              alt="Sofa Picture"
              className="w-full lg:max-w-[481px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Asgaard Sofa</h1>
          <h1 className="text-lg md:text-xl lg:text-2xl mt-2">
            Rs. 250,000.00
          </h1>
          <div className="flex items-center mt-4">
            <Rating
              maxRating={5}
              initialRating={3}
              onRate={handleRatingChange}
            />
            <h5 className="text-gray-700 pl-4 text-sm md:text-base">
              5 Customer Reviews
            </h5>
          </div>
          <p className="text-sm md:text-base lg:text-lg mt-4 lg:w-[75%]">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            that boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="mt-6">
            <h5 className="text-gray-700 text-sm md:text-base">Size</h5>
            <div className="flex gap-2 mt-2">
              <Button variant="ghost" className="text-gray-700 text-sm">
                L
              </Button>
              <Button variant="ghost" className="text-gray-700 text-sm">
                XL
              </Button>
              <Button variant="ghost" className="text-gray-700 text-sm">
                XS
              </Button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-6">
            <h5 className="text-gray-700 text-sm md:text-base">Color</h5>
            <div className="flex gap-4 mt-2">
              <label className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  name="color"
                  value="red"
                  className="absolute h-full w-full opacity-0 cursor-pointer peer"
                />
                <span
                  style={{ backgroundColor: "#816DFA" }}
                  className="block h-8 w-8 rounded-full border border-gray-300 peer-checked:ring-4 peer-checked:ring-slate-500"
                ></span>
              </label>
              <label className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  name="color"
                  value="blue"
                  className="absolute h-full w-full opacity-0 cursor-pointer peer"
                />
                <span
                  style={{ backgroundColor: "#000000" }}
                  className="block h-8 w-8 rounded-full border border-gray-300 peer-checked:ring-4 peer-checked:ring-slate-500"
                ></span>
              </label>
              <label className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  name="color"
                  value="green"
                  className="absolute h-full w-full opacity-0 cursor-pointer peer"
                />
                <span
                  style={{ backgroundColor: "#CDBA7B" }}
                  className="block h-8 w-8 rounded-full border border-gray-300 peer-checked:ring-4 peer-checked:ring-slate-500"
                ></span>
              </label>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setCount(count - 1)}
                className="px-3 py-2 text-lg font-medium"
              >
                -
              </button>
              <span className="px-4">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-3 py-2 text-lg font-medium"
              >
                +
              </button>
            </div>
            <Button
              variant="outline"
              className="ml-4 px-6 py-3 text-lg rounded-lg"
            >
              Add To Cart
            </Button>
          </div>

          {/* Details */}
          <div className="mt-6 flex flex-col gap-2 text-sm md:text-base">
            <div className="flex">
              <span className="w-24">SKU:</span>
              <span>SS001</span>
            </div>
            <div className="flex">
              <span className="w-24">Category:</span>
              <span>Sofas</span>
            </div>
            <div className="flex">
              <span className="w-24">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex">
              <span className="w-24">Share:</span>
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
    </div>
  );
};

export default SingleProduct;
