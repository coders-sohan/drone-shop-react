import React, {  useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  const [tooltipStatus2, setTooltipStatus2] = useState(0);
  const [nav, setNav] = useState(false);
  const handleToggle = () => setNav(!nav);
  
  const { user, logout } = useAuth();
  
  const current = new Date();

  return (
    <>
      <nav className="w-screen h-[75px] z-10 fixed bg-gray-50 drop-shadow-md">
        {/* navbar fixed */}
        <div className="container mx-auto px-3">
          <div className="pt-[0.4rem] flex justify-between items-center w-full h-full">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  src="https://drone-shop-react.netlify.app/logo.png"
                  alt="logo"
                  className="w-[11rem]"
                />
              </NavLink>
            </div>
            <div>
              <ul className="hidden md:flex">
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#DC2626" : "#131A27",
                    })}
                    className="lg:text-lg text-base hover:text-red-600 transition-all duration-150 ease-linear"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#DC2626" : "#131A27",
                    })}
                    className="lg:text-lg text-base hover:text-red-600 transition-all duration-150 ease-linear"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#DC2626" : "#131A27",
                    })}
                    className="lg:text-lg text-base hover:text-red-600 transition-all duration-150 ease-linear"
                    to="/shop"
                  >
                    Shops
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#DC2626" : "#131A27",
                    })}
                    className="lg:text-lg text-base hover:text-red-600 transition-all duration-150 ease-linear"
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#DC2626" : "#131A27",
                    })}
                    className="lg:text-lg text-base hover:text-red-600 transition-all duration-150 ease-linear"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {user?.email ? (
              <div className="hidden md:flex">
                <div className="flex items-center gap-5">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="logo"
                    />
                    <div className="space-y-1 font-medium">
                      <div
                        className="relative mt-20 md:mt-0"
                        onMouseEnter={() => setTooltipStatus(1)}
                        onMouseLeave={() => setTooltipStatus(0)}
                      >
                        <div>
                          <span>{user?.email.slice(0, 5)}...</span>
                        </div>
                        {tooltipStatus === 1 && (
                          <div
                            role="tooltip"
                            className="z-20 -mb-20 w-auto absolute transition duration-300 ease-in-out left-0 shadow-lg p-2 bg-gray-700 border rounded"
                          >
                            <p className="text-sm text-white">{user?.email}</p>
                          </div>
                        )}
                      </div>
                      <div
                        className="relative mt-20 md:mt-0"
                        onMouseEnter={() => setTooltipStatus2(1)}
                        onMouseLeave={() => setTooltipStatus2(0)}
                      >
                        <div className="text-sm text-gray-500 flex gap-1">
                          <span>
                            <i className="fa-regular fa-calendar"></i>
                          </span>
                          <span>{`${current.getDate()}/${
                            current.getMonth() + 1
                          }/${current.getFullYear()}`}</span>
                        </div>
                        {tooltipStatus2 === 1 && (
                          <div
                            role="tooltip"
                            className="z-20 -mb-20 w-auto absolute transition duration-300 ease-in-out left-0 shadow-lg p-2 bg-gray-700 border rounded"
                          >
                            <p className="text-sm text-white">{Date()}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="lg:text-lg text-base text-red-600 border-red-600 hover:bg-black hover:text-white hover:border-black transition-all duration-150 ease-linear px-4 py-1"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex">
                <NavLink to="/login">
                  <button className="lg:text-lg text-base border-none text-red-600 mr-5 py-[0.3rem]">
                    Sign In
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="lg:text-lg text-base text-red-600 border-red-600 hover:bg-black hover:text-white hover:border-black transition-all duration-150 ease-linear px-4 py-1">
                    Register
                  </button>
                </NavLink>
              </div>
            )}
            <div className="md:hidden" onClick={handleToggle}>
              {!nav ? (
                <AiOutlineMenu className="text-2xl" />
              ) : (
                <AiOutlineCloseCircle className="text-3xl text-red-600" />
              )}
            </div>
          </div>
          <ul
            className={
              !nav ? "hidden" : "absolute md:hidden bg-white w-[22.5rem] px-2"
            }
          >
            <li className="border-b border-gray-50 w-full">
              <NavLink
                to="/home"
                style={({ isActive }) => ({
                  color: isActive ? "#DC2626" : "#131A27",
                })}
                className="text-base hover:text-red-600 transition-all duration-150 ease-linear"
              >
                Home
              </NavLink>
            </li>
            <li className="border-b border-gray-50 w-full">
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "#DC2626" : "#131A27",
                })}
                className="text-base hover:text-red-600 transition-all duration-150 ease-linear"
              >
                About
              </NavLink>
            </li>
            <li className="border-b border-gray-50 w-full">
              <NavLink
                to="/shop"
                style={({ isActive }) => ({
                  color: isActive ? "#DC2626" : "#131A27",
                })}
                className="text-base hover:text-red-600 transition-all duration-150 ease-linear"
              >
                Shop
              </NavLink>
            </li>
            <li className="border-b border-gray-50 w-full">
              <NavLink
                to="/blogs"
                style={({ isActive }) => ({
                  color: isActive ? "#DC2626" : "#131A27",
                })}
                className="text-base hover:text-red-600 transition-all duration-150 ease-linear"
              >
                Blogs
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "#DC2626" : "#131A27",
                })}
                className="text-base hover:text-red-600 transition-all duration-150 ease-linear"
              >
                Contact
              </NavLink>
            </li>
            {user?.email ? (
              <div>
                <div className="flex items-center justify-between gap-5 py-3">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="logo"
                    />
                    <div className="space-y-1 font-medium">
                      <div>{user?.email}</div>
                      <div className="text-sm text-gray-500 flex gap-1">
                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span>{`${current.getDate()}/${
                          current.getMonth() + 1
                        }/${current.getFullYear()}`}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="lg:text-lg text-base text-red-600 border-red-600 hover:bg-black hover:text-white hover:border-black transition-all duration-150 ease-linear px-4 py-1"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col my-4">
                <NavLink to="/login">
                  <button className="lg:text-lg text-base text-red-600 border-red-600 hover:bg-black hover:text-white hover:border-black transition-all duration-150 ease-linear px-4 py-2 mb-4 w-full">
                    Sign In
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="lg:text-lg text-base text-red-600 border-red-600 hover:bg-black hover:text-white hover:border-black transition-all duration-150 ease-linear px-4 py-2 w-full">
                    Register
                  </button>
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
