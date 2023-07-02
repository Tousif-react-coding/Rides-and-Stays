import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Question from "./Question";

function Frequent() {
  return (
    <>
      <div className="flex flex-col">
        <main>
          <Header />

          <div className="flex flex-col w-screen  h-[30vh]  px-3 sm:px-10  bg-yellow-600">
            <h1 className="text-white font-Gotham text-4xl font-bold pl-4 mt-12  ">
              Frequently Asked Questions
            </h1>
          </div>
          <div className=" -mt-16">
            <Question />
          </div>

          <Question />
          <Question />
          <Question />

          <Footer />
        </main>
      </div>
    </>
  );
}

export default Frequent;
