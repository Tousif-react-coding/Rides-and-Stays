import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

const Header = () => {
  const path = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 125) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const items = [
    {
      title: "Discover",
      path: "discover",
    },
 
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Blogs",
      path: "blogs",
    },
    {
      title: "Contact Us",
      path: "contact",
    },
  ];

  return (
    <>
      <div className="hidden sm:flex sticky top-0 left-0 z-10  w-full py-2 items-center    justify-between px-3 sm:px-10 text-text bg-white shadow-lg  ">
        <div className="w-[180px] h-full">
          <Link to="/" className="min-w-[175px] hidden sm:inline-flex ">
            <img
              src="/logo.png"
              alt="Rides & Stays"
              className="mx-2 w-[175px] h-[75px] object-contain "
            />
          </Link>
        </div>
        <div className="items-center hidden  sm:flex">
          <div className="   flex space-x-4 sm:space-x-12 items-center sm:ml-4 ">
            <Link
              to="/"
              className={
                ` ` === path
                  ? "text-xl font-semibold ml-8 sm:ml-0 border-b-2  pb-2 border-yellow-600  text-yellow-600"
                  : "text-xl hover:text-zinc-400  font-normal text-[#000000]  pb-2 "
              }
            >
              Home
            </Link>
            {items?.map((item) => (
              <Link
                to={`/${item.path}`}
                key={item.title}
                className={
                  `${item.path}` === path
                    ? "text-xl font-semibold ml-8 sm:ml-0 border-b-2 pb-2  border-yellow-600  text-yellow-600"
                    : "text-xl hover:text-zinc-400  font-normal text-[#000000] pb-2 "
                }
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden  sm:flex ml-4 items-center mt-3 sm:mt-0 ">
          <Link to="/login">
            <button className="w-min px-12 py-3 rounded-xl bg-yellow-600 font-Gotham font-bold text-sm text-white ">
              Login/Signup
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sticky top-0 z-20  sm:hidden  ">
        <div
          className={
            isNavOpen === true
              ? "flex w-full  items-center justify-between  px-2 text-text bg-white  "
              : "flex w-full  items-center justify-between  px-2 text-text bg-white shadow-lg"
          }
        >
          <Link to="/">
            <img
              src="/logo.png"
              alt="Rides"
              className=" w-[175px] h-[75px] object-contain"
            />
          </Link>

          <div className="flex items-center space-x-3 pr-3">
            <Link to="/login">
              <button className="w-min px-6 py-3 rounded-xl bg-yellow-600 font-Gotham font-bold text-sm text-white ">
                Login/Signup
              </button>
            </Link>
            <h2
              className="cursor-pointer text-4xl sm:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <MoreVert fontSize="large" /> 
            </h2>
          </div>
        </div>
        <div
          className={
            isNavOpen === true
              ? "flex flex-col px-4 pt-2 space-y-2 justify-center  text-center bg-white shadow-lg sm:hidden pb-2 "
              : "hidden"
          }
        >
          <Link
            to="/"
            className={
              `/` === path
                ? "text-xl font-semibold mx-24 border-b-2  pb-2 border-yellow-600  text-yellow-600"
                : "text-xl  hover:text-zinc-400  font-normal text-[#000000]  pb-2 "
            }
          >
            Home
          </Link>
          {items?.map((item) => (
            <Link
              to={`/${item.path}`}
              key={item.title}
              className={
                `/${item.path}` === path
                  ? "text-xl  font-semibold  mx-24  border-b-2 pb-2  border-yellow-600  text-yellow-600"
                  : "text-xl  hover:text-zinc-400  font-normal text-[#000000] pb-2 "
              }
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
