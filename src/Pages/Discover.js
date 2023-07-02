import React from 'react'

function Discover() {
  return (
    <>
        <div className="flex flex-col  cursor-pointer  min-w-[322px]  my-4 sm:mx-4   h-[460px]  bg-white/10 rounded-xl pb-8 shadow-lg ml-8  discover ">
      <div className="relative w-full  h-64 !rounded-t-xl  ">
        <img
          src="/house.png"
        
          alt="house"
          className="w-[322px] h-[250px]  rounded-t-xl"
        />
      </div>
      <div className="p-2  ">
        <div className="flex w-full justify-between">
          <h2 className="inline-flex text-xl mdtext-2xl text-center font-bold text-black font-Gotham   ">
            Green Residency
          </h2>
          <p className="uppercase px-3 py-1 text-[#219653] font-Gotham font-normal text-sm bg-[#e6ffe6] rounded-lg">
            Special Deal{" "}
          </p>
        </div>

        <h2 className=" text-sm font-semibold text-zinc-400 font-Dm ">
          Gandhi Nagar
        </h2>

        <ul className="flex flex-col mt-4 px-2 ">
          <li className="inline-flex text-sm mdtext-2xl text-center font-bold text-[#454545] font-Gotham   ">
            Complimentry Breakfast
          </li>
          <li className="inline-flex text-sm mdtext-2xl text-center font-bold text-[#454545] font-Gotham   ">
            TV + Wifi
          </li>
          <li className="inline-flex text-sm mdtext-2xl text-center font-bold text-[#454545] font-Gotham   ">
            3 Guets
          </li>
        </ul>
        <div className="flex justify-between w-full mt-4 px-2 ">
          <h2 className="text-2xl   font-bold text-black font-Gotham">
            ₹ 400
            <p className=" text-zinc-400 font-Gotham font-normal text-sm -mt-1 ">
              perday
            </p>
          </h2>
          <button className="flex items-center justify-center text-white font-sm font-semibold rounded-full w-[163px] h-[46px] bg-yellow-600 ">
            Book Now
          </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Discover