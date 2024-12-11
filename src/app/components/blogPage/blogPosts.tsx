import Image from "next/image";
import React from "react";
import pic1 from "../../../../public/blogImages/pic1.png";
import pic2 from "../../../../public/blogImages/pi2.png";
import pic3 from "../../../../public/blogImages/pic3.png";
import pic4 from "../../../../public/blogImages/pic4.png";
import pic5 from "../../../../public/blogImages/pic5.png";
import pic6 from "../../../../public/blogImages/pic6.png";
import pic7 from "../../../../public/blogImages/pic7.png";
import pic8 from "../../../../public/blogImages/pic8.png";
import { Calendar, Search, Tag, User } from "lucide-react";
import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";

const BlogPosts = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="p-4 md:p-11">
        <div className="flex flex-col md:flex-row justify-start items-start gap-7">
          {/* Left Section */}
          <div className="w-full md:w-[820px] flex flex-col justify-start items-start">
            {[pic1, pic2, pic3].map((pic, index) => (
              <div key={index} className="mb-10">
                <Image src={pic} height={500} width={817} alt={`Picture ${index + 1}`} className="w-full h-auto" />
                <div className="mt-5 flex gap-6 mb-4">
                  <div className="flex gap-2 text-gray-500 items-center">
                    <User className="fill-gray-500" />
                    <h1>Admin</h1>
                  </div>

                  <div className="flex gap-2 text-gray-500 items-center">
                    <Calendar className="fill-gray-500 text-white" />
                    <h1>14 Oct 2022</h1>
                  </div>

                  <div className="flex gap-2 text-gray-500 items-center">
                    <Tag className="fill-gray-500 text-white" />
                    <h1>{index === 0 ? "Wood" : index === 1 ? "Handmade" : "Wood"}</h1>
                  </div>
                </div>
                <h1 className="text-[24px] md:text-[30px] font-medium">
                  {index === 0
                    ? "Going all-in with millennial design"
                    : index === 1
                    ? "Exploring new ways of decorating"
                    : "Handmade pieces that took time to make"}
                </h1>
                <h5 className="text-[14px] md:text-[15px] text-gray-500 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </h5>
                <Button variant={"ghost"} className="underline p-0">
                  Read More
                </Button>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="w-full md:w-auto flex flex-col justify-start items-start md:ml-11">
            <div className="w-full md:w-[393px] h-auto flex flex-col justify-start items-center mb-11">
              <div className="flex w-full outline outline-offset-1 rounded mb-8">
                <input className="outline-none flex-grow p-2" placeholder="Search..." />
                <Button type="submit">
                  <Search />
                </Button>
              </div>

              <div className="w-full md:w-[251px] h-auto flex flex-col gap-5 p-5">
                <h1 className="text-[20px] md:text-[24px]">Categories</h1>
                {[
                  { name: "Crafts", count: 2 },
                  { name: "Design", count: 8 },
                  { name: "Handmade", count: 7 },
                  { name: "Interior", count: 1 },
                  { name: "Wood", count: 6 },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full md:w-[212px] text-[14px] md:text-[16px] text-gray-500"
                  >
                    <h1>{category.name}</h1>
                    <h1>{category.count}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[393px] h-auto flex flex-col justify-start items-center">
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-[20px] md:text-[24px] font-medium mb-5">Recent Posts</h1>
                {[pic4, pic5, pic6, pic7, pic8].map((pic, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center w-full md:w-[211px] h-auto gap-2 mb-5"
                  >
                    <Image src={pic} width={80} height={80} alt={`Picture ${index + 4}`} className="flex-shrink-0" />
                    <div>
                      <h1 className="text-[12px] md:text-[14px] mb-1">
                        {index === 0
                          ? "Going all-in with millennial design"
                          : index === 1
                          ? "Exploring new ways of decorating"
                          : index === 2
                          ? "Handmade pieces that took time to make"
                          : index === 3
                          ? "Modern home in Milan"
                          : "Colorful office redesign"}
                      </h1>
                      <h1 className="text-[12px] md:text-[14px] text-gray-500">
                        03 Aug 2022
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;