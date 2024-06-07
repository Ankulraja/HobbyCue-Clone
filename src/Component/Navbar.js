import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdStar, IoMdBookmark } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const location = useLocation();
  const [authToggle, setAuthToggle] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  const matchRoute = (path) => path === location.pathname;

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  const subLink = [
    { id: 1, name: "People-Community" },
    { id: 2, name: "Place-Venues" },
    { id: 3, name: "Programs-Events" },
    { id: 4, name: "Product-Store" },
    { id: 5, name: "Blogs" },
  ];

  const toggleHandler = () => {
    authToggle ? navigate("/add-new") : navigate("/");
    setAuthToggle(!authToggle);
  };

  const closeNavbar = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(true);
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", closeNavbar);
  //   return () => {
  //     document.removeEventListener("mousedown", closeNavbar);
  //   };
  // }, []);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between relative h-16">
          <div className="flex">
           <Link to={"/home"}>
           <div className="flex-shrink-0 flex gap-1 items-center">
              <p className="text-5xl font-bold text-blue-500 italic">h</p>
              <div>
                <p className="ml-2 text-blue-500 italic font-semibold text-lg">
                  hobby<span className="text-purple-500">cue</span>
                </p>
                <p className="text-[12px] italic text-gray-400">
                  Your Hobby, Your community
                </p>
              </div>
            </div></Link>
            <div
              className={`flex items-center max-md:absolute max-md:right-[10%] max-md:top-[50%] max-md:translate-y-[-50%] justify-end w-80 max-xl:w-60 max-lg:w-20 max-md:w-20 transition-all duration-500 mx-3 ${
                isActive ? "rounded-md px-4 py-2" : "px-4 py-2"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className={`w-full outline-none transition-all duration-300 bg-[rgb(239,235,242)] pl-10 pr-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm ${
                  isActive
                    ? "max-lg:w-80"
                    : "max-translate-x-40 max-scale-x-0 max-md:translate-x-12 max-md:scale-x-0"
                }`}
              />
              <button
                type="button"
                onClick={toggleSearch}
                className="flex bg-purple-700 max-md:bg-transparent z-30 items-center justify-center h-10 rounded-r-md"
              >
                <FaSearch className="w-10 text-white max-md:text-purple-700 max-md:text-xl" />
              </button>
            </div>
            <div className="hidden lg:ml-2 xl:ml-20 md:gap-2 lg:gap-10 md:flex">
              <div className="flex justify-center relative group">
                <a
                  href="#target"
                  className="text-black gap-1 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                >
                  <MdExplore className="text-purple-700 text-lg" />
                  Explore
                  <FaAngleDown className="text-purple-700 text-lg" />
                </a>
                <div className="invisible absolute transition-all ease-in-out duration-200 group-hover:visible bg-gray-100 rounded-md w-[30px] h-[30px] z-20 top-[55%] translate-y-2 left-[60%] rotate-45"></div>
                <div className="invisible absolute transition-all ease-in-out duration-200 group-hover:visible z-20 top-[60%] translate-y-4 -translate-x-[0%] w-[250px] text-[12px] bg-gray-100 rounded-lg flex flex-col py-5 px-5">
                  {subLink?.map((val, index) => (
                    <div
                      key={index}
                      className="text-black border-b hover:bg-richblack-100 rounded-lg py-4 px-4"
                    >
                      {val.name}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="text-gray-500 gap-1 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
              >
                <IoMdStar className="text-purple-700 text-lg" />
                Hobbies
                <FaAngleDown className="text-purple-700 text-lg" />
              </a>
            </div>
          </div>
          <div className="space-x-0 md:flex md:items-center md:space-x-3">
            <button className="max-md:hidden text-purple-900 text-2xl opacity-85 hover:text-purple-500">
              <IoMdBookmark />
            </button>
            <button className="max-md:absolute max-md:right-[10%] max-md:top-[50%] max-md:translate-y-[-50%] max-md:text-2xl text-purple-900 max-md:visible text-xl opacity-85 hover:text-purple-500">
              <FaBell />
            </button>
            <button className="max-md:hidden text-xl text-purple-900 opacity-85 hover:text-purple-500">
              <BsFillCartFill />
            </button>
            <button
              onClick={toggleHandler}
              className="max-md:hidden bg-transparent text-black border border-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white"
            >
              {matchRoute("/add-new") ? "Logout" : "Sign In"}
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-500 hover:text-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <HiOutlineBars3BottomRight className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      { (
        <div className={`md:hidden transition-all duration-500 absolute
          ${isOpen ? (""):("translate-x-32")}
         bg-white px-2 right-[0%] rounded-b-lg`} ref={navRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Hobbies
            </a>
            <button
              onClick={toggleHandler}
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {matchRoute("/add-new") ? "Logout" : "Sign In"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
