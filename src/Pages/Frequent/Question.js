import { ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react'

function Question() {
    const [flag, setFlag] = useState(false);
    return ( 
        <div className="flex flex-col w-screen px-10 mt-6  ">
        <div className="flex flex-col py-6 px-3 sm:px-6 bg-white rounded-xl shadow-lg  ">
        <div className="flex justify-between px-6" >  <h1
            onClick={() => setFlag(!flag)}
            className={
              flag === true
                ? " text-yellow-600 font-Gotham text-xl font-normal cursor-pointer "
                : `text-black font-Gotham text-xl font-normal cursor-pointer `
            }
          >
            How to Book a Vehicle ?
          </h1>

          <ExpandMore
          onClick={() => setFlag(!flag)}
            className={flag === true ? "hidden" : "text-3xl text-black  cursor-pointer "}
          />
          </div>
          {flag && (
            <div className="px-7" >
              <p className="text-sm text-black font-Gotham font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique molestie amet, sit amet. Sapien mauris elementum
                sapien id vitae amet, sollicitudin est id. Bibendum lacus dolor
                libero risus. Lectus ultricies venenatis cursus eget eleifend
                egestas dapibus. Scelerisque cras blandit purus amet, vitae dui
                vel. Cursus leo justo pulvinar aenean pharetra senectus.
                Suspendisse vulputate amet blandit nibh. Magna id nulla
                elementum eu. Amet vitae nisl tincidunt bibendum lectus id
                donec. Eu velit quis faucibus eget porttitor integer commodo.
                Porta quis proin sodales cras enim. Ultrices aliquet .
              </p>
            </div>
          )}
        </div>
      </div>
  )
}

export default Question