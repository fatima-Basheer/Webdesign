import React from "react";

function Search() {
  return (
    <div>
      <div className="flex items-center px-13 py-4 space-x-6">
    
        <div className="flex-1 flex border border-gray-300 overflow-hidden focus-within:border-[#00838C]">
          <input
            type="text"
            placeholder="Type the domain you want"
            className="flex-1 px-4 py-2 focus:outline-none bg-gray-100"
          />
          <button className="bg-[#00838C] text-white px-4 py-2 text-xs font-bold">
            Search Domain
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-400 font-medium">
          <li className="hover:text-black cursor-pointer">
            <span className="font-medium text-gray-500">.online</span> $0.99 <sup>*</sup>
          </li>
          <li className="hover:text-black cursor-pointer">
            <span className="font-semibold text-gray-500">.net</span> $14.99 <sup>*</sup>
          </li>
          <li className="hover:text-black cursor-pointer">
            <span className="font-black text-gray-500">.inc</span> $999.99 <sup>*</sup>
          </li>
          <li className="hover:text-black cursor-pointer flex items-center space-x-2">
            <span className="bg-gray-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              .Me
            </span>
            <span>$11.99 <sup>*</sup></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Search;