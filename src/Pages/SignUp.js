import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex bg-white  flex-col min-h-screen py-2">
      <div className="z-20 w-screen">
        <Header />
      </div>

      <div className="w-screen h-[84vh] relative mt-4 flex justify-center items-center ">
        <div className="px-5 md:w-2/5 md:px-0">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-black font-Montserrat">
                Create an Account
              </h2>
              <h4 className="text-gray-400 font-Mulish ml-2">
                Get started with your account.
              </h4>
            </div>
          </div>

          <form className="flex flex-col mt-5 space-y-5">
            <div>
              <label className="text-black  text-medium font-Gotham font-medium ">
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="flex items-center w-full p-3 pl-3 text-black placeholder-zinc-400 bg-white border rounded-lg border-zinc-400 focus:outline-none"
                placeholder="Enter your Full Name"
              />
            </div>
            <div>
              <label className="text-black text-medium font-Gotham font-medium ">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="flex items-center w-full  p-3 pl-3 text-black placeholder-zinc-400  bg-white border rounded-lg border-zinc-400 focus:outline-none"
                placeholder="Enter your Email Address "
              />
            </div>
            <div>
              <label className="text-black  text-medium font-Gotham font-medium ">
                Mobile Number
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="flex items-center w-full p-3 pl-3 text-black placeholder-zinc-400 bg-white border rounded-lg border-zinc-400 focus:outline-none"
                placeholder="Enter your Mobile Number"
              />
            </div>
            <button className="w-full px-3 py-4 text-center text-lg font-normal text-black bg-yellow-600 rounded-xl font-Mulish">
              Send OTP
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row  absolute bottom-4 text-center ">
          <h2 className="text-black text-lg font-Gotham font-medium ">
            Already have an account?
          </h2>
          <Link
            to="/login"
            className="text-yellow-600 text-lg font-Gotham font-semibold md:ml-2"
          >
            Log in.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
