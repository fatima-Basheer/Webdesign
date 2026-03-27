import React from "react";

function Table() {
  return (
    <div className="p-4 md:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 auto-rows-fr ">
        <div className="border flex items-center justify-center py-6 text-center border-gray-200 ">
          Domains
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          SSL Security
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          Website
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          WordPress
        </div>

        <div className="border flex flex-col items-center justify-center row-span-2 col-span-2 sm:col-span-3 md:col-span-1 text-center p-4 border-gray-200">
          <span
            className="text-2xl md:text-3xl font-black font-mono"
            style={{
              textShadow: "1px 1px 0 black, -1px -1px 0 black",
            }}
          >
            .Shop
          </span>

          <h2 className="mt-2 text-sm md:text-base">
            Grab a .com for just
            <br />
            $0.04/1st yr
          </h2>
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          Email
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          Microsoft 365
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          Website Design Services
        </div>

        <div className="border flex items-center justify-center text-center border-gray-200">
          Online Store
        </div>
      </div>
    </div>
  );
}

export default Table;
