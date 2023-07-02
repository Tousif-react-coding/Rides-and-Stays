import { AddLocationAlt, People, Today } from "@mui/icons-material";
import React, { useState } from "react";

function Booking() {

    const [tab, setTab] = useState("car");

  return (
    <>
      <div className="flex bg-white absolute  md:bottom-12 md:right-20 flex-col mt-8  w-[80vw] md:w-[350px] h-[450px] px-6 rounded-xl shadow-2xl  ">
        <div className="flex w-full h-8 ml-4 space-x-5 mt-4 ">
          <h2
            onClick={() => setTab("car")}
            className={
              tab === "car"
                ? "text-lg font-semibold  sm:ml-0 border-b pb-2 cursor-pointer  border-yellow-600  text-yellow-600"
                : "text-lg  cursor-pointer  font-semibold text-zinc-400 pb-2 "
            }
          >
            Car
          </h2>
          <h2
            onClick={() => setTab("hotels")}
            className={
              tab === "hotels"
                ? "text-lg font-semibold ml-8 sm:ml-0 border-b pb-2 cursor-pointer border-yellow-600  text-yellow-600"
                : "text-lg  cursor-pointer font-semibold text-zinc-400 pb-2 "
            }
          >
            Hotels
          </h2>
          <h2
            onClick={() => setTab("bike")}
            className={
              tab === "bike"
                ? "text-lg font-semibold ml-8 sm:ml-0 cursor-pointer border-b pb-2  border-yellow-600  text-yellow-600"
                : "text-lg cursor-pointer font-semibold text-zinc-400 pb-2 "
            }
          >
            Bike
          </h2>
        </div>

        <div>
          {tab === "car" && (
            <div className="flex flex-col mt-4 ">
              <div className="flex items-center w-full px-3 py-3 mt-4 border-b border-zinc-400 ">
                <AddLocationAlt className="text-3xl text-gray-600 " />
              </div>
              <div className="flex items-center w-full px-3 py-3 mt-4 border-b border-zinc-400 ">
                <Today className="text-3xl text-gray-600  " />
              </div>
              <div className="flex items-center w-full px-3 py-3 mt-4 border-b border-zinc-400 ">
                <People className="text-3xl text-gray-600  " />
                <h2></h2>
              </div>

              <button className="px-12 py-3 rounded-full bg-yellow-600 font-semibold text-xl text-white mt-20 ">
                Search{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Booking;
