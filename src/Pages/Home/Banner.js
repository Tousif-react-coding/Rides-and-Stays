import React from 'react'

function Banner() {
  return (
    <div
    style={{
      backgroundSize: "cover",
    
      background: "url(/bmw.png)",
    }}
    className="w-full h-[45vh]  md:h-[80vh] !bg-cover !bg-bottom !bg-no-repeat relative flex "
  >
    <div className="flex    px-10  ">
      <div className="flex flex-col w-full md:w-6/12  md:ml-6  items-center justify-center ">
        <h1 className="text-white font-DM text-5xl md:text-6xl font-bold  ">
          <span className="text-yellow-600 ">Renting </span>cars have never
          been this easy
        </h1>

        <p className="text-sm font-semibold text-white/80 mt-3 ">
   
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
      </div>


 
    </div>


  </div>
  )
}

export default Banner