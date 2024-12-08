import React from "react";
import { assets } from "../../assets/assets";

function LoginPage() {
  return (
    <div className="login-img bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-7xl mx-auto p-4">
        <div className="bg-gray-50 shadow-sm rounded-lg overflow-hidden">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
            {/* Left Image (Hidden on small screens, reduced size on medium screens) */}
            <div className="hidden md:flex md:w-1/2 justify-center">
              <img
                className="w-48 sm:w-64 md:w-72 lg:w-96 h-auto object-cover rounded-lg"
                loading="lazy"
                src={assets.docLoginImg}
                alt="Login Illustration"
              />
            </div>
            {/* Right Form (Full width on small screens) */}
            <div className="w-full md:w-1/2 flex items-center justify-center ">
              <div className="w-full max-w-lg p-6 m-3 border rounded">
                <div className="mb-6 text-customGreen">
                  <h4 className="text-2xl font-bold">
                    Login MediMeet
                  </h4>
                </div>
                {/* Google Login */}
                <div className="flex flex-col gap-4">
                  <button className="flex items-center justify-center bg-gray-800 text-white gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 hover:ring hover:ring-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span>Log in with Google</span>
                  </button>
                  <p className="text-center text-gray-400 mt-1 pb-2">Or sign in with</p>
                </div>
                {/* Login Form */}
                <form>
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="absolute text-gray-500 text-sm -top-2 font-bold left-4 bg-white px-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="absolute text-gray-500 text-sm -top-2 font-bold left-4 bg-white px-1"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember_me"
                        className="w-4 h-4 mr-2"
                      />
                      <label
                        htmlFor="remember_me"
                        className="text-sm text-gray-600"
                      >
                        Keep me logged in
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-customGreen text-white py-3 rounded-lg hover:ring hover:ring-green-300"
                    >
                      Log in now
                    </button>
                  </div>
                </form>
                {/* Links */}
                <div className="flex justify-between gap-6 mt-6 md:text-sm ">
                  <span>Don’t have an account? 
                  <a href="#!" className="text-blue-500 px-1 no-underline hover:underline">
                    Register 
                  </a></span>
                  <a href="#!" className="text-blue-500 no-underline hover:underline">
                    Forgot password
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
