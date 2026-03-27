import React from "react";

function Steps() {
  return (
    <div className="px-6 md:px-32 lg:px-50 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-black text-2xl md:text-4xl font-bold text-center md:text-left">
            Success in
            <br />3 easy steps
          </h2>

          <img
            src="/images/step1.jpg"
            alt="Step 1"
            className="mt-40 w-full max-w-[400px] h-auto object-cover rounded-md"
          />

          <p className="text-sm font-semibold">02</p>
          <h2 className="text-black text-xl md:text-2xl font-bold">
            Save with the lowest fees
          </h2>

          <div className="flex flex-col space-y-1 max-w-[400px]">
            <p className="text-sm">2.3% +0@ per in-person transaction</p>
            <p className="text-sm">2.3% +0@ per online transaction</p>
            <p className="text-sm">
              Enjoy the lowest 2.3% +0@ per in-person transaction leading
              providers
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded-md font-semibold">
              Start Getting paid
            </button>
            <a href="#" className="text-black">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
          
            src="/images/step2.jpg"
            alt="Step 2"
            className="w-full max-w-[400px] h-auto object-cover rounded-md"
          />
          <p className="text-sm font-semibold">01</p>
          <h2 className="text-black text-xl md:text-2xl font-bold">
            Sell Online with a website
          </h2>

          <div className="flex flex-col space-y-1 max-w-[400px]">
            <p className="text-sm">
              Sell anything from the physical products to download and services
              and manage it all at one place
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded-md font-semibold">
              Get Started
            </button>
            <a href="#" className="text-black">
              Learn More
            </a>
          </div>

          <img
            src="/images/step3.jpg"
            alt="Step 3"
            className="w-full max-w-[400px] h-auto object-cover rounded-md mt-4"
          />

          <p className="text-sm font-semibold">03</p>
          <h2 className="text-black text-xl md:text-2xl font-bold">
            Sell in-person and on the go
          </h2>

          <div className="flex flex-col space-y-1 max-w-[400px]">
            <p className="text-sm">
              Our new point of sale devices are designed to fit any bussiness
              and budget.Choose the one that is right for you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded-md font-semibold">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
