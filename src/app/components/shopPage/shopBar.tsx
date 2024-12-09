import { poppins } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import {
  GalleryVertical,
  LayoutGridIcon,
  SlidersHorizontal,
} from 'lucide-react';
import React from 'react';

const ShopBar = () => {
  return (
    <>
      <div className={`${poppins.className} w-full bg-componentbg p-4`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Filter Section */}
          <div className="flex items-center gap-4">
            <Button className="h-[24px] w-[24px] p-0">
              <SlidersHorizontal />
            </Button>
            <h1 className="text-[14px] md:text-[16px] font-medium">Filter</h1>
            <Button className="h-[24px] w-[24px] p-0">
              <LayoutGridIcon />
            </Button>
            <Button className="h-[24px] w-[24px] p-0">
              <GalleryVertical />
            </Button>
            <h1 className="text-[12px] md:text-[16px] text-gray-600">
              Showing 1 to 16 of 32 results
            </h1>
          </div>

          {/* Show and Sort Section */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Show Section */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-[14px] md:text-[16px]">
                Show
              </Button>
              <h2 className="text-[12px] md:text-[16px] text-gray-500">16</h2>
            </div>

            {/* Sort Section */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-[14px] md:text-[16px]">
                Sort by
              </Button>
              <h2 className="text-[12px] md:text-[16px] text-gray-500">
                Default
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBar;
