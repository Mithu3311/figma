import React from "react";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username or email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Lost your password?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Reset it here
          </a>
        </p>
      </div>

      
    </div>
  );
};

export default LoginForm;
