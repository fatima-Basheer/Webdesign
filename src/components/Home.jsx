import React from "react";

function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-2 overflow-hidden rounded-sm">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
            src="src/assets/herosecimg.jpg"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 gap-3 ">
            <h6 className="text-white text-xs sm:text-sm font-semibold">
              Website & Commerce
            </h6>

            <h2 className="text-white text-xl sm:text-2xl md:text-5xl font-bold leading-tight font-serif">
              Tools for all your
              <br /> business firsts.
            </h2>

            <p className="text-white text-xs sm:text-sm">
              Website and store solutions for any small business
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button className="bg-black text-white px-6 py-3 rounded-md font-semibold text-sm">
                Get Started
              </button>
              <a href="#" className="text-white text-sm">
                Learn More
              </a>
            </div>

            <p className="text-white text-xs">
              No credit card required<sup>**</sup>
            </p>
          </div>
        </div>

        <div className="relative md:col-span-1 overflow-hidden rounded-sm bg-[#b3dddd] flex">
          <div className="flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-8 py-6 gap-3">
            <h6 className="text-black text-xs sm:text-sm font-semibold">
              Website & Commerce
            </h6>

            <h2 className="text-black text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              Grab a .com for just
              <br /> $0.04/1st yr
            </h2>

            <p className="text-black text-xs">
              2-year purchase required<sup>*</sup>
            </p>

            <button className="bg-[#111] text-white px-6 py-2 rounded-md font-semibold text-sm">
              Find Your Domain
            </button>

            <h6 className="text-black font-semibold text-xs">
              Transfer your Domains
            </h6>

            <p className="text-black text-xs">
              Domains include free privacy protection forever<sup>*</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
