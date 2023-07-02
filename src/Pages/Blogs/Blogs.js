import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Blog from "./Blog";

function Blogs() {
  return (
    <div className="flex flex-col">
      <main>
        <Header />

        <div className="flex flex-col w-screen justify-center items-center px-10 mt-12 ">
          <h1 className="text-black font-DM text-4xl font-bold   ">
            Our Blogs
          </h1>
          <h2 className="text-[#696871] text-center font-Gotham text-lg   font-normal   ">
            Our Psychological Model is accurate, verified and tested over
            thousands of individuals.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-evenly  mt-10  px-12  ">
          <Blog src="/blog1.png" />
          <Blog src="/blog2.png" />
          <Blog src="/blog3.png" />
          <Blog src="/blog1.png" />
          <Blog src="/blog2.png" />
          <Blog src="/blog3.png" />
          <Blog src="/blog1.png" />
          <Blog src="/blog2.png" />
          <Blog src="/blog3.png" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
