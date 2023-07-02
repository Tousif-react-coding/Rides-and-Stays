import React from "react";

function Offer() {
  return (
    <>
      <div className="w-screen flex flex-col   ">
        <div className="flex flex-col w-screen justify-center items-center px-6 mt-12 ">
          <h1 className="text-black font-DM text-4xl md:text-6xl font-bold  ">
            <span className="text-yellow-600 ">Special </span>
            Offers
          </h1>
          <h2 className="text-[#696871] font-Gotham text-lg   text-center  font-normal   ">
            Our Psychological Model is accurate, verified and tested over
            thousands of individuals.
          </h2>
          <h2 className="text-[#696871] font-Gotham text-lg  text-center font-normal   ">
            The most meaningful social media platform, ever
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row w-screen justify-between items-center sm:px-10 mt-6  ">
          <div className="w-full sm:w-4/12 mt-4 h-[217px] flex flex-col justify-center items-center bg-[#3381F6] mx-4 rounded-xl ">
            <h1 className="text-white font-DM text-6xl font-bold  ">50%</h1>
            <h1 className="text-white font-DM text-lg  font-bold  ">
              Off on Your next car order
            </h1>
          </div>
          <div className="w-full sm:w-4/12 mt-4 h-[217px] flex flex-col justify-center items-center bg-[#31B5FF] mx-4 rounded-xl ">
            <h1 className="text-white font-DM text-6xl font-bold  ">50%</h1>
            <h1 className="text-white font-DM text-lg  font-bold  ">
              Off on Your next car order
            </h1>
          </div>
          <div className="w-full sm:w-4/12 mt-4  h-[217px] flex flex-col justify-center items-center bg-[#C39C12] mx-4 rounded-xl ">
            <h1 className="text-white font-DM text-6xl font-bold  ">50%</h1>
            <h1 className="text-white font-DM text-lg  font-bold  ">
              Off on Your next car order
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
