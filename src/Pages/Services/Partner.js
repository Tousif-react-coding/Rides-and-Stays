import { InsertDriveFile } from '@mui/icons-material'
import React from 'react'

function Partner() {
  return (
    <div className="flex flex-col w-screen h-[90vh] px-3 sm:px-24 bg-white ">
    <h1 className="text-yellow-600 font-DM text-3xl font-bold mt-12 ml-4 ">
      Partner with us
    </h1>
    <h2 className="text-gray-200  font-Gotham  text-normal font-normal ml-5   ">
      Add Details in the below Form
    </h2>

    <form className=" flex flex-col w-full h-full px-6 mt-6  space-y-4 ">
      <div className="w-full flex   sm:space-x-4  ">
        <div className="w-6/12">
          <label className="text-black  text-medium font-Gotham font-medium ">
            Full Name
          </label>
          <input
            // value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="flex items-center w-full mt-2 p-3 pl-3 text-black placeholder-zinc-400 bg-white border rounded-lg border-zinc-400 focus:outline-none"
            placeholder="Enter your Full Name"
          />
        </div>
        <div className="w-6/12">
          <label className="text-black text-medium font-Gotham font-medium ">
            Email Address
          </label>
          <input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="flex items-center w-full mt-2  p-3 pl-3 text-black placeholder-zinc-400  bg-white border rounded-lg border-zinc-400 focus:outline-none"
            placeholder="Enter your Email Address "
          />
        </div>
      </div>
      <div className="w-full flex   sm:space-x-4  ">
        <div className="w-6/12">
          <label className="text-black  text-medium font-Gotham font-medium ">
            Car Details
          </label>
          <input
            // value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="flex  items-center w-full mt-2 p-3 pl-3 text-black placeholder-zinc-400 bg-white border rounded-lg border-zinc-400 focus:outline-none"
            placeholder="Enter your  Car details"
          />
        </div>
        <div className="w-6/12">
          <label className="text-black text-medium font-Gotham font-medium ">
            Car Conditions
          </label>
          <input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="flex items-center w-full mt-2  p-3 pl-3 text-black placeholder-zinc-400  bg-white border rounded-lg border-zinc-400 focus:outline-none"
            placeholder="Enter  Car Conditions "
          />
        </div>
      </div>
      <div className="w-full flex   sm:space-x-4  ">
        <div className="w-6/12">
          <label className="text-black  text-medium font-Gotham font-medium ">
            Damaged If any
          </label>
          <input
            // value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="flex items-center w-full mt-2 p-3 pl-3 text-black placeholder-zinc-400 bg-white border rounded-lg border-zinc-400 focus:outline-none"
            placeholder="Enter Multiple damages with comma’s"
          />
        </div>
        <div className="w-6/12">
          <label className="text-black text-medium font-Gotham font-medium ">
            Attach Car Documents
          </label>
          <div className="flex items-center mt-2   w-full bg-white border-dashed border rounded-lg border-zinc-400  ">
            <InsertDriveFile className="text-4xl text-yellow-600 ml-3" />

            <input
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              type="file"
              id="file"
              className="  w-[0.1px] h-[0.px]   transparent rounded-lg  focus:outline-none"
              placeholder="Attach Car Documents "
            />
            <label htmlFor="file" className=" flex  p-3 pl-3 text-black">
              Attach Car Documents
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex   sm:space-x-4  ">
        <div className="w-6/12">
          <label className="text-black text-medium font-Gotham font-medium ">
            Attach Car Images
          </label>
          <div className="flex items-center mt-2   w-full bg-white border-dashed border rounded-lg border-zinc-400  ">
            <InsertDriveFile className="text-4xl text-yellow-600 ml-3" />

            <input
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              type="file"
              id="file"
              className="  w-[0.1px] h-[0.px]   transparent rounded-lg  focus:outline-none"
              placeholder="Attach Car Documents "
            />
            <label htmlFor="file" className=" flex  p-3 pl-3 text-black">
              Attach Car files
            </label>
          </div>
        </div>

        <div className="w-6/12">
          <label className="text-black text-medium font-Gotham font-medium ">
            Attach Your Id
          </label>
          <div className="flex items-center mt-2   w-full bg-white border-dashed border rounded-lg border-zinc-400  ">
            <InsertDriveFile className="text-4xl text-yellow-600 ml-3" />

            <input
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              type="file"
              id="file"
              className="  w-[0.1px] h-[0.px]   transparent rounded-lg  focus:outline-none"
              placeholder="Attach Car Documents "
            />
            <label htmlFor="file" className=" flex  p-3 pl-3 text-black">
              Attach documents like aadhar card , pancard
            </label>
          </div>
        </div>
      </div>
       <div className="flex w-full justify-center items-center mt-4" >
       <button className="h-[45px] w-5/12 bg-yellow-600 text-lg text-white font-normal rounded-full "  >Send </button>
       </div>


    </form> 
  </div>
  )
}

export default Partner