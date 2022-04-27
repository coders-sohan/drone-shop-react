import React from "react";
import { Link } from "react-router-dom";

const features01 = [
  {
    img: "https://drone-shop-react.netlify.app/features/feature-1.webp",
    name: "Smart Control",
    desc: "This is the perfect place to find a nice and cozy.",
  },
  {
    img: "https://drone-shop-react.netlify.app/features/feature-2.webp",
    name: "Wifi Connectivity",
    desc: "This is the perfect place to find a nice and cozy.",
  },
  {
    img: "https://drone-shop-react.netlify.app/features/feature-3.webp",
    name: "Online Storage",
    desc: "This is the perfect place to find a nice and cozy.",
  },
];

const features02 = [
  {
    img: "https://drone-shop-react.netlify.app/features/feature-4.webp",
    name: "Portable Charge",
    desc: "This is the perfect place to find a nice and cozy.",
  },
  {
    img: "https://drone-shop-react.netlify.app/features/feature-5.webp",
    name: "Voice Control",
    desc: "This is the perfect place to find a nice and cozy.",
  },
  {
    img: "https://drone-shop-react.netlify.app/features/feature-6.webp",
    name: "Stainless Blade",
    desc: "This is the perfect place to find a nice and cozy.",
  },
];

const Features = () => {
  return (
    <>
      <div className="flex justify-between items-center py-12">
        <div className="container mx-auto px-3">
          <div className="text-center">
            <h3 className="md:text-xl text-lg text-red-600 font-medium">
              Popular Item
            </h3>
            <h1 className="md:text-5xl text-3xl font-semibold py-4">
              Valueable Features
            </h1>
          </div>
          <div className="py-6 grid lg:grid-cols-3 grid-cols-1">
            <div className="p-3">
              <div className="flex flex-col">
                {features01.map((feature01, index) => (
                  <div
                    key={feature01.name + index}
                    className="lg:text-right text-center py-5 px-3"
                  >
                    <img
                      src={feature01.img}
                      alt={feature01.name}
                      className="lg:inline lg:mx-0 mx-auto block h-full w-auto"
                    />
                    <h3 className="pt-3 pb-2 text-xl font-semibold">
                      {feature01.name}
                    </h3>
                    <p className="">{feature01.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3">
              <Link to="/shop">
                <img
                  className="w-full h-full mx-auto"
                  src="https://drone-shop-react.netlify.app/photos1.webp"
                  alt="features"
                />
              </Link>
            </div>
            <div className="p-3">
              <div className="flex flex-col">
                {features02.map((feature02, index) => (
                  <div
                    key={feature02.name + index}
                    className="lg:text-left text-center py-5 px-3"
                  >
                    <img
                      src={feature02.img}
                      alt={feature02.name}
                      className="lg:inline lg:mx-0 mx-auto block h-full w-auto"
                    />
                    <h3 className="pt-3 pb-2 text-xl font-semibold">
                      {feature02.name}
                    </h3>
                    <p className="">{feature02.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
