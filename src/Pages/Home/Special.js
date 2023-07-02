import React from "react";

function Special() {
  return (
    <>
      <div className="w-screen h-[360px] px-3 md:px-10 bg-yellow-600  mt-32 py-6 ">
        <h1 className="text-2xl font-semibold text-white font-Montserrat ml-8 mt-4 ">
          Continue Browsing
        </h1>
        <div className="flex items-center w-full  md:w-[95%]  py-3 px-2 md:px-10 mt-6 h-48 bg-white rounded-xl md:ml-8  ">
          <div className="flex items-center  w-3/12  ">
            <img alt="car" src="/swift.png" className="w-[229px] h-[121px]" />
          </div>

          <div className="flex flex-col w-9/12 ml-2 md:ml-4 justify-start items-start ">
            <h2 className="inline-flex text-xl mdtext-2xl text-center font-bold text-black font-Dm ml-2 md:ml-8 mt-4 ">
              Maruti Swift
              <span className="uppercase px-3 py-1 text-[#219653] font-Gotham font-normal text-sm bg-[#e6ffe6] rounded-lg ml-2 md:ml-4">
                Special Deal{" "}
              </span>
            </h2>
            <h2 className=" text-lg text-center font-normal text-zinc-400 font-Dm ml-2 md:ml-8">
              Swift 2019 Model{" "}
            </h2>
            <h2 className="text-lg text-center font-semibold text-yellow-600 font-Dm ml-2 md:ml-8 mt-2 ">
              “12th , 10:30AM“ to “13th 03:00PM”
            </h2>

            <h2 className="text-lg text-center font-semibold text-[#454545] font-Dm ml-2 md:ml-8 mt-2 ">
              250 + km | 10km Free-fuel
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
