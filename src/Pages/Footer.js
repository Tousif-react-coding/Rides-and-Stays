
import { Facebook, Instagram, LinkedIn, Mail, Phone, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <>
      <div className="w-screen h-full px-3 sm:px-10  bg-white pt-6">
        <div className="flex flex-wrap sm:flex-row  w-full h-full justify-evenly sm:pt-6  ">
          {/* 1st col */}
          <div className="flex flex-col items-center justify-start sm:w-3/12 h-full mt-16 ">
            <p className="text-[#050608] font-normal text-lg font-Gotham pb-6 border-b border-yellow-600 ">
              We are changing the World, by changing your world.
            </p>

            <p className="text-[#050608] font-normal text-lg font-Gotham pt-6">
              Follow the Buzz:
            </p>

            <div className="flex items-center justify-center sm:justify-start w-full py-3 px-3 h-full mt-4 space-x-3 ">
              <div className="flex items-center justify-center p-3 rounded-lg bg-orange-100 cursor-pointer ">
                <Instagram className="text-yellow-600 text-3xl " />
              </div>
              <div className="flex items-center justify-center p-3 rounded-lg bg-orange-100 cursor-pointer ">
                <LinkedIn className="text-yellow-600 text-3xl" />
              </div>
              <div className="flex items-center justify-center p-3 rounded-lg bg-orange-100 cursor-pointer  ">
                <Twitter className="text-yellow-600 text-3xl" />
              </div>
              <div className="flex items-center justify-center p-3 rounded-lg bg-orange-100 cursor-pointer ">
                <Facebook className="text-yellow-600 text-3xl" />
              </div>
            </div>
          </div>

          {/* 2nd col */}
          <div className="flex flex-col items-center justify-center sm:w-3/12 h-full mt-6 ">
            <div className="flex flex-col space-y-2  ">
              <h2 className="font-Gotham font-semibold text-[#050608] text-xl">
                Service
              </h2>
              <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                Travel Booking
              </p>
              <p className="text-[#050608] font-normal text-lg font-Gotham  cursor-pointer">
                Hotel Booking
              </p>
              <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                Car Booking
              </p>
              <p className="text-[#050608] font-normal text-lg font-Gotham  cursor-pointer">
                Travelling
              </p>
            </div>
          </div>
          {/* 3rd col */}
          <div className="flex flex-col items-center justify-center sm:w-3/12 h-full mt-6 ">
            <div className="flex flex-col space-y-2  ">
              <h2 className="font-Gotham font-semibold text-[#050608] text-xl">
                Legal
              </h2>
              <Link to="/terms">
                <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                  Terms of Use
                </p>
              </Link>
              <Link to="/privacy">
                <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                  Privacy Policy
                </p>
              </Link>
              <Link to="/frequent">
                <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                  FAQ
                </p>
              </Link>
            </div>
          </div>
          {/* 4th col */}
          <div className="flex flex-col items-center justify-center  sm:w-3/12 h-full mt-6 ">
            <div className="flex flex-col space-y-2  ">
              <h2 className="font-Gotham font-semibold text-[#050608] text-xl">
                Contacts
              </h2>

              <div className="flex space-x-3  items-center  ">
                <Phone className="text-xl text-yellow-600" />
                <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                  040-340824524
                </p>
              </div>
              <div className="flex space-x-3 items-center ">
                <Mail className="text-xl text-yellow-600" />
                <p className="text-[#050608] font-normal text-lg font-Gotham cursor-pointer ">
                  hello@travelbuddy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex iteems-center py-3 px-3 sm:px-10 bg-[#fafafa] ">
        <p className="text-[#050608] font-normal text-lg font-Gotham  ">
          © Copyright 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
