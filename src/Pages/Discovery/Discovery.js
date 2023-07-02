import React from "react";
import Header from '../Header'
import { DirectionsCar, TwoWheeler, Hotel } from "@mui/icons-material";
import DiscoverCars from "../DiscoverCars"
import Footer from '../Footer'

function Discovery() {
  return (
    <>
      <div className="flex flex-col">
        <main>
          <div className="sticky top-0 z-20">
            <Header />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col w-screen overflow-hidden h-full sm:h-[40vh] pb-12 px-3 sm:px-10 text-center justify-center bg-[#c57f0d] ">
              <div className="  z-0 sm:flex absolute -left-24 bottom-32 sm:top-24 w-[250px] h-[250px]  rounded-[999px] border-[50px] border-[#d68f1d]  " />

              <h1 className="w-full flex sm:items-start sm:ml-40 text-white font-Gotham text-4xl font-bold  mt-12  ">
                Categories
              </h1>
              <div className="flex z-10 flex-col sm:flex-row w-screen mt-12 items-center justify-center px-3 sm:px-10 sm:space-x-8  ">
                <div className="w-9/12 sm:w-3/12 h-[65px]  flex  items-center justify-center py-3 px-4 space-x-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0 ">
                  <DirectionsCar fontSize="large" className="p-1 rounded-full bg-orange-100 text-4xl text-yellow-600 " />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Rent Cars
                  </h2>
                </div>
                <div className="w-9/12 sm:w-3/12 h-[65px]  flex  items-center justify-center py-3 px-4 space-x-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0 ">
                  <Hotel  fontSize="large"  className="p-1 rounded-full bg-orange-100 text-4xl text-yellow-600 " />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Hotels & Stays
                  </h2>
                </div>
                <div className="w-9/12 sm:w-3/12 h-[65px]  flex  items-center justify-center py-3 px-2 space-x-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0 ">
                  <TwoWheeler  fontSize="large"  className="p-1 rounded-full bg-orange-100 text-4xl text-yellow-600 " />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Rent Bikes
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-screen min-h-screen pt-8 sm:px-10  bg-white ">
              <h2 className="text-black text-2xl ml-9 sm:ml-20 mt-4 font-semibold font-Gotham">
                Suggested
              </h2>

              <div className="flex flex-wrap sm:px-10 mt-4 items-center justify-evenly  ">
                <div className="flex flex-col items-end sm:items-center justify-center">
                  <DiscoverCars  />

                  <h2 className="w-[92%] px-4 py-2 mt-1  sm:mt-3 cursor-pointer text-center rounded-lg  text-black bg-[#F4F4F4] text-xl font-medium font-Gotham">
                    Available for Tommorow{" "}
                  </h2>
                </div>

                <div className="flex flex-col items-end sm:items-center justify-center">
                  <DiscoverCars />

                  <h2 className="w-[92%] px-4 py-2 mt-3 cursor-pointer text-center  rounded-lg  text-black bg-[#F4F4F4] text-xl font-medium font-Gotham">
                    Available for Tommorow{" "}
                  </h2>
                </div>
                <div className="flex flex-col items-end sm:items-center justify-center">
                  <DiscoverCars />

                  <h2 className="w-[92%] px-4 py-2 mt-3 cursor-pointer text-center rounded-lg  text-black bg-[#F4F4F4] text-xl font-medium font-Gotham">
                    Available for Tommorow{" "}
                  </h2>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default Discovery;
