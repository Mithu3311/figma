import { poppins } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import {
  GalleryVertical,
  LayoutGridIcon,
  SlidersHorizontal,
} from 'lucide-react';
import React from 'react';

type ShopBarProps = {
  onFilter: (type: string) => void;
  onSort: (order: string) => void;
};

const ShopBar: React.FC<ShopBarProps> = ({ onFilter, onSort }) => {
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
            <Button
              className="text-[12px] md:text-[16px]"
              onClick={() => onFilter('high')}
            >
              High Price
            </Button>
            <Button
              className="text-[12px] md:text-[16px]"
              onClick={() => onFilter('low')}
            >
              Low Price
            </Button>
            <Button className="h-[24px] w-[24px] p-0">
              <LayoutGridIcon />
            </Button>
            <Button className="h-[24px] w-[24px] p-0">
              <GalleryVertical />
            </Button>
            <h1 className="text-[12px] md:text-[16px] text-gray-600">
              Showing Results
            </h1>
          </div>

          {/* Sort Section */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-[14px] md:text-[16px]"
                onClick={() => onSort('asc')}
              >
                Sort: Low to High
              </Button>
              <Button
                variant="ghost"
                className="text-[14px] md:text-[16px]"
                onClick={() => onSort('desc')}
              >
                Sort: High to Low
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBar;
