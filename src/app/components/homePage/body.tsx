import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Body = () => {
  return (
    <div
      className={`${poppins.className} md:w-full bg-Mybackgroundcolor flex flex-col md:flex-row p-6 md:p-12 justify-between items-center gap-8`}
    >
      {/* Text Section */}
      <div className="w-full md:w-[440px] text-center md:text-left">
        <h1 className="text-[32px] md:text-[64px] font-bold leading-tight">
          Rocket Single Seater
        </h1>
        <Button
          variant={"link"}
          className="text-[18px] md:text-[24px] underline mt-6"
        >
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
          className="w-[90%] md:w-auto h-auto md:h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Body;
