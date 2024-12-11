import React from "react";
import { poppins } from "../../ui/fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Instagram = () => {
  return (
    <>
      <div
        className={`${poppins.className} flex flex-col justify-center items-center py-8 w-full h-[450px]`}
      >
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold mb-2">
            Our Instagram
          </h1>
          <p className="text-[16px] md:text-[20px] text-gray-600">
            Follow our store on Instagram
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-6">
          <Link href={"https://www.instagram.com/"}>
            <Button
              variant={"ghost"}
              className="w-[200px] md:w-[255px] h-[48px] md:h-[64px] bg-componentbg shadow-lg rounded-full flex items-center justify-center text-center"
            >
              Follow Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Instagram;
