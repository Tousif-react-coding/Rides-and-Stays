import React from "react";
import DiscoverCars from '../DiscoverCars'

function Result() {
  return (
    <>
      <div className="flex w-screen min-h-[100vh]  bg-[#fafafa]    ">
        <div className=" flex flex-col space-y-2 w-3/12 px-8 py-16 ">
          <div className="flex w-full  h-max justify-start  flex-col mt-4 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Filter By
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Toyota
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Honda
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Suzuki
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Nissan
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Audi
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Cheverolet
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Capacity
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                2 -5 Members
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                5 -8 Members
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Price
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                2000
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Fuel Type
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Petrol
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Diesel
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Category
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Suv
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Hatchback
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Sedan
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Transmission Type
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Automatic
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Manual
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8 border-b border-zinc-400 ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Special Features
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Sunroof
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Convertible Top
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Brand New
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Air Purifier
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Cruise Control
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Ac Ventilated Seats
              </label>
            </div>
          </div>
          <div className="flex w-full  h-max justify-start  flex-col mt-6 space-y-1 pb-8  ">
            <h2 className="text-2xl font-semibold text-black font-Gotham ">
              Location
            </h2>
            <div className="flex items-center space-x-2 ml-1 mt-4 ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Secunderabad
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Kukatpally
              </label>
            </div>
            <div className="flex items-center space-x-2 ml-1  ">
              <input type="checkbox" />
              <label className="text-lg text-[#505050] font-semibold  ">
                Banjara hills
              </label>
            </div>
          </div>
        </div>
        <div className="flex w-8/12 flex-wrap items-center justify-evenly  mt-6 ">
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
          <DiscoverCars />
        </div>
      </div>
    </>
  );
}

export default Result;
