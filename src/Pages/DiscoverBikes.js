import { Bolt, LocalGasStation } from "@mui/icons-material";
import React from "react";

function DiscoverBikes() {
  return (
    <>
      <div className="flex flex-col  cursor-pointer  min-w-[322px]  my-4 sm:mx-4   h-[460px]  bg-white/10 rounded-xl  shadow-lg ml-8 discover ">
        <div className="relative flex items-center justify-center w-full bg-[#F4F4F4]   h-64 !rounded-t-xl  ">
          <img
            src="/pulsar.png"
            alt="house"
            className="w-[234px] h-[124px] rounded-t-xl"
          />
        </div>
        <div className="p-2  ">
          <div className="flex w-full justify-between">
            <h2 className="inline-flex text-xl mdtext-2xl text-center font-bold text-black font-Gotham   ">
              Pulsar 220
            </h2>
            <p className="uppercase px-3 py-1 text-[#219653] font-Gotham font-normal text-sm bg-[#e6ffe6] rounded-lg">
              Special Deal{" "}
            </p>
          </div>

          <h2 className=" text-sm font-semibold text-zinc-400 font-Gotham ">
            Bajaj
          </h2>
          <div className="flex w-full justify-evenly mt-2 ">
            <div className="flex flex-col space-y-2 border-r border-zinc-400 w-6/12 justify-center items-center  ">
              <LocalGasStation className="text-4xl text-yellow-600" />
              <h2 className="inline-flex text-sm  text-center font-bold text-[#454545] font-Gotham   ">
                Petrol
              </h2>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center  w-6/12 ">
              <Bolt className="text-4xl text-yellow-600 " />
              <h2 className="inline-flex text-sm  text-center font-bold text-[#454545] font-Gotham   ">
                110cc
              </h2>
            </div>
          </div>

          <div className="flex justify-between w-full mt-6 px-2 ">
            <h2 className="text-2xl   font-bold text-black font-Gotham">
              ₹ 1300
              <p className=" text-zinc-400 font-Gotham font-normal text-sm -mt-1 ">
                Onwards
              </p>
            </h2>
            <button className="flex items-center justify-center text-white font-sm font-semibold rounded-full w-[163px] h-[46px] bg-yellow-600 ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscoverBikes;
