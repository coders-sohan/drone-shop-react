import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center py-12 h-[80vh]">
        <div className="container mx-auto px-3">
          <div className="pt-16 text-center">
            <h1 className="text-4xl">404 Error!</h1>
            <div className="bg-red-600 w-36 h-1 mt-10 mb-12 mx-auto"></div>
            <div>
              <Link
                to="/home"
                className="bg-red-600 text-white px-5 py-2 rounded-md text-xl"
              >
                Go to home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
