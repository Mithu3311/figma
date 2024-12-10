import { poppins } from "@/app/ui/fonts";
import React from "react";
import BillingDetails from "./billingDetails";
import { Circle, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";

const CheckOutProducts = () => {
  return (
    <>
      <div className="mb-20">
        <div
          className={`${poppins.className} flex justify-evenly items-start w-full`}
        >
          {/* Billing Details */}
          <div>
            <BillingDetails />
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-between items-start w-[608px] mb-24">
              <div className="flex justify-start items-start gap-6 flex-col">
                <h1 className="text-[24px] font-medium">Product</h1>
                <div className="flex justify-start items-center gap-5 text-[16px]">
                  <h5>Asgaard sofa</h5>
                  <h5>X</h5>
                  <h5>1</h5>
                </div>
                <h1 className="text-[16px]">Subtotal</h1>
                <h1 className="text-[16px]">Total</h1>
              </div>
              <div className="flex justify-start items-start gap-6 flex-col">
                <h1 className="text-[24px] font-medium">Subtotal</h1>
                <h1 className="text-[16px]">Rs. 250,000.00</h1>
                <h1 className="text-[16px]">Rs. 250,000.00</h1>
                <h1 className="text-[16px] text-[#B88E2F] font-semibold">
                  Rs. 250,000.00
                </h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
            <div className="w-[528px] flex flex-col justify-start items-start gap-3 mb-9">
              <div className="flex justify-start items-center gap-3">
                <CircleDot className="fill-black w-[14px] h-[14px]" />
                <h1 className="text-black text-[16px]">Direct Bank Transfer</h1>
              </div>
              <p className="text-[16px] text-gray-700">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                <div className="flex flex-row gap-3 justify-start items-center">
                    <Circle className="fill-none text-gray-700 w-[14px] h-[14px]"/>
                    <h1 className="text-[16px] text-gray-700">Direct Bank Transfer</h1>
                </div>

                <div className="flex flex-row gap-3 justify-start items-center">
                    <Circle className="fill-none text-gray-700 w-[14px] h-[14px]"/>
                    <h1 className="text-[16px] text-gray-700">Cash On Delivery</h1>
                </div>
                <h5>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.</h5>
            </div>
            <Button variant={'outline'} className="flex items-center justify-center w-[318px] h-[64px] rounded-xl hover:text-gray-600">Place Order</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutProducts;
