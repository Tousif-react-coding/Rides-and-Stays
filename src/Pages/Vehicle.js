import { BrightnessLow, EventSeat, LocalGasStation } from "@mui/icons-material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Home/Subscribe";

function Vehicle() {
  return (
    <>
      <div className="flex bg-white  flex-col min-h-screen py-2">
        <Header />
        <main className="flex flex-grow px-3  sm:px-16 pt-10">
          <div className="flex w-screen   mt-6   ">
            <div className="relative flex items-center justify-center w-[492px] bg-[#F4F4F4]  bg-white/10   h-[389px]  ">
              <img
                src="/swift.png"
            
                alt="house"
                className="w-[389px] h-[236px] "
              />
            </div>
            <div className="flex flex-col w-8/12  px-8">
              <div className="flex   w-full  justify-between  items-center  ">
                <div className="flex w-full  space-x-6 ">
                  <h2 className="inline-flex text-xl md:text-2xl text-center font-bold text-black font-Gotham   ">
                    Maruti Suzuki
                  </h2>
                  <p className="uppercase px-3 py-1 text-[#219653] font-Gotham font-normal text-sm bg-[#e6ffe6] rounded-lg">
                    Special Deal{" "}
                  </p>
                </div>
                <h2 className="inline-flex  w-max text-3xl font-bold text-black font-Gotham">
                  2400
                </h2>
              </div>
              <h2 className=" text-normal font-semibold text-zinc-400 font-Dm ">
                Swift 2019 Model
              </h2>
              <p className="w-[80%] text-sm mt-12 font-semibold text-black font-Dm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                donec et blandit cursus faucibus iaculis. Sit lectus fames
                mauris sit lacus, suspendisse. Ullamcorper vitae natoque leo
                quam est et. Sit lorem aliquet nec nunc.
              </p>
              <div className="flex w-full justify-evenly mt-12 ">
                <div className="flex flex-col space-y-2 border-r border-zinc-400 w-4/12 justify-center items-center  ">
                  <LocalGasStation className="text-4xl text-yellow-600" />
                  <h2 className="inline-flex text-sm  text-center font-bold text-[#454545] font-Gotham   ">
                    Diesel
                  </h2>
                </div>
                <div className="flex flex-col space-y-2 border-r border-zinc-400 justify-center items-center  w-4/12 ">
                  <EventSeat className="text-4xl text-yellow-600 " />
                  <h2 className="inline-flex text-sm  text-center font-bold text-[#454545] font-Gotham   ">
                    5 Seats
                  </h2>
                </div>
                <div className="flex flex-col space-y-2   w-4/12 justify-center items-center  ">
                  <BrightnessLow className="text-4xl text-yellow-600 " />
                  <h2 className="inline-flex text-sm  text-center font-bold text-[#454545] font-Gotham   ">
                    Automatic
                  </h2>
                </div>
              </div>
              <button className="flex items-center justify-center text-white font-sm font-semibold rounded-lg w-full h-[46px] bg-yellow-600 mt-12 ">
                Book Now
              </button>
            </div>
          </div>
        </main>
        <div className="flex flex-col px-3  sm:px-16 pt-10">
          <p className="w-[80%] text-normal mt-6 font-semibold text-black font-Dm ">
            Eligibility Criteria:
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>

          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
          <p className="w-[80%] text-normal mt-2 font-semibold text-black font-Dm ">
            1. Rider needs to be 21 years of age or older and possess a valid
            Light Motor Vehicle (Non Transport) license at least 1 year old.
          </p>
        </div>

        <Subscribe />

        <div className="w-full h-[110px] flex px-3 sm:px-10 my-6   ">
          <div className="flex justify-between w-full h-full items-center px-3 sm:px-10  bg-white border border-[#C9C9C9] rounded-xl   ">
            <h1 className="text-xl font-semibold text-center text-[#4B4B4B] font-Montserrat ">
              Download Now to Experience new way of making healthy friendships
            </h1>
            <img
              src="/playstore.png"
              alt="playstore"
              className=" h-[100px] w-[199px] cursor-pointer "
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Vehicle;
