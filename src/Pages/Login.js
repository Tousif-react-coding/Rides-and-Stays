import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    return (
      <div className="flex bg-white  flex-col min-h-screen  py-2">
       
        <div className="z-20 w-screen">
          <Header />
        </div>
  
        <div className="w-screen h-[83vh] relative  flex justify-center items-center">
          <div className="px-5 md:w-2/5 md:px-0">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-black font-Montserrat">
                  Welcome Back
                </h2>
                <h4 className="text-gray-400 font-Mulish ml-2">
                  Login to your account.
                </h4>
              </div>
            </div>
  
            <form className="flex flex-col mt-5 space-y-5">
              <div>
                <label className="text-black text-medium font-Gotham font-medium ">
                  Email Address
                </label>
                <div className="flex items-center justify-between w-full px-3 py-3 bg-white border border-zinc-400 rounded-lg ">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="w-full pl-3 text-black placeholder-zinc-400 bg-transparent focus:outline-none"
                    placeholder="Enter your Mobile Number"
                  />
                  <h2 className="text-center w-32 text-semibold font-Gotham text-sm  text-yellow-600 ">
                    Send OTP
                  </h2>
                </div>
              </div>
              <div>
                <label className="text-black  text-medium font-Gotham font-medium ">
                  Password
                </label>
                <div className="flex items-center w-full px-3 py-3 bg-white  border border-zinc-400 rounded-lg ">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full pl-3 text-black placeholder-zinc-400 bg-transparent  focus:outline-none"
                    placeholder="Enter your Password"
                  />
                </div>
              </div>
              <button className=" flex justify-center  w-full px-3 py-3 text-lg text-center text-white bg-yellow-600 rounded-xl font-Mulish">
                Login
              </button>
            </form>
          </div>
  
          <div className="flex flex-col md:flex-row  absolute bottom-0 text-center ">
            <h2 className="text-black text-lg font-Gotham font-medium ">
              Don&apos;t have an account?
            </h2>
            <Link to="/signup" className="text-yellow-600 text-lg font-Gotham font-medium md:ml-2" >
           
                Sign up.
            
            </Link>
          </div>
        </div>
      </div>

    );
}

export default Login