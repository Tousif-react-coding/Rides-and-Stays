import React from "react";

function Blog({ src }) {
  return (
    <div className="flex flex-col  cursor-pointer  w-[380px] items-center  my-4 sm:mx-4  p-2  h-[454px]  bg-white/10 rounded-xl  shadow-2xl  ">
      <div className="  !rounded-xl  ">
        <img src={src} alt="house w-[370px] h-[320px] " />
      </div>
      <h2 className="text-black font-Gotham text-2xl mt-4 font-semibold px-4  ">
        How to make the perfect morning coffee, according to the Science
      </h2>
    </div>
  );
}

export default Blog;
