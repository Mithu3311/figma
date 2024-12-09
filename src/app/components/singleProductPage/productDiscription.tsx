import Image from "next/image";
import React from "react";
import { poppins } from "@/app/ui/fonts";
import pic9 from "../../../../public/singleProductPage/9.png";

const ProductDiscriptionPage = () => {
  return (
    <div className={`${poppins.className} px-4 sm:px-8`}>
      {/* Main Container */}
      <div className="w-full bg-white flex flex-col items-center">
        {/* Tabs Section */}
        <div className="w-full lg:w-[80%] flex flex-wrap justify-around items-center mb-10 mt-8">
          <h1 className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
            Description
          </h1>
          <h1 className="text-gray-700 text-sm sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
            Additional Information
          </h1>
          <h1 className="text-gray-700 text-sm sm:text-lg md:text-xl lg:text-2xl cursor-pointer">
            Reviews [5]
          </h1>
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-[80%] px-4 md:px-6">
          <p className="text-sm md:text-base lg:text-lg text-gray-800 mb-5">
            Embodying the raw, wayward spirit of rock n roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-800">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences, while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 px-4">
          <Image
            src={pic9}
            width={300}
            height={200}
            alt="Sofa"
            className="w-full sm:w-[45%] md:w-[40%] lg:w-[35%]"
          />
          <Image
            src={pic9}
            width={300}
            height={200}
            alt="Sofa"
            className="w-full sm:w-[45%] md:w-[40%] lg:w-[35%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDiscriptionPage;
