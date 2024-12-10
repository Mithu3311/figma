import { poppins } from '@/app/ui/fonts';
import React from 'react';

const DeliveryPolicy = () => {
  return (
    <div className={`${poppins.className} w-full flex flex-wrap justify-center gap-8 p-4`}>
      {/* Free Delivery */}
      <div className="w-full sm:w-[376px] flex flex-col justify-start items-start p-4">
        <h1 className="text-[24px] sm:text-[32px]">Free Delivery</h1>
        <p className="text-[16px] sm:text-[20px] text-gray-700">
          For all orders over $50, consectetur adipiscing elit.
        </p>
      </div>

      {/* 90 Days Return */}
      <div className="w-full sm:w-[376px] flex flex-col justify-start items-start p-4">
        <h1 className="text-[24px] sm:text-[32px]">90 Days Return</h1>
        <p className="text-[16px] sm:text-[20px] text-gray-700">
          If goods have problems, consectetur adipiscing elit.
        </p>
      </div>

      {/* Secure Payment */}
      <div className="w-full sm:w-[376px] flex flex-col justify-start items-start p-4">
        <h1 className="text-[24px] sm:text-[32px]">Secure Payment</h1>
        <p className="text-[16px] sm:text-[20px] text-gray-700">
          100% secure payment, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
