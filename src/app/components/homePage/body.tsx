import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Body = () => {
  return (
    <div
      className={`${poppins.className} w-full md:w-full bg-Mybackgroundcolor flex flex-col md:flex-row p-4 justify-between items-center`}
    >
      {/* Text Section */}
      <div className="w-full md:w-[440px] h-auto text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-[32px] md:text-[64px] leading-tight">
          Rocket single seater
        </h1>
        <Button variant={"link"} className="text-[18px] md:text-[24px] underline mt-4">
          Shop Now
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-auto flex justify-center">
        <Image
          src={"chair.svg"}
          width={853}
          height={100}
          alt="Chair Picture"
          className="w-[90%] md:w-auto h-auto md:h-[1000px] transform"
        />
      </div>
    </div>
  );
};

export default Body;
