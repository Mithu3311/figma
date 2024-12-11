import React from "react";
import { poppins } from "@/app/ui/fonts";
import Image from "next/image";
import pic5 from "../../../../public/images/pic5.png";
import pic6 from "../../../../public/images/pic6.png";
import pic7 from "../../../../public/images/pic7.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const OurBlog = () => {
  return (
    <div className={`${poppins.className} bg-[#FFFFFF] w-full py-10`}>
      {/* Heading Section */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-[24px] md:text-[36px] font-normal mb-2 mt-10">
          Our Blogs
        </h1>
        <p className="text-[14px] md:text-[16px] text-gray-500">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blogs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Blog Card 1 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
          <Image
            src={pic5}
            height={250}
            width={250}
            alt="Design"
            className="rounded-lg mb-4"
          />
          <h1 className="text-[18px] font-medium mb-2">
            Going all-in with millennial design
          </h1>
          <Link href="#" className="mb-4">
            <Button variant={"link"} className="underline">
              Read More
            </Button>
          </Link>
          <div className="flex justify-center items-center gap-4 text-gray-500 text-[14px]">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <p>5 min</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <p>12th Oct 2022</p>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
          <Image
            src={pic6}
            height={250}
            width={250}
            alt="Design"
            className="rounded-lg mb-4"
          />
          <h1 className="text-[18px] font-medium mb-2">
            Exploring modern Scandinavian styles
          </h1>
          <Link href="#" className="mb-4">
            <Button variant={"link"} className="underline">
              Read More
            </Button>
          </Link>
          <div className="flex justify-center items-center gap-4 text-gray-500 text-[14px]">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <p>5 min</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <p>15th Nov 2022</p>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
          <Image
            src={pic7}
            height={250}
            width={250}
            alt="Design"
            className="rounded-lg mb-4"
          />
          <h1 className="text-[18px] font-medium mb-2">
            Minimalist furniture for your home
          </h1>
          <Link href="#" className="mb-4">
            <Button variant={"link"} className="underline">
              Read More
            </Button>
          </Link>
          <div className="flex justify-center items-center gap-4 text-gray-500 text-[14px]">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <p>5 min</p>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <p>20th Dec 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link href="/components/blogPage">
          <Button variant={"link"} className="underline">
            View All Posts
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurBlog;
