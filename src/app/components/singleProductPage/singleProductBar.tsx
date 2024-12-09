import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import React from "react";

const SingleProductBar = () => {
  return (
    <>
      <div>
        <div
          className={`${poppins.className} w-full bg-componentbg p-4`}
        >
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Filter Section */}
            <div
              className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4"
            >
              <Link href="/">
                <Button className="text-[10px] md:text-sm">Home</Button>
              </Link>
              <Button
                className="h-[20px] md:h-[24px] w-[20px] md:w-[24px] p-0"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Link href="./shopPage">
                <Button className="text-[10px] md:text-sm">Shop</Button>
              </Link>
              <Button
                className="h-[20px] md:h-[24px] w-[20px] md:w-[24px] p-0"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <h1
                className="text-[10px] md:text-[16px] text-gray-600 truncate max-w-[150px] md:max-w-none"
              >
                Asgaard sofa
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductBar;
