import Image from 'next/image';
import React from 'react';
import Logo from '../../../../public/images/shopLogo.png';
import { ChevronRight } from 'lucide-react';
import { poppins } from '@/app/ui/fonts';

const Header = () => {
  return (
    <>
      <div className={`${poppins.className} flex mb-20`}>
        <section className="bg-bannerImg bg-repeat bg-cover bg-bottom h-[316px] w-full flex flex-col items-center justify-center">
          {/* Logo */}
          <Image
            src={Logo}
            width={45}
            height={45}
            alt="Logo"
            className="p-0 m-0"
          />

          {/* Main Heading */}
          <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold">
          Cart
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm md:text-base space-x-1">
            <h4 className="font-semibold">Home</h4>
            <ChevronRight className="h-4 w-4" />
            <h4>Cart</h4>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
