import React from "react";
import { Link } from "react-router-dom";
import {
  quickLinks,
  categories,
  informations,
  socialLinks,
} from "../Extra/FooterNavLink";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-sec flex justify-between items-center pt-12 pb-10">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 m-auto gap-3">
            <div className="p-2">
              <h4 className="mb-8 ml-4 text-black font-semibold text-xl">
                Quick Links
              </h4>
              <ul className="footer-list">
                {quickLinks.map((quickLink, index) => (
                  <li key={quickLink.name + index}>
                    <Link
                      className="text-black hover:text-red-600 transition-all ease-linear"
                      to={quickLink.path}
                    >
                      {quickLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2">
              <h4 className="mb-8 ml-4 text-black font-semibold text-xl">
                Categories
              </h4>
              <ul className="footer-list">
                {categories.map((categorie, index) => (
                  <li key={categorie.name + index}>
                    <Link
                      className="text-black hover:text-red-600 transition-all ease-linear"
                      to={categorie.path}
                    >
                      {categorie.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2">
              <h4 className="mb-8 ml-4 text-black font-semibold text-xl">
                Information
              </h4>
              <ul className="footer-list">
                {informations.map((information, index) => (
                  <li key={information.name + index}>
                    <Link
                      className="text-black hover:text-red-600 transition-all ease-linear"
                      to={information.path}
                    >
                      {information.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2">
              <h4 className="mb-8 ml-4 text-black font-semibold text-xl">
                Follow Us On
              </h4>
              <ul className="social-list">
                {socialLinks.map((socialLink, index) => (
                  <li key={socialLink.name + index}>
                    <a
                      className="text-black hover:text-red-600 transition-all ease-linear flex items-center"
                      href={socialLink.path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="mr-5 mt-[1px]">
                        <i className={socialLink.iconClassName}></i>
                      </span>
                      <span>{socialLink.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 md:col-span-2 col-span-2">
              <h4 className="mb-8 text-black font-semibold text-xl">
                About Info
              </h4>
              <p>Subscribe to our newsleter.</p>
              <div className="flex py-3">
                <input
                  type="text"
                  className="outline-none border border-black focus:border-red-600 p-3"
                  placeholder="email@example.com"
                />
                <button className="rounded-none px-5 border-black bg-black hover:bg-red-600 hover:border-red-600 transition-all ease-linear">
                  Subscribe
                </button>
              </div>
              <p>* We'll never share your email address.</p>
              <div className="pt-3">
                <img
                  className="w-72 h-auto"
                  src="https://drone-shop-react.netlify.app/store.webp"
                  alt="store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-6 bg-gray-700">
        <div className="container mx-auto px-3">
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="text-white text-sm">
              &copy; {Date().slice(11, 15)} Drone Shop. Made with ❤️ by{" "}
              <a
                href="https://sohan.pro"
                className="text-yellow-400 hover:text-red-400 transition-all ease-linear"
              >
                Sohan
              </a>
            </div>
            <div className="md:pt-0 pt-5">
              <img
                className="w-72 h-auto"
                src="https://drone-shop-react.netlify.app/card.webp"
                alt="cards"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
