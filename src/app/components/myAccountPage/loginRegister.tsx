import { poppins } from "@/app/ui/fonts";
import { Button } from "@/components/ui/button";
import React from "react";

const LoginRegisterForm = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col lg:flex-row justify-evenly items-center h-auto lg:h-[760px] mt-11 w-full px-4`}
    >
      {/* Sign in Form */}
      <div className="flex items-center justify-center w-full lg:w-[608px] gap-11">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 lg:p-16">
          <h2 className="text-2xl font-semibold text-left text-gray-800">
            Log in
          </h2>
          <form className="mt-6">
            <div className="mb-10">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Username or email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-700 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-700 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 text-gray-700 border-gray-300 rounded focus:ring-gray-700"
                />
                Remember me
              </label>
            </div>

            <div className="flex justify-between items-center">
              <Button
                variant={"outline"}
                type="submit"
                className="text-[20px] py-2 text-gray-600 bg-white rounded-xl w-[150px] h-[54px] shadow-md"
              >
                Log in
              </Button>
              <a href="#" className="text-gray-600">
                Lost your password?
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Registration form */}
      <div className="flex items-center justify-center w-full lg:w-[608px] mt-8 lg:mt-0">
        <div className="max-w-md bg-white rounded-lg shadow-md p-8 lg:p-16">
          <h2 className="text-2xl font-semibold text-left text-gray-800 mb-8">
            Register
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-4"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-700 focus:outline-none mb-4"
                placeholder="Enter your email"
              />
            </div>

            {/* Text for password reset link */}
            <p className="text-sm text-gray-600 mt-2">
              A link to set a new password will be sent to your email address.
            </p>

            {/* Privacy policy text */}
            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            {/* Registration button */}
            <Button
              variant={"outline"}
              type="submit"
              className="w-[215px] py-2 text-gray-700 rounded mt-6"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
