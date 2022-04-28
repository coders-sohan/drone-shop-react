import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ErrorAlert from "../../contexts/Alerts/ErrorAlert";
import SuccessAlert from "../../contexts/Alerts/SuccessAlert";
import Spinner from "../../contexts/Spinner/Spineer";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const { user, registerUser, isLoading, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmite = (e) => {
    if (registerData.password1 !== registerData.password2) {
      alert("pass didn't match");
      return;
    }
    registerUser(registerData.email, registerData.password1);
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center py-12">
        <div className="container mx-auto px-3">
          <div className="pt-16 lg:w-2/6 md:w-3/4 w-full mx-auto">
            <h1 className="text-5xl">
              Let's <span className="text-red-500">Sign</span> up
            </h1>
            <div className="mb-5 mt-2 h-1 w-28 bg-red-500"></div>
            {user?.email && <SuccessAlert />}
            {error && <ErrorAlert error={error} />}
            {!isLoading && (
              <div className="mt-5">
                <form onSubmit={handleRegisterSubmite}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="usersName"
                      onBlur={handleOnBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onBlur={handleOnBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password1"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password1"
                      name="password1"
                      onBlur={handleOnBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password2"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      onBlur={handleOnBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center transition-all ease-linear"
                  >
                    Sign up
                  </button>
                </form>
                <p className="py-3 text-lg">or</p>
                <button className="border-red-500 text-red-500 hover:border-red-700 hover:text-red-700 font-semibold rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center transition-all ease-linear flex items-center">
                  <span>Google Sign In</span>{" "}
                  <span className="ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      className="w-5 h-5"
                    >
                      <g>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m472.4 213.9h-190.5c-8.4 0-15.2 6.8-15.2 15.2v60.9c0 8.4 6.8 15.2 15.2 15.2h107.3c-11.7 30.5-33.7 56-61.6 72.2l45.7 79.2c73.3-42.4 116.7-116.9 116.7-200.2 0-11.9-.9-20.4-2.6-29.9-1.4-7.3-7.7-12.6-15-12.6z"
                          fill="#167ee6"
                          data-original="#167ee6"
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m256.5 396.6c-52.5 0-98.3-28.7-122.9-71.1l-79.2 45.6c40.3 69.9 115.8 116.9 202.1 116.9 42.4 0 82.3-11.4 116.8-31.3v-.1l-45.7-79.2c-21 12.2-45.2 19.2-71.1 19.2z"
                          fill="#12b347"
                          data-original="#12b347"
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m373.2 456.7v-.1l-45.7-79.2c-20.9 12.1-45.1 19.2-71 19.2v91.4c42.4 0 82.3-11.4 116.7-31.3z"
                          fill="#0f993e"
                          data-original="#0f993e"
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m114.4 254.5c0-25.9 7.1-50.1 19.2-71l-79.2-45.6c-20 34.3-31.4 74.1-31.4 116.6s11.4 82.3 31.4 116.6l79.2-45.6c-12.2-20.9-19.2-45.1-19.2-71z"
                          fill="#ffd500"
                          data-original="#ffd500"
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m256.5 112.4c34.2 0 65.7 12.2 90.2 32.4 6.1 5 14.9 4.6 20.4-.9l43.1-43.1c6.3-6.3 5.8-16.6-.9-22.4-41.1-35.8-94.6-57.4-152.8-57.4-86.3 0-161.8 47-202.1 116.9l79.2 45.6c24.6-42.4 70.4-71.1 122.9-71.1z"
                          fill="#ff4b26"
                          data-original="#ff4b26"
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m346.7 144.8c6.1 5 14.9 4.6 20.4-.9l43.1-43.1c6.3-6.3 5.8-16.6-.9-22.4-41.1-35.8-94.6-57.4-152.8-57.4v91.4c34.2 0 65.7 12.1 90.2 32.4z"
                          fill="#d93f21"
                          data-original="#d93f21"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            )}
            {isLoading && <Spinner />}
            <div className="mt-5">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-600 hover:text-yellow-600 transition-all ease-linear"
                >
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
