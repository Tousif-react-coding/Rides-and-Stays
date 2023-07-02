import { ArrowForward } from "@mui/icons-material";
import React from "react";

function Subscribe() {
  return (
    <>
      <div className="w-screen  sm:h-[195px] px-3 md:px-10  mt-12 py-4 rounded-xl ">
        <div className="w-full h-full flex flex-col sm:flex-row justify-between sm:items-center px-3 md:px-10 bg-yellow-600  rounded-xl  py-6 ">
          <div className="flex flex-col ">
            <h2 className="text-white font-Gotham text-3xl   font-semibold   ">
              Stay Updated !
            </h2>
            <h2 className="text-white font-Gotham text-medium  font-normal mt-2  ">
              Get news and updates from the world of social entrepreneuship
            </h2>
          </div>

          <div className="flex justify-between mt-2 sm:mt-0  py-2  items-center pl-6  pr-3 bg-white rounded-full ">
            <input
              type="email"
              placeholder="Enter  Your email id "
              className="transparent text-xl placeholder:text-black text-black  border-none focus:outline-none font-Gotham placeholder:font-Gotham   "
            />

            <div className="flex p-2 justify-center items-center rounded-full bg-yellow-600 cursor-pointer ">
              <ArrowForward className="text-white text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
