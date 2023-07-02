import { DirectionsCar, Hotel, ThreeP, TwoWheeler } from "@mui/icons-material";
import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Partner from "./Partner";

function Services() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="flex flex-col bg-white">
        <main>
          <Header />

          {tab === 0 && (
            <div className="flex flex-col w-screen h-full sm:h-[75vh] pb-12 px-3 sm:px-10 text-center justify-center bg-[#c57f0d] ">
              <div className="  z-0 sm:flex absolute -right-28 bottom-10 sm:top-16 w-[300px] h-[300px]  rounded-[999px] border-[60px] border-[#d68f1d] overflow-hidden " />

              <div className="  z-0 sm:flex absolute -left-32 bottom-[70px] w-[300px] h-[300px]  rounded-[999px] border-[60px] border-[#d68f1d] overflow-hidden " />
              <h1 className="text-white font-Gotham text-4xl font-bold  mt-12  ">
                Our Services
              </h1>

              <div className="flex z-10 flex-col sm:flex-row w-screen mt-12 items-center justify-center sm:space-x-8  ">
                <div className="w-[211px] h-[211px] flex flex-col items-center justify-center py-3 space-y-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0 ">
                  <DirectionsCar
                    fontSize="large"
                    className="rounded-full bg-orange-100 text-8xl text-yellow-600 "
                  />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Rent Cars
                  </h2>
                </div>
                <div className="w-[211px] h-[211px] flex flex-col items-center justify-center py-3 space-y-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0  ">
                  <Hotel
                    fontSize="large"
                    className=" rounded-full bg-orange-100 text-8xl text-yellow-600 "
                  />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Hotels & Stays
                  </h2>
                </div>
                <div className="w-[211px] h-[211px] flex flex-col items-center justify-center py-3 space-y-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0  ">
                  <TwoWheeler
                    fontSize="large"
                    className=" rounded-full bg-orange-100 text-8xl text-yellow-600 "
                  />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Rent Bikes
                  </h2>
                </div>
                <div
                  onClick={() => setTab(1)}
                  className="w-[211px] h-[211px] flex flex-col items-center justify-center py-3 space-y-4 bg-white rounded-xl cursor-pointer mt-4 sm:mt-0 "
                >
                  <ThreeP
                    fontSize="large"
                    className=" rounded-full bg-orange-100 text-8xl text-yellow-600 "
                  />
                  <h2 className="text-black text-xl font-semibold font-Dm">
                    Partner with us
                  </h2>
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div>
              <Partner />
            </div>
          )}

          <Footer />
        </main>
      </div>
    </>
  );
}

export default Services;
