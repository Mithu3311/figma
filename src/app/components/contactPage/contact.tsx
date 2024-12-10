import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock4, MapPin, Phone } from "lucide-react";
import React from "react";
import DeliveryPolicy from "../myAccountPage/deliveryPolicy";
import Logo from '../../../../public/images/shopLogo.png';
import Image from "next/image";

const Contact = () => {
  return (
    <>

<div className={`${poppins.className} flex`}>
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
          Contact
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm md:text-base space-x-1">
            <h4 className="font-semibold">Home</h4>
            <ChevronRight className="h-4 w-4" />
            <h4>Contact</h4>
          </div>
        </section>
      </div>
      <div
        className={`${poppins.className} flex flex-col justify-center items-center w-full px-4`}
      >
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-12 max-w-3xl">
          <h1 className="text-[28px] md:text-[36px] font-semibold mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-[14px] md:text-[16px] text-gray-700">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center justify-between w-full max-w-screen-xl">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full lg:w-[40%]">
            <div className="flex items-start gap-4">
              <MapPin className="text-black" />
              <div>
                <h2 className="text-lg md:text-xl font-semibold">Address</h2>
                <p className="text-sm md:text-base text-gray-700">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-black" />
              <div>
                <h2 className="text-lg md:text-xl font-semibold">Phone</h2>
                <p className="text-sm md:text-base text-gray-700">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock4 className="text-black" />
              <div>
                <h2 className="text-lg md:text-xl font-semibold">Working Time</h2>
                <p className="text-sm md:text-base text-gray-700">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[60%] flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Enter the subject"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="md-w-full bg-gray-100 text-gray-700 py-2 rounded-xl"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DeliveryPolicy/>
    </>
  );
};

export default Contact;
