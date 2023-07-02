import React from 'react'
import Discover from '../Discover';
import DiscoverBikes from '../DiscoverBikes';
import DiscoverCars from '../DiscoverCars';
import Footer from '../Footer';
import Header from '../Header';
import Banner from './Banner';
import Booking from './Booking';
import Offer from './Offer';
import Special from './Special';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';


function Home() {
  return (
<>
<div className="w-screen h-full  flex flex-col ">
      <main className="w-full h-full flex-grow  ">
        <Header />
        <Banner />
        <div className="flex justify-center w-full h-[380px] md:h-0  mt-4 ">
          <Booking />
        </div>
        <Special />

        <div className="flex flex-col w-screen h-full px-2   bg-white py-4 ">
          <h1 className="text-2xl font-semibold text-black font-Montserrat ml-6 sm:ml-0 mt-2 sm:pl-10 ">
            Discover Cars
          </h1>
          <div className="flex  w-full sm:px-4  overflow-x-scroll hidescroll items-start pr-10 ">
            <DiscoverCars />
            <DiscoverCars />
            <DiscoverCars />
            <DiscoverCars />
            <DiscoverCars />
            <DiscoverCars />
          </div>
        </div>

        <div className="flex flex-col w-screen h-full px-2   bg-white py-4 ">
          <h1 className="text-2xl font-semibold text-black font-Montserrat ml-6 sm:ml-0 mt-2 sm:pl-10 ">
            Discover Bikes
          </h1>
          <div className="flex  w-full sm:px-4  overflow-x-scroll hidescroll items-start pr-10 ">
            <DiscoverBikes />
            <DiscoverBikes />
            <DiscoverBikes />
            <DiscoverBikes />
            <DiscoverBikes />
            <DiscoverBikes />
            <DiscoverBikes />
          </div>
        </div>
        <div className="flex flex-col w-screen h-full px-2   bg-white py-4 ">
          <h1 className="text-2xl font-semibold text-black font-Montserrat ml-6 sm:ml-0 mt-2 sm:pl-10 ">
            Discover Places
          </h1>
          <div className="flex  w-full sm:px-4   overflow-x-scroll hidescroll items-start pr-10 ">
            <Discover />
            <Discover />
            <Discover />
            <Discover />
            <Discover />
            <Discover />
          </div>
        </div>

        <Offer />
        <Testimonials />
        <Subscribe />

        <div className="w-full h-[110px] flex px-3 sm:px-10 my-6  ">
          <div className="flex justify-between w-full h-full items-center px-3 sm:px-10  bg-[#FBFBFB] border border-[#C9C9C9] rounded-xl   ">
            <h1 className="text-xl font-semibold text-center text-[#4B4B4B] font-Montserrat ">
              Download Now to Experience new way of making healthy friendships
            </h1>
            <img
              src="/playstore.png"
              alt="playstore"
              className="h-[100px] w-[199px] cursor-pointer"
            />
          </div>
        </div>

        <Footer />
      </main>
    </div>


</>
  )
}


export default Home ;