import React from "react";

function Testimonials() {
  return (
    <>
      <div className="w-screen flex flex-col   ">
        <div className="flex flex-col w-screen justify-center items-center px-6 mt-12 ">
          <h1 className="text-black font-DM text-4xl md:text-6xl font-bold  ">
            <span className="text-yellow-600 ">User </span>
            Testimonials
          </h1>
          <h2 className="text-[#696871] text-center font-Gotham text-lg   font-normal   ">
            Our Psychological Model is accurate, verified and tested over
            thousands of individuals.
          </h2>
          <h2 className="text-[#696871] font-Gotham text-lg  font-normal   ">
            The most meaningful social media platform, ever
          </h2>
        </div>
        <div className="flex  justify-center items-center mt-12">
          <div className="flex flex-col justify-center items-center w-[380px] h-full    ">
            <img
              src="/testimonial.png"
              alt="Testimonial"
              className="rounded-full w-[200px] h-[200px] sm:w-[256px] sm:h-[256px] "
            />
            <h2 className="text-[#050608] font-Gotham text-center text-lg   font-normal   ">
              Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing
              tristique..
            </h2>
            <h1 className=" font-DM  text-lg font-normal text-yellow-600   ">
              - Jermiah
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
