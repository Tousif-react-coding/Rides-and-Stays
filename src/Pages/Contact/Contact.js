import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Contact() {
  return (
    <>
      <div className="flex flex-col">
        <main>
          <Header />

          <div className="w-screen min-h-[100vh] px-3 sm:px-12 bg-white ">
            <h1 className="text-black font-Gotham text-5xl font-bold pl-6 pt-8  ">
              Contact us
            </h1>
            <p className="text-lg text-black font-Gotham font-normal pl-6 ">
              Engineering technologies that bring people together in the real
              world is both inspiring and daunting. We&#39;re tackling
              challenges in search relevance, payments, fraud prevention,
              discrimination, and growth—all while maintaining a beautiful expe
            </p>

            <div className="flex  w-full mt-12 px-8 ">
              <div className="flex flex-col w-6/12">
                <h2 className="uppercase font-medium text-sm text-[#9A9A9A]  ">
                  Address
                </h2>
                <p className=" font-normal text-normal text-[#9A9A9A]  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col w-3/12">
                <h2 className="uppercase font-medium text-sm text-[#9A9A9A]  ml-2  ">
                  Phone
                </h2>
                <p className=" font-normal text-normal text-[#9A9A9A]  ">
                  +91 912345678
                </p>
              </div>
              <div className="flex flex-col w-3/12">
                <h2 className="uppercase font-medium text-sm text-[#9A9A9A] ml-2  ">
                  Email
                </h2>
                <p className=" font-normal text-normal text-[#9A9A9A]  ">
                  +91 912345678
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row px-3 sm:px-10 justify-evenly items-center mt-8  ">
              <form className="w-full sm:w-6/12  flex flex-col px-3  space-y-6">
                <input
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="flex items-center w-full mt-2  p-3 pl-3 text-black placeholder-black rounded-lg     bg-[#f8f8f8]  focus:outline-none"
                  placeholder="Enter your Email Address "
                />
                <input
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="flex items-center w-full mt-2  p-3 pl-3 text-black placeholder-black   bg-[#f8f8f8] rounded-lg  focus:outline-none"
                  placeholder="Full Name "
                />
                <input
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  type="phone"
                  className="flex items-center w-full mt-2  p-3 pl-3 text-black placeholder-black rounded-lg     bg-[#f8f8f8]  focus:outline-none"
                  placeholder="Phone Number "
                />
                <input
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="flex items-center w-full mt-2  p-3 pl-3 text-black placeholder-black rounded-lg     bg-[#f8f8f8]  focus:outline-none"
                  placeholder="Reason to Contacting "
                />

                <button className="py-3 w-full bg-yellow-600 text-lg text-white font-semibold rounded-xl">
                  Send{" "}
                </button>
              </form>

              <img
                src="/map.png"
                alt="Map"
                className="w-[350px] h-[450px]  rounded-lg object-fill"
              />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default Contact;
